# Instagram scheduling (Stage 7) — status and operation

Stage 7 is **wired and validated** against the live @kisi.africa account. This file is the
operating guide. Secrets live in `social/.env` (gitignored) and must never be pasted into
this or any tracked file.

## Credentials (in social/.env, not here)

`social/.env` holds `IG_BUSINESS_ACCOUNT_ID`, `IG_PAGE_TOKEN` (never expires, preferred),
`IG_ACCESS_TOKEN` (long-lived user token, ~60 days), `IG_PAGE_ID`, `IG_APP_ID`,
`IG_APP_SECRET`, and `NEXT_PUBLIC_SITE_URL`. The long-lived user token expires in ~60 days;
the Page token does not, so the scheduler prefers it. If a token is ever exposed, rotate it
in the Meta app dashboard and update `social/.env`.

## How Instagram publishing actually works (two constraints that shape everything)

1. **No native scheduling.** The Graph API's `media_publish` posts *immediately*. There is
   no "publish at 9am Tuesday" field. So "scheduling" = running `ig-publish.mjs` at the
   chosen time, driven by a cron or the `/schedule` skill.
2. **Images must be at public HTTPS URLs.** The API fetches each image over the internet;
   it cannot take a local file. So the staged PNGs in `apps/africa/public/s/<token>/` must be
   **committed and deployed** (Vercel) before publishing, or the API gets a 404.

## The operating loop

```
stage      node social/stage-to-public.mjs <arc-slug>      # copies PNGs, writes manifest
caption    fill each manifest post's "caption" from social/captions.md
deploy     commit apps/africa/public/s/** and deploy, so the image URLs are LIVE
inspect    node --env-file=social/.env social/ig-publish.mjs --list      # account + history + manifest
dry run    node --env-file=social/.env social/ig-publish.mjs --only <name>   # shows what WOULD post
publish    node --env-file=social/.env social/ig-publish.mjs --only <name> --publish
```

Safety built into `ig-publish.mjs`:
- **Dry-run by default.** Nothing posts unless you pass `--publish`.
- **No double-posting.** It skips any manifest post already marked `status: "posted"`, and
  `--list` prints the live IG history so you can eyeball duplicates.
- **Caption guard.** It refuses to publish a post whose caption is empty.
- Carousels: builds one child container per slide, waits for each to be FINISHED, then a
  parent CAROUSEL container, then publishes. Up to 10 slides (our arcs max at 5).

## Scheduling real times

The Graph API can't schedule, so to post at set times use the `/schedule` skill (or
CronCreate) to run, e.g.:
`node --env-file=social/.env social/ig-publish.mjs --only arc-chichi --publish`
at the desired timestamp. Rate limit is ~25 posts / 24h, so space the calendar.

## Seeing what is already posted

`node --env-file=social/.env social/ig-publish.mjs --list` queries `GET /{ig-id}/media` and
prints the account's real post history (used for dedupe).
