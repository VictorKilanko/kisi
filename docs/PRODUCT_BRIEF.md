# PRODUCT_BRIEF.md — Kisi Farm & The Republic of Kisi

Working summary of the master creative & technical brief, plus the Phase 1
architecture decisions. The full brief is the authoritative source; this file
records how we are executing it.

## 1. What we are building

One website, two clearly separated identities:

1. **Kisi Farm** (real) — a credible, transparent poultry farm in southwestern
   Nigeria: operations, welfare, sustainability, team, future plans. No
   fabricated facts, ever; missing facts use marked placeholders tracked in
   `CONTENT_CHECKLIST.md`.
2. **The Republic of Kisi** (fictional) — a character-driven satirical
   chicken nation: a president and cabinet, a Coop Assembly, The Coop Times
   newspaper, sports leagues, social life, egg milestones. Every chicken is an
   individual character with a profile, relationships, and ongoing storylines.

Primary tagline (pending owner sign-off): **"Where Every Chicken Has a Story."**

The fact/fiction boundary is a first-class design requirement: a persistent
visual language (status badges, disclaimer component, distinct "Republic"
styling) tells visitors at all times whether they are reading farm fact or
Republic fiction.

## 2. Audiences (priority order for v1)

1. Nigerians who enjoy humor, storytelling, and political satire
2. Families/children following individual chickens
3. Future customers and chicken sponsors/supporters
4. International visitors interested in African agriculture
5. Partners, investors, schools, diaspora, future tourists

## 3. Technical plan (Phase 1 decision)

### Existing code audit

The repo contained one prior build: `index.html` (~57 KB) + `README.md` — a
**single-file Three.js r128 site** for the "Kilanko Pan-African Agricultural
City" 7-acre resort masterplan (vanilla JS, CDN scripts, Google Fonts, zero
build tooling). It is well-made for what it is, but a single static HTML file
cannot support the brief's requirements: ~15 content-driven sections, a
searchable character directory, structured content an owner can edit, SEO
metadata per page, localization architecture, and a payments abstraction. There
is therefore **no existing architecture to preserve as the base**; the legacy
file is preserved as an asset (see §5, Decision D3).

### Chosen stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router), static-first** | React-based per brief; file-based routing maps 1:1 to the sitemap; static generation (SSG) gives fast pages on slow Nigerian mobile connections; per-page metadata API covers the SEO requirements; serverless functions available later for forms/payments; first-class GitHub → Vercel continuous deployment. |
| Language | **TypeScript** | Brief requires it; typed content models are the backbone of the character system. |
| Styling | **Tailwind CSS v4 + design tokens (CSS custom properties)** | Utility-first per brief; tokens defined once in `BRAND_SYSTEM.md` drive both Tailwind theme and any raw CSS; fast to keep consistent. |
| UI primitives | **Radix UI primitives (via shadcn-style local components)** | Accessible dialogs/menus/tabs without a heavy dependency; components live in-repo and are restylable. |
| Motion | **Framer Motion (`motion`)** | Restrained animation with built-in `prefers-reduced-motion` support. |
| 3D | **React Three Fiber + drei** (Phase 3, lazy-loaded) | Per brief; integrates with React state so clicking a coop can open a chicken profile; code-split so the core site never pays for it. |
| Content (v1) | **Structured TypeScript/JSON data in `/content` + MDX for articles** | Git-based CMS: zero cost, no vendor, versioned, works offline, and Claude Code can maintain it with the owner. Content is validated with **Zod** schemas so bad data fails the build, not the visitor. Migration path to a headless CMS (e.g. Sanity/Payload) is documented in `FUTURE_ROADMAP.md` if/when the owner needs a GUI. |
| Images | **next/image** with responsive sizes, AVIF/WebP | Performance on low-bandwidth mobile is a hard requirement. |
| Forms | Serverless route handlers + provider (e.g. Resend for email) — Phase 4 | Keys in env vars only. |
| Payments | Provider-agnostic abstraction; **Paystack first candidate** (NGN + intl cards), sandbox-only until launch | See `DONATION_INTEGRATION.md`. |
| Testing | **Vitest** (unit/content-schema tests) + **Playwright** (smoke/a11y) | Content validation is the highest-value test surface for this site. |
| Lint/format | ESLint + Prettier | Standard. |
| Hosting | **Vercel free tier** (primary) via GitHub; static-export fallback documented for GitHub Pages | Continuous deployment from GitHub per brief. |
| i18n | `next-intl`-ready structure: all UI strings in `/messages/en.json` from day one | English-only v1; Yoruba/Pidgin later without rework. |

### Architecture principles

- **Static-first**: every page pre-rendered; JS is enhancement. Site remains
  readable with JS disabled except deliberately interactive features (3D, polls).
- **Content drives pages**: pages are templates over `/content`; adding a
  chicken or article never touches component code.
- **Expansion-ready**: routes and content models are namespaced so future Agric
  City verticals (crops, livestock, training…) slot in as new content types and
  route groups, not rebuilds.
- **Progressive enhancement for 3D**: `/republic/map` lazy-loads R3F, offers a
  2D illustrated fallback, and the whole site works without WebGL.

### Planned repository structure (Phase 2 scaffold)

```
/                      # repo root
  index.html           # LEGACY: Agric City 3D masterplan (preserved, untouched)
  README.md
  docs/                # all project documentation (this folder)
  site/  — OR root —   # Next.js app (final placement: see Decision D4)
    app/               # routes per docs/SITEMAP.md
    components/        # per component inventory (brief §14)
    content/           # chickens/, ministries/, articles/, sports/, ...
    lib/               # content loaders, zod schemas, payment abstraction
    messages/          # en.json (i18n-ready UI strings)
    public/            # static assets, og images
```

## 4. Success criteria (v1)

Definition of done follows the brief (§21) verbatim: coherent brand, responsive
nav, polished home, searchable flock directory, reusable profiles, government
pages, news system, egg milestones, sports & social sections, mascot section,
support flow (sandbox), about/contact, Agric City page, 3D prototype with
fallback, accessibility, SEO foundations, legal placeholders, sample content,
docs, passing production build, deployment instructions.

## 5. Key decisions log

- **D1 — Stack**: Next.js/TS/Tailwind/R3F/file-based content, as justified
  above. The prior build had no framework to inherit.
- **D2 — Git**: repo initialized in this folder; **all** work on
  `feature/kisi-poultry-republic`; no commits exist on main/master. `.xlsx`
  farm workbooks, local instruction/notes files, and local tool settings are
  git-ignored (private data / contains a credential / private machine paths).
- **D3 — Legacy site (updated per owner, 2026-07-17)**: the Agric City
  `index.html` is preserved unchanged at repo root as a historical artifact,
  but the new site is a **separate project** and does not link, embed, or
  reference it. The `/agric-city` route is built fresh and native with
  mandatory operating / in-development / proposed labeling (brief §7.16).
  The legacy file is never deleted.
- **D4 — App placement (deferred to Phase 2 start)**: because `index.html`
  occupies the repo root, the Next.js app will live in a `site/` subdirectory
  (Vercel supports a root directory setting), keeping the legacy file
  untouched at root. If the owner prefers, the legacy file can instead move to
  `legacy/agric-city/index.html` — a move, not a deletion — and the app can own
  the root. Default: `site/` subdirectory, zero disturbance.
- **D5 — Content system**: Git-based structured content (TS/JSON + MDX +
  Zod), not a headless CMS, for v1. Rationale: cost ₦0, no accounts/secrets,
  versioned storytelling, easiest for a Claude-assisted editing workflow.
  Revisit at Phase 4 review.
- **D6 — Fiction boundary**: a sitewide `<Disclaimer>` + `FactBadge`/
  `FictionBadge` component pair is mandatory in the design system; every
  Republic page carries the fiction notice; every farm-fact block can cite its
  source or its placeholder status.
- **D7 — Demo content**: 12 demo chickens (see `CHARACTER_SYSTEM.md`) ship
  with `isDemo: true` in the content model, rendering a visible "Sample
  content" badge until replaced with real flock data.
- **D8 — Security**: the GitHub token found in the local instruction file is
  treated as compromised; flagged for revocation in `CONTENT_CHECKLIST.md`;
  the file is git-ignored until sanitized. No secrets in the repo; payments
  sandbox-only until launch review.
