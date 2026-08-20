import type { NextConfig } from "next";

/**
 * Vercel deployment, full Next.js with a server.
 *
 * This replaced a GitHub Pages static export (`output: "export"` + a `/kisi`
 * basePath), which could not run route handlers. Egg orders, well-wishes and
 * the payment layer all need a server, so the export settings are gone.
 *
 * The canonical origin now comes from NEXT_PUBLIC_SITE_URL so a domain change
 * is a Vercel environment variable rather than a code change.
 */
const nextConfig: NextConfig = {
  // Shared workspace packages are consumed as TypeScript source, so Next must
  // transpile them rather than expect a pre-built dist.
  transpilePackages: ["@kisi/canon"],
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
