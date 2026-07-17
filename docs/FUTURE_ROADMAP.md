# FUTURE_ROADMAP.md — Beyond the First Release

## Near term (during/just after v1 phases)

- **Phase 2** — core website (pages, components, demo content).
- **Phase 3** — 3D farm world + 2D fallback (see 3D_WORLD_PLAN.md).
- **Phase 4** — support flow (sandbox), newsletter, polls, sports tables,
  relationship graphs, transparency reporting.
- **Phase 5** — QA (a11y, mobile, browsers, performance, security, SEO),
  production build, deployment, custom domain.

## Post-v1 backlog (prioritized)

1. **Real flock onboarding** — replace 12 demo characters with real chickens
   (photos, names, records from the farm workbooks the owner approves for
   publication); retire demo badges.
2. **Editorial cadence tooling** — lightweight "new article / new milestone /
   new match" generators (Claude-assisted scripts) so The Coop Times publishes
   weekly without touching components.
3. **Headless CMS evaluation** — if the owner wants GUI editing without git:
   Sanity or Payload; content models already map cleanly (Zod → CMS schema).
4. **Localization v2** — Yoruba first, then Nigerian Pidgin, via next-intl
   message files + human editorial review; never auto-published machine
   translation.
5. **Newsletter automation** — "This Week in the Republic" digest from the
   week's content.
6. **RSS/podcast experiments** — Coop Times RSS; possibly audio "presidential
   addresses."
7. **Privacy-conscious analytics** — Plausible or Umami; event plan per brief
   §18 (profile views, most-followed chickens, 3D engagement, support clicks,
   Agric City interest). No fabricated metrics, ever.
8. **Sponsor experience** — sponsor wall, per-chicken update emails,
   printable "sponsorship certificate" (clearly not ownership).
9. **Education pack** — school-facing pages: how eggs happen, welfare,
   biosecurity; ties to Youth & Chick Development ministry.
10. **Elections event** — a scheduled Republic general election as a seasonal
    content event (polls are entertainment-only, clearly labeled).

## Agric City expansion (long term)

The architecture reserves route groups and content types so each new vertical
is additive: crops, livestock, hatchery, feed mill, processing, cold storage,
training/agritourism (booking flows), research partnerships, marketplace,
investment/franchise pages. Each vertical follows the same fact/fiction
discipline: real operations get fact pages; the Republic can satirically
"annex new territories" as the farm actually grows — fiction always trailing
real, verified expansion, never preceding it. The legacy Agric City 3D
masterplan remains available as a historical vision artifact, and the
`/agric-city` masterplan visual is updated to current/in-development/proposed
status as reality changes.

## Explicit non-goals (v1)

User accounts/comments (moderation cost), live chat, e-commerce for eggs
(future marketplace), native apps, real-time data feeds from farm sensors
(Farm Intelligence workbook integration is a fascinating later idea — only
with owner consent on what's publishable).
