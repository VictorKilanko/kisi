# Kisi Farm & The Republic of Kisi

> **Where Every Chicken Has a Story.**
> The official website of Kisi Farm — a poultry farm in southwestern Nigeria —
> and of its fictional storytelling universe, **The Republic of Kisi**, a
> satirical chicken nation with a President, a cabinet, a Coop Assembly, a
> national newspaper, sports leagues, and an ever-growing cast of feathered
> characters.

**Status: Phase 2 (core website) complete — awaiting owner review before
Phase 3 (interactive 3D world).** All work is on the
`feature/kisi-poultry-republic` branch. The Next.js application lives in
`site/` (53 statically generated pages, passing production build); this repo
also contains the project documentation in `docs/` and a preserved,
unrelated legacy site (below).

## What this project is

Two clearly separated identities on one site:

- **Kisi Farm (real)** — transparent, credible information about the actual
  poultry operation: welfare, feeding, housing, water, solar, biosecurity, the
  team, and the long-term **Kisi Agric City** vision. Facts are never
  fabricated; missing information uses marked placeholders.
- **The Republic of Kisi (fiction)** — warm, dignified political satire and
  character-driven storytelling about the chickens themselves. Clearly labeled
  as fiction everywhere it appears.

## Documentation map

| Doc | Contents |
|---|---|
| `docs/PRODUCT_BRIEF.md` | Product summary, tech stack decision + rationale, key decisions log |
| `docs/SITEMAP.md` | Full route architecture |
| `docs/BRAND_SYSTEM.md` | Brand architecture, design tokens, identity asset plan |
| `docs/CONTENT_MODEL.md` | Structured content schemas (chickens, articles, ministries, …) |
| `docs/CHARACTER_SYSTEM.md` | Government structure, 12 demo characters, story arcs |
| `docs/3D_WORLD_PLAN.md` | Interactive 3D farm plan + accessibility/fallback strategy |
| `docs/DONATION_INTEGRATION.md` | Support/sponsorship legal framing + payments abstraction |
| `docs/FUTURE_ROADMAP.md` | Post-v1 backlog and Agric City expansion path |
| `docs/DEPLOYMENT.md` | Deployment plan (stub until Phase 5) |
| `docs/CONTENT_EDITING_GUIDE.md` | Owner editing recipes (stub until Phase 2) |
| `docs/PROGRESS.md` | Phase/session tracker — read first when resuming work |
| `docs/CONTENT_CHECKLIST.md` | Real-world info still needed from the farm owner |

## Stack (see PRODUCT_BRIEF.md for the full rationale)

Next.js 16 (App Router, static-first) · TypeScript · Tailwind CSS v4 ·
Git-based typed content (TS records, Zod-validated at build time) ·
React Three Fiber planned for the Phase 3 3D world (lazy-loaded, 2D
fallback) · Vercel via GitHub planned for hosting.

### Local development

```bash
cd site
npm install
npm run dev     # dev server
npm run lint    # ESLint
npm run build   # production build (also typechecks + validates content)
```

Requires Node.js 20.9+ (Node 22 LTS recommended).

## Important content rules

- The Republic of Kisi is **fictional satire**; the chickens are real animals
  at Kisi Farm. Every fictional page carries a disclaimer.
- Demo/sample content is flagged `isDemo` and visibly badged until replaced
  with real flock data.
- No real farm facts (numbers, certifications, partnerships) are ever
  invented. Gaps are tracked in `docs/CONTENT_CHECKLIST.md`.
- No secrets are committed to this repository.

---

## Legacy: Kilanko Pan-African Agricultural City (preserved, separate)

`index.html` at the repo root is the **original, fully self-contained
interactive 3D masterplan site** that preceded this project — preserved
unchanged (its original README is in git history at the legacy-import
commit). Per the owner, the new Kisi site is a **separate project** and does
not link to or reference this file; it remains in the repo purely as a
historical artifact of the earlier vision.

### Farm zones (legacy masterplan)

| Zone | Area | Key feature |
|------|------|-------------|
| Resort & Living Quarters | 1 acre | 5-star lodge, guest cottages, infinity pool |
| Poultry Farm | 1 acre | 4,000+ birds, automated feeding |
| Aquaponics Center | 1 acre | 4,000 fish + greenhouse vegetables |
| Livestock Paddock | 1 acre | Goats, sheep, cattle + biogas |
| Oil Palm Plantation | 2 acres | 200+ Tenera hybrids, on-site processing |
| Plantain & Yam Farm | 1 acre | 400 plants + 3,000 yam sets |

**Perimeter:** cashew trees all around (boundary + income crop).

### Using the legacy 3D map

Open `index.html` in a browser: **drag** to rotate, **scroll** to zoom,
**hover** a zone for its name, **click** a zone for the full detail panel.
Built with Three.js r128, vanilla JS/HTML/CSS, Google Fonts (Playfair Display
+ Inter), zero build tools.

> Note: these zone figures describe the *planned* masterplan vision, not
> current operations. The new site will always label current vs in-development
> vs proposed (see `docs/SITEMAP.md`, `/agric-city`).

---

*Southwest Nigeria · Built for Legacy · Now with a government of chickens.*
