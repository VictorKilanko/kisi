# story.md — the Kisi content factory

**Point Claude at this file and say "execute" to run one full cycle: invent drama →
write it at a professional level → audit it → publish it to the website → turn it into
Instagram slides → audit the images → stage them to a public path for scheduling.**

Kisi Farm's single most valuable asset is the **cast**: the chickens, their
personalities, and the drama between them across politics, sport, the egg economy, and
social life. We have built the world. This file is how we keep building the *characters*
and pushing their stories to the website and to Instagram, on demand.

This is a **runbook for Claude**, not a program. Follow the stages in order. Stages 1 to 6
are live. Stage 7 (Instagram scheduling) is a documented plug-in that turns on once the
Meta access token exists (see `social/IG_SETUP.md`).

---

## Before you start

1. Read `CLAUDE.md`, `docs/PROGRESS.md`, and `social/README.md`. Obey the house rules:
   one name (Kisi Farm / kisi.africa), Taco's headshot as the logo mark, **no em-dashes or
   other AI-writing tells**, warmth and dignity, no cruelty or death for shock, and the
   **funnel rule** (every arc ends on a sell).
2. Confirm the toolchain: `node -v` (needs Node; prefix PATH if the memory note says so)
   and that Chrome or Edge is present for `render.ps1`.
3. Work on branch `feature/kisi-poultry-republic`. Commit in small logical units.

If the human gave a brief ("do a sports scandal", "retire a minister", "the lizard is
back"), use it. If they just said "execute", pick the next beat from **The writers' room**
at the bottom of this file, or invent a fresh one that fits the cast and escalates an open
thread.

---

## Stage 1 — WRITE (the writers' room)

Write like a top screenwriter breaking a story, not like a bot filling a template.

1. **Choose the shape.** Decide the piece: a multi-slide **arc** (the main unit, 2 to 5
   beats), a **cast intro** (a single new face), or a **Coop Times** news beat (a single
   reported item between arcs). Most cycles produce one arc.
2. **Cast from the bible.** Open `site/content/chickens.ts` and cast real characters. Keep
   everyone in voice: the President decrees, Halima is iron and dry, the Chief Justice
   rules in proverbs, Kola Quill gossips in headlines, Dr. Featherwell is calm and factual.
   If the story needs a genuinely new character, add them properly to `chickens.ts` in the
   same change; never reference a bird that does not exist there.
3. **Break the beats.** Every arc needs a want, an obstacle, rising tension, a turn, and an
   earned, funny, dignified payoff. Write a tight beat sheet: for each slide a short
   **headline** and a **body** of roughly 1 to 3 sentences (keep bodies under ~170
   characters where possible so they render without shrinking; the Art Director will fail
   anything that overflows). Draw drama from politics, sport, the egg economy, feed, water,
   coops, solar, or social life. Respect open threads (the villain rollout: monitor lizard
   first, then a scheming insider hen, then Halima's later heel turn).
4. **Land the sell (funnel rule).** The final beat routes to `kisi.africa/support` or
   `kisi.africa/shop`. If the arc touches light, power, coops, or housing, name the
   **Solar & Light** or **Better Housing** campaign ($25,000 each). Cast intros route to
   meeting the flock.

Do not fabricate real farm facts (certifications, numbers, vet outcomes). Story is
fiction about the chickens; farm claims must be real or clearly placeholder.

## Stage 2 — AUDIT #1 (the showrunner)

Spawn the **kisi-showrunner** subagent on the draft. Give it the beat sheet and the target
files. It returns SHIP / REVISE / BLOCK with a fix list checking continuity, character
voice, drama quality, house style, and the funnel rule.

- **SHIP:** proceed.
- **REVISE:** apply every fix, then re-run the showrunner until SHIP.
- **BLOCK:** the premise breaks continuity or a character. Rework the story, do not force it.

## Stage 3 — PUBLISH TO THE WEBSITE

Write the approved content into the real data model so it renders on the live routes.
Match each file's existing TypeScript shape exactly; run the gates after (Stage 6a).

- **Arcs** → `site/content/timeline.ts` → renders at **/republic/stories**.
- **Social beats, friendships, events** → `site/content/social.ts` → **/republic/social**.
- **Reported news, gossip, quotes** → `site/content/articles.ts` → **/news** (and
  `/news/[slug]`).
- **New or changed characters** → `site/content/chickens.ts` → **/flock** and
  **/flock/[slug]**. Cross-link characters, ministries, and events where natural.
- Keep the tone identical to what is already in those files. Add, don't rewrite history.

## Stage 4 — GENERATE THE INSTAGRAM SLIDES

The image pipeline is data-driven and already built. Do not hand-build HTML.

1. Add the new arc to the `arcs` array at the top of `social/generate-arcs.mjs`, mirroring
   the wording you put in `timeline.ts`. Use a short kebab-case `slug`. The final slide
   auto-routes to Support; middle slides route to /stories. For a **cast intro** or a
   **single news post**, copy the closest existing file in `social/posts/` (a `t-portrait`
   card for an intro, a `t-times` card for news) and edit its wording instead.
2. Run `node social/generate-arcs.mjs` to write the slide HTML into `social/posts/`.
3. Run `pwsh social/render.ps1` to screenshot every post to a 1080x1080 PNG in
   `social/images/`.
4. Write the caption. Add a `## <name>` section to `social/captions.md` matching the image
   filename, in the established voice, ending on the same sell as the final slide, followed
   by the reusable hashtag block. The handle is **@kisi.africa**.

## Stage 5 — AUDIT #2 (the art director)

Spawn the **kisi-art-director** subagent on the new PNGs (pass the arc slug). It reads the
actual images and returns PASS / FAIL per slide, checking clean render, text fit, correct
template, slide order and numbering, legibility (including Yoruba accents), and that the
final slide sells.

- **PASS:** proceed.
- **FAIL:** the usual cause is copy too long for its size class. Trim the wording in
  `social/generate-arcs.mjs` (and keep `timeline.ts` in sync), re-run Stage 4 steps 2 to 3,
  and re-audit until PASS.

## Stage 6 — STAGE TO THE PUBLIC PATH

1. Run `node social/stage-to-public.mjs <arc-slug> [more names...]` (or `--all`). This
   copies the approved PNGs into `site/public/s/<token>/`, groups multi-slide arcs into one
   carousel, and writes `manifest.json` with the live URLs, target route, and a caption
   slot. The token folder is unguessable on the web but still lives in the repo; that is
   fine for scheduled marketing images.
2. Fill each manifest post's `caption` from `social/captions.md`.
3. **Gates (6a):** from `site/`, run lint, typecheck, tests, and a production build. Report
   results. Do not claim it works without running them. Build needs network for fonts.
4. Deploy the site (Vercel, from `main` after review) so the staged image URLs and the new
   /republic/stories, /republic/social, and /news content go live together.

## Stage 7 — SCHEDULE TO INSTAGRAM (deferred plug-in)

Turns on once the Meta setup in `social/IG_SETUP.md` is done and a long-lived token is in
the environment (never committed). The scheduler `social/ig-publish.mjs` will read
`manifest.json`, build carousel containers via the Instagram Graph API, dedupe against
already-posted media, and schedule each post. Until then, stop after Stage 6 and hand the
human the manifest: staged URLs + captions + a suggested calendar.

---

## Definition of done for one cycle

- New content is live in `timeline.ts` / `social.ts` / `articles.ts` / `chickens.ts` and
  renders on its route.
- Showrunner returned SHIP; art director returned PASS.
- PNGs exist in `social/images/`, captions in `social/captions.md`, both staged into
  `manifest.json` with live URLs.
- Gates ran and were reported. `docs/PROGRESS.md` and `LESSONS.md` updated with what was
  built, decided, and left open.
- Small, descriptive commits on the feature branch.

---

## The writers' room (open threads to pull from)

Keep a running slate here so cycles escalate instead of resetting. Update it each run.

- **Villain rollout (owner-approved order):** 1) the monitor lizard "The Drain" (external
  menace, started); 2) a scheming insider hen (comic villain, gossip and a plot); 3)
  Halima's later heel turn that pays off the secret crate-sisters friendship. Escalate in
  this order.

- **THE SEASON: "The Fence Line Trial" (owner-directed, in production).** A real hen was
  lost on the farm in a fight. This is the Republic's first death *from inside the flock*,
  and it becomes a full courtroom-and-society season, released scene by scene (never dump
  the whole story at once). Ground rules the owner set: honor the real bird (the victim is
  **Cindy** — personable, fashionable, easy-going, dutiful — memorialized in chickens.ts);
  dignified loss handled off-page like Bantu, satire lives in the aftermath; a 6-year-old
  must be able to follow every slide. **The reason for the fight:** a dry-season heat wave plus a
  crowded roost turned the pecking order violent over the prime perch. That is a REAL
  welfare failure (heat + overcrowding cause fatal aggression), so every arc can route to
  **Better Housing ($25,000)**: more space, more perches, shade, and separating aggressive
  birds is exactly how a real farm prevents this. The killer is a dominant hen, Eseosa,
  who is tried and exiled. Planned episode order (build one per cycle, alternate green/cream):
  1. **The Loss** (green, memorial) — the death and the burial under the mango tree. Grief,
     dignity, no gore. Sell: Better Housing.
  2. **"Not Again"** (cream) — Minister of Security Pete Okpara's press conference; Eseosa
     is separated from the flock (the Republic's word for it, handled humanely). Sell: Better Housing.
  3. **The Charge** (green) — the Supreme Pecking Council decides on a full trial, not a
     panel of inquiry. Chief Justice Yèyé Àlàbá presides.
  4. **The Defense Team** (cream) — Eseosa retains a flamboyant defense counsel (new cast
     member); a media circus begins; Kola Quill covers it.
  5. **The Trial** (green; may split into 2 scenes) — the courtroom circus: witnesses, the
     prosecution, the heat-and-crowding evidence, comedy and tension.
  6. **The Judgement** (cream) — verdict and exile, dignified but final; the Chief Justice
     rules in proverbs.
  7. **The Law** (green) — aftermath: Cindy's Law and the Better Housing expansion pass;
     the season lands its meaning and its sell.
  New cast this season (add properly to chickens.ts as they appear): Cindy (memorial, done),
  Eseosa (cantankerous, aggressive, dominant; introduced in Ep 2, exiled at season end),
  and a flamboyant defense-counsel character in Ep 4.
- **Standing engines of drama:** the punctual-breakfast crusade; the President vs Halima
  rivalry (and their secret friendship); the feed budget and the National Feed Budget;
  nesting-box expansion; coop security and the Bantu Protocol; solar-light schedules;
  perch and sprint rivalries; senior-hen retirement and Mama Gold's Law; Kola Quill's
  next scoop.
- **Every arc must end on a sell.** Solar & Light and Better Housing are the two $25,000
  campaigns; reach for them whenever light, power, coops, or housing appear.
