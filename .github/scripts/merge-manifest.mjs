// Deterministic, no-duplicate merge of the IG manifest during an auto-promote.
//
// main and the content branch both edit apps/africa/public/s/<token>/manifest.json:
//   - the content branch APPENDS new arcs as `staged`
//   - the daily IG cron on main FLIPS one arc `staged` -> `posted` per run ([skip ci])
// so a plain merge conflicts. This resolves it with one safe rule: POSTED ALWAYS WINS.
// An arc that main reports as posted stays posted, so it can never revert to staged and
// be re-posted (the standing no-duplicate rule). New arcs from the content branch keep
// their order and their `staged` status.
//
// Reads the two conflicting versions straight from the git index (stage 2 = ours =
// content branch, stage 3 = theirs = main) so it never parses conflict markers.
//
// Usage: node .github/scripts/merge-manifest.mjs <path-to-manifest.json>

import { execSync } from "node:child_process";
import fs from "node:fs";

const path = process.argv[2];
if (!path) {
  console.error("usage: merge-manifest.mjs <manifest path>");
  process.exit(1);
}

const read = (stage) => JSON.parse(execSync(`git show :${stage}:${path}`).toString());
const ours = read(2); // content branch (has new appended arcs + captions)
const theirs = read(3); // main (has the cron's staged->posted flips)

const key = (p) => p.name || p.slug || p.id;
const postedOnMain = new Set((theirs.posts || []).filter((p) => p.status === "posted").map(key));

const posts = ours.posts || [];
const oursKeys = new Set(posts.map(key));

// Apply main's posted flips onto our ordering.
let flipped = 0;
for (const p of posts) {
  if (postedOnMain.has(key(p)) && p.status !== "posted") {
    p.status = "posted";
    flipped++;
  }
}

// Safety: carry over any post that exists only on main (should not normally happen,
// since the cron only flips status; but never silently drop a live post).
let carried = 0;
for (const p of theirs.posts || []) {
  if (!oursKeys.has(key(p))) {
    posts.push(p);
    carried++;
  }
}

const merged = { ...ours, posts, updated: new Date().toISOString() };
fs.writeFileSync(path, JSON.stringify(merged, null, 2) + "\n");
console.log(
  `manifest reconciled (posted-wins): ${flipped} arc(s) flipped to posted, ${carried} main-only post(s) carried, ${posts.length} total.`,
);
