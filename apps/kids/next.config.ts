import type { NextConfig } from "next";

/**
 * kisikids — the kids channel (education + entertainment + merch, Blippi model).
 * Greenfield: scaffolded now, built out in a later engagement. Deployed to
 * Vercel with Root Directory apps/kids.
 */
const nextConfig: NextConfig = {
  transpilePackages: ["@kisi/canon", "@kisi/ui"],
};

export default nextConfig;
