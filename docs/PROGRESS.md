# PROGRESS.md — Session & Phase Tracker

Read this file at the start of every session, after the project brief.

## Current status

| Item | State |
|---|---|
| Current phase | **Phase 2 — Core website: COMPLETE, awaiting owner review** |
| Next phase | Phase 3 — Interactive world (do not start until owner approves Phase 2) |
| Active branch | `feature/kisi-poultry-republic` |
| Production build | **Passing** — `site/`: 53 static pages, `npm run build` exit 0 (2026-07-17) |
| Lint / typecheck | Passing — ESLint exit 0, `tsc --noEmit` clean (2026-07-17) |
| Tests | None yet — content integrity is enforced at build time; Vitest/Playwright planned |

## Phase checklist

- [x] Phase 1 — Discovery and architecture (session 1)
- [x] **Phase 2 — Core website** (session 2)
- [ ] Phase 3 — Interactive world (3D farm)
- [ ] Phase 4 — Community and support
- [ ] Phase 5 — QA and deployment

## Session log

### Session 2 — 2026-07-17 (Phase 2)

**Owner decisions received at phase start:** Phase 1 approved; stack approved
as proposed; app in `site/` subdirectory; brand name confirmed as "Kisi";
the new site is fully separate from the legacy root `index.html` (no links
or references); characters to be built with deep, authentic Nigerian
cultural grounding.

**Done:**
- Installed a portable Node.js 22.17.0 (no Node existed on the machine — no
  system install performed; a permanent Node install is recommended, see
  "Needs owner" below). Scaffolded Next.js 16.2.10 (App Router, TypeScript,
  Tailwind v4, ESLint) in `site/` + zod.
- Built the typed content system: `site/lib/schemas.ts` (Zod),
  `site/lib/content.ts` (build-time validation + integrity checks:
  symmetric friendships/rivalries, resolvable references, real-party-name
  blocklist, memorial birds can't be sponsorable, placeholder farm stats
  must lack no source).
- Authored the 12 demo citizens with Nigerian (Yoruba-forward, deliberately
  pan-Nigerian) naming, orikì praise lines with translations, pidgin
  cadence, and affectionate bureaucratic satire; plus 8 Coop Times articles,
  5 bills, 4 executive orders, presidential diary, 6 egg milestones + census,
  4 teams/6 matches/championship roll, 6 social events, 17 timeline events in
  5 story arcs. All `isDemo: true` with visible "Sample content" badges.
- Built components: Header (responsive + accessible mobile menu), Footer,
  fact/fiction/demo/status badge system, fiction disclaimer, procedural SVG
  chicken portraits (original art, per-character palettes), cards, timeline,
  searchable/filterable FlockDirectory (client), org chart.
- Built all Phase 2 routes (53 static pages): home, flock + 12 profiles,
  republic (landing, presidency, government + 10 ministry pages, assembly,
  sports, social), news + 8 articles, eggs, about, mascot (placeholder),
  agric-city (fresh, native, honest status labels, no legacy references),
  visit/contact (form preview — not wired), support (no-payments preview),
  disclaimer, legal placeholders, 404/error pages, sitemap.xml, robots.txt.
- Checkpoint gates run (see Current status): ESLint 0 problems after fixing
  one `react-hooks/set-state-in-effect` error in Header; `tsc --noEmit`
  clean; `next build` exit 0 with 53/53 pages generated. No format script or
  test runner exists yet (documented honestly).

**Not done (later phases):** 3D world (Phase 3), payments/newsletter/polls/
live contact form (Phase 4), analytics, i18n message extraction, gallery
page (needs real photos), Radix/Framer Motion not yet needed and not added.

### Session 1 — 2026-07-17 (Phase 1)

**Done:**
- Confirmed folder was not a git repo; ran `git init` and created
  `feature/kisi-poultry-republic` as the first branch — no commits exist on
  `main`/`master`.
- Audited existing work: `index.html` (~57 KB) + `README.md` are a prior,
  self-contained Three.js r128 single-file site — the **"Kilanko Pan-African
  Agricultural City"** 7-acre farm-resort interactive 3D masterplan (zones:
  resort, poultry, aquaponics, livestock, oil palm, plantain/yam; cashew
  perimeter). Preserved unchanged and committed as a legacy import. Also present:
  four internal `.xlsx` farm workbooks (Daily Update, Farm Development Worksheet
  2026, Farm Intelligence System + backup) — **git-ignored** as private records,
  not modified.
- Added `.gitignore`. The project instruction file (`Claude.md`) is deliberately
  git-ignored because it currently contains a GitHub personal access token.
  **SECURITY: the owner should revoke/rotate that token; it has been exposed in
  a plaintext file.** Once removed, the instruction file can be committed.
- Decided technology stack (see `docs/PRODUCT_BRIEF.md`, "Technical plan"):
  Next.js (App Router) + TypeScript + Tailwind CSS + structured TS/JSON content
  + MDX articles + React Three Fiber for the 3D farm.
- Wrote Phase 1 documentation set: PRODUCT_BRIEF, BRAND_SYSTEM, SITEMAP,
  CONTENT_MODEL, CHARACTER_SYSTEM, 3D_WORLD_PLAN, DONATION_INTEGRATION,
  FUTURE_ROADMAP, CONTENT_CHECKLIST, plus DEPLOYMENT and CONTENT_EDITING_GUIDE
  stubs. Rewrote root `README.md` (Agric City legacy info preserved inside it;
  original README preserved in git history at the legacy-import commit).

**Decisions made:** see `docs/PRODUCT_BRIEF.md` §Technical plan and §Key
decisions.

**Not done (intentionally — later phases):** no app scaffold, no pages, no
components, no 3D prototype, no payment integration, no deployment. No
production build was run because no buildable code exists yet.

**Blocked on / needs owner:** everything in `docs/CONTENT_CHECKLIST.md`
("Needs owner input"), and owner review/approval of Phase 1 before Phase 2
begins.

## Resume instructions (for a future session)

1. Re-read the project brief, then this file.
2. `git status` and `git log --oneline` on `feature/kisi-poultry-republic`.
3. Node.js is NOT installed system-wide on this machine — install Node 22 LTS
   (or use a portable build) before running anything in `site/`.
4. If Phase 2 has been approved by the owner, begin **Phase 3 — Interactive
   world** per `docs/3D_WORLD_PLAN.md`: React Three Fiber map at
   `/republic/map`, lazy-loaded, with the 2D SVG fallback, hotspots wired to
   real routes, and performance/a11y budgets from the plan.
5. Keep `index.html` (legacy Agric City masterplan) untouched and
   unreferenced — it is a separate historical artifact (owner decision,
   2026-07-17).
