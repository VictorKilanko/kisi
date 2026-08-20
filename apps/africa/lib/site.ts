/**
 * The site's canonical origin, single source of truth.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project (and .env.local for dev) so a
 * domain change never requires a code change. The fallback is the live domain,
 * kisi.africa, so metadata stays correct even when the variable is unset.
 *
 * Consumed by app/layout.tsx (metadata + JSON-LD), app/sitemap.ts and
 * app/robots.ts.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kisi.africa"
).replace(/\/$/, "");

/**
 * Sibling properties in the Kisi universe. Env-overridable so domains can change
 * without a code change; defaults are the intended production origins.
 */
export const FARM_URL = (
  process.env.NEXT_PUBLIC_FARM_URL ?? "https://farm.kisi.africa"
).replace(/\/$/, "");

export const KIDS_URL = (
  process.env.NEXT_PUBLIC_KIDS_URL ?? "https://kids.kisi.africa"
).replace(/\/$/, "");
