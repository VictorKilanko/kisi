# CONTENT_CHECKLIST.md — Missing Real-World Information

Everything the site currently represents with a **clearly marked placeholder**.
Nothing on this list may be fabricated and presented as real. When the owner
supplies an item, replace the placeholder and check it off.

Legend: 🔴 blocks a public launch · 🟡 needed before the relevant page is
credible · 🟢 nice to have.

## Needs owner input

### Support page: five funds + donation/finance forms (added 2026-10-08)

The Support page was rebuilt around the mission and **five $20,000 funds**
(Better Housing, Senior Hen Fund, Veterinary Care, Solar/Light/Security, Cold
Storage). A pledge form and a debt-financing form now route enquiries to the
farm. To switch delivery on:

- [ ] 🔴 **RESEND_API_KEY** (and the inbox). Pledges and finance enquiries
      (`/api/support/pledge`) deliver by email. Without the key the forms
      honestly return 503 and send people to WhatsApp. The recipient defaults to
      **victor@panafrican.city** (not shown anywhere on the site); override it
      with `SUPPORT_INBOX` in Vercel if that ever changes. No `FARM_INBOX`
      needed for these two forms.
- [ ] 🟡 **Confirm the $20,000 per-fund goals** are final (shown as "$20k" on
      each card; total "$100,000" in the hero). Change in `app/support/funds.ts`.
- [ ] 🟢 **Card giving** stays closed until the legal/payment review is done
      (same lock as the rest of the site). Pledges start a conversation for now.

### Selling meat + WhatsApp + sales reps (added 2026-10-03)

The home hero now sells eggs, chicken meat and day-old chicks; there is a new
`/meat` page with a day-booking form, a `/sell` sales-rep sign-up, and WhatsApp
order buttons wired throughout. To make all of it fully live:

- [ ] 🔴 **WhatsApp number.** Every "Order on WhatsApp" button is hidden until
      `NEXT_PUBLIC_WHATSAPP_NUMBER` is set (digits only, full international form,
      e.g. `2348012345678`). Add it in the Vercel project settings **and then
      redeploy** (it's a `NEXT_PUBLIC_*` var, baked in at build time, so the
      buttons only appear after a fresh deploy). Until then orders fall back to
      the email enquiry form / contact page.
- [ ] 🔴 **FARM_INBOX + RESEND_API_KEY.** Meat/egg/chick orders (`/api/orders`)
      and rep applications (`/api/reps`) email the farm. Without these the forms
      honestly return 503 and send people to WhatsApp / contact. (Same keys the
      egg form already needed.)
- [ ] 🟡 **Meat prices, breeds and weights.** The `/meat` page says "set per
      order, we quote you when you book" and posts no numbers. Supply a price
      list (or a range) when ready.
- [ ] 🟡 **Meat production / delivery schedule.** The day picker currently
      allows any date from tomorrow. If you only process on certain days (e.g.
      Saturdays), tell me and I'll restrict the calendar to those days.
- [ ] 🟡 **Sales-rep terms.** The `/sell` page promises "no fee to start" and
      that supply/pricing are discussed before selling. Confirm commission /
      margin / supply terms so we can add a short "how it works" section.
- [ ] 🟢 **Pickup vs delivery for meat.** Copy currently says "pickup or
      delivery"; confirm which areas you deliver to.

### Build the Farm capital campaign (added 2026-09-11)

The campaign page (`/build-the-farm`) is live but deliberately **not charging**:
no invented figures, and a "register interest" form that stores nothing yet.
To open it for real money, the owner must supply:

- [x] ✅ **Build goals set (owner, 2026-09-11).** Hatchery $100k, Cold Room
      $100k, Farm House $110k, Solar $60k, Feed Mill $30k = **$400,000** total.
      All in `apps/farm/app/build-the-farm/campaign.ts`; the hero total derives
      from them.
- [x] ✅ **Farm House confirmed (owner, 2026-09-11):** a permanent house on the
      farm. The current card copy is correct.
- [ ] 🔴 **Naming amounts** for Name a Hen / Solar Light / Farm Street / Poultry
      House (and the currency shown to a diaspora audience). They render "Set at
      launch" until set.
- [ ] 🔴 **Confirmed legal entity / registration status.** Payments stay closed
      until this is confirmed; the wording is already "sponsorship to a
      for-profit farm, not charitable, not tax-deductible".
- [ ] 🔴 **Flutterwave account + keys** (provider chosen). Needed to wire the
      hosted checkout; start in sandbox. No Flutterwave adapter exists yet (the
      payments lib currently has a Paystack adapter only).
- [ ] 🔴 **Where does "Register interest" go?** `/api/newsletter` validates and
      discards — the waitlist collects nothing until a provider (e.g. Mailchimp
      or Supabase) is connected behind that endpoint.
- [ ] 🟡 **Cornerstone (major-gift) contact route.** Currently links to `/visit`;
      confirm that is where founding-naming conversations should land.

### Social media kit (added 2026-07-31)

- [x] ✅ **Instagram @handle confirmed: `@kisi.africa`** (owner set 2026-08-01). Set at
      the top of `social/captions.md`.
- [ ] 🟢 Real bird photographs to replace the drawn portrait medallions in the
      leader posts (posts 04 to 06) when available.

### Shop — egg orders (added 2026-07-18)

- [ ] 🔴 **Where do egg order enquiries go?** `/api/orders` currently validates
      and discards — no inbox, no store. The Shop is not usable until this is
      answered. An email address or a form provider is enough to start.
- [ ] 🔴 Egg prices, crate/pack sizes, and the delivery areas served. Until
      these exist the Shop quotes per-enquiry rather than publishing a price.
- [ ] 🟡 Minimum order, lead time, and whether collection from the farm is an
      option.

### The Bantu memorial (added 2026-07-18)

- [ ] 🔴 **Where do well-wishes go?** `/api/wellwishes` also validates and
      discards. Decide between a private inbox and a moderated public wall.
- [ ] 🟡 Bantu's real details — hatch/arrival date, personality notes, and a
      photograph — so the memorial reflects the real bird as well as the
      written character.
- [ ] 🟢 Confirm the real-world facts behind the monitor lizard storyline (was
      there an actual predator incident, and how closely should the story
      track it?).

### Security (act immediately)

- [ ] 🔴 **Revoke/rotate the GitHub personal access token** currently stored in
      plaintext in the local project instruction file. It has been exposed and
      must be treated as compromised. Store any replacement in a credential
      manager or environment variable, never in a committed file.

### Farm identity & facts (About page, footer, SEO)

- [x] Business/brand name: **"Kisi"** — confirmed by owner (2026-07-17).
- [ ] 🔴 Legal registration status (CAC registration? legal form? business
      number?) — still pending; needed only to finalize the support-page
      payment wording before Phase 4 goes live.
- [ ] 🔴 Farm location at the precision the owner is comfortable publishing
      (state / LGA / nearest town — NOT exact coordinates; site policy is to
      avoid security-sensitive precision)
- [ ] 🔴 Farm story: founding year, founder's story, why "Kisi"
- [ ] 🟡 Mission / vision / values in the owner's own words (drafts will be
      provided for approval)
- [ ] 🟡 Current flock size (approximate is fine — will be labeled approximate)
- [ ] 🟡 Chicken breed(s) actually raised (layers? breed names?)
- [ ] 🟡 Housing system description (deep litter? battery? free range? floor
      space?)
- [ ] 🟡 Feeding practice (commercial feed brand/type? on-farm mixing?)
- [ ] 🟡 Water system (borehole? tanks? treatment?)
- [ ] 🟡 Solar/energy setup — what actually exists today vs planned
- [ ] 🟡 Biosecurity measures actually in place
- [ ] 🟡 Veterinary care arrangement (visiting vet? clinic? vaccination program?)
- [ ] 🟡 Number of workers / team members happy to be featured (names + consent)
- [ ] 🟢 Community impact activities, if any
- [ ] 🔴 Any certifications — **none will be claimed until documented**

### Real chicken data (Meet the Flock)

- [ ] 🔴 Real names for chickens the owner wants featured (the initial 10–12
      characters are labeled DEMO CONTENT throughout)
- [ ] 🔴 Photographs of individual chickens (portrait-style; guidance will be
      provided in the content editing guide)
- [ ] 🟡 Real hatch/arrival dates, or estimates
- [ ] 🟡 Real egg records if the owner wants true milestones (the Daily Update /
      Farm Intelligence spreadsheets may already hold this — owner to confirm
      what may be published)
- [ ] 🟡 Any true backstories (rescues, recoveries, favorites)

### Mascot (Section 7.11)

- [ ] 🟡 Mascot species, name, photos, backstory, role — entire mascot section
      is placeholder until provided

### Support / sponsorship page (legal — blocks Phase 4 going live)

- [ ] 🔴 Legal status of payments: the business is presumably **not** a
      registered charity, so nothing may be called a "donation" with charitable
      or tax-deductible implications. Owner to confirm registration status so
      support can be framed correctly (farm support / sponsorship / gift).
      The Phase 2 `/support` page is a no-payments preview stating exactly
      this.
- [ ] 🔴 Paystack account + **test keys** (sk_test_/pk_test_) so the sandbox
      flow can be exercised end-to-end; later a settlement bank account for
      launch. (Adapter is built; live mode is code-locked pending the legal
      item above.)
- [ ] 🔴 Refund policy terms the owner agrees to (draft placeholder is live
      at `/support/terms`)
- [ ] 🟡 What support tiers should cost (₦ amounts — all tiers currently
      show "Amount set at launch")
- [ ] 🟡 Newsletter provider choice (endpoint is built and honest about
      storing nothing until one exists)

### Media

- [ ] 🔴 Farm photography: poultry houses, feed storage, water tanks, solar
      panels (if present), paths, trees, workers (with consent), eggs, general
      farm life. Phone photos are fine to start.
- [ ] 🟢 Short video clips for hero/background use
- [ ] 🟢 Any drone/aerial imagery

### Publishing & channels

- [ ] 🟡 Install Node.js 22 LTS on the development machine (none was present;
      Phase 2 used a temporary portable copy that will not survive cleanup)
- [ ] 🔴 Domain name (e.g. kisifarm.com / kisifarm.ng / republicofkisi.com) —
      is one owned already?
- [ ] 🟡 GitHub repository name + confirmation the site may be public
- [ ] 🟡 Social media handles to link (or confirmation none exist yet)
- [ ] 🟡 Contact email address to publish (a business address, not a personal
      one, is recommended)
- [ ] 🟢 Newsletter provider preference (or accept default recommendation)

### Creative approvals

- [ ] 🟡 Primary tagline sign-off: proposed **"Where Every Chicken Has a
      Story"** (per brief)
- [ ] 🟡 Approval of brand direction in `docs/BRAND_SYSTEM.md` (colors, type,
      seal/flag directions) before Phase 2 visual build
- [ ] 🟡 Confirmation that no real Nigerian politicians are to be referenced by
      the chicken characters (default: none, per brief)
- [ ] 🟡 Approval of the 12 demo character concepts in
      `docs/CHARACTER_SYSTEM.md`

## Resolved

- [x] Business/brand name confirmed: **"Kisi"** (owner, 2026-07-17).
- [x] Legacy relationship confirmed: the new site is a **separate project**
      from the root `index.html` Agric City masterplan; the new site does not
      link or reference it (owner, 2026-07-17).
