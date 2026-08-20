# SPLIT_PLAN.md — the three-brand split (live resume doc)

**Read this first if a split session was interrupted.** It is the source of truth for
where we are. Update the checkboxes and the "Resume point" line as work lands, and
commit it alongside the work.

## Goal

Grow Kisi into a Disney-style universe: the chickens are the IP engine, three properties
share ONE cast so canon never drifts.

- **kisi.africa** (`apps/africa`) — entertainment brand, the Republic run by chickens.
  Adults/young adults. NO commerce. This is "Mickey".
- **kisifarm** (`apps/farm` -> farm.kisi.africa) — the real business: eggs + day-old
  chicks/hatchery, support/sponsorship, about, visit. Uses characters as marketing.
- **kisikids** (`apps/kids` -> kids.kisi.africa) — kids channel (education + merch,
  Blippi model). Greenfield; scaffold only this engagement.

## Owner decisions (locked)

1. Monorepo (one repo, 3 apps + shared canon), not separate repos.
2. Domains subdomain-ready (`farm.`/`kids.kisi.africa`); real domains later via env var.
3. This engagement: foundation, then kisifarm fully; kisikids scaffold only.
4. Keep commerce live on kisi.africa until kisifarm launches, then 301 to the farm.
5. `/about` and `/visit` (real-farm info) live on **kisifarm** (confirmed 2026-08-20).

## Standing rules

- Push only after an expert web-design/dev/brand subagent audits the diff.
- No AI-writing tells (no em-dashes) in copy, docs, commits, replies.
- Keep `docs/LESSONS.md` + `docs/PROGRESS.md` updated per session; update THIS file per step.
- "Chicken Republic" is trademarked: never use it. IG: 3 hashtags, 6-year-old reading level.
- Tooling: `corepack pnpm ...` (pnpm is not on PATH). Gates per package via `--filter`.

## Structure

```
packages/canon   @kisi/canon   cast + story + schemas (single source of truth)   [DONE]
packages/brand   @kisi/brand   shared design tokens (colors, fonts)              [Phase 2]
apps/africa      @kisi/africa  kisi.africa (entertainment, de-commerce in P4)    [moved, DONE]
apps/farm        @kisi/farm    farm.kisi.africa (business)                        [Phase 2 scaffold -> P3 full]
apps/kids        @kisi/kids    kids.kisi.africa (scaffold only)                   [Phase 2]
social/          IG factory (repoint off site/content paths)                     [Phase 4]
```

## Phase checklist

### Phase 0 — Monorepo skeleton  ✅ DONE (`c75eda3`)
- [x] pnpm-workspace.yaml, turbo.json, root package.json, .npmrc (hoisted)
- [x] move site/ -> apps/africa/ (199 renames), rename pkg -> @kisi/africa
- [x] verify: africa build + typecheck green

### Phase 1 — Shared canon  ✅ DONE (`d70c3c3`)
- [x] extract packages/canon (@kisi/canon): schemas, data, loader, tests
- [x] repoint app imports to @kisi/canon; transpilePackages; workspace dep
- [x] fix brittle date-gated arc test
- [x] verify: canon 18 tests + africa 13 api tests + africa build green

### Phase 2 — Scaffold farm + kids + brand  ⏳ IN PROGRESS
- [ ] packages/brand: tokens.css (colors) + fonts.ts + package.json
- [ ] apps/farm scaffold: Next app, consumes canon+brand, home shell, Vercel-ready
- [ ] apps/kids scaffold: Next app, brighter kids theme, single home page
- [ ] (optional) point apps/africa globals at shared brand tokens if it builds clean
- [ ] verify: all three apps build; typecheck green
- [ ] commit + update this file

### Phase 3 — Build kisifarm fully
- [ ] move commerce into apps/farm: /eggs (order), /chicks (day-old + hatchery),
      /support + /support/terms, /about (real farm), /visit, legal
- [ ] reuse OrderForm, SupportCheckout, NewsletterForm, lib/payments (locked), lib/mail, APIs
- [ ] character-driven marketing pulling portraits/names from @kisi/canon
- [ ] kisi.africa commerce still live in parallel (no redirect yet)
- [ ] verify build + sandbox flows; commit

### Phase 4 — De-commerce kisi.africa
- [ ] 301 redirects in apps/africa/next.config.ts: /shop /eggs /support* -> kisifarm
- [ ] nav/footer link out to kisifarm + kisikids
- [ ] repoint social/ scripts (canon import + apps/africa/public/s/)
- [ ] verify; commit

### Phase 5 — Gates, docs, handoff
- [ ] corepack pnpm -r lint / typecheck / test / build all green
- [ ] docs/PROGRESS.md, docs/LESSONS.md, docs/MONOREPO.md (per-app Vercel Root Directory)
- [ ] expert subagent audits full diff
- [ ] push (ONLY after owner changes kisi.africa Vercel Root Directory site -> apps/africa)

## Owner actions outstanding (for deploy, not blocking local build)

- **Change kisi.africa Vercel project Root Directory `site` -> `apps/africa`** before any push.
- Create Vercel projects for farm (Root `apps/farm`) and kids (Root `apps/kids`); set
  `NEXT_PUBLIC_SITE_URL` per project; attach `farm.`/`kids.kisi.africa`.
- Copy env vars (mail/Resend `FARM_INBOX`, Paystack TEST keys, Upstash) into the farm project.

## Resume point

**2026-08-20:** Phases 0+1 done and committed (not pushed). Starting Phase 2 (brand + farm +
kids scaffold). `/about` + `/visit` confirmed for kisifarm.
