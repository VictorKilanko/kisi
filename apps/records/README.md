# Kisi Farm Records (`records.kisi.africa`)

The farm's daily ledger as a real app. Instead of opening a spreadsheet, a
farmer logs in on their phone and records the day: birds and age per batch, eggs
and feed per batch, health, sales and cash. Totals, production %, unsold eggs
and money owed are calculated automatically. Built to start with Kisi Farm and,
if it works, open to other farmers.

## Stack

- **Next.js 16** (App Router, Server Actions) + **React 19** + **Tailwind 4**
- **Supabase** — Postgres database + auth + per-farm Row Level Security
- Shares the `@kisi/brand` design tokens with the rest of the Kisi universe
- Lives in the monorepo at `apps/records`, deploys to Vercel like the other apps

## First-time setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com) (free
   tier is enough for the pilot).
2. **Run the schema.** Open the Supabase SQL editor and run the contents of
   [`supabase/schema.sql`](./supabase/schema.sql). It creates the tables, the
   per-farm security rules, the new-user trigger, and seeds **Kisi Farm** with
   batches B-001–B-004.
3. **For the pilot, make sign-up instant.** In Supabase → Authentication →
   Providers → Email, turn **off** "Confirm email" so pilot users can log in
   immediately. (Turn it back on before opening to outside farms.)
4. **Add the keys.** Copy `.env.example` to `.env.local` and fill in
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from
   Supabase → Project Settings → API.

## Run it

From the repo root:

```bash
corepack pnpm install
corepack pnpm --filter @kisi/records dev
```

Then open http://localhost:3003. Before Supabase is configured the app shows a
setup screen instead of crashing.

## How the pilot onboarding works

For the pilot, **every new sign-up is attached to Kisi Farm** by a database
trigger (`handle_new_user`), so the owner and any workers all see the same farm.
When you open the app to other farms, replace that trigger with a proper invite
flow that sets each user's `farm_id`. The per-farm security rules already keep
each farm's data private, so multi-farm is a data-entry/onboarding change, not a
security rewrite.

## Data model

| Table | Holds |
| --- | --- |
| `farms` | one row per farm (tenant) |
| `profiles` | links each login to a farm + role |
| `batches` | each flock batch (B-001…): breed, source, arrival, counts |
| `daily_records` | the farm-wide part of one day (health, sales, cash) |
| `batch_daily` | per-batch line for a day: birds, age, eggs, feed |
| `feed_purchases` | feed bought: type, quantity, price, date, per batch |

## What's built (MVP) and what's next

**Built:** login, the daily-log form (per-batch, live totals), edit any past
day, and a month-to-date summary with a recent-days history.

**Next:** feed-purchase logging screen, full monthly report + Excel export,
flock-register editing in-app, offline/PWA entry for poor connectivity, and
WhatsApp/SMS daily reminders. See [`docs/RECORDS_APP.md`](../../docs/RECORDS_APP.md).
