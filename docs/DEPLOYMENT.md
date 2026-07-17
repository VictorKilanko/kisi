# DEPLOYMENT.md — (Stub, completed in Phase 5)

Planned approach (decided Phase 1, executed Phase 5):

- **Source**: GitHub repository (name TBC by owner; see CONTENT_CHECKLIST).
  Work merges from `feature/kisi-poultry-republic` via pull request.
- **Hosting**: Vercel free tier, continuous deployment from GitHub; the
  Next.js app root will be configured to the app directory (see PRODUCT_BRIEF
  Decision D4). Static-export fallback path for GitHub Pages is documented if
  Vercel is not desired.
- **Environments**: preview deployments per PR; production on the default
  branch after Phase 5 review.
- **Env vars**: managed in Vercel dashboard; never committed. Reserved names
  listed in DONATION_INTEGRATION.md (payments) plus form/email provider keys
  (Phase 4).
- **Custom domain**: pending owner's domain decision (CONTENT_CHECKLIST).

Full step-by-step instructions, build commands, and rollback notes will be
written in Phase 5 when the pipeline actually exists. Nothing here has been
deployed yet.
