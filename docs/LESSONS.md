# LESSONS.md — running log

Rolling record of **what we learned**, **what is done**, and **what is left**.
Update this at the end of every session (and any time a hard-won lesson appears).
Newest session at the top.

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

- **Stay in the world.** The Republic is written from the inside, like an animated
  series — no "fictional" labels, no badges, no per-page disclaimers. The audience
  understands storytelling without being told.
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
