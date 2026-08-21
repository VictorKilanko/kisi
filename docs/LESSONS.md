# LESSONS.md — running log

Rolling record of **what we learned**, **what is done**, and **what is left**.
Update this at the end of every session (and any time a hard-won lesson appears).
Newest session at the top.

---

## Session — 2026-08-21 (Kisi Kids: built the website; added Zizi to canon)

Built out **Kisi Kids** (`apps/kids`) as a real site, not a scaffold. Owner call: long-term the
brand is **video-first** (Blippi/Cocomelon on YouTube, AI-produced), but the video tools are not in
hand, so we **build the website now** and write the video plans in parallel, keeping the two aligned
(same characters, same content, a story on the site becomes a video script later).

**Hosts: Dede (uncle, "Day-day") + Zizi (his young niece).** Added **Zizi** to the shared canon
(`packages/canon`, id `zizi`, fun/curious/outgoing/friendly, friend of chi-chi — symmetric),
cast now **28**; test floor bumped 27 -> 28.

**Site:** home + five pillars, each a reusable typed template (`apps/kids/content/*.ts`):
`/stories` (illustrated read-along fables), `/heroes` (factual hero profiles), `/words`
(Yoruba/Swahili word-of-the-day), `/songs` (lyrics; audio later), `/printables` (print-friendly
SVG activity sheets via `window.print()`). Characters/scenes are deterministic SVG (`@kisi/ui`
ChickenPortrait + `KidScene`), so the art never drifts; commissioned/AI art drops into
`kisikids/assets/` later.

**The `kisikids/` folder** (repo root) is the plan/video brain: `KIDS_PLAN.md` (runbook + resume
marker), `BIBLE.md` (Dede + Zizi voices/look + the two hard rules), `PIPELINE.md` (AI video runbook),
`curriculum/`, `scripts/TEMPLATE.md`, `assets/`.

**Hard rule learned/enforced: everything Kisi Kids teaches must be REAL.** Ran an accuracy audit
(web-sourced) before push — Wangari Maathai facts (Kenya, 1940-2011, Green Belt Movement, first
African woman to win the Nobel Peace Prize, 2004), the Yoruba/Swahili words, and the tortoise fable's
provenance all verified CLEAN. Applied one polish: the fable's origin note now names Igbo alongside
Yoruba (the "All of You" sky-feast version is most famously Igbo via Achebe). Chickens are fictional
hosts; the history/heroes/languages/fables are not.

Gates: kids lint 0 / typecheck 0 / build all routes; canon 28 + integrity; full workspace build 3/3.

## Session — 2026-08-21 (content: Season 2 Eps 8-9, first batch under the brand split)

Ran the story factory (`social/story.md`) end to end for the first time since the three-site
split. Updated `story.md` itself for the split first: the sell now points to **Kisi Farm**
(`farm.kisi.africa`, not kisi.africa/support|shop), the slide wordmark is **"Kisi"**, mascot is
**Dede**, and a new "brand split" section explains that stories/characters are authored into the
shared canon for Kisi Africa, and Kisi Kids + Kisi Farm tap into the same cast. Also migrated the
generator's `SELL_FOOT` and **all historical funnel URLs** (timeline/generate-arcs/captions) to
`farm.kisi.africa`.

Then wrote and queued two arcs (canon timeline + ARC_META + slides + captions + staged):
- **Ep 8 "The Second Chair"** (GREEN, 4) — seeds Halima's heel turn (rollout #3): the flock's cheer
  makes the second chair feel small, Sweet Beak plants the poison, Kola senses the crate-sisters
  bond becoming a fault line. → farm.kisi.africa/support.
- **Ep 9 "The League Kicks Off"** (CREAM, 4) — Chi-Chi's first league race, third place, loudest
  cheer; pays off her Ep 6 junior-squad thread. → farm.kisi.africa/eggs.

Audits: art director PASS on all 8 slides; showrunner **REVISE→SHIP**. The showrunner caught a real
continuity bug worth remembering: **the crate-sisters origin (President + Halima off the same chick
crate) is PUBLIC canon** ("a fact both deploy in debates"), so a story must not make it "the thing
only Kola knows" — what Kola alone can sense is what the bond is *becoming*. It also caught that a
"race in the rain" is **Flash Adaora's** signature moment, not Túndé's (his is the 100m record), and
an invented "plaque" prop. Lesson: check whose signature beat you are borrowing, and whether a
"secret" is actually public in the bible. Verified: canon 18 tests, africa typecheck + build green.
Rendering gotcha: launching headless Chrome for many slides in quick succession fails on profile
lock; give each a unique `--user-data-dir` and a short sleep.

---

## Session — 2026-08-20 (kisi.africa repositioned + mascot renamed Taco -> Dede)

After the three sites went live, two changes to kisi.africa.

### kisi.africa repositioned as the pure universe front door
kisi.africa is now the entertainment brand only: a world of chicken characters and the
Republic they run. "Order Eggs"/"Support" removed from the surface; Header/Footer/home/
economy/stories/profiles point buying + sponsoring OUT to Kisi Farm; /shop + /support 308 to
the farm permanently; /eggs kept as Republic egg lore; /about rewritten as "About Kisi
Africa" (the newcomer pitch, one light real-farm nod, Explore Kisi Farm/Kids buttons);
metadata/OG/manifest/sitemap re-pitched; `NEXT_PUBLIC_COMMERCE_ON_FARM` retired. Expert audit
came back clean. Pushed live (`cce8c30`).

### MASCOT RENAMED: Taco (she/her) -> Dede (he/him)
Owner decision 2026-08-20. Changed everywhere user-facing:
- **Canon** (`packages/canon/src/data/farm.ts`): the `mascot` object, name + all pronouns
  (she/her -> he/him). Also `chickens.ts` (one bio referenced "Taco"). The website pulls the
  mascot from canon, so most of the site updated automatically.
- **Website**: `/mascot` page hardcoded strings, `MascotPortrait`, `lib/mapData.ts` (map
  hotspot + "Meet Dede" link), `manifest.ts` + both `opengraph-image.tsx` comments, and the
  logo component **`TacoMark` -> `DedeMark`** (`Logo.tsx` + `Footer.tsx`).
- **IG/social**: the reusable hashtag **`#taco` -> `#dede`** (`captions.md`), the mascot
  intro caption (name + he/him), the "Meet Dede" slide HTML (`posts/03-meet-taco.html`),
  and `README.md` + `story.md` name references.
- **Asset rename + IG repost DONE (2026-08-21):** renamed `assets/taco.svg` + `taco-*.png` ->
  `dede.*` (all ~100 post-HTML/template/script refs updated); renamed + re-rendered the intro
  slide `03-meet-taco.html` -> `03-meet-dede.html` -> `images/03-meet-dede.png` (fixed body
  pronouns she->he, framed as "mascot of the Republic of Kisi"); staged, deployed, and
  **reposted to IG @kisi.africa** via `ig-publish --next --publish` (owner deleted the old Taco
  slide first). The publish threw mid-call but the reconcile guard confirmed it live and marked
  it posted (anti-duplicate logic working). To repost a single slide: render with headless
  Chrome `--screenshot` on the one HTML, then stage -> commit -> push -> wait for Vercel ->
  poll the image URL for 200 -> `ig-publish --next --publish` (IG needs a public image URL).

### Header polish (owner feedback)
The kisi.africa header buttons/nav wrapped and were unevenly spaced. Fix: moved the Kisi
Farm / Kisi Kids CTA buttons out of the nav `<ul>` into their own group (so the row is
logo | nav | buttons under `justify-between`), and added `whitespace-nowrap` to every nav
item and button so text never wraps. Tightened nav gap to `gap-0.5`, button padding `px-5`.

Verified: canon 18 tests, africa typecheck + lint(0) + build all green.

---

## Session — 2026-08-20 (the three-brand split: monorepo + shared canon)

Big structural pivot approved by the owner: grow Kisi into a Disney-style universe with three
properties sharing one cast. **kisi.africa** stays the entertainment brand (the Republic run by
chickens, adults/young adults, no commerce). **kisifarm** becomes the real business (eggs +
day-old chicks). **kisikids** becomes the kids channel (education + merch, Blippi model,
greenfield). The chickens are the IP engine; the other two monetize the emotional equity.

### Decisions (owner, via plan-mode questions)
- **Topology = monorepo**, three deployable apps + a shared canon package, in ONE repo. This
  overrode the owner's first phrasing ("separate repos") once the drift risk was clear: three
  copies of a 27-chicken cast WILL diverge. The `packages/canon` boundary keeps a future true-split
  a clean one-time extraction if ever wanted.
- **Domains = build subdomain-ready** (`farm.kisi.africa`, `kids.kisi.africa`); the canonical
  origin is already a single env var, so swapping to standalone domains later is a Vercel change,
  not code.
- **Scope this engagement = foundation, then kisifarm.** kisikids scaffold only.
- **Commerce transition = keep live, then redirect.** kisi.africa keeps selling until kisifarm is
  ready, then `/shop /eggs /support` 301 to the farm.

### What shipped (Phases 0 + 1, committed, NOT yet pushed)
- **Phase 0** (`c75eda3`): repo is now a **pnpm + turborepo workspace**. The Next app moved
  `site/` -> `apps/africa/` (git kept 199 renames). Package renamed `site` -> `@kisi/africa`.
  Dropped npm's `package-lock.json` for a workspace `pnpm-lock.yaml`.
- **Phase 1** (`d70c3c3`): extracted **`@kisi/canon`** = the single source of truth (schemas +
  27 chickens + timeline + every derived accessor). Raw data sits in `packages/canon/src/data/`
  (not `content/`, to avoid a `content.ts` vs `content/` clash). Every app import of
  `@/lib/content`, `@/lib/schemas`, `@/content/wanted` now points at `@kisi/canon`; added it to
  Next `transpilePackages` and as a `workspace:*` dep. Canon is consumed as TS source (no build
  step), which is why `transpilePackages` is required.

### Lessons / gotchas
- **pnpm is not installed and can't be shimmed** (Program Files is admin-locked, `corepack enable`
  EPERM). Use **`corepack pnpm ...`** for every pnpm command in this environment.
- **OneDrive holds directory handles.** `mv site apps/africa` failed with "Device or resource
  busy"; moving the *contents* then `rmdir` worked. Expect this on any folder rename here.
- **`.npmrc` sets `node-linker=hoisted`** so `node_modules` stays flat (no symlink virtual store),
  which suits a OneDrive-synced Windows path and matches what npm gave the app before.
- **Fixed a brittle test:** `storyArcs()` is date-gated so its length grows with real time; the old
  `toBe(9)` now fails on any date past the early arcs. Changed to a floor (`>= 9`) plus the known
  core-arc membership checks. This was pre-existing, not caused by the move.
- **canon tsconfig needs `lib: ES2022`** (the league-table test uses `Array.at`).

### Verified
Canon: typecheck + 18 tests. Africa: typecheck + 13 api tests + full production build (85 pages,
canon transpiled from source). All green.

### CRITICAL blocker before any push
Pushing the restructure will **break the live Vercel deploy** until the owner changes the
kisi.africa project **Root Directory from `site` to `apps/africa`** in the Vercel dashboard. Do not
push until that is done (or the owner is standing by to do it right after). `social/` scripts also
still point at the old `site/content` paths and are temporarily broken until repointed in Phase 4.

### Phases 2-4 (same day, all committed, still not pushed)
- **Phase 2** (`4e02f29`): `packages/brand` (@kisi/brand) = shared tokens.css + base.css;
  africa now consumes them (single source of truth for colour). Scaffolded `apps/farm`
  (real business shell, pulls laying hens from canon) and `apps/kids` (brighter theme on the
  shared brand, "hatching soon"). Sibling URLs are env-overridable (subdomain-ready).
- **Phase 3** (`6dbb5fb`): kisifarm built fully. /eggs (order + milestones + census), /chicks
  (hatchery, honest placeholder), /support + /support/terms, /about, /visit, legal. Reused
  OrderForm/SupportCheckout/NewsletterForm/Cards/Badges/ChickenPortrait/Disclaimer,
  lib/payments (LOCKED, sandbox), lib/mail, lib/rateLimit, and the api routes; 13 api tests.
- **Phase 4** (`40e8813`): de-commerced kisi.africa. Env-gated 308 redirects
  (NEXT_PUBLIC_COMMERCE_ON_FARM, OFF by default) for /shop /eggs /support* /about /visit ->
  farm. Footer links out to the farm shop + Kisi Kids. Repointed social/ scripts publicRoot
  site -> apps/africa.
- **Lessons this stretch:** Tailwind v4 resolves bare-specifier CSS imports from a workspace
  package (so @kisi/brand tokens work); Next 16 emits built CSS under `.next/static/chunks/`
  (grep there, not `static/css/`); turbo needs a `pnpm` binary on PATH (shim at `~/bin`);
  next/font loaders must stay in each app (not a shared package). Whole workspace: typecheck 4,
  test 44, build 3, all green.

### Left to do
- Phase 5: `docs/MONOREPO.md` written (structure + full Vercel deploy guide); expert subagent
  audit of the full diff in progress; then push. Push is gated on the owner changing the
  kisi.africa Vercel Root Directory `site` -> `apps/africa`; then deploy farm/kids and flip
  COMMERCE_ON_FARM. See `docs/SPLIT_PLAN.md` for the live checklist.

---

## Session — 2026-08-15 (IG dedupe fix + Season 2 Eps 5 to 7: the warm batch)

Two pieces of work. First, fixed a live Instagram bug the owner spotted; then ran a three-arc
`story.md` batch.

### Instagram: three duplicate posts, root-caused and fixed
- **Symptom:** the @kisi.africa grid had `arc-sweetbeak2` ("Sweet Beak Strikes Again" / "The next
  target") live **three times**. **Root cause:** the carousel publish hit Meta's app request limit
  (code 4) partway through on three separate runs (08-14 07:20, 08-14 12:39 dispatch, 08-15 06:37);
  the post went live server-side each time, but `ig-publish.mjs` caught the thrown error, left the
  arc `staged`, and committed nothing, so the next daily cron republished it. The manifest still said
  `staged` while it was live 3x. Confirmed from the Actions logs.
- **Fix (`social/ig-publish.mjs`):** a real dedupe guard. Before posting it reads what is already
  live on the account (`fetchLiveMediaKeys`, caption-key = leading ~160 normalized chars) and
  skips/marks-posted any arc already up; on a publish error it re-checks the live account and marks
  posted if it actually went through; the live read retries with backoff so the guard survives the
  rate limit that caused the incident. Then marked `arc-sweetbeak2` posted so the cron stops. Also
  spaced out the Graph calls (`IG_PACE_MS` default 1500ms between calls + a 2s pre-poll in
  `waitReady`) to reduce how often the throttle is hit at all. **Standing rule saved
  ([[kisi-no-duplicate-ig-posts]]): never post duplicates; the publisher must dedupe against the
  live account, never trust the manifest alone.** Owner deletes the 2 extra live copies by hand
  (destructive, theirs to do). Direct `git push origin HEAD:main` worked fine this session (no hang),
  unlike older sessions.

### Season 2 Eps 5 to 7 — a three-arc warm batch (owner asked for three; picked a warm palate cleanser)
- Built as one batch with a single showrunner audit and single art-director audit across all three.
  **Ep 5 "The Breakfast Bell"** (CREAM, → shop), **Ep 6 "Chi-Chi's First Race"** (GREEN, → shop),
  **Ep 7 "The Elders' Bench"** (CREAM, → support). Alternation vs prior `arc-sweetbeak2` GREEN kept:
  cream → green → cream. Reveal-dated 08-25…08-30, staged in cron order breakfast → sprint → elders.
- **The one real showrunner catch (worth carrying forward): check a founding character's signature
  before building on that theme.** Ep 5's first draft treated a set breakfast hour as a novelty, but
  President Adédoyin's canon is Executive Order No. 1, the "Punctual Breakfast Order" (she is "Mama
  Decree," slogan "A nation that eats late, lays late"). Reframed the arc so Order No. 1 already
  exists but a clockless farm cannot keep it, and Halima's crusade is to make the President's own
  order *real* (pegged to the two-rooster dawn crow from Ep 3). REVISE→SHIP; the reframe made the arc
  stronger. Ep 6 keeps the Túndé/Flash rivalry "retired but eternal" (they coach, then race an
  exhibition) so no continuity break; Chi-Chi comes second and earns the bigger cheer, paying off
  her "I did my best" motto. Ep 7 treats Mama Gold's Law as already-passed and makes it physical.
- **Shipped a footer-routing fix** the showrunner flagged as pre-existing: `generate-arcs.mjs`
  `page()` hardcoded the final-slide footer to `/support` for every arc, so shop arcs showed
  `/support` under an "order eggs" CTA. Added an arc `sell` field (`sell:"shop"` → kisi.africa/shop,
  default → /support); set it on `breakfast` + `sprint`. Existing arcs unchanged (only re-rendered
  the 14 new slides via a targeted PowerShell loop, not all 87).
- **No new characters** (reused Halima, Musa, President, Small Fẹ́mi, Baba, Chi-Chi, Flash, Túndé,
  Mama Gold, Sisi Ngozi, Sadé), so chicken count stays **27**. Tagging discipline held: every id in
  a beat's `chickenIds` is named in that beat (added `baba-segun` to the rooster-clock beat where he
  is load-bearing).
- **Manifest synced clean:** local == origin/main (18 posts, all posted, no cron drift), so staging
  appended the 3 new arcs as `staged` → 21 posts. Filled the 3 captions from `captions.md` + the
  17-tag block via a UTF-8 Node script (handles the Yoruba names). `finalRoute` left at the
  `/republic/stories` default by convention; the real sell lives in the caption + final slide.
- **Gates (actual, local, Node v24.18.1):** cleared stale `.next`; `tsc --noEmit` 0; `npm run lint`
  0 errors (2 old warnings); `vitest` **31/31**; `npm run build` exit 0, all routes. **Arc-count test
  stays 9 today** (all three new arcs future-dated, hidden by `revealedTimeline`); new thresholds: 14
  after 08-25, 15 after 08-27, 16 after 08-29 (bump `content.test.ts` as each date passes on a real
  CI run).

---

## Session — 2026-08-13 (Season 2, Ep 4: "Sweet Beak Strikes Again")

Ran one full `story.md` cycle ("execute /social/story.md"). Season 2 Eps 1 to 3 have all
**posted** on `origin/main` (the 12h cron drained rebuild → sweetbeak → dawn since 08-08), so
this cycle built the RESUME-marked **Ep 4**: the recurring comic villain's escalation.

- **New arc "Sweet Beak Strikes Again" (arcId `the-sweet-beak-returns`), GREEN, 5 beats.**
  Villain rollout #2 escalation. Ládùn overreaches: cleared but unashamed after the grain
  whisper, she trades the whisper for **envy** and tries to turn coop against coop over the newly
  rebuilt Coop Three (Cindy's Law). She calls a grievance meeting to weaponize the waiting coops,
  but **Halima Iron Feathers** refuses to play politics with Cindy's Law, the crowd flips to
  "build ours next," and the grievance meeting becomes the biggest Better Housing rally the
  Republic has held, organised by the schemer herself. Routes to Better Housing.
- **Two deliberate craft choices worth keeping:** (1) after two Sweet Beak arcs in a row (Ep 2 and
  Ep 4), the RESUME marker now steers Ep 5 to a lighter standing-engine palate cleanser to vary
  tone; (2) Halima is played **straight/principled** here (not the heel turn) precisely to build
  audience love before her eventual rollout #3, per the villain plan.
- **Showrunner REVISE→SHIP.** The one real catch: the finale tagged `adedoyin-mama-decree` in
  `chickenIds` but the President never appeared in the beat, which would cross-link the event onto
  her profile for a scene she is absent from. Fix: a one-line decree cameo echoing the rebuild
  plaque ("One coop is done. We have many."), placed **after** Halima's turn so it buttons the arc
  without stealing her beat. Also applied the optional irony sharpener (Sweet Beak roosts in the
  very Coop Three she stokes envy against) and retagged the finale `reconciliation`→`custom`
  (it is a comic reversal, not a reconciliation). **Lesson: every id in `chickenIds` must actually
  appear in the beat, or it pollutes that character's profile timeline.** Art director PASS on all 5.
- **Manifest sync before staging (the recurring lesson, and it mattered again).** The local
  feature-branch manifest still had `arc-rebuild`/`arc-sweetbeak`/`arc-dawn` as `staged`, but
  `origin/main` had them all `posted` (cron commits back to main). Overwrote the local manifest
  with `git show origin/main:.../manifest.json` **before** running the stager, so the 17 posted
  statuses were preserved and only `arc-sweetbeak2` was appended as `staged`. Without this, merging
  the branch would revert posted→staged and the bot would re-post duplicates. Filled the caption by
  hand (UTF-8 Python; the default cp1252 console encoding chokes on "Ládùn", so wrap stdout in a
  UTF-8 TextIOWrapper or write with `ensure_ascii=False`).
- **`finalRoute` in the manifest is always `/republic/stories` by convention**, regardless of the
  arc's sell. The actual sell (support/shop/Better Housing) lives in the caption text and the final
  slide's footer, not in `finalRoute`. Left it at the default.
- **Gates (actual, local, Node v24.18.1):** cleared stale `.next` first; `tsc --noEmit` exit 0;
  `npm run lint` 0 errors (2 old warnings); `vitest` **31/31**; `npm run build` exit 0 (all routes).
  Rendered only the 5 new slides (targeted PowerShell loop), not all 73.
- **Reveal-filtered arc count is unchanged today (9).** The new arc's earliest beat is 09-23
  (future), so `revealedTimeline` hides it and the hardcoded count test still reads 9 and passes.
  Thresholds now: 10 after 08-20, 11 after 09-02, 12 after 09-13, **13 after 09-23**. Chicken count
  stays 27 (no new character; reused Ládùn and Halima). Left the count test at 9 on purpose.
- **WENT LIVE + IG QUEUED (owner: "push it to main and redeploy and queue them for our IG").**
  Merged `origin/main` (3 cron [skip ci] commits) into the feature branch, resolved the manifest to
  "ours" (identical posted statuses + `arc-sweetbeak2` staged; net source drift zero), pushed the
  feature branch, then moved `main` with `gh api -X PATCH .../git/refs/heads/main -f sha=<sha>` (the
  method that works here; direct `git push` to main hangs). CI green on main; Vercel redeployed and
  both staged PNGs return HTTP 200. `arc-sweetbeak2` is the only `staged` post, so the 12h cron posts
  it next (~06:00 UTC 08-14).
- **CADENCE FIX (owner: "pull the website reveal forward").** The site reveals each beat by in-story
  date at build time, but the IG cron posts each arc as one full carousel at its slot, so IG had run
  ~6 weeks ahead of the site (Season 2 was dated 08-20…09-30). **Two hard constraints shaped the
  fix:** (1) the rebuild must follow Cindy's death, and the Fence Line finale is 08-16, so Season 2
  cannot legitimately reveal before 08-17 (today was 08-14) without depicting the new coop before the
  loss; (2) Ep4 cannot be pulled forward alone or the sequel reveals before its setup (Eps 1-3 were
  all still hidden too). So re-dated **all four** Season 2 arcs into a tight, ordered, non-overlapping
  block **08-17…08-24** (rebuild 17-18, sweetbeak 19-20, dawn 21-22, sweetbeak2 23-24). The site now
  catches up to IG within ~10 days instead of 6 weeks. **Lesson: continuity is the floor on how far a
  reveal can be pulled forward; you cannot reveal a consequence before its cause, and you cannot
  reveal a sequel before its setup, so re-date whole seasons, not single arcs.**
- **Two content-integrity facts confirmed while doing this:** the within-arc date check
  (`content.test.ts:172`, `[...dates].sort()===dates`) allows **non-decreasing** dates, so multiple
  beats can share a day; and `/republic/stories` orders arcs by each arc's **latest** beat date
  descending (`page.tsx:20`), so re-dated arc blocks must have ascending maxima and not overlap to
  keep newest-first order correct.
- Gates re-run after the re-date: `tsc` 0, `vitest` 31/31 (arc count still 9 today; all Season 2
  dates are future), `next build` 0. Untracked `social/assets/*` + `make-brand-assets.ps1` from a
  prior session were left alone (not part of this cycle).
- **IG hit Instagram's app request limit, then cron switched to daily (owner).** The 07:20 UTC
  scheduler run tried to post `arc-sweetbeak2` but the Graph API returned code 4 / subcode 2207051
  ("Application request limit reached / action is blocked"), a transient app-level throttle after
  Eps 1-3 drained recently. It did **not** publish and the manifest stayed `staged` (the workflow's
  `git diff --quiet` guard means no post → no manifest change → no duplicate risk). **Did not manually
  retry** (would extend the block). Then switched `.github/workflows/ig-schedule.yml` cron from
  `0 6,18 * * *` (every 12h, the backlog cadence) to `0 6 * * *` (once daily, 06:00 UTC / 2 AM ET) to
  stay under the limit. **Consequence to remember: dropping the 18:00 slot removed today's retry, so
  the next auto-attempt for `arc-sweetbeak2` is 08-15 06:00 UTC.** A workflow-file change pushed fine
  on the feature branch (the gh-auth git creds carry `workflow` scope here), then `main` moved via the
  usual `gh api` ref PATCH. GitHub reads the cron from the workflow on `main`, so the daily cadence is
  live.
- **Cool-down still active at ~5.5h; owner chose to wait for the daily cron.** A `workflow_dispatch`
  retry at 12:40 UTC hit the **identical** block (code 4 / subcode 2207051, "action is blocked"), so
  this is the longer integrity-style throttle, not a 1h rate cap. Manifest stayed `staged` again (no
  post, no duplicate risk). **Decision: stop manual retries** (each blocked attempt can reinforce the
  block) and let the once-daily cron retry at **08-15 06:00 UTC** (~17h cool-down). **Standing lesson:
  on an Instagram "action is blocked" response, back off hard, do not keep dispatching; let the daily
  cron be the low-frequency retry.** `arc-sweetbeak2` remains the only staged post, so it is what the
  cron posts next once the throttle clears.

---

## Session — 2026-08-08 (Season 2, Ep 1: "After the Fence Line" — the rebuild)

Ran one full `story.md` cycle ("execute story.md"). Season 1 (The Fence Line) is done: the
whole season plus `arc-cabinet` shows **posted** on `origin/main` (the 12h cron drained the
queue through 08-07). So this cycle opened **Season 2** with the rebuild arc the RESUME marker
named.

- **New arc "After the Fence Line" (arcId `after-the-fence-line`), CREAM, 4 beats.** Coop
  Three rebuilt to Cindy's Law with the Better Housing money at work: the first plank → built
  to the law (perches, vents, shade, Featherwell measuring) → the birds come home (roll comes
  back whole) → a "Built to Cindy's Law" plaque and the honest sell (one coop done, many to
  go). Cast in voice: Emeka (footprint/drainage), Featherwell (spacing), Amina Daybreak
  (vents/shade), Okpara (roll call), the President (terse plaque line). Hopeful tone after a
  heavy season.
- **Full pipeline run.** Showrunner: REVISE (light) → applied all fixes (wired the `rebuild`
  arc into `generate-arcs.mjs` as CREAM/last; landed slide 3 on "this is the coop Cindy should
  have had"; retitled slide 2 to "What the law looks like" to avoid a double "Built to").
  Art director: PASS on all 4 rendered PNGs (cream confirmed, fit, numbering, the finale sells).
- **Reveal-date design (important continuity mechanic).** Dated the 4 beats **08-20…08-30**,
  after the Fence Line finale (08-16), so `revealedTimeline` in `lib/content.ts` keeps the arc
  hidden on the live site until the story date arrives (scene-by-scene reveal, matches the IG
  drip). Consequence: `storyArcs()` is reveal-filtered, so the hardcoded arc-count test
  (`content.test.ts`, `expect(arcs.length).toBe(9)`) **still reads 9 today** and passes. It
  will become **10 after 08-20**, so the next CI run past that date must bump 9→10. Left the
  test at 9 on purpose (bumping it now would fail today's gate).
- **Manifest sync before staging (repeat of the 08-03 lesson, and it mattered).** The local
  feature-branch manifest still had the whole Fence Line season as `staged`, but `origin/main`
  had them all `posted` (cron commits back to main). Synced the manifest from
  `git show origin/main:site/public/s/ay0qME54UVBg/manifest.json` **before** running the stager,
  so the 14 posted statuses were preserved and only `arc-rebuild` was appended as `staged`.
  Without this, merging the branch would revert posted→staged and the bot would re-post
  duplicates.
- **stage-to-public name = image prefix, not arc slug.** First tried `stage-to-public.mjs
  rebuild` → "no images found"; the files are `arc-rebuild-*.png`, so the name is `arc-rebuild`
  (matches how every other arc is staged). Filled the manifest caption by hand from
  `captions.md` + the 17-tag block.
- **Gates (actual, local, Node v24.18.1):** `tsc --noEmit` exit 0 (cleared stale `.next`
  first); `npm run lint` 0 errors (2 old warnings); `vitest` **31/31**; `npm run build`
  succeeded, all routes generated. Rendered only the 4 new slides (targeted PowerShell loop)
  rather than re-screenshotting all 68.
- **PUSHED LIVE + two more arcs queued (owner: "push it live and write more stories").**
  Moved everything to `main` and built two more Season 2 arcs so the IG/website queue has a
  backlog. Go-live method (main pushes hang on a credential prompt here, feature pushes are
  fine): `gh auth setup-git` once, then `git push origin feature/...` worked; `main` had
  diverged (cron "mark next arc posted [skip ci]" commits), so I merged `origin/main` into the
  feature branch, resolved the manifest by rebuilding it from `origin/main` (authoritative for
  posted statuses) plus my staged additions, pushed the feature branch, then fast-forwarded the
  `main` ref with `gh api -X PATCH repos/VictorKilanko/kisi/git/refs/heads/main -f sha=<sha>`.
  CI ran green; Vercel redeploys `main` so the staged PNG URLs go live; the 12h cron
  (06:00/18:00 UTC) posts `arc-rebuild`, then `arc-sweetbeak`, then `arc-dawn` in that order.
- **Two new arcs this batch:** **Ep 2 "The Sweet Beak"** (villain rollout #2, the scheming
  insider hen Ládùn; GREEN; revives the missing-grain fear as a whisper vs Musa, Kola Quill
  exposes her; comeuppance not exile so she recurs; routes to shop) and **Ep 3 "The Dawn Duel"**
  (Baba Ṣẹ́gun vs the Drain-survivor Small Fẹ́mi over the first crow; CREAM; routes to Solar &
  Light). New character Ládùn added → **chicken count test 26→27**. Both showruner SHIP / art
  director PASS. Alternation restored: rebuild cream → sweetbeak green → dawn cream.
- **Showrunner caught a canon violation worth remembering:** the first Dawn draft recast Small
  Fẹ́mi (an established, serious Drain survivor who wants to be a coop guard) as a generic peppy
  chick. Fixed by casting from his bible: his challenge grew from "a guard is up before dawn
  anyway," and his `ageNote` went Chick→"Young cockerel, still growing". **Cast from
  `chickens.ts`; never invent over an existing character.**
- **Reveal-filtered arc count keeps drifting by date:** 9 today, 10 after 08-20 (rebuild), 11
  after 09-02 (sweet-beak), 12 after 09-13 (dawn). A CI run past each date needs the count test
  bumped. Left at 9 (passes today). The chicken count (27) is NOT date-gated and was bumped now.
- **LEFT:** website Big Stories reveal by in-story date (rebuild 08-20, sweet-beak 09-02, dawn
  09-13), so the IG drip runs ahead of the site payoff again (same open cadence question as the
  Fence Line). Owner may want the cron slowed or the dates pulled in.

---

## Session — 2026-08-03 (standing content rules + The Fence Line, Ep 1: Cindy)

Owner set three standing rules and directed a new season around a real loss.

- **Standing rules (now in memory + repo):** (1) always include `#kisiafrica #runbychickens
  #taco` in captions (added to the reusable block, set now 17 tags); (2) every slide must be
  followable by a 6-year-old — clarity over cleverness, the owner could not tell what earlier
  slides were about; (3) alternate green and cream backgrounds *between* arcs. Built a
  `.t-times.green` variant in `post.css` and a `theme:"green"` switch in `generate-arcs.mjs`;
  existing arcs stay cream.
- **The Fence Line season (owner-directed):** a real hen, **Cindy**, was lost in a fight at
  the roost. Plotted a 7-episode courtroom-and-society season in story.md's writers' room,
  released scene by scene. Reason for the fight = dry-season heat + a crowded roost (a REAL
  welfare cause), so every arc routes to **Better Housing**. Villain = **Eseosa** (tried and
  exiled across later episodes). Death handled off-page with dignity, like Bantu.
- **Whole season built and queued (all 7 episodes).** Owner then said "queue everything," so
  Eps 1–7 are live in `timeline.ts` (one serial, `arcId: the-fence-line`, /republic/stories),
  `chickens.ts` (Cindy=memorial, **Eseosa**=exiled villain, **Barrister Silk**=flamboyant
  counsel), rendered to 27 slides, and staged into `manifest.json` in publish order:
  cindy → notagain → charge → defense → trial → judgement → law, with `arc-cabinet` trailing.
  Alternating green/cream between arcs (green: cindy/charge/trial/law; cream: notagain/defense/
  judgement). All slides audited by eye; all pass.
- **New status `exiled`.** Added to `ChickenStatus` (schemas.ts) → required an exhaustive
  `STATUS_LABELS` entry in `Badges.tsx` (bg-kisi-earth-700; the terra token is *earth* not
  *terra*) and an option in `FlockDirectory.tsx`. TS Record exhaustiveness catches the badge;
  the directory map is `Record<string,string>` so it does not, add it by hand.
- **Gotchas hit:** content tests enforce (a) symmetric friends AND rivals — kept Eseosa/Silk
  as loners (empty arrays) to avoid edits; Cindy's friends needed the reciprocal add to
  Rọ́nkẹ́/Sisi Ngozi/Sadé; (b) ARC_META per arcId (only one needed, the whole season shares
  `the-fence-line`, so arc count stays 9); (c) hardcoded counts (cast 23→**26**, arcs 8→9);
  (d) arc events must be date-ascending — dated the episodes 08-05…08-16. Synced the manifest
  from `origin/main` before staging so the bot's 6 "posted" statuses were not clobbered.
- **story.md is now a living tracker.** The writers' room has a **▶ RESUME HERE** marker with
  a season-status table and the exact next arc; the top-of-file "execute" instruction points
  to it, so pointing the terminal at story.md continues the story instead of resetting.
- **LEFT / to publish the season:** the scheduler runs off **main**; all of this is on
  `feature/kisi-poultry-republic`. For the season to post in order it must reach main **and**
  Vercel must redeploy so the staged `www.kisi.africa/s/ay0qME54UVBg/arc-*.png` URLs are live
  *before* the next cron (else main's current manifest posts arc-cabinet at ~Aug 4 06:00 UTC).
  Next story work: Season 2 (see RESUME HERE): "After the Fence Line" rebuild arc, CREAM
  (last queued arc-law is green).
- **Stories made prominent + expert audit workflow (new standing rule).** Renamed the
  "Entertainment" nav to **Farm Stories** (moved to slot 2, Big Stories first), added a mobile
  stories button and a /flock CTA banner, and gave the website Big Stories richer bodies than
  the slides. New owner rule ([[kisi-push-after-expert-audit]]): **push when changes are made,
  but a senior web-design/dev/brand subagent audits the diff first.** Ran it; verdict SHIP
  WITH FIXES; applied all: (1) **scene-by-scene reveal** — `revealedTimeline` in
  `lib/content.ts` hides any beat whose date is in the future, so the site unfolds with the IG
  drip and never shows a future date (build-time date; each deploy reveals what is due);
  (2) `/republic/stories` sorts **newest arc first**; (3) trimmed two fragment personality
  traits; (4) removed em-dashes from caption headers + timeline comments. Feature branch
  pushed (feature pushes work; only main ref-moves hang).
- **Open editorial call (cadence):** IG drips all 7 episodes over ~4 days (2/day), but the
  site reveals by in-story date through 08-16 (~12 days), so IG runs ahead of the site payoff.
  Options: re-date Ep2-7 to 08-04..08-07 to match the drip, or slow the IG cron. Owner to
  decide.

---

## Session — 2026-08-02 (scheduling: posts drain automatically every 12h)

- **`.github/workflows/ig-schedule.yml`** — a GitHub Actions cron that publishes the next
  queued arc every 12 hours (06:00 and 18:00 UTC; 06:00 = 2 AM Eastern in EDT), via
  `ig-publish.mjs --next --publish`, then commits the manifest back so it dedupes. Chosen
  over a local Windows task so posting does not depend on the PC being awake. `workflow_dispatch`
  posts on demand. Secrets `IG_PAGE_TOKEN` + `IG_BUSINESS_ACCOUNT_ID` are GitHub Actions repo
  secrets (`gh secret set`), separate from the local `.env`.
- **Validated live:** dispatched one run; it posted **The Drain** carousel to @kisi.africa
  (instagram.com/p/DbhuHKoGrVC/) and committed the manifest. Queue: chichi ✓, drain ✓, then
  mamagold, grain, rainfinal, flu, cabinet draining at each 12h slot (done by ~Aug 4).
- **Env quirk:** `git push` to origin hangs here. Moved the `main` ref with
  `gh api -X PATCH .../git/refs/heads/main -f sha=<sha>` and created the workflow via the
  Contents API. Feature pushes worked; only ref-moves to main were needed server-side.
- **Host:** canonical is **www.kisi.africa** (apex 308-redirects); manifest URLs and
  `NEXT_PUBLIC_SITE_URL` now use `www` so the IG image fetch does not hit a redirect.
- Going forward: story.md Stage 7 stages a new arc into the same queue; the 2 AM Eastern
  cron posts it, or dispatch/local `--publish` posts ad hoc. Switch cron to `0 6 * * *` for
  daily-only once backlogs are clear.

---

## Session — 2026-08-02 (Stage 7 wired: live Instagram publishing)

Owner supplied Meta credentials, so Stage 7 got built and validated against the live
@kisi.africa account.
- **`social/ig-publish.mjs`** — the publisher. Reads the staged `manifest.json`, builds
  single or carousel media containers via the Graph API, and publishes. **Dry-run by
  default**; `--publish` goes live; `--list` shows account + post history + manifest;
  `--only <name>` targets one post. Skips anything already `posted`; refuses empty captions.
  Run with `node --env-file=social/.env social/ig-publish.mjs ...`.
- **`social/.env`** — all IG secrets, **gitignored** (confirmed via `git check-ignore`).
  Scrubbed the app secret + tokens the owner had pasted into `IG_SETUP.md` (a tracked
  file); verified no secret material remains in any committable file.
- **`social/IG_SETUP.md`** — rewritten as the clean operating guide (no secrets).
- Validated: token authenticates as @kisi.africa; account already had 4 manually-posted
  items; a full stage → caption → dry-run of the Chi-Chi arc (5-slide carousel) printed the
  exact payload. Left `arc-chichi` staged in `site/public/s/<token>/` as the first
  ready-to-publish automated post.

### Lessons (Instagram Graph API)
- **No native scheduling.** `media_publish` posts immediately; timed posting means running
  the publisher on a cron / the `/schedule` skill at the target time. Rate limit ~25/24h.
- **Images must be public HTTPS URLs.** The staged PNGs must be committed + **deployed**
  before `--publish`, or Instagram 404s on the image fetch. Dry-run needs no deploy.
- Carousel = one child container per slide (wait for FINISHED) → parent CAROUSEL container →
  publish. Max 10 slides.

### Left open (Stage 7)
- To make the first automated post live: commit `site/public/s/**` + deploy, then
  `node --env-file=social/.env social/ig-publish.mjs --only arc-chichi --publish`.
- Optional: schedule a recurring publish via the `/schedule` skill.
- User-supplied credentials were pasted in chat once; owner may rotate the app secret if
  concerned.

---

## Session — 2026-08-01 (the content factory + IG automation)

### Owner set the Instagram handle
- **@kisi.africa** is confirmed. Written into `social/captions.md` header and the
  `docs/CONTENT_CHECKLIST.md` item closed.

### Built the "content factory": one command → drama → website → IG-ready images
Owner wants to point Claude at a file, run it, and have new character drama get written at
a professional level, audited, published to the site, turned into Instagram slides,
audited again, and staged to a public path for scheduling. Chose the **Direct Graph API**
route and **"decide the IG handoff later"** (build stages 1 to 6 now, wire scheduling
after the Meta token exists). Built:
- **`social/story.md`** — the executable runbook (point Claude at it, say "execute"). Seven
  stages: write → showrunner audit → publish to `timeline.ts`/`articles.ts`/`social.ts`/
  `chickens.ts` → generate slides via the existing `generate-arcs.mjs` + `render.ps1` →
  art-director audit → stage to public path → (deferred) schedule to IG. Includes a
  "writers' room" slate of open threads so cycles escalate.
- **`.claude/agents/kisi-showrunner.md`** — story-audit subagent (continuity, voice, drama,
  house style, funnel rule). Read-only, returns SHIP/REVISE/BLOCK + fix list.
- **`.claude/agents/kisi-art-director.md`** — image-audit subagent; reads the rendered PNGs
  and returns PASS/FAIL per slide (render, text fit, template, order, legibility, the sell).
- **`social/stage-to-public.mjs`** — copies approved PNGs into `site/public/s/<token>/`
  (unguessable web path, served by Vercel), groups carousels, writes `manifest.json` with
  live URLs + caption slots + status. Tested on 2 posts, works; test artifacts cleaned.
- **`social/IG_SETUP.md`** — the one-time Meta setup (Business account, linked Page, app,
  long-lived token) that turns on Stage 7. Owner must do this; token stays in env, never
  committed.

### Lessons
- **Instagram has no personal-account API.** Any automation (custom script, Postiz, Buffer)
  needs a Business/Creator account + linked Facebook Page + Meta app + long-lived token.
  That setup is the one gate Claude cannot cross for the owner.
- **Graph API cannot upload local files.** Images must sit at public HTTPS URLs, which is
  why staging into `site/public/` and deploying comes before scheduling.
- The image pipeline is data-driven: new arcs go in the `arcs` array of
  `generate-arcs.mjs` (mirroring `timeline.ts`), not hand-built HTML.

### Left open
- Owner to run `social/IG_SETUP.md` (5 steps) to get a token; then "wire up Stage 7" builds
  `social/ig-publish.mjs`.
- First real `execute` run of `social/story.md` to produce a new arc end to end.
- Website still leans on "Republic of Kisi" wordmark/routes (older open follow-up).

---

## Session — 2026-07-31 (continuation)

### Brand direction: one name, Taco logo, the sell funnel, numbering rule

Owner steer, saved to memory as [[kisi-brand-soap-opera]] and applied:
- **One name: Kisi Farm / kisi.africa.** Stop using "The Republic of Kisi" as a brand-name
  lockup; it stays the narrated premise. Social posts updated; the **website still leans on
  "Republic of Kisi"** (header wordmark, `/republic/` routes) and is the open follow-up.
- **Logo is Taco's headshot** (crest retired). Site header already uses it; removed the
  crest from the social kit.
- **The funnel:** entertainment sells eggs and donations. Homepage banner now has **Support
  the Chickens** beside Order Our Eggs; the stories page ends with an Order/Support block;
  every social arc finale routes to `/support` or `/shop`. Standing rule left in
  `social/README.md`.
- **Numbering is for multi-slide posts only** (arcs show "Part N of 5"); single posts carry
  no number.
- **Two priority appeals on `/support`:** Solar & Light and Better Housing, $25,000 goal
  each (owner-set). Shown as goals, never an invented "raised" figure.

### Made the site an installable PWA

Owner wants Kisi installable as an app. Done, dependency-free (the site builds with
Turbopack, and Serwist, the usual offline plugin, needs webpack, so no plugin):
- `app/manifest.ts` (Next serves it at `/manifest.webmanifest`): standalone, theme
  `#1f5130`, background `#faf5e9`, Taco-face icons (192, 512, and a green full-bleed
  512 maskable), plus app shortcuts to Order / Support / Flock.
- Icons generated from the Taco mark with the same headless-Chrome screenshot trick as
  the social cards (`public/icon-*.png`, `app/apple-icon.png` which Next auto-links).
- `public/sw.js`: a small service worker (network-first for navigations, cache-first for
  assets, `/offline` fallback). `next.config.ts` gives `/sw.js` a no-cache + correct
  content-type + `Service-Worker-Allowed: /` header. Registered via a tiny client
  component on `load`.
- `app/offline/page.tsx` styled inline so it reads even before the CSS is cached.
- Verified against `next start`: manifest JSON, sw headers, `/offline` 200, icons 200,
  and the injected `<link rel=manifest>` / theme-color / apple-touch-icon tags.

**Lesson: obey `site/AGENTS.md` and read the bundled Next docs first.** The PWA guide at
`node_modules/next/dist/docs/01-app/02-guides/progressive-web-apps.md` gave the exact
Next 16 conventions (`app/manifest.ts`, the sw.js headers), which differ from older
`next-pwa` habits.

### Story-arc carousels + first push of the day's work

- **Turned the 7 remaining written arcs into Coop Times slide carousels** (27 numbered
  slides) with `social/generate-arcs.mjs`, driven off the site's own `timeline.ts` so the
  posts never drift from canon. Node makes this easy now: a data array + a template
  function + `render.ps1`. Each arc's last slide routes to Support (funnel rule).
- **Fixed a name on card 07:** the byline read "Kọ́lá Quill"; canonical is "Kola Quill"
  (full name Kọ́lápọ̀, byline Kola Quill). Lesson: check card proper names against the
  content, not memory.
- **Pushed the day's 11 commits to `main`** (fast-forward from the Taco-logo commit),
  which is the Vercel production branch, so it deploys to kisi.africa. Method per
  [[kisi-domain-and-hosting]]: token inline in the push URL, `GIT_TERMINAL_PROMPT=0`,
  `sed` the token out of logs. **The PAT in the project instructions still needs rotating.**

### Content audit: stray punctuation from the em-dash sweep

The owner spotted a stray comma before the President's name in her homepage quote. Root
cause: the earlier bulk em-dash removal left orphaned punctuation. Found and fixed the
same class site-wide: a leading `, ` on the sports gatepost sentence, and en-dashes in the
map ("east–west") and the sports score separator. **Lesson: after any bulk punctuation
sweep, grep for `^\s*[,.]` and stray ` ,` / en-dashes to catch the orphans it leaves.**
Shipped code (app/components/content/lib) is now free of em/en dashes.

### Recovered a frozen parallel session without its transcript

A second Claude Code terminal froze mid-task. You cannot read another session's
conversation, but the **filesystem and process list tell the story**: two `claude`
PIDs (one two days old with 87 min CPU = the frozen one), **no `node` process** (so it
was not mid-build), no stale `.git/index.lock`, and file mtimes showing its last writes
clustered at 3:46 to 3:51 pm. It had written The Nesting Box Election arc + a dynamic
OG share card, then stalled before committing. After the owner killed it, I verified the
referenced ids resolve and committed its work as two clean units.

- **Lesson: to find where a stalled agent stopped, read mtimes, not tea leaves.**
  `Get-Process`, the last-modified file list, and `git status` reconstruct the state
  precisely.

### Node is installed now — gates run locally for the first time

Owner installed Node (`v24.18.1`, npm 11.16.0). Every gate now runs from `site/`:
`tsc --noEmit` (0), `eslint .` (0 errors, 2 old warnings), `vitest run` (31/31),
`next build` (0). Memory [[farm-node-not-installed]] updated to say so.

- **Stale `.next` breaks the typecheck.** `.next/types/validator.ts` is regenerated per
  build and still referenced the removed `agric-city`/`disclaimer` routes, so `tsc`
  failed with TS2307. Fix: `rm -rf site/.next`, re-run. Not a source error.
- **The build fetches Inter from `fonts.gstatic.com` at build time** (`next/font/google`
  in `app/layout.tsx`). On a flaky connection it fails intermittently ("Error while
  requesting resource"), a different count of failed weights each run; retrying clears
  it, and Vercel's network is fine. Durable fix if it ever bites: self-host via
  `next/font/local` so the build never touches the network.
- The Bash tool does not inherit Node on PATH; prefix `export PATH="/c/Program Files/nodejs:$PATH"`.

### Built the Instagram post kit in `social/`

12 branded 1080x1080 posts (Welcome/Taco, Meet the Leaders, The Nesting Box Election),
leader copy pulled straight from the real character content so nothing is invented.

- **Rendering images with no Node: screenshot HTML with headless Chrome.** Windows ships
  Chrome/Edge; `chrome --headless=new --window-size=1080,1080 --force-device-scale-factor=1
  --allow-file-access-from-files --screenshot=out.png file:///post.html` gives an exact
  1080x1080 PNG. The `--allow-file-access-from-files` flag is what lets a `file://` page
  load `../assets/crest.svg` and the shared CSS. `social/render.ps1` re-runs the batch.
- One design system (`social/assets/post.css`) with three themes (green state / eggshell
  portrait / Coop Times newspaper) keeps the set coherent and easy to extend.

---

## Session — 2026-07-31

### The site is live on Vercel, and `main` is finally the real site

The owner set up Vercel (Root Directory = `site`) and got a deploy, but it showed
the **old** design. Cause: GitHub had a stale `main` (stopped at the Vercel-migration
commit) plus our real work on `feature/kisi-poultry-republic`, and **Vercel deploys
`main` to production by default**. Fix, at the owner's choice: fast-forward `main` to
the feature tip (they were identical apart from the 10 brand-pivot commits) and push.

- **First real build-verification of the brand pivot.** Pushing to `main` triggered
  the GitHub Actions CI, which passed (lint + typecheck + tests + build). Until now the
  pivot branch had never been built (no local Node). The live Vercel deploy then showed
  the new design. **`main` = the live site from here on.**
- **Pushing over HTTPS hangs on a credential prompt** in this non-interactive shell.
  Working method: read the PAT out of the git-ignored `CLAUDE.md` and push with the
  token in the URL, `GIT_TERMINAL_PROMPT=0`, and `sed` the token out of the logs. The
  token still needs rotating.

### Standing rule: NO AI-writing signposts (em-dashes, etc.)

Owner rule going forward, saved to memory as [[no-ai-writing-signposts]]: keep all copy
free of em-dashes and other LLM tells. Applies to site copy, docs, commit messages, and
chat replies.

- **Swept every em-dash out of the shipped code** (`content`, `app`, `components`,
  `lib`): 319 of them. Method that worked: hand-fix the JSX attribution and
  cross-string-segment dashes first (a blind comma-swap misreads `— {q.context}` and
  boundary dashes), then a UTF-8-safe bulk pass, `perl -CSD -i -pe 's/ \x{2014} /, /g'`,
  for the clean spaced dashes, then re-grep for end-of-line stragglers. Result reads
  naturally (appositive dashes become commas: "Chidinma, Chi-Chi to the entire
  Republic, came to Kisi"). Dev files (`.env.example`, `next.config.ts`, `AGENTS.md`)
  cleaned too. Left alone: the stale `e2e/smoke.spec.ts` regex and two internal test
  comments.
- **Gotcha:** `grep $'—'` does NOT expand in this Git Bash, so it falsely reports
  zero em-dashes. Use the literal character (the Grep/ripgrep tool) or `perl \x{2014}`.
  Also, `grep -r <pattern> .` walks `node_modules` and times out; use the ripgrep-based
  Grep tool, which respects `.gitignore`.

### Real egg-census figures, and the two tribes

Owner supplied real data and a new world-building concept, both now integrated:

- **Egg census is now real:** June 2026 = 3,500, July 2026 = 5,120 (a clear growth
  story). Replaced the earlier invented small numbers (262/278/291) and dropped
  April/May, for which we have no real data. Totals now render with thousands
  separators (`toLocaleString("en-NG")`) on the home, economy, and eggs pages.
- **Two tribes: Isa-Brown and Noiler** (both real breeds Kisi raises). Added a `Tribe`
  enum to the schema and a required `tribe` field on all 17 citizens (8 Isa-Brown,
  9 Noiler). New `content/tribes.ts` holds the two lines' metadata; `TribeBadge` shows
  on every card and profile; the flock directory gained a tribe filter; `/flock#tribes`
  explains them; profiles link to it. **Design choice: tribe is heritage, not party**,
  deliberately cutting across the political parties (President is Isa-Brown, her
  crate-sister the Opposition Leader is Noiler) so the story is unity, not division.
  Isa-Brown = the layers and egg-economy backbone; Noiler = the hardy guards/athletes.
- **Gotcha (again):** adding a required schema field means every one of the 17 records
  must set it or the build fails. Verified all 17 by grep before pushing since `tsc`
  can't run here.

### Real flock census, and the mascot Taco

Owner supplied the real flock composition and named the mascot:

- **Flock census (real farm fact):** Isa-Brown 350 (200 active layers); Noiler 300
  (270 cockerels, 30 hens); 650 birds total. Added a `flock` field to each tribe in
  `content/tribes.ts` and surfaced it on the `/flock` tribes explainer (population +
  breakdown, plus "N profiled" so it is clear the named characters are a subset).
  Also filled the previously-placeholder `flock-size` and `breeds` FarmStats with the
  real values and a source, so the About page shows them. **Two distinct censuses:**
  the National Egg Census is monthly egg output (3,500 / 5,120); this is the flock
  headcount. Don't conflate them.
- **Mascot: Taco.** Rebuilt the placeholder `/mascot` page into a full profile:
  `content/farm.ts` `mascot` object (name, title, tagline, facts, intro, bio, duties,
  quote), a new original `MascotPortrait` SVG with the signature orange comb and a
  gold national-figure star, and the map hotspot label changed from "coming soon" to
  "Meet Taco". Framed as belonging to no tribe, so both claim them (a small unity beat).
- **Pronouns:** the owner wrote both "him" and "her" for Taco, so I used **they/them**
  and asserted no sex. Flagged for the owner to lock he or she if they want.
- **Open, owner floated it:** more leaders / building the Republic out further.
  Proposed but not built this pass, awaiting direction on which roles to add.

### Taco corrected, and the cabinet filled out

Owner follow-ups, all shipped:

- **Taco is she/her**, and every "orange comb" reference is gone (the owner did not want
  a real-world read). Scrubbed the tagline, the "signature" fact, the bio, the page
  metadata, and the map hotspot; recoloured the MascotPortrait comb from orange to the
  normal red, beak and legs to gold. New tagline: "No office, all heart. Taco greets you
  first."
- **Filled all six vacant ministries** with six new ministers (4 Noiler, 2 Isa-Brown,
  which answers "add Noiler leaders"): Musa the Grainkeeper (Feed), Emeka the Drain
  Marshal (Water), Amina Daybreak (Energy & Solar), Sadé the Griot (Culture), Tadé the
  Foraging Master (Youth), Rọ́nkẹ́ Mama Owambe (Social). The cabinet has no empty seats
  now. Named flock is 23 citizens (10 Isa-Brown, 13 Noiler).
- **New story arc "A Full Cabinet"** (5 timeline events) ties the appointments together,
  with the Opposition auditing every budget. Registered in ARC_META and the arc-count
  test bumped 6 to 7.
- **Discipline that avoided a build break:** new minister friendships were kept symmetric
  *within the new group only* (musa↔emeka, amina↔sadé, tadé↔rọ́nkẹ́), so no existing
  character's `friends` array had to change. The build-time symmetric-friendship assert
  is the easiest way to break the build when adding characters. IDs stay ASCII
  (`sade-griot`) while display names carry diacritics (Sadé).
- **Adding characters breaks the hardcoded count test.** `content.test.ts` asserts
  `chickens` has an exact length; bumped 17 to 23. CI caught it (typecheck passed, unit
  test failed), which is the system working as intended.
- **Logo swap (temporary):** at the owner's request the header/footer logo and the
  favicon now use **Taco's face** (`TacoMark` in `Logo.tsx` plus `app/icon.svg`), to
  push the mascot out front. The crest is retained as `LogoMark` and still carries the
  national flag seal, so reverting is a one-line change.

### Verification status

**No local gates (Node still not installed), so GitHub Actions CI is the real gate now
that `main` auto-builds.** First push of this work (`1f8a371`) **failed typecheck**: the
new `getTribe` helper built a `Map` whose key type inferred to the `Tribe` literal union
(because `tribes[].id` is `Tribe`), so `.get(id: string)` was rejected (TS2345). Fixed in
`44d83a6` by pinning the map key to `string`; CI then passed all four steps (lint,
typecheck, unit tests, build).

**Process lesson:** read the actual CI *step* conclusions, not a glance at the job, before
calling anything verified. I misread the step order once and wrongly reported typecheck as
passing when it was the failing step. When a build fails, Vercel keeps the last good deploy
serving, so the live site never broke.

---

## Session — 2026-07-29

### CRITICAL trademark constraint (carry forward forever)

**The exact phrase "Chicken Republic" is a registered trademark in Nigeria** (a
fast-food chain). It must **never** appear anywhere — copy, metadata, alt text,
headings, marketing, code comments a reader could see. Our world is *"The Republic
of Kisi"* / *"Kisi"* / *"a farm run by its chickens."* Grep `-i "chicken republic"`
before every commit.

### The framing lands its final form: the Republic is REAL

The owner sharpened the earlier "stop labeling as fictional" shift into a clear rule:

> "The website should have no mention of fictional. Treat the republic as real — the
> farm where the chickens run it. State it point-blank: this is a farm run by
> chickens, it is our republic, so expect everything to be clucking eggxellent and
> everyone in good health and perfect condition."

So **no visitor-facing "fictional," "satire," "sample," or "demo" anywhere.** We
still present as a **farm business** — selling services and products (egg sales,
hatchery). The chicken world is the hook; the sale is the goal.

- **Priority:** sell products/services first; engagement/brand-building second.
- **The chickens' "economy" = egg production + hatchery.** That's how we frame the
  commercial pages inside the world.
- **Menu reorganized in-world:** Meet the Chickens · Politics · Economy · Sports ·
  Entertainment · Media, plus the real-farm Visit/About info.
- Keep "Meet the Chickens" — the owner likes it; it just needed reframing toward the
  sales priority and the returnable-brand goal.
- **Money/safety carve-out still holds:** Shop and Support pages still say plainly
  what a payment buys and that sponsorship isn't ownership. Immersive everywhere,
  straight-talking at the till.
- **Judgment call flagged for owner:** the invisible `SatiricalArticle` JSON-LD on
  news articles was kept (it's a machine-only legal/SEO safety net a reader never
  sees) but its human-readable label string had "(fictional storytelling world)"
  removed. Owner can tell us to drop the type entirely if preferred.

### Logo direction

Owner: current egg-and-leaf mark is underwhelming; wants an **iconic** logo that
speaks to agriculture *broadly* (animal, crops, agric engineering), taking cues from
top agtech brands (Netherlands: Lely, Koppert, Connecterra, Hendrix Genetics; global:
John Deere, Pioneer, Corteva, Bayer).

**Lesson from that research:** the strongest agri brands are built on **one iconic,
meaningful symbol**, not literal clip-art — John Deere's leaping deer, Pioneer's sun,
Bayer's cross-in-circle. Kisi's mark should do the same: a single confident emblem
that marries the chicken hero + broad-agriculture symbolism + the "Republic" (seal)
identity, in the brand greens/gold.

### Done this session

- **New logo.** `components/Logo.tsx` (`<Logo>` + `<LogoMark>`) — an original
  emblem: a green cog/sunburst seal (engineering + energy), crossed wheat (crops),
  and a golden egg wearing a comb (poultry + economy). Wired into Header and Footer,
  replacing the old egg-and-leaf placeholder; added `app/icon.svg` as the favicon.
  Presented three directions to the owner in an artifact (A the crest = live,
  B the cockerel, C the sunrise) — awaiting the owner's pick.
- **Reframe: the Republic is real.** Removed every visitor-facing "fictional /
  entirely fictional / satire / sample data" line — home hero + dashboard, footer,
  `/republic`, assembly parties lede, the Poll label, about, the farm-map intro and
  the map `WORLD_LABEL` badges ("The working farm" / "Republic life" instead of
  "farm fact" / "Republic fiction"), and the globals.css colour-role comment. Kept
  the invisible `SatiricalArticle` JSON-LD (label string de-fictionalised).
- **Menu reorganised in-world:** Meet the Chickens · Politics · Economy · Sports ·
  Entertainment · Media · The Farm. Economy groups the Egg Shop, Egg Production and
  Back the Farm; the primary header/hero CTA is now **Order Eggs** → `/shop`.
- **Memory + LESSONS** updated with the trademark ban and the real-not-fictional
  framing.
- **New Economy hub (`/economy`).** The commercial spine, framed in-world as the
  nation's economy: egg sales lead, the hatchery is presented honestly ("opens as
  the flock grows", enquiries → contact). Pulls real content — latest egg census +
  recent months as accessible `<table>` bars, recent milestones via `MilestoneCard`,
  and the "economic cabinet" (egg-affairs / feed-agriculture / youth-chick). Wired
  into the Economy menu (+ a `#hatchery` anchor) and the sitemap. *Field-name gotcha:
  `EggMilestone` has `story`/`type`/`count` (no `label`/`summary`); `Ministry` has
  `motto`/`responsibilities` (no `mandate`) — verify against `lib/schemas.ts` before
  referencing fields, since tsc can't run here.*
- **Committed** in five logical commits (826731f logo · 747f245 nav · 6c90f7f voice ·
  8c80ee1 docs · 7ab020b economy). Owner picked logo **Direction A (the crest)**,
  already live.
- **Republic flag + hub wiring.** `components/RepublicFlag.tsx` — the crest as the
  national seal on three national-colour bands (green/gold/indigo), responsive 3:2;
  flown on the `/republic` hero. `LogoMark` gained a `className` prop so the seal
  scales inside it. Added an **Economy** door to the Republic hub and repointed the
  home page's closing section at `/economy` + the shop.
- **Interior-voice review (owner task 3):** read the presidency, government and sports
  pages — they already read confidently in-world; the "annex" feel was the *fictional*
  tagging, now removed. So no forced rewrites; effort went to wiring the hub/economy
  and the flag instead. Older pages worth a future copy pass if desired: none urgent.

### Deploy / visibility state (owner asked "where can I see it?")

- **Nothing today is live anywhere.** The branch `feature/kisi-poultry-republic` has
  **no upstream** — all commits are local, not on GitHub (`origin` =
  github.com/VictorKilanko/kisi.git).
- **`victorkilanko.com/kisi` is stale.** It was the old GitHub Pages address; since
  `output: "export"` was removed for the Vercel server build, Pages can no longer be
  produced and (per the 2026-07-18 note) sits frozen at its last static deploy — old
  logo, old "fictional" copy, no Economy hub.
- **To see the current work:** install Node 20+ and `npm run dev` locally, **or** push
  the branch and open a Vercel preview (setup guide already committed). Installing Node
  also unblocks the unrun gates. Nothing has been built or verified this session.

### Verification status — IMPORTANT

**No gates were run — Node.js is still not installed on this machine** (see the
standing lesson). All edits are string/JSX-level and were made with the Edit tool;
a grep sweep confirms no visitor-facing "fictional"/"satire" text remains (only the
intended machine-only JSON-LD, dev comments, and a test name) and no "chicken
republic" anywhere but the LESSONS ban itself. Treat the branch as **unverified**
until `npm run lint && npm run typecheck && npm test && npm run build` pass. Nothing
was committed this session.

---

## Session — 2026-07-18

### The big directional shift: stop labeling the world

Mid-session the owner reframed the whole project:

> "We are building this world — no need to say fictional; people know already.
> It is like tagging a WWE website and event as fake fighting every time. People
> know, but don't spoil the fun."

The goal is an **animated-series-style world** people want to live in and follow
across YouTube and social media — not a farm brochure with a satire annex. So the
fact/fiction badging, the per-page disclaimers, and the "sample content" labels all
came out. The site now speaks from inside the Republic.

**The one carve-out kept:** plain language about money on the Shop and Support pages
(what a payment buys, that sponsorship isn't ownership, that we never take card
details on-site). That's how real entertainment properties handle merch and
memberships — immersive everywhere, straight-talking at the till. `SatiricalArticle`
JSON-LD also stays on news articles: it's invisible to readers and only helps search
engines classify the stories correctly.

### Owner direction received this session

1. **Remove all Kisi Agric City content.** Do not announce a 3-year plan publicly —
   competitors could take the idea. No page, no nav entry, no teaser copy.
2. **Stop labeling content as "sample" / "demo".** The Republic and its citizens are
   the site's real content. Present them as such.
3. **New story arc:** a monitor lizard has been attacking citizens. It is treated as a
   terrorist. Put a **bounty** on it and a **Most Wanted poster** (with its picture)
   in several places on the site.
4. **Bantu was killed by the lizard.** Add a memorial and invite visitors to send
   well-wishes.
5. **Add a Shop page** to the main menu so people can order eggs.
6. **Add more citizens and leaders**, including **Minister of Security Pete Okpara**.
7. **Keep the site simple** — a 5th grader should be able to read and navigate it.

### Lessons learned (technical)

- **Node.js is not installed / not on PATH on this machine.** `node`, `npm`, `npx` all
  resolve to nothing in both PowerShell and Git Bash, and no install was found under
  `Program Files`, `LOCALAPPDATA`, `APPDATA`, nvm, fnm, volta, or scoop. `site/node_modules`
  exists from an earlier environment. **Consequence: lint, typecheck, tests, and the
  production build could NOT be run this session.** Nothing should be described as
  "verified working" until Node is available and the gates are green.
  → *Action for owner: install Node 20+ (https://nodejs.org) so `npm run build` works.*
- **Do not pass single key/value pairs into a PowerShell `foreach` as a nested array.**
  PowerShell flattens a one-element array of pairs, so `$p[0]` becomes a single
  *character* instead of the pattern. This silently corrupted three files
  (`app/globals.css`, `components/map/Map2D.tsx`, `components/ChickenPortrait.tsx`) by
  regex-replacing character-by-character. Recovered with `git checkout -- <files>`.
  → *Rule: for one-off string edits use the Edit tool, not a scripted loop. Reserve
  scripts for genuinely repetitive, verified-uniform patterns, and re-grep after.*
- **PowerShell `Get-ChildItem -Name` returns paths relative to each `-Path` root**, so
  joining them back onto a single root loses the subdirectory. Use `-ExpandProperty FullName`.
- **Next.js App Router paths with bracket segments** (`app/flock/[slug]/page.tsx`) are
  treated as wildcards by PowerShell. Always use `-LiteralPath` for these.
- `site/AGENTS.md` warns that this Next.js version (16.2.10) has breaking changes vs.
  training data. Consult `site/node_modules/next/dist/docs/` before writing new routing
  or data-fetching code.

### Done this session

**Commit `892f351` — removed the labeling layer and Agric City**

- Deleted the `app/agric-city/` and `app/disclaimer/` routes entirely.
- Removed `AgricCityStatus` / `AgricCityProjectSchema`, the `agricCityProjects`
  content and export, `ProjectStatusBadge`, and the `agric-city-zone` map hotspot.
- Removed the `isDemo` flag from every schema and record; deleted `DemoBadge`,
  `DemoContentNotice`, `WorldBadge`, and `FictionDisclaimer` plus all usages
  (~25 pages), and every in-story `DISCLAIMER:` paragraph.
- Made `Chicken.breed` optional rather than rendering a placeholder string.

**Commit `8479f4f` — the monitor lizard arc and the Shop**

- **Five new citizens** (17 total): Pete Okpara (Minister of Security), Bantu
  (memorial, not sponsorable), Sergeant Danladi, Sisi Ngozi, Small Femi.
- Ministry of Coop Security became the **Ministry of Security** under Okpara, with
  the Bantu Protocol (nightly roll call by name) and the bounty as live projects.
- `content/wanted.ts`, `MonitorLizard.tsx` (original procedural SVG — no photograph
  needed), and `WantedPoster.tsx`, shown on the home page, the memorial, and a
  dedicated `/most-wanted`.
- `/bantu` memorial with a well-wishes form backed by `/api/wellwishes`.
- `/shop` egg-order enquiries backed by `/api/orders`. Both endpoints reuse the
  existing rate-limit + honeypot pattern, persist nothing yet, and say so.
- Two Coop Times reports and a five-event `the-drain` story arc.
- Navigation simplified to plainer words; Shop and Most Wanted surfaced.

### Verification status — IMPORTANT

**No gates were run. Node.js is not installed on this machine** (see the lesson
above). As partial substitutes only, these were checked by hand:

- a Python brace/bracket balance pass over every edited file — all balanced. Two
  files flag identically on the *committed baseline*, so those are checker false
  positives, not damage.
- a Python pass confirming all 17 citizens' friendships resolve and are symmetric —
  this is the exact constraint `lib/content.ts` asserts at build time.
- a grep sweep confirming no dangling references remain to the removed
  `agric-city` / `disclaimer` routes or the removed badge components.

**None of this substitutes for `npm run lint && npm run typecheck && npm test &&
npm run build`.** Treat the branch as unverified until those pass.

### Hosting decision (2026-07-18)

The owner chose **GitHub Pages**, not Vercel, served at **victorkilanko.com/kisi**.

This works because `victorkilanko.com` is *already* a GitHub Pages site (confirmed by
the `X-GitHub-Request-Id` header on its responses) attached to the
`victorkilanko.github.io` repo. A **project repo** with Pages enabled automatically
serves under that custom domain at `/<repo-name>` — the owner already runs
`/Ini`, `/joseph`, and `/solacecare` this way.

**The cost of that choice:** GitHub Pages is static-only. All five route handlers
(`app/api/*`) had to be deleted, because `output: "export"` fails the build if any
exist. In practice nothing was lost — none of them were connected to a store or
inbox, so they validated input and threw it away. The same honest behaviour now
runs client-side, and each form says plainly that it isn't collecting yet.

**Gotchas worth remembering:**

- `basePath: "/kisi"` is required, and it only auto-prefixes Next `<Link>` — a raw
  `<a href>` needs the prefix written by hand. Prefer `<Link>`.
- GitHub Pages runs Jekyll by default, which **silently drops directories starting
  with an underscore** — including Next's `_next/`, i.e. every stylesheet and script.
  The build must `touch out/.nojekyll` or the site deploys looking completely broken.
- A **classic PAT cannot push `.github/workflows/*` without the `workflow` scope**,
  and fine-grained tokens need explicit Pages permission to enable Pages via API.
  Both steps were left for the owner to do through the web UI.

### Vercel migration — Phase 1 done (2026-07-18, later the same day)

The owner moved the project's ambition up a level: Kisi stays a working poultry farm,
but the Republic becomes an entertainment brand around it with the **chickens as
influencers**. Hosting moved back to Vercel to get a server. See `docs/PLAN.md` —
that file is now the living guide and should be read first every session.

**CI passed on the first attempt** — lint, typecheck, tests and the full server build.

Lessons from this pass:

- **A "success" message for an undelivered order is a lie that costs a sale.** The
  mail layer therefore returns 503 when unconfigured and the Shop routes the customer
  to the contact page. Contrast with the Bantu memorial, where a delivery failure
  still thanks the visitor — you do not show a grieving person an error screen. Same
  infrastructure, deliberately different failure behaviour.
- **The rate limiter fails *open*.** A Redis outage must not close the egg shop.
  Blocking real customers is worse than briefly tolerating abuse.
- **My Python brace-balance checker is unreliable on any file containing a URL.** It
  strips `//` as a line comment *before* stripping strings, so `https://...` inside a
  string truncates the line and unbalances everything after it. That produced three
  false failures. Do not trust it as a substitute for a compiler — it flagged
  `lib/mail.ts`, `app/layout.tsx` and `tests/api.test.ts`, all of which were fine.
- **Removing static export breaks the Pages deploy immediately.** The live site stays
  up at its last successful deploy, but stops updating. Expected, and worth saying out
  loud rather than letting the owner discover it.
- `/execute` (`.claude/commands/execute.md`) now reads `docs/PLAN.md`, `LESSONS.md`
  and `git status`, then resumes work. Keep the plan's status markers current — a
  stale plan makes the next session start blind.

### Still to do

- [ ] **Install Node 20+ and run the gates.** Everything below is downstream of this.
- [ ] Update `docs/SITEMAP.md`, `docs/CONTENT_MODEL.md`, and `docs/PROGRESS.md` for
      the new routes, the removed Agric City, and the dropped `isDemo` field.
- [ ] Reading-level pass over the older page copy — the new pages aim at ~5th grade,
      but the earlier Republic pages are still written for adults.
- [ ] Persist well-wishes and egg orders once a store or mail provider is chosen; a
      moderated public message wall for Bantu is the obvious follow-up.
- [ ] Social/YouTube pipeline: the `arcId` serials are the natural source for episode
      scripts — worth designing an export for.

### Open questions for the owner

- **Egg pricing, crate sizes, and delivery areas** — the Shop takes an enquiry and
  promises a quote, because there are no real prices to publish yet.
- **Where should egg orders and well-wishes actually go?** No inbox or store is
  connected, so both endpoints validate and then discard. The UI says so plainly,
  but neither is usable in production until this is answered.
- **Bantu's real details** — hatch/arrival date, personality, and a photograph, so
  the memorial reflects the real bird as well as the written character.
- Real farm figures (flock size, production, breeds) remain unsupplied. Genuine farm
  facts still use honest "awaiting records" wording rather than invented numbers —
  deliberate, and distinct from the storytelling content.

---

## Standing lessons (carry forward every session)

- **NEVER use the exact phrase "Chicken Republic"** — it is trademarked in Nigeria.
  Grep `-i "chicken republic"` before every commit.
- **The Republic is REAL: a farm run by its chickens.** No visitor-facing
  "fictional," "satire," "sample," or "demo" — anywhere. State the premise
  point-blank and stay inside it.
- **Sell first, entertain second.** It's a farm business; the chicken world is the
  hook. The chickens' economy = egg production + hatchery. Keep commercial paths
  (Shop / Economy / Support) prominent.
- **Except where money or safety is involved.** Shop and Support pages say plainly
  what a payment buys, that sponsorship is not ownership, and that we never take card
  details on-site. Immersive everywhere; straight-talking at the till.
- Never fabricate a real-world farm fact (certifications, production numbers,
  veterinary outcomes, partnerships). Storytelling about the Republic is the point;
  invented *farm* facts are not — those still use honest "awaiting records" wording.
- Never claim gates passed without running them. If Node is missing, say so.
- Work on `feature/kisi-poultry-republic`, never directly on `main`.
- Never write the private local path (`C:\Users\victo\...`) into any committed file.
- Never commit secrets or `.env` files.
- Re-read `CLAUDE.md` and `docs/PROGRESS.md` at the start of each session.
