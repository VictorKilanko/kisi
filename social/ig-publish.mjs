/**
 * Stage 7: publish staged Kisi posts to Instagram via the Graph API.
 *
 * The Instagram Graph API has NO native "schedule for later": media_publish posts
 * immediately. So "scheduling" means running THIS script at the desired time (a cron, or
 * the /schedule skill). This script reads the staged manifest, and for each post creates a
 * media container (a carousel = one child container per slide + a parent) and publishes it.
 *
 * SAFETY: dry-run by default. It prints exactly what WOULD post and does nothing to the
 * live account unless you pass --publish. Before posting it reads what is ALREADY live on
 * @kisi.africa and skips any arc whose headline is already up (the manifest alone is not
 * trusted: a publish can succeed on Instagram while the script sees a rate-limit error and
 * never records it). If a publish throws, it re-checks the live account and marks the arc
 * posted if it actually went through, so the next run cannot repost it.
 *
 * Secrets come from social/.env (gitignored). Always run with --env-file:
 *
 *   node --env-file=social/.env social/ig-publish.mjs --list          # manifest + IG history
 *   node --env-file=social/.env social/ig-publish.mjs                 # dry run (all staged)
 *   node --env-file=social/.env social/ig-publish.mjs --only arc-drain --publish
 *   node --env-file=social/.env social/ig-publish.mjs --all --publish  # publish every staged post
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicRoot = join(here, "..", "site", "public", "s");

const TOKEN = process.env.IG_PAGE_TOKEN || process.env.IG_ACCESS_TOKEN;
const IG_ID = process.env.IG_BUSINESS_ACCOUNT_ID;
const GRAPH = "https://graph.facebook.com/v21.0";

if (!TOKEN || !IG_ID) {
  console.error("Missing IG_PAGE_TOKEN/IG_ACCESS_TOKEN or IG_BUSINESS_ACCOUNT_ID.");
  console.error("Run with:  node --env-file=social/.env social/ig-publish.mjs ...");
  process.exit(1);
}

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const valOf = (f) => (args.includes(f) ? args[args.indexOf(f) + 1] : null);
const DRY = !has("--publish");
const only = valOf("--only");

// ---- manifest ----
function findManifest() {
  if (!existsSync(publicRoot)) return null;
  const dirs = readdirSync(publicRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => join(publicRoot, d.name, "manifest.json"))
    .filter((p) => existsSync(p));
  if (!dirs.length) return null;
  // newest by mtime
  dirs.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  return dirs[0];
}

// ---- graph helpers ----
async function graphPost(path, params) {
  const body = new URLSearchParams({ ...params, access_token: TOKEN });
  const res = await fetch(`${GRAPH}/${path}`, { method: "POST", body });
  const json = await res.json();
  if (!res.ok || json.error) throw new Error(JSON.stringify(json.error || json));
  return json;
}
async function graphGet(path, fields) {
  const qs = new URLSearchParams({ fields, access_token: TOKEN });
  const res = await fetch(`${GRAPH}/${path}?${qs}`);
  const json = await res.json();
  if (!res.ok || json.error) throw new Error(JSON.stringify(json.error || json));
  return json;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Deliberate spacing between Graph write calls. Publishing one carousel is a burst of ~15-20
// requests (a container per slide, status polls, the parent, the publish); firing them back to
// back is what trips Meta's app rate limit (code 4). Pausing between calls flattens the burst
// without changing the total work. Tunable via IG_PACE_MS; default 1500ms.
const PACE_MS = Number(process.env.IG_PACE_MS) || 1500;
const pace = () => sleep(PACE_MS);

// Dedupe identity for a post: the leading ~160 normalized chars of its caption. Every arc's
// caption opens with a unique headline and first sentence (the fixed hashtags live at the
// tail and do not discriminate), so this is collision-safe across distinct arcs while staying
// stable. We post the caption verbatim, so the live copy normalizes to the same key.
const captionKey = (caption) =>
  (caption || "").replace(/\s+/g, " ").trim().toLowerCase().slice(0, 160);

// GET Graph JSON with a small retry/backoff. The live-media read is the dedupe guard, and the
// most likely reason it fails is Meta's app rate limit (code 4) — the very condition that
// caused the duplicates — so it must not give up on the first transient error.
async function graphGetJson(url, tries = 3) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      const json = await res.json();
      if (res.ok && !json.error) return json;
      lastErr = new Error(JSON.stringify(json.error || json));
    } catch (e) {
      lastErr = e;
    }
    if (i < tries - 1) await sleep(2000 * (i + 1)); // 2s, 4s
  }
  throw lastErr;
}

// Everything currently live on the IG account, as a set of caption keys. Follows paging so
// it stays correct as the account grows past one page.
async function fetchLiveMediaKeys() {
  const keys = new Set();
  let url =
    `${GRAPH}/${IG_ID}/media?` +
    new URLSearchParams({ fields: "id,caption", limit: "100", access_token: TOKEN });
  for (let page = 0; page < 5 && url; page++) {
    const json = await graphGetJson(url);
    for (const m of json.data || []) {
      const k = captionKey(m.caption || "");
      if (k) keys.add(k);
    }
    url = json.paging?.next || null;
  }
  return keys;
}

// A container must be FINISHED before it can be published (matters for carousels). Wait a
// beat before the first poll so the image usually processes in one check instead of several
// (fewer status GETs is itself less rate-limit pressure), then poll every 3s.
async function waitReady(creationId, tries = 12) {
  await sleep(2000);
  for (let i = 0; i < tries; i++) {
    const { status_code } = await graphGet(creationId, "status_code");
    if (status_code === "FINISHED") return;
    if (status_code === "ERROR" || status_code === "EXPIRED") {
      throw new Error(`container ${creationId} status ${status_code}`);
    }
    await sleep(3000);
  }
  throw new Error(`container ${creationId} not ready after ${tries} tries`);
}

async function publishSingle(post) {
  const container = await graphPost(`${IG_ID}/media`, {
    image_url: post.slides[0],
    caption: post.caption || "",
  });
  await waitReady(container.id);
  await pace(); // breathe before the publish call
  const published = await graphPost(`${IG_ID}/media_publish`, { creation_id: container.id });
  return published.id;
}

async function publishCarousel(post) {
  const childIds = [];
  for (const url of post.slides) {
    const child = await graphPost(`${IG_ID}/media`, { image_url: url, is_carousel_item: "true" });
    await waitReady(child.id);
    childIds.push(child.id);
    await pace(); // space out each slide's container instead of firing them in a tight loop
  }
  const parent = await graphPost(`${IG_ID}/media`, {
    media_type: "CAROUSEL",
    children: childIds.join(","),
    caption: post.caption || "",
  });
  await waitReady(parent.id);
  await pace(); // breathe before the publish call
  const published = await graphPost(`${IG_ID}/media_publish`, { creation_id: parent.id });
  return published.id;
}

// ---- main ----
const manifestPath = findManifest();

if (has("--list")) {
  const me = await graphGet(IG_ID, "username,media_count,followers_count");
  console.log(`IG account: @${me.username}  (${me.media_count} posts, ${me.followers_count} followers)`);
  const media = await graphGet(`${IG_ID}/media`, "id,caption,media_type,permalink,timestamp");
  console.log(`\nAlready on Instagram (${media.data.length}):`);
  for (const m of media.data) {
    console.log(`  ${m.timestamp}  ${m.media_type}  ${(m.caption || "").split("\n")[0].slice(0, 60)}`);
  }
  if (!manifestPath) { console.log("\nNo staged manifest yet. Run social/stage-to-public.mjs first."); process.exit(0); }
  const man = JSON.parse(readFileSync(manifestPath, "utf8"));
  console.log(`\nStaged manifest (${manifestPath}):`);
  for (const p of man.posts) {
    console.log(`  [${p.status}] ${p.name} (${p.type}, ${p.slides.length} slide[s]) caption:${p.caption ? "yes" : "MISSING"}`);
  }
  process.exit(0);
}

if (!manifestPath) {
  console.error("No staged manifest found. Run social/stage-to-public.mjs first.");
  process.exit(1);
}
const man = JSON.parse(readFileSync(manifestPath, "utf8"));

let targets = man.posts.filter((p) => p.status !== "posted");
if (only) targets = targets.filter((p) => p.name === only);
// --next: publish exactly one post per run (the oldest staged with a caption). This is
// what each scheduled tick calls, so a cron drains the queue one arc at a time.
if (has("--next")) targets = targets.filter((p) => p.caption).slice(0, 1);
if (!targets.length) { console.log("Nothing to publish (queue empty, all posted, or filter matched nothing)."); process.exit(0); }

// Duplicate guard: fetch what is ALREADY live on @kisi.africa and match each staged arc
// by the first line of its caption (the headline). This is the real dedupe — the manifest
// alone cannot be trusted, because a publish can succeed server-side while the script sees
// an error (e.g. Meta's app rate limit mid-carousel) and never marks it posted. That is
// exactly how arc-sweetbeak2 posted three times.
let liveKeys = null;
try {
  liveKeys = await fetchLiveMediaKeys();
} catch (e) {
  console.warn(`  ! could not read live IG media for dedupe (${e.message}).`);
  console.warn(`    Proceeding WITHOUT the live guard — a post that is already live could repeat.`);
}

console.log(DRY ? "DRY RUN — nothing will be posted. Add --publish to go live.\n" : "PUBLISHING to @kisi.africa...\n");
for (const post of targets) {
  if (!post.caption) {
    console.warn(`  ! ${post.name}: caption MISSING — fill it in the manifest before publishing. Skipping.`);
    continue;
  }
  const key = captionKey(post.caption);

  // Already live on the account? Never repost. Reconcile the manifest so the queue moves on.
  if (liveKeys && key && liveKeys.has(key)) {
    console.log(`  already live on IG — ${post.name}: marking posted (dedupe), not reposting.`);
    if (!DRY && post.status !== "posted") {
      post.status = "posted";
      post.dedupedAt = new Date().toISOString();
      post.note = "already live on IG; marked posted by the dedupe guard";
      writeFileSync(manifestPath, JSON.stringify(man, null, 2) + "\n", "utf8");
    }
    continue;
  }

  console.log(`  ${DRY ? "would post" : "posting"}: ${post.name} (${post.type}, ${post.slides.length} slide[s])`);
  post.slides.forEach((u, i) => console.log(`      slide ${i + 1}: ${u}`));
  console.log(`      caption: ${post.caption.split("\n")[0].slice(0, 80)}...`);
  if (DRY) continue;
  try {
    const mediaId = post.type === "carousel" ? await publishCarousel(post) : await publishSingle(post);
    post.status = "posted";
    post.mediaId = mediaId;
    post.postedAt = new Date().toISOString();
    writeFileSync(manifestPath, JSON.stringify(man, null, 2) + "\n", "utf8");
    if (key) liveKeys?.add(key);
    console.log(`      -> posted, media id ${mediaId}`);
  } catch (e) {
    // The publish threw — but it may still have gone live (this is exactly how the
    // rate-limit duplicates happened). Re-check the live account before giving up, so we
    // do not leave it staged for the next run to repost.
    let recovered = false;
    if (key) {
      try {
        const keysNow = await fetchLiveMediaKeys();
        if (keysNow.has(key)) {
          post.status = "posted";
          post.postedAt = new Date().toISOString();
          post.note = `publish threw but the post is live; reconciled: ${e.message.slice(0, 140)}`;
          writeFileSync(manifestPath, JSON.stringify(man, null, 2) + "\n", "utf8");
          console.warn(`      ! publish errored but the post IS live on IG — marked posted (reconciled).`);
          recovered = true;
        }
      } catch {
        /* the live re-check itself failed (likely the same rate limit); fall through */
      }
    }
    if (!recovered) {
      console.error(`      x FAILED: ${e.message}`);
      console.error(`        left staged; the next run re-checks the live account before reposting.`);
    }
  }
}
console.log(DRY ? "\nDry run complete." : "\nDone.");
