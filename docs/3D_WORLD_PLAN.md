# 3D_WORLD_PLAN.md — Interactive Farm World (Phase 3 plan, written in Phase 1)

Stylized low-poly 3D map of the Republic at `/republic/map`, built with React
Three Fiber + drei. It is the bridge between worlds: real infrastructure
(poultry houses, water, solar) and fictional institutions (Presidential Coop,
Coop Assembly) share one map, each hotspot labeled fact or fiction.

Note: the Phase 3 map is an original build for this project (per the owner,
the new site is fully separate from the legacy root `index.html`). The
general interaction pattern of click-a-zone → side panel remains a good UX
model, implemented fresh in R3F so hotspots open real routes (chicken
profiles, ministry pages).

## Locations (hotspots)

| Location | World | Links to |
|---|---|---|
| Main entrance & farm sign | fact | About |
| Poultry houses (x N per real farm) | fact | Egg Life, flock filter by house |
| Presidential Coop | fiction | Presidency |
| Coop Assembly chamber | fiction | Assembly |
| Cabinet building & ministry row | fiction | Government/ministries |
| Egg collection center | fact | Egg Census |
| Feed storage | fact | Feed & Agriculture ministry (dual-label) |
| Water tanks & borehole | fact | About §water |
| Solar array | fact | Energy & Solar ministry (dual-label) |
| Veterinary & quarantine area | fact | Health ministry + biosecurity explainer |
| Sports field | fiction | Sports |
| Social square & shade trees | fiction | Social Life |
| Mascot house | placeholder | Mascot |
| Farm office | fact | Contact |
| Security post & perimeter | fact (low detail by policy) | — |
| Drainage channels | fact | sustainability note |
| Agric City expansion zone (hazy horizon) | vision | /agric-city |

Layout reflects real SW-Nigeria poultry practice: E–W house orientation for
heat, open-sided ventilated houses under generous roof overhangs (heavy rain),
shade trees, raised stores for feed protection, quarantine separated downwind/
down-slope, footbaths at entries, predator-proof runs, solar lighting,
practical worker/feed/egg/waste circulation routes. Imaginative, but never
depicting unsafe practice as ideal. Real farm layout facts needed from owner
(see CONTENT_CHECKLIST) — until then the map is explicitly a stylized
impression, not a site plan.

## Interaction

Orbit/zoom/pan (damped, clamped) · tap/click hotspot → info card → deep link ·
"tour mode" camera path hitting each institution · day/night toggle (solar
lights on) as a small delight. Characters appear as simple stylized chicken
meshes at their workplaces; clicking opens the profile.

## Technical requirements (hard)

- **Lazy-loaded** route chunk; zero 3D bytes on other pages.
- **2D fallback**: illustrated SVG map with identical hotspots — shown when
  WebGL is unavailable, on `prefers-reduced-motion` + user choice, on very
  low-end devices (heuristic), and as the `noscript`/SEO representation.
- Mobile-first controls (touch orbit, big hit targets), keyboard navigation
  (tab between hotspots, enter to open) via accessible DOM overlay — hotspot
  list is real HTML, not just meshes.
- No autoplay audio. Performance budget: < 1.5 MB total for models+textures,
  low-poly procedural/original assets only (no unlicensed models), draco/ktx2
  compression, `<Suspense>` + progressive loading, target 60fps mid-range /
  30fps low-end Android.
- All copy/labels come from the same content layer as the rest of the site.

## Build order (Phase 3)

1. Grey-box terrain + camera rig + hotspot system + DOM overlay a11y.
2. 2D SVG fallback (shares hotspot data).
3. Low-poly buildings (procedural, brand palette), trees, water, solar.
4. Character sprites/meshes + profile deep links.
5. Tour mode, day/night, polish, performance pass on a real low-end device.
