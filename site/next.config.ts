import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * The site is served as a project site under the victorkilanko.com custom
 * domain, so every route lives beneath /kisi — hence `basePath`. GitHub
 * Pages has no Node server, which means:
 *   - no route handlers (app/api/*) — forms are client-side only
 *   - no next/image optimizer — images must be unoptimized
 *   - trailingSlash keeps directory-style URLs resolving without a server
 *
 * If server behaviour is needed later (real order delivery, payments), the
 * host has to change — Cloudflare Pages or a Node host — and `output`,
 * `basePath`, and `images` come back out.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kisi",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
