# Kisi Farm Records — product notes (`records.kisi.africa`)

A farm-management app that replaces the daily spreadsheet. Farmers log in and
record the day; the app does the totals, production %, unsold eggs and money
owed. Start with Kisi Farm, then open to other farmers if it earns trust.

## Why this exists

The `Farm Intelligence System` spreadsheet works, but it means opening Excel,
finding the right month tab, and typing into 40 columns without mistakes. On a
phone, in a coop, that is hard. This app turns the same model into a short daily
form, keeps every farm's data private, and produces the reports automatically.

## Where it lives

- `apps/records` in the monorepo (fourth app alongside africa, farm, kids)
- Next.js 16 + React 19 + Tailwind 4, shares `@kisi/brand`
- **Supabase** for database + auth + per-farm Row Level Security
- Deploys to Vercel as `records.kisi.africa`

## Data model (mirrors the spreadsheet)

`farms` → `profiles` (user↔farm) → `batches` (B-001…) → `daily_records`
(farm-wide day) + `batch_daily` (per-batch line) + `feed_purchases`.
Full DDL in `apps/records/supabase/schema.sql`.

## Status

**Phase 1 (built):**

- Email/password login; new users join the pilot farm automatically
- Daily-log form: per-batch birds / age / eggs / feed, with live totals,
  production %, unsold eggs and receivable
- Create or edit any day
- Month-to-date summary + recent-days history
- Full gate pass: typecheck, lint, 10 unit tests, production build

**Phase 2 (next):**

- Feed-purchase screen (type, quantity, price, date, per batch) + feed-cost totals
- Monthly report view + one-tap Excel export (keeps parity with the workbook)
- Edit the flock register in-app (add/cull/sell birds, update counts)

**Phase 3 — open to other farms:**

- Replace the pilot "everyone joins Kisi" trigger with an invite/onboarding flow
- Owner vs worker roles; farm settings

**Phase 4 — field-hardening:**

- Offline/PWA entry that syncs when signal returns (key for rural connectivity)
- WhatsApp/SMS daily reminder to record
- Yoruba / Nigerian Pidgin translations

## Decisions & cautions

- **Keep the spreadsheet as the safety net** until the app has earned trust; the
  Excel export keeps both in sync.
- **Data ownership:** farmers can export their own data at any time. No lock-in.
- **Security:** per-farm isolation is enforced in the database (RLS), not just in
  UI code, so a bug in the app cannot leak one farm's data to another.
- **Cost:** near-zero on Supabase + Vercel free tiers for the pilot; revisit
  before onboarding many farms.
