import type { NextConfig } from "next";

/**
 * Vercel deployment — full Next.js with a server.
 *
 * This replaced a GitHub Pages static export (`output: "export"` + a `/kisi`
 * basePath), which could not run route handlers. Egg orders, well-wishes and
 * the payment layer all need a server, so the export settings are gone.
 *
 * The canonical origin now comes from NEXT_PUBLIC_SITE_URL so a domain change
 * is a Vercel environment variable rather than a code change.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
