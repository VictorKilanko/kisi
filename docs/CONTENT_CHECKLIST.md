# CONTENT_CHECKLIST.md — Missing Real-World Information

Everything the site currently represents with a **clearly marked placeholder**.
Nothing on this list may be fabricated and presented as real. When the owner
supplies an item, replace the placeholder and check it off.

Legend: 🔴 blocks a public launch · 🟡 needed before the relevant page is
credible · 🟢 nice to have.

## Needs owner input

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
- [ ] 🔴 Payment provider choice + account (recommendation: Paystack or
      Flutterwave for NGN + international cards; see
      `docs/DONATION_INTEGRATION.md`). Needs a settlement bank account.
- [ ] 🔴 Refund policy terms the owner agrees to
- [ ] 🟡 What support tiers should cost (₦ amounts)

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
