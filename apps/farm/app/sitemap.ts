import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Sitemap for kisifarm. Canonical origin comes from NEXT_PUBLIC_SITE_URL. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/eggs",
    "/chicks",
    "/support",
    "/support/terms",
    "/about",
    "/visit",
    "/legal/privacy",
    "/legal/terms",
  ];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
