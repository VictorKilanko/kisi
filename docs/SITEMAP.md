# SITEMAP.md — Route Architecture

Routes map 1:1 to Next.js App Router segments. Two top-level worlds share one
global navigation: **the Farm (fact)** and **the Republic (fiction)**, with the
boundary always visible.

## Global navigation (proposed)

- **Home**
- **Meet the Flock**
- **The Republic** (dropdown: Presidency · Government · Coop Assembly · The Coop Times · Sports · Social Life)
- **Egg Life**
- **The Farm** (dropdown: About Kisi Farm · Gallery · Agric City Vision)
- **Support the Chickens** (highlighted CTA)
- **Visit / Contact**

Footer: disclaimer, privacy, terms, support terms, newsletter signup, social
links, mascot link, sitemap.

## Route table

| Route | Page | World | Phase |
|---|---|---|---|
| `/` | Home — hero, tagline, Enter the Republic / Meet the Flock CTAs, president's welcome, Coop Times ticker, featured chicken, latest egg milestones, cabinet strip, National Egg Census, sports results, transparency block, 3D preview, gallery strip, Agric City teaser, newsletter, support CTA | Both (labeled) | 2 |
| `/flock` | Meet the Flock — searchable/filterable directory (name, age, breed, gender, office, laying status, personality, party, social group, team, status incl. memorial) | Fiction frame, real animals | 2 |
| `/flock/[slug]` | Individual chicken profile (full model per `CONTENT_MODEL.md`) | Both (labeled per field) | 2 |
| `/republic` | Republic landing — what the Republic is, disclaimer, doors into each institution | Fiction | 2 |
| `/republic/presidency` | The Presidency — president, VP, First Hen, staff, speeches, executive orders, weekly diary, approval poll, gallery | Fiction | 2 |
| `/republic/government` | Cabinet directory + org chart + current priorities + National Feed Budget | Fiction | 2 |
| `/republic/government/[ministry]` | Ministry page — identity, minister, responsibilities, announcements, projects | Fiction | 2 |
| `/republic/assembly` | Coop Assembly — parties, representatives, bills, debates, votes, elections, campaign posters, political calendar | Fiction | 2 |
| `/republic/assembly/bills/[slug]` | Bill detail (e.g. Clean Water and Healthy Feathers Act) | Fiction | 2 |
| `/news` | The Coop Times — front page, categories (Politics, Society, Sports, Egg Economy, Health, Culture, Opinion, Interviews, Farm Announcements) | Mixed (category-labeled) | 2 |
| `/news/[slug]` | Article page (template per brief §7.7 incl. author, related characters/ministries, share image, disclaimer) | Mixed | 2 |
| `/eggs` | Egg Life — milestone timeline, first-egg celebrations, weekly egg diary, National Egg Census, laying-status board, education on natural laying cycles, senior hen recognition | Fact-forward, warm frame | 2 |
| `/republic/social` | Social Life — friendships, hatch-days, clubs, festivals, social calendar | Fiction | 2 (light) / 4 |
| `/republic/sports` | Sports — leagues, teams, fixtures, results, tables, stats, hall of fame | Fiction | 2 (light) / 4 |
| `/republic/sports/teams/[slug]` | Team page | Fiction | 4 |
| `/mascot` | Farm Mascot — placeholder until owner supplies details | Both | 2 |
| `/about` | About Kisi Farm — story, mission, location, operation, team, welfare, sustainability, solar, water, biosecurity, plans, community | Fact | 2 |
| `/gallery` | Gallery — portraits, farm life, events, infrastructure, behind the scenes | Fact | 2 |
| `/support` | Support the Chickens — tiers, sponsor-a-chicken, transparency; sandbox checkout | Fact (real money!) | 4 |
| `/support/terms` | Support terms, refunds, privacy of payments | Fact | 4 |
| `/visit` | Visit / Contact — forms (general, partnership, media, schools, future visits), socials, location-at-safe-precision | Fact | 2 |
| `/agric-city` | Kisi Agric City — long-term vision with strict current / in-development / proposed labeling; masterplan visual; may link legacy 3D masterplan | Fact + declared vision | 2 |
| `/republic/map` | Interactive 3D farm (R3F, lazy-loaded, 2D fallback) | Both — the bridge between worlds | 3 |
| `/legal/privacy`, `/legal/terms` | Legal pages (placeholder text flagged for review) | — | 2 |
| `/disclaimer` | Full fact-vs-fiction disclaimer | — | 2 |

## System routes

- `sitemap.xml`, `robots.txt`, per-page Open Graph images, RSS for The Coop
  Times (`/news/feed.xml`, Phase 4).

## Expansion reserved (Agric City future)

`/crops`, `/livestock`, `/training`, `/marketplace`, `/research`, `/visit/stay`
— not built in v1; the route architecture and nav component must accept new
top-level sections without redesign.

## Internal linking rules (SEO + storytelling)

- Every article links the characters and ministries it mentions; every profile
  lists its articles (bidirectional, generated from content relationships).
- Every Republic page carries the fiction disclaimer component.
- Every fact page can deep-link into the fiction ("Meet the hens who laid
  these eggs") and vice versa ("Visit the real farm behind the Republic").
