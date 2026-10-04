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

/**
 * Farm WhatsApp number, digits only, in full international form. This is the
 * farm's real, public order line (+234 813 314 9331). Overridable with
 * NEXT_PUBLIC_WHATSAPP_NUMBER (e.g. to swap numbers without a code change); set
 * that to an empty string to hide the "Order on WhatsApp" buttons entirely.
 */
export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348133149331"
).replace(/\D/g, "");

/**
 * A wa.me deep link that opens WhatsApp with a message already typed, or null
 * when no number is configured. Callers render nothing on null.
 */
export function whatsappLink(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
