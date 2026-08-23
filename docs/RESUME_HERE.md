# RESUME HERE — pick up where we left off

**Checkpoint: 2026-07-30.** A quick, human-friendly note so you (or the next
session) can jump back in. Detail lives in `PLAN.md`, `LESSONS.md`, and
`VERCEL_SETUP.md`; this is the short version.

---

## ⏩ Latest work — 2026-08-23 (Farm Records)

Newest thread, separate from the Vercel task below.

- **Spreadsheet:** `records/Farm Intelligence System_v2.xlsx` — B-004 now active,
  Sep-Dec rebuilt with full per-batch tracking. Backup alongside it. **Note: `.xlsx`
  is git-ignored**, so this lives on disk/OneDrive only, not in git.
- **New app `apps/records` -> `records.kisi.africa`** (Phase 1 MVP, Supabase +
  Next.js 16). Daily-log app to replace the spreadsheet. **In the working tree,
  not committed.** Gates all pass (typecheck/lint/10 tests/build).
- **To run it live:** create a free Supabase project, run
  `apps/records/supabase/schema.sql`, copy `.env.example` -> `.env.local` with the
  two Supabase keys, then `corepack pnpm --filter @kisi/records dev` (port 3003).
  Full guide: `apps/records/README.md`. Roadmap: `docs/RECORDS_APP.md`.
- **Next session could:** commit apps/records (after expert audit), then Phase 2 =
  feed-purchase screen + in-app CSV/Excel export + monthly report.

---

## Where things stand

- **The brand pivot is done and pushed.** New crest logo + favicon, the Republic
  flag, the menu reorganised in-world (Meet the Chickens · Politics · Economy ·
  Sports · Entertainment · Media · The Farm), the new **Economy hub** (`/economy`),
  and the "**the Republic is real**" reframe — every "fictional/satire/sample" line
  removed. Primary call to action everywhere is **Order Eggs**.
- **It's all on GitHub.** Branch `feature/kisi-poultry-republic` on
  `github.com/VictorKilanko/kisi`, up to date. Nine commits from this work.
- **It is NOT live anywhere yet.** `victorkilanko.com/kisi` is a *frozen old
  snapshot* (pre-migration static site) and does **not** show any of this. To see
  the current site you must either run it locally or deploy to Vercel.
- **Nothing was build-verified this session** — Node isn't installed on the
  machine, so lint/typecheck/build haven't been run. Treat the branch as unverified
  until they pass.

---

## ▶ THE MAIN OUTSTANDING JOB: set up Vercel

Full step-by-step is in **`docs/VERCEL_SETUP.md`** (about an hour, most of it DNS).
The essentials:

1. **Sign up at vercel.com with "Continue with GitHub"** so Vercel can see the repo.
2. **Add New → Project → import `VictorKilanko/kisi`.**
3. **⚠ The one setting that trips everyone up:** set **Root Directory = `site`**
   (the app is in `site/`, not the repo root). Skip this and the build fails with
   "No Next.js version detected."
4. **Deploy** → you get a `kisi-xxxx.vercel.app` preview URL. That's the live site.
5. Later, before the shop truly opens for business: move to Vercel **Pro ($20/mo)**
   (Hobby forbids commercial use), and connect **Resend** (egg orders → your inbox)
   and **Upstash** (spam protection) per the guide.
6. Point the custom domain when ready (guide covers DNS).

**Which branch deploys?** Vercel deploys `main` to production and every branch to a
preview URL. Our work is on `feature/kisi-poultry-republic`. To make it the live
site, either open the Vercel preview for that branch, or merge it into `main`.

---

## Also worth doing (not blocking)

- **Rotate the GitHub token.** It sits in the git-ignored `CLAUDE.md` and has been
  exposed. Create a fresh fine-grained token, revoke the old one, and (optionally)
  let git cache it in the OS credential manager so pushes stop prompting.
- **Install Node 20+** (https://nodejs.org). Unlocks running the site locally
  (`cd site && npm install && npm run dev` → localhost:3000) *and* running the gates
  (`npm run lint && npm run typecheck && npm test && npm run build`) before deploying.

---

## Where to resume building (optional, after it's visible)

- Put the crest/flag into the footer and social share (Open Graph) images.
- A hatchery enquiry form (mirrors the egg-order form) once chick details exist.
- A copy pass on the older interior pages if any read flat once you see them live.

See `PLAN.md` for the full backlog and status markers.
