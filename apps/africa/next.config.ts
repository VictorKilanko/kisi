import type { NextConfig } from "next";

/**
 * Vercel deployment, full Next.js with a server.
 *
 * The canonical origin comes from NEXT_PUBLIC_SITE_URL so a domain change is a
 * Vercel environment variable rather than a code change.
 *
 * Commerce lives on kisifarm now. kisi.africa is the entertainment brand: the
 * retired transactional URLs 308-redirect to the live farm (for bookmarks and
 * inbound links). /eggs stays here as Republic egg lore (the census and
 * milestones); /about and /visit stay too, the entertainment brand keeps them.
 */
const FARM_URL = (
  process.env.NEXT_PUBLIC_FARM_URL ?? "https://farm.kisi.africa"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  // The shared canon is consumed as TypeScript source.
  transpilePackages: ["@kisi/canon"],

  async redirects() {
    const to = (path: string) => `${FARM_URL}${path}`;
    return [
      { source: "/shop", destination: to("/eggs"), permanent: true },
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
