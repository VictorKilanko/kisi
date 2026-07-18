/**
 * The site's canonical origin — single source of truth.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project (and .env.local for dev) so a
 * domain change never requires a code change. The fallback is the current
 * GitHub Pages address, which keeps local builds and previews sane until the
 * real domain is pointed at Vercel.
 *
 * Consumed by app/layout.tsx (metadata + JSON-LD), app/sitemap.ts and
 * app/robots.ts.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorkilanko.com/kisi"
).replace(/\/$/, "");
