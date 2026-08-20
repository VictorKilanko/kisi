import type { NextConfig } from "next";

/**
 * Vercel deployment, full Next.js with a server.
 *
 * The canonical origin comes from NEXT_PUBLIC_SITE_URL so a domain change is a
 * Vercel environment variable rather than a code change.
 *
 * Commerce moved to kisifarm. To avoid any window where a buyer hits a dead end,
 * kisi.africa keeps serving its own shop/support pages until the farm site is
 * live, then this flips: set NEXT_PUBLIC_COMMERCE_ON_FARM=true (with the farm
 * deployed) and the transactional routes 308-redirect to the farm. Default is
 * off, so nothing redirects until the owner is ready. The entertainment site
 * keeps its own /about and /visit (they are not redirected).
 */
const COMMERCE_ON_FARM = process.env.NEXT_PUBLIC_COMMERCE_ON_FARM === "true";
const FARM_URL = (
  process.env.NEXT_PUBLIC_FARM_URL ?? "https://farm.kisi.africa"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  // The shared canon is consumed as TypeScript source.
  transpilePackages: ["@kisi/canon"],

  async redirects() {
    if (!COMMERCE_ON_FARM) return [];
    const to = (path: string) => `${FARM_URL}${path}`;
    // Permanent (308) redirects, so search engines move the commerce URLs to the
    // farm. The old egg-production page maps onto the farm's /eggs.
    // /about and /visit stay on kisi.africa (owner decision): the entertainment
    // brand keeps its own about and contact pages.
    return [
      { source: "/shop", destination: to("/eggs"), permanent: true },
      { source: "/eggs", destination: to("/eggs"), permanent: true },
      { source: "/support", destination: to("/support"), permanent: true },
      { source: "/support/terms", destination: to("/support/terms"), permanent: true },
    ];
  },

  async headers() {
    return [
      {
        // The service worker must never be cached and must be allowed to
        // control the whole origin.
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
