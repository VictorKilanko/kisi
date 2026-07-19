# VERCEL_SETUP.md — hosting and services, step by step

Everything needed to take the Kisi site from the repo to a live, working site on
Vercel — with egg orders actually arriving in your inbox.

**Follow the sections in order.** Each one ends with a check so you know it worked
before moving on. Total time: about an hour, most of it waiting for DNS.

| Service | What it does | Cost |
|---|---|---|
| Vercel | Hosts the site | $20/mo (see note below) |
| Resend | Delivers egg orders to your inbox | Free (3,000 emails/mo) |
| Upstash | Stops form spam | Free |
| Domain registrar | Your web address | ~$15/yr |

> **A note on Vercel's price.** The free "Hobby" plan forbids commercial use, and
> selling eggs is commercial. You can use Hobby while testing, but move to **Pro
> ($20/month)** before the Shop is genuinely open for business. This is a licence
> term, not a technical limit — the site runs fine either way, but staying on Hobby
> while trading puts the account at risk.

---

## 1. Vercel — get the site running

### 1.1 Create the account

1. Go to **https://vercel.com/signup**
2. Choose **Continue with GitHub** — this is important, it's what lets Vercel see the
   repository
3. Authorise Vercel when GitHub asks

### 1.2 Import the project

1. On the Vercel dashboard click **Add New… → Project**
2. Find **`VictorKilanko/kisi`** in the list and click **Import**
   - If it isn't listed, click **Adjust GitHub App Permissions** and grant access to
     the `kisi` repository

### 1.3 The one setting that matters

On the configuration screen, before deploying:

> **Root Directory** → click **Edit** → choose **`site`**

**This is the single most common way this deploy fails.** The Next.js app lives in
`site/`, not at the repository root. If you skip this, Vercel finds no application and
the build fails with something like "No Next.js version detected."

Leave Framework Preset (Next.js), Build Command, and Output Directory on their
defaults — they're correct once Root Directory is right.

### 1.4 Deploy

Click **Deploy** and wait about two minutes.

**✅ Check:** you get a URL like `kisi-abc123.vercel.app` and the site loads with the
Republic's home page, styled correctly.

At this point forms won't deliver anything yet — that's the next section.

---

## 2. Resend — make egg orders actually arrive

Without this, the Shop tells customers it can't take their order. This is the section
that turns the site into a working sales channel.

### 2.1 Create the account and key

1. Go to **https://resend.com/signup** and sign up (free)
2. In the sidebar click **API Keys → Create API Key**
3. Name it `kisi-production`, permission **Sending access**
4. **Copy the key now** — it starts with `re_` and is shown only once

### 2.2 Add it to Vercel

In your Vercel project: **Settings → Environment Variables**. Add these three, each
ticked for **Production, Preview and Development**:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | the `re_…` key you just copied |
| `FARM_INBOX` | the email address where you want orders to land |
| `MAIL_FROM` | `Kisi Farm <onboarding@resend.dev>` |

### 2.3 About the sender address

`onboarding@resend.dev` is Resend's shared test sender. It works immediately, but it
can **only send to the email address you signed up with**, and it looks unprofessional.

Once your domain is set up (section 4), come back and do this properly:

1. Resend → **Domains → Add Domain**, enter your domain
2. Add the DNS records it gives you at your registrar
3. Wait for **Verified**
4. Change `MAIL_FROM` in Vercel to something like `Kisi Farm <orders@yourdomain.com>`

**✅ Check:** covered in section 5 — you'll place a real order and watch it arrive.

---

## 3. Upstash — stop form spam

Without this, the spam protection falls back to a version that doesn't work properly
on Vercel (each server instance counts separately, so a determined bot slips past).

1. Go to **https://upstash.com** and sign up with GitHub (free)
2. **Create Database**
   - Name: `kisi`
   - Type: **Regional**
   - Region: pick the one closest to Nigeria — usually **eu-west-1 (Ireland)**
3. Open the database, find the **REST API** section
4. Copy **`UPSTASH_REDIS_REST_URL`** and **`UPSTASH_REDIS_REST_TOKEN`**
   - Make sure you're copying the **REST** values, not the Redis connection string

Add both to Vercel exactly as named, for all three environments.

> The site deliberately **fails open**: if Upstash is ever down, forms keep working
> rather than blocking real customers. An outage should never close the shop.

---

## 4. Domain — your own web address

### 4.1 Buy it

Use **Cloudflare Registrar** (sells at cost, ~$10–15/yr, no markup at renewal) or
Namecheap. Avoid GoDaddy — cheap first year, expensive renewals.

Good options: `kisifarm.com`, `republicofkisi.com`, `kisi.farm`

### 4.2 Connect it to Vercel

1. Vercel project → **Settings → Domains → Add**
2. Type your domain and click **Add**
3. Vercel shows the exact DNS records to create — **use the values Vercel gives you**,
   they're authoritative and occasionally change. Typically:
   - Apex (`kisifarm.com`) → an **A record** pointing at Vercel's IP
   - `www` → a **CNAME** pointing at a `vercel-dns.com` address
4. Add those records at your registrar's DNS settings
5. Wait. Usually 10–30 minutes; occasionally up to 48 hours

**✅ Check:** Vercel shows **Valid Configuration** with a padlock, and your domain
loads the site over HTTPS.

### 4.3 Tell the site its own address

Add to Vercel environment variables:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` — **no trailing slash** |

This drives canonical URLs, the sitemap, and social share previews. If you skip it,
those keep pointing at the old GitHub Pages address.

**Then redeploy** — see section 6. Environment variables only take effect on a new
build.

---

## 5. Verify it actually works

Don't trust a green checkmark. Test the thing that matters.

1. Go to **`yourdomain.com/shop`**
2. Fill in the order form with real details and submit
3. **Check the `FARM_INBOX` email account**

**You should receive an email** titled `Egg order enquiry — [name] ([area])` with the
customer's details, and you can hit reply to answer them directly.

| What you see | What it means |
|---|---|
| "Enquiry sent" + email arrives | Working correctly |
| "We couldn't send that" | `RESEND_API_KEY` or `FARM_INBOX` missing/wrong, or you didn't redeploy |
| Success message but no email | Check Resend → **Logs**. Usually the test sender refusing a non-signup address (see 2.3) |

Also worth checking: the Bantu memorial form at `/bantu`, and that `/most-wanted`,
`/flock` and `/eggs` all load.

---

## 6. How to redeploy

**Environment variables do not apply to an existing deployment.** After adding or
changing any variable:

Vercel → **Deployments** → the most recent one → **⋯** menu → **Redeploy**

From here on, every push to `main` deploys automatically.

---

## 7. Complete environment variable list

Copy-paste reference. Only the first four matter for launch.

| Name | Needed for | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Correct links and SEO | `https://kisifarm.com` |
| `RESEND_API_KEY` | Egg orders arriving | `re_abc123…` |
| `FARM_INBOX` | Where orders go | `farm@kisifarm.com` |
| `MAIL_FROM` | Sender name | `Kisi Farm <orders@kisifarm.com>` |
| `UPSTASH_REDIS_REST_URL` | Spam protection | `https://xxx.upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | Spam protection | `AX…` |
| `PAYMENT_PROVIDER` | Sponsorships (later) | `paystack` |
| `PAYSTACK_SECRET_KEY` | Sponsorships (later) | `sk_test_…` |
| `PAYMENTS_TEST_AMOUNT_NGN` | Sandbox testing | `1000` |

**Payments are locked off in code** (`site/lib/payments/index.ts`) and no environment
variable can unlock them. Taking real money requires a deliberate reviewed code change
after the sponsorship wording is finalised. That's intentional.

---

## 8. When something breaks

**"No Next.js version detected"** — Root Directory isn't set to `site`. Settings →
General → Root Directory → `site` → redeploy.

**Build fails** — open the failed deployment and read the log; it names the file and
line. Note that GitHub Actions also runs lint, typecheck, tests and a build on every
push, so check the **Actions** tab too — it often catches the problem first.

**Site loads but looks unstyled** — usually a stale cached build. Redeploy.

**Domain stuck on "Invalid Configuration"** — DNS hasn't propagated, or a record was
mistyped. Check at https://dnschecker.org. Wait up to 48 hours before assuming it's wrong.

**Forms return 429** — that's the rate limiter doing its job. Wait a minute.

---

## 9. Keeping it safe

- **Never commit API keys.** They belong in Vercel's environment variables only.
  `site/.env.example` shows the shape with no real values, which is why it's safe to
  commit.
- **Revoke the GitHub tokens** shared during setup, at
  https://github.com/settings/personal-access-tokens
- Vercel and GitHub both deserve **two-factor authentication** — between them they
  control the site and the code.
- If a key ever leaks: revoke it at the provider, generate a new one, update Vercel,
  redeploy. Nothing else is exposed.

---

## What's next

Once this is live and a test order has arrived, Phase 2 in `docs/PLAN.md` begins — the
CMS at `/admin`, which is what lets someone who isn't a developer add a chicken or
publish a story without touching code.
