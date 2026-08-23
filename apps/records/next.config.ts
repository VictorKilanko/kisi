import type { NextConfig } from "next";

/**
 * records.kisi.africa — the farm-records app (Kisi Farm Records).
 *
 * A real logged-in application: farmers record daily flock, egg, feed, health
 * and cash data instead of filling a spreadsheet. Data lives in Supabase
 * (Postgres + auth), isolated per farm. Deployed on Vercel like the other Kisi
 * apps; the canonical origin comes from NEXT_PUBLIC_SITE_URL.
 */
const nextConfig: NextConfig = {
  // The shared brand package is CSS-only, imported from globals.css.
};

export default nextConfig;
