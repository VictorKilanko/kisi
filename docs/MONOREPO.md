# MONOREPO.md — structure, local dev, and Vercel deploy

Kisi is a **pnpm + turborepo monorepo**: one GitHub repo, three deployable apps, and
two shared packages. The chickens are the IP; every property draws the same cast from
one canon so nothing drifts.

## Layout

```
kisi-universe/
  pnpm-workspace.yaml        apps/* and packages/* are the workspace members
  turbo.json                 task graph (build/lint/typecheck/test)
  package.json               root; packageManager = pnpm@9.15.0
  .npmrc                     node-linker=hoisted (flat node_modules, OneDrive-friendly)
  packages/
    canon/   @kisi/canon     single source of truth: schemas + 27 chickens + timeline
    brand/   @kisi/brand     shared design tokens (tokens.css @theme + base.css)
  apps/
    africa/  @kisi/africa    kisi.africa        entertainment (the Republic), no commerce
    farm/    @kisi/farm      farm.kisi.africa   the business (eggs, chicks, support)
    kids/    @kisi/kids      kids.kisi.africa   kids channel (scaffold only for now)
  social/                    Instagram content factory (writes apps/africa/public/s)
  docs/                      this file, SPLIT_PLAN.md, PROGRESS.md, LESSONS.md, ...
```

The apps consume the shared packages as **TypeScript / CSS source** (no build step for
the packages): each app lists `@kisi/canon` in `transpilePackages`, and each app's
`globals.css` imports `@kisi/brand/tokens.css` + `base.css`.

## Local development

pnpm is not always on PATH in this environment; use **`corepack pnpm ...`**.

```bash
corepack pnpm install                         # install the whole workspace
corepack pnpm --filter @kisi/africa dev       # run one app (next dev)
corepack pnpm --filter @kisi/farm build       # build one app
corepack pnpm --filter @kisi/canon test       # test the canon (18 tests)
```

Workspace-wide via turbo (turbo must find a `pnpm` binary; a shim lives at `~/bin`):

```bash
PATH="$HOME/bin:$PATH" pnpm run build         # build all apps
PATH="$HOME/bin:$PATH" pnpm run typecheck      # typecheck all
PATH="$HOME/bin:$PATH" pnpm run test           # test canon + africa + farm
```

Gate status as of the split: typecheck 4/4, tests 44 (canon 18 + africa 13 + farm 13),
build 3/3.

## Vercel deploy — three projects from one repo

Each app is its own Vercel project pointing at a different **Root Directory**. Vercel
detects the pnpm workspace and installs from the repo root, so the shared packages
resolve automatically. Framework preset: **Next.js** for each. The root
`package.json` pins `pnpm@9.15.0`, which Vercel honors via corepack.

### 1. kisi.africa (existing project) — the one REQUIRED change

The app moved from `site/` to `apps/africa/`. Before the next deploy:

> Vercel → kisi.africa project → Settings → Build & Deployment →
> **Root Directory: `site` → `apps/africa`** → Save.

After this, kisi.africa deploys and behaves exactly as before (it still serves its own
shop, because the commerce redirect flag is off by default).

### 2. farm.kisi.africa (new project) — when ready to launch the farm

- New project → import the same GitHub repo → **Root Directory `apps/farm`**.
- Add domain **farm.kisi.africa**. DNS: if kisi.africa's DNS is on Vercel the record is
  auto-created; if it's at a registrar/Cloudflare, add CNAME `farm -> cname.vercel-dns.com`.
- Env vars (see `apps/farm/.env.example`): `NEXT_PUBLIC_SITE_URL=https://farm.kisi.africa`,
  plus `RESEND_API_KEY` + `FARM_INBOX` (egg/chick enquiries), `UPSTASH_*` (rate limit),
  and Paystack **TEST** keys. Payments are locked to sandbox in code regardless.

### 3. kids.kisi.africa (new project) — when ready

- New project → **Root Directory `apps/kids`** → add domain **kids.kisi.africa** (CNAME
  as above) → env `NEXT_PUBLIC_SITE_URL=https://kids.kisi.africa`.

### 4. Flip commerce onto the farm (last, after the farm is live)

On the **kisi.africa** project set `NEXT_PUBLIC_COMMERCE_ON_FARM=true` and redeploy.
kisi.africa's `/shop`, `/eggs`, `/support`, `/support/terms`, `/about`, `/visit` then
308-redirect to the farm. Doing this only after the farm is deployed means no window
where a buyer hits a dead end.

### Subdomains now, dedicated domains later

Subdomains (`farm.` / `kids.kisi.africa`) are free, instant, and reuse the domain you
already own, so use them now. Every canonical URL is the single env var
`NEXT_PUBLIC_SITE_URL`, so when you later buy `kisifarm.africa` / `kisikids.africa` you
just add the domain to the project and change that one variable. No code change.

## Notes / gotchas

- **OneDrive** holds directory handles on this Windows path; renaming a folder can fail
  with "Device or resource busy". Move the contents, then remove the empty dir.
- **corepack enable** cannot install a global pnpm shim here (Program Files is
  admin-locked). Use `corepack pnpm`, or the `~/bin` shim for turbo.
- All apps are pinned to the same Next (16.2.10) and React (19.2.4); keep them in lockstep.
- `apps/africa/AGENTS.md` warns this Next version differs from older docs; read
  `node_modules/next/dist/docs/` before touching Next internals.
