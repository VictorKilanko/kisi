/**
 * Stage approved Instagram PNGs to an unguessable public path and build a manifest
 * for the (deferred) Instagram scheduler.
 *
 * The Instagram Graph API cannot upload a local file: every image must be at a public
 * HTTPS URL. Anything under site/public/ is served by Vercel at the site root, so this
 * copies the chosen PNGs into  site/public/s/<token>/  and prints their live URLs.
 *
 * "Secret" here means unguessable-by-strangers (a random token folder), not secret from
 * anyone who can read this repo. If the GitHub repo is public, the staged files are in it.
 * That is fine: these are marketing images meant to be posted publicly on a schedule; the
 * token only stops people finding them on the web before they are scheduled.
 *
 * Usage:
 *   node social/stage-to-public.mjs arc-drain arc-cabinet   # stage specific arcs/posts
 *   node social/stage-to-public.mjs --all                   # stage everything in images/
 *   node social/stage-to-public.mjs --list                  # show the current manifest
 *
 * A "name" is an image prefix. "arc-drain" stages arc-drain-1..N as ONE carousel.
 * A bare name like "wanted-monitor-lizard" stages a single-image post.
 *
 * Then run  pwsh social/render.ps1  first if the PNGs are stale, and deploy the site so
 * the URLs go live. The scheduler (social/ig-publish.mjs, deferred) reads the manifest.
 */
import {
  readdirSync, mkdirSync, copyFileSync, writeFileSync, readFileSync, existsSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";
import { randomBytes } from "node:crypto";

const here = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(here, "images");
const publicRoot = join(here, "..", "site", "public", "s");
const tokenFile = join(here, ".stage-token");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kisi.africa").replace(/\/$/, "");

// A stable secret folder token, reused across runs so the base URL never changes.
function getToken() {
  if (existsSync(tokenFile)) return readFileSync(tokenFile, "utf8").trim();
  const t = randomBytes(9).toString("base64url"); // 12 unguessable chars
  writeFileSync(tokenFile, t + "\n", "utf8");
  return t;
}

const token = getToken();
const stageDir = join(publicRoot, token);
const manifestPath = join(stageDir, "manifest.json");

function loadManifest() {
  if (existsSync(manifestPath)) return JSON.parse(readFileSync(manifestPath, "utf8"));
  return { base: `${siteUrl}/s/${token}`, updated: null, posts: [] };
}

function slidesFor(name) {
  // Numbered multi-slide carousel: <name>-1.png, <name>-2.png, ...
  const numbered = readdirSync(imagesDir)
    .filter((f) => new RegExp(`^${name}-\\d+\\.png$`).test(f))
    .sort((a, b) => Number(a.match(/-(\d+)\.png$/)[1]) - Number(b.match(/-(\d+)\.png$/)[1]));
  if (numbered.length) return numbered;
  // Single standalone post: <name>.png
  const single = `${name}.png`;
  return existsSync(join(imagesDir, single)) ? [single] : [];
}

const args = process.argv.slice(2);
if (args[0] === "--list") {
  const m = loadManifest();
  console.log(`Manifest: ${manifestPath}`);
  console.log(`Base URL: ${m.base}`);
  console.log(`${m.posts.length} post(s):`);
  for (const p of m.posts) {
    console.log(`  - ${p.name} (${p.slides.length} slide[s], ${p.status}) -> ${p.finalRoute}`);
  }
  process.exit(0);
}

let names = args;
if (args[0] === "--all" || args.length === 0) {
  const prefixes = new Set();
  for (const f of readdirSync(imagesDir).filter((f) => f.endsWith(".png"))) {
    prefixes.add(f.replace(/-\d+\.png$/, "").replace(/\.png$/, ""));
  }
  names = [...prefixes].sort();
}

mkdirSync(stageDir, { recursive: true });
const manifest = loadManifest();
const byName = new Map(manifest.posts.map((p) => [p.name, p]));

for (const name of names) {
  const slides = slidesFor(name);
  if (!slides.length) {
    console.warn(`  ! no images found for "${name}" (skipped)`);
    continue;
  }
  for (const f of slides) copyFileSync(join(imagesDir, f), join(stageDir, f));
  const isCarousel = slides.length > 1;
  byName.set(name, {
    name,
    type: isCarousel ? "carousel" : "single",
    slides: slides.map((f) => `${manifest.base}/${f}`),
    // Middle slides route to /stories; the funnel rule puts the sell on the last slide.
    finalRoute: isCarousel ? `${siteUrl}/republic/stories` : `${siteUrl}/republic/social`,
    caption: byName.get(name)?.caption ?? "", // filled from social/captions.md by the runbook
    status: "staged",           // staged -> scheduled -> posted (scheduler updates these)
    scheduledFor: byName.get(name)?.scheduledFor ?? null,
  });
  console.log(`  staged ${name}: ${slides.length} slide(s)`);
}

manifest.posts = [...byName.values()];
manifest.updated = new Date().toISOString();
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

console.log(`\nStaged to: ${stageDir}`);
console.log(`Public base URL (deploy the site to make live): ${manifest.base}`);
console.log(`Manifest: ${manifestPath}`);
console.log(`Next: fill each post's "caption" from social/captions.md, deploy, then schedule.`);
