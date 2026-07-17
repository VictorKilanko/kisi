# PROGRESS.md — Session & Phase Tracker

Read this file at the start of every session, after the project brief.

## Current status

| Item | State |
|---|---|
| Current phase | **Phase 4 — Community and support: COMPLETE, awaiting owner review** |
| Next phase | Phase 5 — QA and deployment (do not start until owner approves Phase 4) |
| Active branch | `feature/kisi-poultry-republic` |
| Production build | **Passing** — 56 static pages + 3 API routes, `npm run build` exit 0 (2026-07-17) |
| Lint / typecheck | Passing — ESLint exit 0, `tsc --noEmit` clean (2026-07-17) |
| Payments | Structurally complete, **TEST MODE ONLY** — live locked in code (see docs/DONATION_INTEGRATION.md status block); runtime-verified honest 503 without keys |
| 3D lazy-load | Verified — three.js chunk referenced by no page HTML; on-demand only |
| Tests | No unit-test runner yet; API endpoints smoke-tested against a real `next start` server this session (results in PROGRESS session 4 log) |

## Phase checklist

- [x] Phase 1 — Discovery and architecture (session 1)
- [x] Phase 2 — Core website (session 2)
- [x] Phase 3 — Interactive world (3D farm) (session 3)
- [x] **Phase 4 — Community and support** (session 4)
- [ ] Phase 5 — QA and deployment

## Session log

### Session 4 — 2026-07-17 (Phase 4)

**Owner decision at phase start:** Phase 3 approved; build community &
support with payments in test/sandbox mode only.

**Done:**
- **Payments**: `lib/payments/` — provider-agnostic `PaymentProvider`
  interface, Paystack adapter (hosted checkout redirect only; timing-safe
  HMAC-sha512 webhook verification). **Live-mode lock**: hard-coded
  `LIVE_PAYMENTS_UNLOCKED = false` (no env var can flip it) + non-test keys
  additionally require `PAYMENTS_ALLOW_LIVE=true`. Route handlers:
  `POST /api/support/checkout` (zod-validated, rate-limited,
  server-resolved amounts) and `POST /api/support/webhook`
  (signature-verified, logs only, no PII persisted). `.env.example` with
  placeholder keys committed; real env files git-ignored.
- **Support page finalized**: 8 tiers (feed, water, vet, housing, solar,
  senior hens, education, sponsor-a-chicken) with kind labels
  (farm-support / sponsorship), "not charitable, not tax-deductible"
  wording, not-ownership clause, amounts deliberately unset ("Amount set
  at launch"), live checkout closed with the server's honest 503 surfaced
  in the UI; `/support/terms` draft (payment nature, no-ownership,
  security, refunds placeholder, privacy, honest reporting); transparency
  section with zero invented figures ("awaiting real records").
- **Newsletter**: validated + honeypot + rate-limited endpoint and form
  (home page); honestly stores nothing until a list provider is chosen.
- **Polls**: reusable fictional-entertainment Poll component
  (localStorage-only votes via useSyncExternalStore, no published tallies,
  non-binding labeling on its face) — presidential approval on
  /republic/presidency, breakfast-time on /republic/assembly.
- **Story relationships**: `/republic/stories` — all 5 arcs rendered as
  serials with cast chips; arc metadata + `storyArcs()` grouping in
  lib/content (missing arc metadata fails the build). Nav/sitemap wired.
- **Sports expansion**: 4 more results (incl. the court-ordered replay),
  upcoming fixtures, top scorers; sports page sections added.
- **Gates (actual)**: `tsc --noEmit` exit 0; `npm run lint` exit 0;
  `npm run build` exit 0 (56 static pages + 3 ƒ API routes). Runtime smoke
  test against `next start -p 3156`: checkout without keys → 503
  `payments-not-configured`; newsletter valid → 200 `{ok, stored:false}`;
  invalid email → 400; unsigned webhook → 503; /republic/stories and
  /support → 200.

**Not done (Phase 5):** sandbox end-to-end with real sk_test_ keys (needs
owner's Paystack test account), newsletter provider, sponsor wall,
Prettier + unit tests, a11y/browser/perf review, deployment.

### Session 3 — 2026-07-17 (Phase 3)

**Owner decision at phase start:** Phase 2 approved; proceed to the
interactive world; add R3F/motion as real dependencies now that they're
needed.

**Done:**
- Deps: `three@0.185`, `@react-three/fiber@9.6`, `@react-three/drei@10.7`
  (OrbitControls only), `motion@12` (panel transitions, reduced-motion
  aware), `@types/three`.
- `site/lib/mapData.ts` — **single source of truth** for 18 hotspots shared
  by 3D and 2D: id, kind, world label (fact/fiction/mixed/vision), percent
  coordinates, story description, real-farm practice note, links to real
  routes, resident chicken ids. SW-Nigeria realism encoded: E–W open-sided
  coops, foot-bath at the gate, raised feed store, quarantine set apart,
  drainage, shade trees, solar.
- `site/components/map/FarmMap3D.tsx` — fully procedural low-poly 3D farm
  (no external models/textures): 17 building kinds, decorative shade trees,
  paths, resident chicken figures colored from their content palettes,
  hover + click selection, gold selection ring. `frameloop="demand"`,
  capped dpr, low-power GL, no damping loop, canvas `aria-hidden`.
- `site/components/map/Map2D.tsx` — illustrated 2D plan from the SAME data;
  every hotspot is a real button (keyboard + screen-reader friendly).
- `site/components/map/MapExperience.tsx` — orchestrator: starts on 2D,
  "Enter the 3D farm" lazy-loads the R3F chunk on demand via
  `next/dynamic` (ssr:false); WebGL capability read via
  `useSyncExternalStore` (lint-clean, hydration-safe) — when absent the 3D
  toggle disables with an explanation and 2D carries everything; detail
  panel (motion, respects `useReducedMotion`) with world badge, story,
  realism note, resident links, and route links; accessible "All locations"
  index shared by both modes; `aria-live` panel region.
- `site/app/republic/map/page.tsx` — server page enriches hotspot residents
  from the content system (unknown ids fail the build), passes plain data
  to the client. Wired into Header (Republic menu), Republic landing card,
  home-page teaser section, and sitemap.
- Gates: `tsc --noEmit` clean; ESLint exit 0 (after replacing a
  setState-in-effect WebGL probe with `useSyncExternalStore`); production
  build exit 0, 54/54 pages. Lazy-load verified by inspecting `.next`:
  the only chunk containing three.js (~888 KB raw) is referenced by no
  page HTML — it loads purely on demand. No sound anywhere; no unlicensed
  assets; the legacy root `index.html` was not touched or referenced.

**Not done (later phases):** day/night toggle and guided tour mode (nice-to-
haves in the 3D plan — logged for Phase 5 polish); payments/newsletter/polls
(Phase 4).

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
4. If Phase 3 has been approved by the owner, begin **Phase 4 — Community
   and support** per `docs/DONATION_INTEGRATION.md`: support tiers content +
   page copy finalization (legal wording still pending owner's registration
   status — sandbox only), payment abstraction + Paystack adapter in test
   mode, newsletter, entertainment polls (clearly non-binding), sports data
   expansion, and transparency reporting.
5. Keep `index.html` (legacy Agric City masterplan) untouched and
   unreferenced — it is a separate historical artifact (owner decision,
   2026-07-17).
