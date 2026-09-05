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
   the slide wordmark reads **"Kisi"** (kisi.africa is the entertainment universe now, see
   the brand split below), **Dede's** headshot (he/him) as the logo mark, **no em-dashes or
   other AI-writing tells**, warmth and dignity, no cruelty or death for shock, and the
   **funnel rule** (every arc ends on a sell, now pointing to **Kisi Farm**).

## The brand split (read this, it shapes every story)

Kisi is now three sites sharing **one canon** (`packages/canon`):

- **Kisi Africa** (`kisi.africa`) — the entertainment universe: the chicken characters, the
  Republic, the stories. **This is the home of everything you write here.** The IG account
  `@kisi.africa` is this brand. No shop on it; it is pure story.
- **Kisi Farm** (`farm.kisi.africa`) — the real business (eggs, day-old chicks, sponsorship).
  **This is where every sell now points.** Order eggs at `farm.kisi.africa/eggs`; back the
  flock at `farm.kisi.africa/support`.
- **Kisi Kids** (`kids.kisi.africa`) — the kids channel (softer, educational).

**You author the stories and characters into the shared canon, for Kisi Africa.** Because the
canon is shared, **Kisi Kids and Kisi Farm can tap into the same characters and events**:
Kids can retell a beat gently for children, and the Farm can use a hen's name and story to
market the real eggs she lays. Write every character so it works for all three: a real
personality with a Kisi-Africa story, a farm role, and nothing that could not be softened for
a child. The mascot is **Dede** (he/him). The three standing hashtags include **`#dede`**.
2. Confirm the toolchain: `node -v` (needs Node; prefix PATH if the memory note says so)
   and that Chrome or Edge is present for `render.ps1`.
3. Work on branch `feature/kisi-poultry-republic`. Commit in small logical units.

If the human gave a brief ("do a sports scandal", "retire a minister", "the lizard is
back"), use it. If they just said "execute", go to **The writers' room** at the bottom of
this file and start at the **▶ RESUME HERE** marker — it always names the current season
status and the exact next arc to build, so the story continues instead of resetting. Update
that marker at the end of every cycle (mark the arc built/queued, set the next one).

---

## Stage 1 — WRITE (the writers' room)

Write like a top screenwriter breaking a story, not like a bot filling a template.

1. **Choose the shape.** Decide the piece: a multi-slide **arc** (the main unit, 2 to 5
   beats), a **cast intro** (a single new face), or a **Coop Times** news beat (a single
   reported item between arcs). Most cycles produce one arc.
2. **Cast from the bible.** Open `packages/canon/src/data/chickens.ts` and cast real characters. Keep
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
4. **Land the sell (funnel rule).** The final beat routes to **Kisi Farm**:
   `farm.kisi.africa/eggs` (order eggs) or `farm.kisi.africa/support` (back the flock). If the
   arc touches light, power, coops, or housing, name the **Solar & Light** or **Better
   Housing** campaign (name the campaign, not a dollar figure, the owner set none yet). Cast
   intros route to meeting the flock on kisi.africa. The slide generator's footer already
   points at Kisi Farm (`SELL_FOOT` in `generate-arcs.mjs`); keep caption sells consistent.

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

- **Arcs** → `packages/canon/src/data/timeline.ts` → renders at **/republic/stories** (the "Big
  Stories"). **Give these more juice than the slides.** The website bodies are decoupled from
  the Instagram slide copy on purpose: write each beat as a richer, warmer, 3 to 6 sentence
  passage in conversational English with real flow, while the slides stay tight. Still clear
  enough for a 6-year-old, just fuller. The Fence Line arc is the reference for length and
  voice. The nav item for these is **Farm Stories** (top-level), and /flock links straight
  in, so this page carries real traffic; make it worth the click.
- **Social beats, friendships, events** → `packages/canon/src/data/social.ts` → **/republic/social**.
- **Reported news, gossip, quotes** → `packages/canon/src/data/articles.ts` → **/news** (and
  `/news/[slug]`).
- **New or changed characters** → `packages/canon/src/data/chickens.ts` → **/flock** and
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
   **Hard limit: the caption Instagram actually posts (story text + the ~232-char hashtag
   block) must be under 2,200 characters, or the Graph API rejects it and the post silently
   never goes out.** `ig-publish.mjs` posts the caption verbatim, no truncation. So keep the
   story text at roughly **1,900 chars or less** (arc-truecount = 1,954 story / 2,188 total is
   the reference). After filling the manifest caption, assert its length is < 2,200. This
   caught nothing for months because the recent long-form captions (kept 2,876, reason 2,907)
   were staged but never reached the cron; they were trimmed on 2026-09-05.

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
   copies the approved PNGs into `apps/africa/public/s/<token>/`, groups multi-slide arcs into one
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

- **SEASON 1: "The Fence Line" — BUILT AND QUEUED (all 7 episodes).** A real hen, **Cindy**,
  was lost on the farm in a fight: the Republic's first death *from inside the flock*, told
  as a courtroom-and-society season. Ground rules the owner set: honor the real bird (Cindy,
  personable/fashionable/easy-going/dutiful, memorialized in chickens.ts); dignified loss
  handled off-page like Bantu, satire in the aftermath; every slide followable by a
  6-year-old. **Reason for the fight:** dry-season heat + a crowded roost turned the pecking
  order fatal over the prime perch — a REAL welfare cause, so every episode routes to
  **Better Housing ($25,000)**. Villain **Eseosa** (dominant hen) is tried and exiled;
  **Barrister Silk** is her flamboyant counsel. All content is live in `timeline.ts`
  (one serial, `arcId: the-fence-line`, /republic/stories), `chickens.ts` (Cindy=memorial,
  Eseosa=exiled, Barrister Silk=active), rendered to slides, and staged into `manifest.json`
  in publish order. **Publish queue (each 12h cron slot):**

  | # | Episode | Slug | Field | Slides | Status |
  |---|---------|------|-------|--------|--------|
  | 1 | The Loss / Goodnight, Cindy | `arc-cindy` | green | 5 | queued (posts next) |
  | 2 | Not Again (Okpara names Eseosa) | `arc-notagain` | cream | 4 | queued |
  | 3 | The Charge (full trial ordered) | `arc-charge` | green | 3 | queued |
  | 4 | The Defence Team (Barrister Silk) | `arc-defense` | cream | 4 | queued |
  | 5 | The Trial ("I am sorry") | `arc-trial` | green | 5 | queued |
  | 6 | The Judgement (exile) | `arc-judgement` | cream | 4 | queued |
  | 7 | Cindy's Law (finale, Better Housing) | `arc-law` | green | 3 | queued |

  (`arc-cabinet`, a leftover comedy arc, trails after the season as a tonal reset.)

- **SEASON 2 opens: "After the Fence Line" — the rebuild — BUILT AND QUEUED (Ep 1).** The
  hopeful follow-up to the Fence Line. Coop Three is torn down and raised again to Cindy's
  Law with the **Better Housing** money at work: fewer birds, more room, many perches (so no
  bird fights for the cool one), wide vents, a shade wing, a clean-draining floor. Emeka marks
  the footprint, Dr. Featherwell measures the spacing, Amina Daybreak cuts the vents/shade,
  Okpara reads the roll and it comes back whole, the President unveils a "Built to Cindy's Law"
  plaque and names the honest catch: one coop is done, the flock has many. Routes hard to
  Better Housing. Showrunner SHIP (light revise applied), art director PASS. Live in
  `timeline.ts` (`arcId: after-the-fence-line`, 4 events dated 08-20…08-30 so it reveals after
  the season), `lib/content.ts` (ARC_META), 4 CREAM slides (`arc-rebuild-1..4`), caption in
  `captions.md`, and staged into `manifest.json` as `arc-rebuild` (status `staged`, next in the
  cron queue after `arc-cabinet`). Arc count in the reveal window stays 9 today (all 4 beats are
  future-dated); it becomes 10 once 08-20 passes, so a CI run after that date will need the
  count test bumped 9→10 (and may add `toContain("after-the-fence-line")`).

- **SEASON 2 Ep 2: "The Sweet Beak" (Ládùn) — BUILT AND QUEUED.** Villain rollout #2, the
  scheming insider hen, done as a comic arc. New character **Ládùn "Sweet Beak"** (in
  `chickens.ts`, `ladun-sweet-beak`, isa-brown, active, kept a loner like Eseosa/Silk to avoid
  friendship/rival symmetry churn). She revives the Republic's oldest fear (missing grain) as a
  whisper to unseat honest Musa the Grainkeeper; **Kola Quill**, who broke the real grain
  scandal, traces the rumour home and exposes her. Comeuppance, not exile: she stays in the
  flock, "already eyeing her next target," so she is a **recurring comic villain** to reuse.
  GREEN, 5 slides (`arc-sweetbeak-1..5`), routes to the shop. Live in `timeline.ts`
  (`arcId: the-sweet-beak`, 09-02…09-10), ARC_META, caption, staged. Showrunner SHIP, art
  director PASS.

- **SEASON 2 Ep 3: "The Dawn Duel" — BUILT AND QUEUED.** A warm morning comedy. VP **Baba
  Ṣẹ́gun** vs young **Small Fẹ́mi** (the Drain survivor, "The Far Side," who wants to be a coop
  guard) over who crows the sun up. Dead-tie dawn, Baba makes Fẹ́mi his apprentice, two birds
  wake Kisi. CREAM, 4 slides (`arc-dawn-1..4`), routes to **Solar & Light** (dawn → light → the
  coops still go dark). Live in `timeline.ts` (`arcId: the-dawn-duel`, 09-13…09-20), ARC_META,
  caption, staged. **Showrunner first flagged REVISE** because the initial draft recast Small
  Fẹ́mi as a generic peppy chick, contradicting his canon (a serious Drain survivor); recast to
  honour his backstory, bumped his `ageNote` Chick→"Young cockerel", re-audited SHIP; art
  director PASS. Lesson: cast from the bible, do not invent over an existing character.

- **SEASON 2 Ep 4: "Sweet Beak Strikes Again" — BUILT AND QUEUED.** Villain rollout #2,
  escalation. The recurring comic schemer **Ládùn "Sweet Beak"** overreaches: cleared but
  unashamed after the grain whisper, she trades the whisper for **envy** and tries to turn coop
  against coop over the newly rebuilt Coop Three (Cindy's Law: many perches, a shade wing). She
  calls a "grievance meeting" to aim the waiting coops like a slingshot at the housing programme,
  but **Halima "Iron Feathers"** refuses to play politics with Cindy's Law ("Coop Three is the
  promise, and every coop gets one"), the crowd flips to chanting "build ours next," and her
  grievance meeting becomes the biggest **Better Housing** rally the Republic has held. She slinks
  off eyeing her next target (still recurring). GREEN, 5 slides (`arc-sweetbeak2-1..5`), routes to
  Better Housing / support. Live in `timeline.ts` (`arcId: the-sweet-beak-returns`, **re-dated
  08-23…08-24**, see the cadence fix below), ARC_META, caption, staged. **Showrunner REVISE→SHIP** (President was tagged in the finale but
  absent; added a one-line decree cameo echoing the rebuild plaque, plus an irony clause that she
  roosts in the very Coop Three she stokes envy against; retagged the finale `reconciliation`→
  `custom`). Art director PASS on all 5. Note: Halima is played **straight/principled** here, not
  turned heel; this deepens audience love for her as setup for the eventual rollout #3.

- **SEASON 2 Eps 5 to 7: warm-batch palate cleanser — BUILT AND QUEUED (2026-08-15).** After two
  Sweet Beak schemer arcs, the owner asked for three lighter arcs. Built as a batch, one showrunner
  audit and one art-director audit across all three; both cleared (showrunner: Ep 5 REVISE→SHIP,
  Eps 6-7 SHIP; art director PASS on all 14 slides). Reveal-dated 08-25…08-30 (a tight block after
  sweetbeak2's 08-24) and staged in cron order breakfast → sprint → elders. Alternation kept:
  sweetbeak2 GREEN → **breakfast CREAM → sprint GREEN → elders CREAM**.
  - **Ep 5 "The Breakfast Bell"** (`the-breakfast-bell`, slug `breakfast`, CREAM, 5 beats, → shop).
    Halima Iron Feathers' three-season crusade for a set breakfast hour. **Showrunner caught the one
    real trap:** the President's canon is Executive Order No. 1, the "Punctual Breakfast Order"
    (she is literally "Mama Decree"), so the arc could not treat punctual breakfast as new. Reframed:
    Order No. 1 set breakfast at "seven, not seven-ish," but a clockless farm could never keep it,
    so Halima's fight is to make the President's own order *real*. Young Small Fẹ́mi pegs the bell to
    the second dawn crow (Dawn Duel callback), and the President rings the first bell beside her
    crate-sister rival with a decree line in her canon voice. **Lesson: check a founding character's
    signature achievement before building a story on that same theme.**
  - **Ep 6 "Chi-Chi's First Race"** (`chi-chi-first-race`, slug `sprint`, GREEN, 5 beats, → shop).
    Pays off the chi-chi-first-egg ending (she joined Flash's junior squad). She comes SECOND but
    earns a bigger cheer than the winner, repeating her motto "I did my best." Túndé and Flash stay
    "officially retired, unofficially eternal" as coaches (no rivalry-revival continuity break) and
    race an impromptu exhibition. Egg-as-race-fuel sell.
  - **Ep 7 "The Elders' Bench"** (`the-elders-bench`, slug `elders`, CREAM, 4 beats, → support).
    Mama Gold's Law made physical: a shaded elders' bench for retired layers; Mama Gold presides
    ("wages, not charity"), Sisi Ngozi reads the roll, Sadé sets it to song. Senior-hen care sell.
  - **Cross-cutting fix shipped this cycle:** `generate-arcs.mjs` `page()` now routes the final-slide
    footer by an arc `sell` field (`sell:"shop"` → kisi.africa/shop; default → /support), so
    shop-routed arcs no longer show /support under an "order eggs" CTA. No new characters (chicken
    count stays 27).

- **SEASON 2 Eps 8-9: brand-split batch — BUILT AND QUEUED (2026-08-21).** First batch after the
  three-site split; both sell to **Kisi Farm** (farm.kisi.africa), the slide wordmark is **"Kisi"**,
  mascot is **Dede**. Showrunner REVISE→SHIP (fixed a real continuity bug: the crate-sisters origin
  is PUBLIC canon, so Kola cannot "alone know" it, he alone senses what the bond is *becoming*; also
  moved Túndé's boast off Flash's rain race onto his own 100m record; "plaque"→"credit"). Art
  director PASS on all 8. Alternation held: elders CREAM → **second-chair GREEN → kickoff CREAM**.
  Also migrated ALL historical funnel URLs in timeline/generate-arcs/captions to farm.kisi.africa.
  - **Ep 8 "The Second Chair"** (`the-second-chair`, slug `second-chair`, GREEN, 4 beats, → support).
    **Seeds Halima's heel turn (villain rollout #3).** After the flock cheers her for the breakfast
    bell, the second chair feels too small; Sweet Beak plants the poison; a dusk by the empty first
    chair opens a crack; Kola senses the crate-sisters bond turning to a fault line. A SEED, not a
    spend, keeps her sympathetic. Dated 08-31…09-03.
  - **Ep 9 "The League Kicks Off"** (`the-league-kicks-off`, slug `kickoff`, CREAM, 4 beats, → eggs).
    Warm sport beat: Túndé opens the Coop League, Flash dares rivals to chase, and Chi-Chi races her
    first league fixture (pays off her Ep 6 junior-squad thread), comes third, loudest cheer. Dated
    09-05…09-08. No new characters (count stays 27).

- **SEASON 2 Ep 10: "The True Count" — BUILT AND QUEUED (2026-08-27).** Villain rollout #3 advances:
  Halima's **first real bend of principle**, off the Ep 8 seed. As the Republic's honest auditor she
  recounts the National Egg Census and catches a true, honest error (a senior hen on a well-earned
  laying break still tallied as laying, so the President's proud new record is inflated). **Sweet
  Beak** whispers her toward an ambush ("save the true number for Census Day, in front of everyone"),
  and for the first time in her life the auditor holds a true number back on purpose. At the fence,
  the President (crate origin PUBLIC, friendship the open secret) tells Halima she is the only one
  who would ever correct her plainly, at the exact moment Halima is carrying the betraying number.
  On Census Day she does **not** spring the trap, but she does **not** give her famous one-word
  verdict either: she rises, opens her beak, and for the first time says nothing and lets the wrong
  number stand. Only Kola catches the swallowed word and feels the fault line take its first real
  step. Still short of the full turn; sets up the crate-sister reckoning. GREEN, 4 slides
  (`arc-truecount-1..4`), routes to **support**. Live in `timeline.ts` (`arcId: the-true-count`,
  09-10…09-13), ARC_META, caption (2188 chars), staged into `manifest.json` as `arc-truecount`
  (status `staged`). **Showrunner REVISE→SHIP** (three real fixes: the crate fact is PUBLIC canon so
  it cannot be re-secreted, only the friendship is the open secret; the double-counted-clutch error
  duplicated her canonical Wet Season Recount win, so switched to the laying-break mechanic; and the
  Census Day payoff was told-not-shown, so dramatized the withheld one-word verdict, which also pays
  off the beat-1 "single word" setup; plus a polish making the President's fence lines aphoristic in
  her Mama Decree cadence). Art director PASS on all 4. No new character (count stays 28).

- **SEASON 2 Ep 11: "The Kept Number" — BUILT AND QUEUED (2026-08-29).** Villain rollout #3, the
  consequence beat off Ep 10. The record Halima withheld goes public: the President stakes her word on
  the inflated egg count at the gate before buyers, then sets a **feast** to raise it before the whole
  flock. **Sweet Beak** urges the ambush ("spring it at her own feast, break her"); **Kola Quill**, who
  caught the swallowed word last time, quietly signals he knows and is waiting. Cornered between the
  schemer who wants blood and the newsman who wants truth, Halima at the feast takes **neither** the
  ambush nor silence: she corrects the count and **takes the blame for the delay onto her own feathers**
  ("the lateness is mine, not the President's"), shielding the President at the cost of her own spotless
  never-late record. Sweet Beak came for blood and got a confession of loyalty, and left furious. At the
  fence the President honours the choice in her decree cadence ("a leader is only as strong as the one
  bird who will correct her... I will not forget which you chose"); the crate-sister crack quiets but
  does not close. This **deepens the fall** (her iron is now publicly dented, by her own choice) **and
  begins the turn back** (mercy over ambush); the full heel turn / reckoning is still ahead. CREAM, 4
  slides (`arc-kept-1..4`), routes to **eggs** (farm.kisi.africa/eggs). Live in `timeline.ts`
  (`arcId: the-kept-number`, 09-15…09-18), ARC_META `the-kept-number`, caption, staged into
  `manifest.json` as `arc-kept` (status `staged`). **Showrunner REVISE→SHIP** (real continuity catch:
  the first draft played a **second Census Day** four days after Ep 10's, but the Census is canonically
  *monthly*, so the public correction was moved to a new occasion, the President's record **feast**;
  also fixed Sweet Beak still naming "Census Day," restored Kola's soft-earth shorthand, and gave the
  President's fence line her decree cadence). Art director PASS on all 4. No new character (count stays
  28). **Lesson: check a recurring event's canonical cadence (the monthly Census) before restaging it.**

- **SEASON 2 Ep 12: "The Reason I Sleep" — BUILT AND QUEUED (2026-08-30).** Villain rollout #3, the
  **reckoning** beat off Ep 11. Sweet Beak, cheated of her feast ambush, tells the President the part
  Halima hid: the "lateness" was a planned trap. The President laughs her off (Sweet Beak lies for
  sport), but one piece is true, Halima is never late, and this month she was. At the fence the
  President does **not** accuse (she is too wise to weight a schemer's word); she only asks plainly why
  Halima was late. Halima cannot say the true answer (she held the count back on purpose, half to
  ambush the very bird asking), so she repeats the true-but-incomplete "It came late," and the
  President hears her crate-sister keep something back for the first time in two lifetimes. The fence
  goes **cold**: the President stops coming, Halima waits at their patch alone. Stung that her
  sacrifice bought suspicion, her Ep 8 wish for the first chair hardens from a shy wish into a **plan**
  ("if they would call her ambitious after she had been loyal, then let them"); Kola watches the crack
  become a **fault**. The open break/confrontation is deliberately left for the finale. Title is the
  **ironic callback** to the President's Ep 10 fence line ("you are the reason I sleep"). GREEN, 4
  slides (`arc-reason-1..4`), routes to **support**. Live in `timeline.ts` (`arcId: the-reason-i-sleep`,
  09-20…09-23), ARC_META, caption (2907 chars), staged into `manifest.json` as `arc-reason` (status
  `staged`). **Showrunner SHIP (empty fix list)** on first pass; praised the "accusation is TRUE, and
  Halima's own hesitation confirms it" handling that keeps the President from trusting a known liar,
  and the tragic use of Halima's plainness ("It came late") as her prison. Applied its one optional
  note (corrected a code comment: the "reason I sleep" line is Ep 10, not Ep 11). Art director PASS on
  all 4 (slide 4 is the fullest of the set, watch it if copy grows). No new character (count stays 28).

- **SEASON 2 Ep 13: "The First Chair" — BUILT AND QUEUED (2026-09-05).** Villain rollout #3, the
  **finale** of Halima's heel turn, and it pays off the crate-sisters friendship the rollout was always
  about. Halima finally **acts** on the Ep 12 plan: cold and personal, she rises in the Assembly and
  moves for the President's first chair itself, not as loyal opposition but meaning it, and the two that
  could not be split split in public (Sweet Beak thrilled in the gallery). That evening the President
  comes back to the fence, not to fight but to say the plain thing (a proverb-cadence line in her Mama
  Decree register, "Ọwọ́ ọ̀tún ń wẹ òsì… no hand stays clean alone"), and the deferred reckoning finally
  happens. **Sweet Beak overplays**, brags to both coops of engineering the rift, and **Kola Quill exposes
  her** on the front page ("SHE TOLD BOTH"). At the peak of her power, wounded and vindicated, Halima
  makes her **own** moral choice and withdraws the motion ("I will not let a schemer be the reason two
  crate-sisters could not share a fence") — not because Sweet Beak was caught, but because the President
  came back and told her the plain truth. The bond comes back **tempered, not reset** (payoff of the
  "Iron Feathers" name: iron from fire). Sweet Beak slinks off, still recurring. CREAM (alternates off
  arc-reason GREEN), 4 slides (`arc-firstchair-1..4`), routes to **eggs**. Live in `timeline.ts`
  (`arcId: the-first-chair`, 09-25…09-28), `content.ts` ARC_META, caption (2191 chars), staged into
  `manifest.json` as `arc-firstchair`. **Showrunner REVISE→SHIP** (three fixes: gave the President her
  aphoristic register in the fence scene; added an in-the-moment flicker of temptation as Halima rises so
  the withdrawal is an active victory not a foregone one; recast Sweet Beak's brags into her syrupy
  self-exculpating voice). Art director PASS on all 4. No new character (count stays 28).

- **SEASON 2 Eps 14-15: the warm-reset batch — BUILT AND QUEUED (2026-09-05).** After the four
  reckoning-heavy heel-turn episodes (Eps 10-13), the owner asked for more episodes; built two warm arcs
  as a batch (one showrunner audit, one art-director audit across both). Both cleared (showrunner: Ep 14
  REVISE→SHIP, Ep 15 SHIP; art director PASS on all 8). Alternation held: firstchair CREAM →
  **longest-night GREEN → market-day CREAM**. No new characters (count stays 28).
  - **Ep 14 "The Longest Night"** (`the-longest-night`, slug `longestnight`, GREEN, 4 beats, → **support**
    / Solar & Light). A dry-season solar/light story with **no villain**: the pre-rain haze starves the
    panels, the coops face a dark night, and the flock holds it together (Amina Daybreak rations the last
    charge, VP Baba Ṣẹ́gun crows the watches, young Small Fẹ́mi keeps the fence). Nothing comes out of the
    dark, by design; the Drain is a warm memory, not a reopened threat. **Showrunner catch:** Baba and
    Small Fẹ́mi are already established mentor/apprentice who **share the dawn crow** (`the-dawn-duel`), so
    the draft's "Baba's respect newly won" + "finish growing first" (which is Sergeant Danladi's line, not
    Baba's) cross-wired the roosters; rewrote Baba's turn to honour the existing bond. **Lesson: before
    staging two recurring characters together, check whether the bible already gives them a relationship.**
  - **Ep 15 "Market Day"** (`market-day`, slug `marketday`, CREAM, 4 beats, → **eggs**). The funnel made
    literal: the first big crates of eggs leave Kisi for real buyers, told through the flock's pride. Mama
    Gold presides ("a market only comes back to a farm that does not lie to it"), tying off the honest-count
    theme positively **without re-litigating it**; Chi-Chi's eggs go to market for the first time; the
    President gives a warm plain cameo (no decree) and Kola prints "THE EGGS ARE GOOD". Showrunner SHIP first
    pass; applied both optional polishes (Mama Gold clearly presiding since she's on a laying break; a
    micro want-and-payoff for Chi-Chi's doubt about her plain brown eggs).

- **Website reveal pulled in step with IG (2026-09-05).** Owner asked whether the stories were live on the
  site. They were deployed but **date-gated**: `revealedTimeline` (`packages/canon/src/content.ts`) shows a
  beat only once `date <= today`, and Eps 10-13 were dated 09-10…09-28 while already posting to IG, so the
  site lagged (True Count was on IG since Aug 27 but hidden on the site until 09-10). Fix: **collapsed each
  tail arc to a single in-story date equal to the day its IG carousel posts** (kickoff 09-04, true-count
  09-05, kept 09-06, reason 09-07, first-chair 09-08, longest-night 09-09, market-day 09-10), so the site
  reveals each arc the same day IG posts it and the daily cron's manifest commit re-triggers the Vercel
  rebuild. **Lesson: the website reveal is build-time date-gated, so "deployed" ≠ "visible"; to keep the
  site in step with the IG drip, date each arc to its post day and re-date the whole causal tail, never a
  single arc (you cannot reveal a sequel before its setup).**

- **SEASON 2 Ep 16: "The Scoop That Wasn't" — BUILT AND QUEUED (2026-09-05).** Sweet Beak's next target,
  and her first scheme since Kola Quill's "SHE TOLD BOTH" front page (Ep 13) humiliated her. Fresh angle:
  she goes after the **newsman himself**, forging a leaked "Perchgate" memo (the Feather Gala budget
  supposedly spent on gold perches for the cabinet) and planting it so Kola prints it and is ruined when it
  proves false. But Kola does what made him: he **checks**, the fake comes apart against the real ledger in
  a hand he knows, and instead of her scandal he prints the true story of how someone tried to weaponize the
  press. Editorial: "A paper that checks is not a paper you can use." Her plot to break his credibility makes
  it unbreakable; she slips off eyeing her next target (still recurring). GREEN, 4 beats, dated **09-11**
  (its IG post day), routes to **support** (a free honest press tied to an honest farm). Live in `timeline.ts`
  (`arcId: the-scoop-that-wasnt`), `content.ts` ARC_META, 4 slides (`arc-scoop-1..4`), caption (2142),
  staged. **Showrunner SHIP (no required fixes)**; applied its two optional strengtheners (a near-miss where
  Kola almost runs the false story before his habit pulls him back, for real middle tension; and naming
  "Kisi Farm" explicitly at the sell). Art director PASS on all 4 (slide 3 is near the size-class limit,
  watch it if copy grows). No new character (count stays 28). **Craft note:** deliberately distinct from
  Ep 13 (there she was caught bragging passively; here she actively attacks the press and Kola is the active
  protagonist who chooses not to print) — the way to reuse a recurring villain without repeating the beat is
  to flip who acts and what the theme is.

- **▶ RESUME HERE (what to build when pointed at this file next).** Season 2 Eps 1 to 16 are built and
  queued; the site reveals each arc in step with its IG post day (run so far ends at market-day 09-10,
  scoop 09-11). Halima's heel turn (rollout #3) is **complete** (Eps 10-13), Eps 14-15 were the **warm
  reset**, and Ep 16 was **Sweet Beak's next scheme** (vs the press). A plain "execute" should build
  **Season 2, Ep 17** — best next threads, in priority order:
  1. **A warm/standing-engine beat** (Coop League fixture with Túndé/Flash/Chi-Chi, an elders/egg beat, a
     Mama Gold or Dr. Featherwell story, a solar/housing beat) — after a schemer arc, vary the register.
  2. **Sweet Beak's next target again** only if escalated meaningfully (she is now 0-for-4; a smart move is
     to have a scheme nearly *work* for once, or to give her a rival who out-schemes her), OR **Eseosa in
     exile** (careful, dignified).
  3. **The long game:** the tempered crate-sisters bond (Halima/President) can be tested again, but only
     after real in-story time; a too-soon rematch cheapens the Ep 13 payoff.
  Whatever is chosen: one arc per cycle (or a batch if the owner asks); **alternate green/cream** against the
  last new arc (last built = `arc-scoop` GREEN, so the next new arc defaults to CREAM); a comic arc can carry
  green as "dramatic intrigue"; keep the 6-year-old clarity rule; add the 3 standing hashtags; end on a sell;
  **date the new arc to the day it will post to IG** (continue the run at 09-12) so the site stays in step;
  and **assert the manifest caption is < 2,200 chars** (story text ~1,900 max) before staging.
  **When adding a character, bump the chicken-count test in
  `packages/canon/tests/content.test.ts` (now 27).** The arc-count assertion is now a **floor**
  (`toBeGreaterThanOrEqual`), not an exact count, so it no longer needs bumping as each in-story
  date passes. NOTE (monorepo split): content + canon now live in **`packages/canon/src/data/*`**;
  the loader/ARC_META is **`packages/canon/src/content.ts`** (was `site/lib/content.ts`); the app
  is `apps/africa`. Staged IG images go to `apps/africa/public/s/`.

- **Cadence fix (2026-08-14): why Season 2 can't reveal "today."** The website reveals each beat by
  its in-story date at build time (`revealedTimeline`, `lib/content.ts`), and the IG cron posts each
  arc as one full carousel at its 12h slot, so IG runs ahead of the site. Owner asked to close the
  gap. Hard floor: the rebuild must follow Cindy's death, and the Fence Line finale is dated 08-16,
  so Season 2 cannot reveal before 08-17 (today was 08-14). Also, Ep4 cannot be pulled forward alone
  or the sequel would show before Eps 1-3 (all four were still hidden). Fix applied: re-dated all
  four Season 2 arcs into a tight, ordered, non-overlapping block **08-17…08-24** (rebuild 17-18,
  sweetbeak 19-20, dawn 21-22, sweetbeak2 23-24), so the site catches up to IG within ~10 days
  instead of 6 weeks. The arc-count test still reads 9 today (all dates future) and passes.
- **Standing engines of drama:** the punctual-breakfast crusade; the President vs Halima
  rivalry (and their secret friendship); the feed budget and the National Feed Budget;
  nesting-box expansion; coop security and the Bantu Protocol; solar-light schedules;
  perch and sprint rivalries; senior-hen retirement and Mama Gold's Law; Kola Quill's
  next scoop.
- **Every arc must end on a sell, pointing to Kisi Farm** (`farm.kisi.africa`). Solar & Light
  and Better Housing are the two campaigns (no dollar figure); reach for them whenever light,
  power, coops, or housing appear. Egg/breakfast/sport arcs sell eggs at `farm.kisi.africa/eggs`.
