/**
 * kisifarm's canonical origin and the sibling properties it links to.
 *
 * Every URL is overridable by an env var so domains can change without a code
 * change (build subdomain-ready today, swap to standalone domains later). The
 * fallbacks are the intended production origins.
 */
const clean = (u: string) => u.replace(/\/$/, "");

export const SITE_URL = clean(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://farm.kisi.africa",
);

/** The entertainment universe (the Republic, the stories). */
export const AFRICA_URL = clean(
  process.env.NEXT_PUBLIC_AFRICA_URL ?? "https://kisi.africa",
);

/** The kids channel. */
export const KIDS_URL = clean(
  process.env.NEXT_PUBLIC_KIDS_URL ?? "https://kids.kisi.africa",
);
