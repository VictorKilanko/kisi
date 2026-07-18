# LESSONS.md — running log

Rolling record of **what we learned**, **what is done**, and **what is left**.
Update this at the end of every session (and any time a hard-won lesson appears).
Newest session at the top.

---

## Session — 2026-07-18 (in progress)

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

- Deleted `app/agric-city/` route entirely.
- Removed `AgricCityStatus` / `AgricCityProjectSchema` types from `lib/schemas.ts`,
  the `agricCityProjects` export from `lib/content.ts`, and `ProjectStatusBadge`
  from `components/Badges.tsx`.
- Removed the Agric City link from `components/Header.tsx`, `components/Footer.tsx`,
  and `app/sitemap.ts`.
- Removed the `isDemo` flag from every content schema and every content record.
- Deleted the `DemoBadge` component, the `DemoContentNotice` component, and all their
  usages across ~25 pages.
- Stripped "sample content" / "(demo)" / "(demo data)" / "(sample data)" hedges from
  content prose, comments, and portrait alt text.

### Still to do (this session's remaining work)

- [ ] Finish removing Agric City: `content/farm.ts` (`agricCityProjects` array),
      `lib/mapData.ts` (`agric-city-zone` hotspot), `app/page.tsx` (two mentions +
      CTA button), `app/about/page.tsx` (link block), `app/disclaimer/page.tsx` (mention).
- [ ] Rewrite remaining "sample content" prose in `app/disclaimer/page.tsx`,
      `content/articles.ts` (the "what's real here" note), `content/chickens.ts` header
      comment, `app/eggs/page.tsx` lede, `app/republic/sports/page.tsx`,
      `app/republic/government/page.tsx`, `components/Footer.tsx`.
- [ ] Update `tests/content.test.ts` and `e2e/smoke.spec.ts` — they still assert on
      `isDemo` and on a visible "Sample content" badge, so they will fail as written.
- [ ] **New citizens**, including Minister of Security **Pete Okpara**, plus **Bantu**
      (status: `memorial` — note the schema already forbids `sponsorable` on memorial
      records) and additional flock members.
- [ ] **Monitor lizard arc**: original illustrated SVG portrait, `MostWantedPoster`
      component, bounty notice, placement on home / news / a dedicated route.
- [ ] **Bantu memorial page** with a well-wishes form (reuse the newsletter/contact
      form pattern and its rate limiting).
- [ ] **Shop page** for egg orders, wired into the main menu.
- [ ] Simplify navigation and reading level throughout (5th-grade target).
- [ ] Update `docs/SITEMAP.md`, `docs/CONTENT_MODEL.md`, `docs/PROGRESS.md`,
      `docs/CONTENT_CHECKLIST.md` to match all of the above.
- [ ] Run format, lint, typecheck, tests, and production build — **blocked on Node install.**

### Open questions for the owner

- **Egg pricing and delivery area for the Shop page** — no prices, pack sizes, or
  delivery zones have been supplied, so the shop cannot quote real figures yet.
- **The bounty amount** on the monitor lizard — is this a fictional in-Republic bounty
  (e.g. paid in grain) or a real cash reward? Currently planned as fictional.
- **Bantu's real details** — hatch/arrival date, breed, personality, and a photograph,
  so the memorial reflects the real bird.
- Real farm figures (flock size, egg production, breeds) remain unsupplied; the site
  still shows honest "awaiting farm records" placeholders for genuine farm facts
  rather than inventing numbers.

---

## Standing lessons (carry forward every session)

- Never fabricate a real-world farm fact (certifications, production numbers,
  veterinary outcomes, partnerships). Fiction about the Republic is fine and is the
  point; invented *farm* facts are not.
- Work on `feature/kisi-poultry-republic`, never directly on `main`.
- Never write the private local path (`C:\Users\victo\...`) into any committed file.
- Never commit secrets or `.env` files.
- Re-read `CLAUDE.md` and `docs/PROGRESS.md` at the start of each session.
