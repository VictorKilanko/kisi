/**
 * kisikids canonical origin and sibling links. Every URL is env-overridable so
 * domains can change without code changes.
 */
const clean = (u: string) => u.replace(/\/$/, "");

export const SITE_URL = clean(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kids.kisi.africa",
);

/** The entertainment universe (the Republic). */
export const AFRICA_URL = clean(
  process.env.NEXT_PUBLIC_AFRICA_URL ?? "https://kisi.africa",
);

/** The farm shop. */
export const FARM_URL = clean(
  process.env.NEXT_PUBLIC_FARM_URL ?? "https://farm.kisi.africa",
);
