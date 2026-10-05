# next.md — Farm shop: pick up here

Checkpoint: **2026-10-04**. The 5 asks are **built, verified, and SHIPPED** (PR #1,
`a3f7bae`), and the real WhatsApp order number is live (PR #2, `94c86de`). All on
farm.kisi.africa via Vercel. Full detail in `docs/LESSONS.md` and
`docs/CONTENT_CHECKLIST.md`.

---

## ⚠️ STILL NEEDED FROM THE OWNER (site is live but not fully switched on)

Set these in the **Vercel project → Settings → Environment Variables**, then
redeploy. Until they're set the site is live and honest, but WhatsApp buttons
stay hidden and order/rep forms point people to the contact page.

- [x] ✅ **WhatsApp number** — owner gave +234 813 314 9331 (2026-10-04). Wired
      as the default in `lib/site.ts`, so the "Order on WhatsApp" buttons work
      everywhere once the next deploy lands. `NEXT_PUBLIC_WHATSAPP_NUMBER` still
      overrides it if the number ever changes.
- [ ] 🔴 **Order inbox** → `FARM_INBOX` (where orders should land) +
      `RESEND_API_KEY` (from resend.com). This makes meat/egg/chick orders and
      sales-rep sign-ups actually reach you by email.
- [ ] 🟡 **Meat prices / breeds / weights**, **production days**, and
      **sales-rep terms** — send these and we'll add the "how it works" copy to
      `/meat` and `/sell`. (More detail in the lists below.)

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

## Ship the code — DONE ✅

- [x] Audited the diff (design/dev/brand subagent); fixed the one flagged claim.
- [x] Committed to `feature/kisi-poultry-republic` (6 logical commits) + pushed.
- [x] Opened PR #1 and merged to `main` (`a3f7bae`) → Vercel deploying.

---

## WhatsApp Business (Option 1) — owner setup checklist

All done on the phone, no code. The free WhatsApp Business app gives a product
Catalog + greeting/away messages + saved quick replies. Good first step before
any paid "real bot" (that's Option 2: Cloud API + a builder like Wati/Interakt/
Gallabox, a dedicated number, and per-conversation cost — revisit when volume
justifies it).

1. **Install on the order number (+234 813 314 9331).**
   - Back up chats first (Settings → Chats → Backup).
   - Install the separate **WhatsApp Business** app; open it and let it **migrate**
     the number (keeps chats). One number can't run both apps at once — use a 2nd
     number for Business if you want personal WhatsApp kept separate (then update
     the site to that number).
2. **Business profile:** name *Kisi Farm*, category *Food/Agriculture*, area,
   hours, email, website farm.kisi.africa.
3. **Catalog** (Business tools → Catalog → Add item). One per product, photo +
   description + price (leave price off where it's per-order). Paste-ready:
   - *Farm-fresh eggs (crate)* — Eggs collected and packed the same day by our own
     hens. Order by the crate. Price: ₦___ / crate. Link: farm.kisi.africa/eggs
   - *Fresh chicken (whole bird)* — Farm chicken raised on our feed and clean
     water, processed to order on the day you pick. Price confirmed per order
     (depends on size). Link: farm.kisi.africa/meat
   - *Day-old chicks* — Healthy day-old chicks from our flock. Availability and
     price on request. Link: farm.kisi.africa/chicks
4. **Greeting message:**
   > Welcome to Kisi Farm 🐔 Tell us what you'd like, eggs, fresh chicken, or
   > day-old chicks, how many, and your area. We'll confirm the price and
   > delivery. For chicken, let us know the day you want it.
5. **Away message:**
   > Thanks for messaging Kisi Farm. We're away right now and will reply as soon
   > as we're back. To speed things up, send the product, quantity, your area,
   > and (for chicken) the day you'd like it.
6. **Quick replies** (type `/` to trigger):
   - `/deliver` → "Yes, tell us your area and we'll confirm if we deliver there
     and the cost."
   - `/meat` → "We process chicken fresh to order. Pick a day, tell us how many
     birds, and we'll confirm size and price."
   - `/eggs` → "Eggs are sold by the crate, packed the same day. How many crates
     and what's your area?"
7. **Labels:** tag chats New order → Confirmed → Paid → Delivered.
8. **Honesty:** only list prices you've actually decided; leave chicken price
   blank with "confirmed per order" rather than a made-up number.

---

## Still to think through — the ORDER FLOW (open, not decided yet)

Owner wants to work the ordering process out more. Questions to settle before we
automate or tighten it:

- What exactly happens after a customer sends an order (WhatsApp or site form)?
  Who confirms, how fast, and where is it written down (phone notebook? the
  records app? a spreadsheet)?
- **Payment**: pay-on-delivery, bank transfer first, or a hosted checkout later?
  (Site is built to add a payment provider behind an abstraction layer; off now.)
- **Meat specifics**: production/processing days, how far ahead to book, whole
  bird vs cut, live vs dressed, pricing by size/weight.
- **Delivery vs pickup**: which areas, delivery fee, minimum order.
- **Where orders should live**: idea — log WhatsApp + site orders into the
  records app so sales sit in one place (would also feed future reporting).
- Only once this is clear does Option 2 (a true WhatsApp bot that captures the
  full order automatically) make sense to build.

---

## Files touched this session (for reference)

New: `app/meat/page.tsx`, `app/sell/page.tsx`, `app/api/reps/route.ts`,
`components/WhatsAppButton.tsx`, `components/RepSignupForm.tsx`.
Changed: `app/page.tsx`, `app/chicks/page.tsx`, `app/sitemap.ts`,
`components/Header.tsx`, `components/Footer.tsx`, `components/OrderForm.tsx`,
`app/api/orders/route.ts`, `lib/site.ts`, `.env.example`, `tests/api.test.ts`.

---

## 2026-10-05 — Real farm photos + Support WhatsApp

Owner added 3 real interior photos (root `photos/`, copied to
`apps/farm/public/photos/`). Blended them into the brand so they don't clash
with the flat illustrated style:
- **Rule**: photography = the real farm; illustration (ChickenPortrait) = the
  story world / named hens. Intentional, not a clash.
- New **`FarmPhoto`** component (brand frame: rounded, green border, subtle
  green grade, optional caption + `href`).
- **Home hero**: full-bleed photo under a deep-green gradient (cream text stays
  readable; image reads as Kisi-green).
- **/meat**: framed photo in the aside.
- **/about**: new "Inside the Farm" gallery (3 photos), each **links to
  /support**, plus a Support CTA.
- **/support**: added the "Talk to us on WhatsApp" button (pre-written message)
  under the intro, with an honest note that online giving opens after legal
  review.

Still open:
- [ ] 🟢 **More photos welcome** — the eggs themselves, a daytime exterior,
      someone working, the solar/water setup. Would let us photograph the egg +
      chicks pages too (still illustration-only).
- Gates re-run (typecheck/eslint/17 tests/build) + visually checked before push.
