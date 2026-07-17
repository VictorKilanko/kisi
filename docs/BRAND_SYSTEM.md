# BRAND_SYSTEM.md — Brand Architecture & Design Tokens (Phase 1 planning)

Status: **proposed direction — needs owner approval before Phase 2 visual
build.** Visual explorations (seal, flag, ministry icons, org chart, layouts)
should be routed through Claude Design per the working agreement, starting from
these tokens.

## 1. Brand architecture

A two-tier house of brands with one shared foundation:

```
KISI FARM  (master brand — real, credible, agricultural)
│   voice: warm, transparent, professional, proud, Nigerian
│
└── THE REPUBLIC OF KISI  (sub-brand — fictional nation, satirical, cinematic)
    │   voice: dignified deadpan; a national broadcaster covering chickens
    │   with complete seriousness — the humor comes from the contrast
    ├── The Coop Times          (fictional national newspaper)
    ├── Government identities   (seal, ministry icons, official badges)
    ├── Sports identities       (league + team emblems)
    └── Mascot identity         (pending owner details)
```

Rule: the Republic always visually "belongs to" Kisi Farm (shared palette
foundation, shared type), but carries its own official paraphernalia (seal,
gold rules, document-like layouts). Fact pages are clean and editorial; fiction
pages are ceremonially official. The contrast is itself the disclaimer's ally.

### Tagline system
- Primary (pending sign-off): **"Where Every Chicken Has a Story."**
- Supporting (candidates): "A nation of hens. A farm with a heart." ·
  "Proudly laid in Nigeria." · "Fresh eggs. Fresher politics." ·
  "The world's most transparent poultry government."

## 2. Color tokens

Palette per brief: deep agricultural green, warm terracotta earth, sunlight
gold, eggshell cream, charcoal, deep indigo. All pairings below target WCAG AA
(4.5:1 body text); verify contrast in implementation.

```css
:root {
  /* Core */
  --kisi-green-900: #14331F;   /* deepest green — footers, dark surfaces */
  --kisi-green-700: #1F5130;   /* primary brand green */
  --kisi-green-500: #2E7D46;   /* interactive green */
  --kisi-earth-700: #8A3E1F;   /* terracotta deep */
  --kisi-earth-500: #C05621;   /* terracotta primary */
  --kisi-gold-500:  #D9A02B;   /* sunlight gold — Republic ceremonial accent */
  --kisi-gold-300:  #F0C75E;   /* gold light */
  --kisi-cream-100: #FAF5E9;   /* eggshell — default light background */
  --kisi-cream-200: #F1E8D4;   /* eggshell shade — cards */
  --kisi-charcoal-900: #23231F;/* body text on light */
  --kisi-charcoal-600: #55534B;/* muted text */
  --kisi-indigo-800: #23305E;  /* deep indigo — Coop Times & official docs */
  --kisi-white: #FFFFFF;

  /* Semantic */
  --surface: var(--kisi-cream-100);
  --surface-card: var(--kisi-white);
  --surface-official: var(--kisi-indigo-800); /* Republic documents */
  --text-body: var(--kisi-charcoal-900);
  --text-muted: var(--kisi-charcoal-600);
  --accent-fact: var(--kisi-green-700);    /* farm-fact UI */
  --accent-fiction: var(--kisi-gold-500);  /* Republic UI */
  --status-demo: var(--kisi-earth-500);    /* "sample content" badges */
}
```

World-coding rule: **green header rules/badges = farm fact; gold + indigo
official styling = Republic fiction; terracotta = demo/placeholder flags.**
Consistent across every component.

## 3. Typography tokens

| Role | Face (proposed) | Fallback | Notes |
|---|---|---|---|
| Display / editorial titles | **Fraunces** (variable) | Georgia, serif | Warm, characterful, premium; distinct from the legacy site's Playfair |
| Body / UI | **Inter** (variable) | system-ui, sans-serif | Highly readable, cheap to load |
| Republic official / Coop Times headlines | Fraunces with tighter optical settings + small-caps letterspaced kickers | — | "Government gazette" flavor comes from typesetting (rules, caps, numerals), not a third font family |

Two families total — a performance decision for low-bandwidth mobile. Scale
(fluid, clamp-based): `display 44–72px · h1 32–48 · h2 26–36 · h3 20–26 ·
body 16–18 · small 14 · kicker 12 caps +0.14em`. Line-height 1.6 body, 1.1–1.2
display. Minimum body size 16px.

## 4. Other tokens

- **Spacing**: 4px base scale (4, 8, 12, 16, 24, 32, 48, 64, 96).
- **Radii**: 4 (badges), 8 (cards), 16 (feature cards), full (pills/avatars).
- **Shadows**: two levels only (card, overlay); rely on borders + color first.
- **Motion**: 150ms (micro), 300ms (panels), 600ms (cinematic reveals);
  everything honors `prefers-reduced-motion`.
- **Texture**: subtle woven/geometric pattern inspired by southwestern
  Nigerian design traditions, used sparingly as section dividers and the seal's
  border — to be explored in Claude Design; must stay respectful, never
  caricature.

## 5. Identity assets to design (Claude Design queue — Phase 2)

1. **Kisi Farm logotype** — wordmark + simple egg/leaf mark; green on cream.
2. **Republic of Kisi national seal** — circular; rooster passant, egg,
   grain sprigs; motto candidate: *"Unity, Feed, Progress."* Gold + indigo.
3. **National flag** — proposal to explore: green–gold–green vertical
   triband with a single egg-and-star charge (must read at 24px).
4. **Ministry icons** — 12–16 line icons on a shared 24px grid, one visual
   family (egg, feed sack, stethoscope/cross, shield, ball, water drop, sun
   panel, chick, drum, gavel...).
5. **The Coop Times masthead** — indigo newspaper nameplate, serif smallcaps,
   est.-line joke, column rules.
6. **Official badges** — office insignia frames for profile portraits
   (president: gold laurel; ministers: silver ring + ministry icon; assembly:
   indigo bar; opposition: terracotta bar).
7. **Egg milestone icons** — first egg, 50th, 100th, laying break,
   retirement crown, memorial feather (handled gently).
8. **Sports emblems** — league crest + 4–6 team badges.
9. **Mascot identity** — blocked on owner input (species/photos).

All original work; no real party names/logos; no unlicensed assets.

## 6. Voice & editorial rules

- Republic copy is **deadpan-official**: press-release cadence, honorifics
  ("Her Excellency"), bureaucratic overprecision ("the 7:00 a.m. Breakfast
  Reform Act"). Never mean-spirited; never mocks real, identifiable people.
- Farm copy is **first-person plural, plain, warm**: "we", short sentences,
  no agricultural jargon without explanation.
- Welfare rule: illness, aging, and death are covered with dignity —
  "recovering", "retirement", "memorial" statuses; no distress played for
  laughs; hens are never framed as production machines.
- Fiction disclaimer appears on every Republic page (component, not an
  afterthought).
