import type { NextConfig } from "next";

/**
 * kisifarm — the real business (eggs, day-old chicks, support). Deployed to
 * Vercel with Root Directory apps/farm. Canonical origin comes from
 * NEXT_PUBLIC_SITE_URL so a domain change is an env var, not code.
 */
const nextConfig: NextConfig = {
  // The shared canon is consumed as TypeScript source.
  transpilePackages: ["@kisi/canon", "@kisi/ui"],
};

export default nextConfig;
