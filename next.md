# next.md — Farm shop: pick up here

Checkpoint: **2026-10-03**. The 5 asks below are **built and verified** on branch
`feature/kisi-poultry-republic` (app: `apps/farm` -> farm.kisi.africa), but NOT
committed, NOT pushed, and NOT live yet. Full detail in `docs/LESSONS.md`
(session 2026-10-03) and `docs/CONTENT_CHECKLIST.md`.

---

## The 5 things we set out to do (all BUILT ✅)

1. ✅ **Order chicken meat on the homepage hero** — new "Order chicken meat" CTA
   + market-building copy. New `/meat` page.
2. ✅ **Waitlist / calendar for meat delivery** — a "Pick your day" date picker
   in the meat order form (buyer picks any day from tomorrow). The chosen day is
   emailed with the order.
3. ✅ **Connect orders to WhatsApp** — eggs, day-old, meat AND reps all have an
   "Order on WhatsApp" button (opens WhatsApp with the message pre-typed).
4. ✅ **Clean up the site (simple/minimal, shop-first)** — products-first nav,
   home trio = eggs/meat/chicks, tidy footer, chicks page got a real order form.
5. ✅ **Sales reps sign-up** — new `/sell` page + form -> `/api/reps` (emails the
   farm). No fee, no money collected.

Gates passed: typecheck · eslint · tests 17/17 · production build.

---

## TO DO to make it fully live (owner input needed)

- [ ] 🔴 **WhatsApp number** — add `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel,
      digits only, full international form (e.g. `2348012345678`), **then
      redeploy** (it's baked in at build time). Until set, all WhatsApp buttons
      stay hidden (no fake number is ever linked).
- [ ] 🔴 **Email delivery** — set `FARM_INBOX` + `RESEND_API_KEY` in Vercel so
      meat/egg/chick orders (`/api/orders`) and rep applications (`/api/reps`)
      actually arrive. Without them the forms honestly 503 and point to WhatsApp.
- [ ] 🟡 **Meat prices / breeds / weights** — supply a price list (or range).
      Right now `/meat` says "set per order, we quote you when you book".
- [ ] 🟡 **Meat production / delivery days** — if you only process on certain
      days (e.g. Saturdays), tell us and we'll restrict the calendar to those.
- [ ] 🟡 **Sales-rep terms** — commission / margin / supply terms, so we can add
      a short "how it works" section to `/sell`.
- [ ] 🟢 **Pickup vs delivery for meat** — confirm which areas you deliver to.

---

## TO DO to ship the code

- [ ] Commit the work to `feature/kisi-poultry-republic` (small logical commits)
      — Claude can do this on request, after an expert design/dev subagent audit
      of the diff (standing rule).
- [ ] Push the branch.
- [ ] **Go live** (only the owner can move `main`). In the Claude Code prompt:
      `!gh pr create --repo VictorKilanko/kisi --base main --head feature/kisi-poultry-republic --fill`
      then merge the PR (or merge the branch in GitHub). Vercel deploys `main`.

---

## Files touched this session (for reference)

New: `app/meat/page.tsx`, `app/sell/page.tsx`, `app/api/reps/route.ts`,
`components/WhatsAppButton.tsx`, `components/RepSignupForm.tsx`.
Changed: `app/page.tsx`, `app/chicks/page.tsx`, `app/sitemap.ts`,
`components/Header.tsx`, `components/Footer.tsx`, `components/OrderForm.tsx`,
`app/api/orders/route.ts`, `lib/site.ts`, `.env.example`, `tests/api.test.ts`.
