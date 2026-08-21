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
  For the root `turbo` scripts (`pnpm run build/test/typecheck`), turbo must find a `pnpm`
  binary: a shim is installed at `~/bin` via `corepack enable --install-directory "$HOME/bin" pnpm`;
  run turbo as `PATH="$HOME/bin:$PATH" pnpm run build`. Vercel has pnpm on PATH already.

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

### Phase 2 — Scaffold farm + kids + brand  ✅ DONE
- [x] packages/brand: tokens.css + base.css + package.json + README (fonts stay per-app)
- [x] apps/farm scaffold: Next app, consumes canon+brand, home shell (hero + laying
      hens from canon + 3 business lines), Header/Footer, lib/site.ts, Vercel-ready
- [x] apps/kids scaffold: Next app, brighter kids theme layered on brand, single home page
- [x] apps/africa now consumes @kisi/brand tokens (single source of truth for brand, verified)
- [x] verify: turbo build 3 apps, typecheck 4, test canon 18 + africa 13 — all green
- [ ] commit + update this file

### Phase 3 — Build kisifarm fully  ✅ DONE
- [x] commerce in apps/farm: /eggs (order + milestones + census), /chicks (day-old +
      hatchery, honest placeholder), /support + /support/terms, /about, /visit, legal/*
- [x] reused OrderForm, SupportCheckout, NewsletterForm (in footer), Cards/Badges/
      ChickenPortrait/Disclaimer, lib/payments (LOCKED, sandbox), lib/mail, lib/rateLimit,
      and the orders/support(checkout+webhook)/newsletter API routes
- [x] character-driven marketing: farm home + /eggs pull laying hens/milestones from @kisi/canon
- [x] kisi.africa commerce still live in parallel (redirect is Phase 4)
- [x] farm .env.example added; api.test.ts brought over (13 tests)
- [x] verify: farm typecheck + lint(0) + 13 tests + build (14 routes) all green; commit

### Phase 4 — De-commerce kisi.africa  ✅ DONE
- [x] env-gated 308 redirects in apps/africa/next.config.ts (/shop /eggs /support
      /support/terms /about /visit -> farm), OFF by default via NEXT_PUBLIC_COMMERCE_ON_FARM;
      flip to "true" once the farm is deployed so there is no dead-end window
- [x] footer links out to the farm shop (eggs/chicks/support/about/visit) + Kisi Kids;
      africa lib/site.ts gained FARM_URL/KIDS_URL
- [x] repointed social/ scripts: stage-to-public.mjs + ig-publish.mjs publicRoot
      site -> apps/africa (generate-arcs has arcs inline, no canon import needed)
- [x] verify: redirects compiled into routes-manifest (6, 308); social --list resolves the
      new path; turbo typecheck 4 / test 44 / build 3 all green; commit

### Phase 5 — Gates, docs, handoff  ⏳ IN PROGRESS
- [x] workspace gates green (lint 3, typecheck 4, test 44, build 3)
- [x] docs/PROGRESS.md, docs/LESSONS.md updated; docs/MONOREPO.md written (structure +
      local dev + full Vercel deploy guide answering the subdomain question)
- [x] expert subagent audit of full diff; findings addressed:
      - H1 farm mobile nav (added hamburger menu)
      - H2 removed the invented "$25,000 goal" (owner: no number yet)
      - M1 fixed stale site-> apps/africa refs in VERCEL_SETUP.md + README.md
      - M3 added farm sitemap/robots/icon/opengraph-image
      - Q2 (owner) kept africa's own /about + /visit (dropped from redirect list)
      - L1 301->308 wording, L2 stale comments, L3 kids CTA contrast (dark text)
- [x] **PUSHED LIVE 2026-08-20** (`516c2cf` on main). Owner changed the kisi.africa Vercel
      Root Directory to apps/africa; merged origin/main's IG-cron commits cleanly (manifest
      preserved, 21/21 posted); pushed feature branch + main. Production deploys from apps/africa.

### Phase 6 (follow-ups, after the redirect flip is confirmed live) — not started
- [ ] delete africa's now-shadowed commerce (shop/eggs/support pages + the duplicated
      components/lib/payments/mail/api) once COMMERCE_ON_FARM is live, removing the
      copy-drift the audit flagged (M2). Or extract a shared @kisi/commerce package.
- [ ] farm /visit contact form is a disabled preview (L5); wire a real contact route.

## Owner actions outstanding (for deploy, not blocking local build)

- **Change kisi.africa Vercel project Root Directory `site` -> `apps/africa`** before any push.
- Create Vercel projects for farm (Root `apps/farm`) and kids (Root `apps/kids`); set
  `NEXT_PUBLIC_SITE_URL` per project; attach `farm.`/`kids.kisi.africa`.
- Copy env vars (mail/Resend `FARM_INBOX`, Paystack TEST keys, Upstash) into the farm project.
- **Deploy the farm FIRST**, then on the kisi.africa project set `NEXT_PUBLIC_COMMERCE_ON_FARM=true`
  and redeploy, so africa's /shop /eggs /support etc. 301 to the live farm (no dead-end window).
  The footer's farm/kids links go live with the same push, so deploying farm/kids first avoids 404s.

## Resume point

**2026-08-20 (repositioning, audited clean):** kisi.africa repositioned as the pure
"universe" front door: /about rewritten as "About Kisi Africa", "Order Eggs"/"Support"
removed from the surface, Header/Footer/home/economy/stories/profiles now point buying +
sponsoring OUT to Kisi Farm, /shop + /support 308 to the farm permanently, /eggs kept as
Republic egg lore, metadata/OG/manifest/sitemap re-pitched, `NEXT_PUBLIC_COMMERCE_ON_FARM`
retired. Expert audit: clean. Phase 6 cleanup (delete the now-dead /support + /shop page
files, SupportCheckout, /api/support) still open and low-risk. The IG-slide "final slide
sells" funnel now points at Kisi Farm, not kisi.africa/support (update social/story.md next
content session).

**2026-08-20 (LIVE):** All phases done and **pushed to main (`516c2cf`)**; kisi.africa
production deploys from `apps/africa` (commerce flag off, so it still self-serves the shop).
Remaining owner steps, when ready: create Vercel projects for farm (`apps/farm`) and kids
(`apps/kids`) with the subdomains + env vars, then set `NEXT_PUBLIC_COMMERCE_ON_FARM=true`
on kisi.africa to flip the shop to the farm. Fixed the GitHub Actions workflows for the monorepo: ig-schedule.yml now commits
`apps/africa/public/s` (was `site/public/s`, which would have silently re-posted arcs), and
ci.yml runs the pnpm/turbo workspace gates (was npm in `site/`). Social docs (story.md,
README.md, IG_SETUP.md) repointed `site/content` -> `packages/canon/src/data`. Phase 6
follow-ups still open: delete africa's shadowed commerce after the redirect flip; real farm
/visit contact route.

**Earlier 2026-08-20:** Phases 0-4 done and committed (not pushed). Monorepo + shared canon + shared
brand + kisifarm fully built + kisikids scaffold + kisi.africa de-commerced (env-gated redirects
OFF by default, footer links out, social scripts repointed). Whole workspace green (typecheck 4,
test 44, build 3). Next up: **Phase 5 — final gates, docs (MONOREPO.md, PROGRESS/LESSONS),
expert subagent audit of the full diff, then push** (only after the owner changes the kisi.africa
Vercel Root Directory site -> apps/africa; then deploy farm/kids and flip COMMERCE_ON_FARM).
