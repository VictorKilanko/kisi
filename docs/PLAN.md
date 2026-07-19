# PLAN.md — the living build plan

**This is the guide. Read it first, every session.**
It says what we are building, what is done, and what is next. Update the status
markers as work completes — this file is the handoff between sessions.

Companion docs: `LESSONS.md` (what we learned, and gotchas), `CONTENT_CHECKLIST.md`
(what we still need from the farm owner), `PROGRESS.md` (phase history).

Status key: `[ ]` not started · `[~]` in progress · `[x]` done

---

## What Kisi is

**Kisi is a working poultry farm in southwestern Nigeria.** That is the business —
real birds, real eggs, real agriculture.

**The Republic of Kisi is the entertainment world built around the farm**, and the
chickens are its **influencers**: named characters with personalities, storylines and
followings of their own.

The entertainment is not a departure from the farm. It is what makes a Nigerian
poultry farm interesting to someone in Lagos, London or Chicago — and what turns
attention into egg orders, sponsored birds and merchandise that fund the flock.
Every follower the Republic gains is a potential customer for the farm.

**Never frame the farm as secondary.** Egg sales are a first-class feature. Content
follows real farm life rather than drifting into pure fiction — the authenticity is
the moat. Anyone can generate an animated chicken world; nobody else has these birds.

### House rules

- Stay in the world. No "fictional" labels, badges or disclaimers on the site — the
  audience understands storytelling without being told (see `LESSONS.md`).
- Except where money or safety is involved: Shop and Support pages say plainly what a
  payment buys, that sponsorship is not ownership, and that we never take card details.
- Never invent a real farm fact (production numbers, certifications, vet outcomes).
  Storytelling about the Republic is the point; invented *farm* facts are not.
- Work on `feature/kisi-poultry-republic`, never directly on `main`.
- Never commit secrets, tokens, or the private local machine path.

### Constraints

| | |
|---|---|
| Budget | Under $500 for six months (~$135 planned) |
| Sequencing | Platform first |
| Legal entity | CAC-registered Nigerian business — sponsorships and merch OK; never say "tax-deductible donation" |
| App | Installable web app (PWA), not native |
| Hosting | Migrating GitHub Pages → Vercel |

---

## Phase 1 — Vercel migration (Week 1–2) `[~] IN PROGRESS`

Restores the server. Without it, egg orders reach nobody.

- [x] `next.config.ts` — remove `output: "export"`, `basePath`, `trailingSlash`, `images.unoptimized`
- [x] Collapse the three hardcoded canonical URLs onto `NEXT_PUBLIC_SITE_URL` (`lib/site.ts`)
- [x] Restore the five API routes from git (`git show 821af70^:site/app/api/...`)
- [x] `lib/mail.ts` — Resend abstraction so submissions actually reach the farm
- [x] Wire `/api/orders` and `/api/wellwishes` to deliver email
- [x] Rewire the four forms back to `fetch` (`OrderForm`, `WellWishesForm`, `NewsletterForm`, `SupportCheckout`)
- [x] Swap `lib/rateLimit.ts` to Upstash Redis — the in-memory version does not work on serverless
- [x] Replace the Pages deploy workflow with `.github/workflows/ci.yml` (lint/typecheck/test/build)
- [x] `.env.example` documenting every variable
- [x] **CI green** — lint, typecheck, tests and the full server build all pass
- [ ] Connect the repo to Vercel, set env vars, verify preview deploy
- [ ] Buy the domain, point at Vercel, redirect `victorkilanko.com/kisi`

**Owner actions to finish Phase 1 — full walkthrough in `docs/VERCEL_SETUP.md`:**
1. Create a Vercel account, import `VictorKilanko/kisi`, **set Root Directory to `site`**
2. Sign up at resend.com → `RESEND_API_KEY`, and set `FARM_INBOX` to the farm's email
3. Create an Upstash Redis database → `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`
4. Buy the domain and point it at Vercel; set `NEXT_PUBLIC_SITE_URL` to match
5. Place a real egg order and confirm the email arrives — that is the real test

Until Vercel is connected, the GitHub Pages site stays live at its **last** deploy but
no longer updates — the static-export config it needed is gone.

## Phase 2 — CMS, follow loop, PWA (Week 3–6) `[ ]`

- [ ] **Decap CMS** at `/admin` — free, git-based. Highest-leverage item here: adding a
      chicken currently means hand-writing a ~20-field TS object *and* editing the other
      bird's `friends` array or the build fails. No writer will survive that.
      Scope: chickens, articles, egg milestones, timeline. Leave ministries/parties/sports in code.
- [ ] **Follow a chicken** — the influencer mechanic. Follow a bird, get notified when
      *that* bird has news. Per-bird follower counts (tells us who to feature and merch).
- [ ] **PWA** — manifest, icons, service worker, offline reading, push notifications

## Phase 3 — Livestream, social, revenue (Week 7–12) `[ ]`

- [ ] **Test farm uplink first** — 1.5–2 Mbps sustained upload is the bar for 720p
- [ ] **YouTube Live** embedded at `/live`, scheduled 30–60 min streams (morning feed,
      egg collection, dusk whistle). Do NOT build streaming infrastructure — it does not
      fit the budget and YouTube gives hosting, transcoding, CDN and archive free.
- [ ] `@RepublicOfKisi` on YouTube, X, Instagram — general audience, NOT "Made for Kids"
- [ ] Merch via print-on-demand (the Most Wanted poster is the obvious first product)
- [ ] Sponsor-a-chicken live (requires unlocking `lib/payments/index.ts:22`)

### Decision: two YouTube channels

Marking content **"Made for Kids"** (required by COPPA for genuinely child-directed
content) disables personalised ads, memberships, Super Thanks and **comments** — RPM
falls to roughly **$1–3 vs $5–15**. Comments are where a following forms, which is the
whole point of influencer birds.

- **`@RepublicOfKisi`** — main channel, general audience. Farm life, the birds, the
  Republic's politics, livestreams. Full monetisation, comments on.
- **`@KisiKids`** — later, only when preschool cartoons exist. Correctly designated
  Made for Kids, accepting the trade-off for that catalogue alone.

Mislabelling genuinely child-directed content as general-audience risks FTC penalties.

---

## Not in this plan (and why)

- **Physical toys** — manufacturing plus safety certification (ASTM F963/CPSIA, EN71)
  is five figures. For later: CPSC Small Batch Manufacturer exemption applies under
  7,500 units/year.
- **Studio animation** — low five figures. But the site already has original SVG art
  (portraits, the monitor lizard, the farm map); simple animated shorts from those
  cost nothing and test the format first.
- **Native app** — PWA first. Revisit when install numbers justify it.
- **Paid marketing** — organic only at this budget.

---

## Known blockers

| Blocker | Blocks | Owner action |
|---|---|---|
| Farm photos and video | All social content — this is the only thing I cannot do | Start collecting on a phone now |
| Resend + Upstash keys | Order delivery, rate limiting | Free-tier signups |
| Egg prices, crate sizes, delivery areas | Shop quoting real prices | Decide and send |
| Live payments lock (`lib/payments/index.ts:22`) | Sponsorships taking real money | Deliberate reviewed unlock after wording review |

---

## Verification (run before calling anything done)

```
cd site && npm run lint && npm run typecheck && npm test && npm run build
```

Plus, per phase: place a real egg order and **confirm the email arrives** (verify
delivery, not just a success message) · Paystack test keys end-to-end · exceed the rate
limit and confirm 429 · add a chicken via `/admin` without touching code · install the
PWA on Android and iOS.

**Node is not installed on this machine** — see `LESSONS.md`. CI on GitHub Actions is
currently the only place the gates actually run.
