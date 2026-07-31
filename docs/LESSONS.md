# LESSONS.md — running log

Rolling record of **what we learned**, **what is done**, and **what is left**.
Update this at the end of every session (and any time a hard-won lesson appears).
Newest session at the top.

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

### Verification status

**No local gates (Node still not installed).** Relying on GitHub Actions CI, which is
the real gate now that `main` auto-builds. Em-dash edits are all inside strings/comments
so they cannot break the build; the schema/`tribe` change is the one to watch, and it is
covered by CI's typecheck + the content integrity checks.

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
