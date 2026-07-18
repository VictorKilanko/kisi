import type { MetadataRoute } from "next";
import { articles, chickens, ministries } from "@/lib/content";

// Served as a GitHub Pages project site under the owner's custom domain.
const BASE = "https://victorkilanko.com/kisi";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/flock",
    "/republic",
    "/republic/presidency",
    "/republic/government",
    "/republic/assembly",
    "/republic/sports",
    "/republic/social",
    "/republic/stories",
    "/republic/map",
    "/support/terms",
    "/news",
    "/most-wanted",
    "/bantu",
    "/eggs",
    "/shop",
    "/about",
    "/mascot",
    "/support",
    "/visit",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({ url: `${BASE}${path}` }));

  return [
    ...staticRoutes,
    ...chickens.map((c) => ({ url: `${BASE}/flock/${c.id}` })),
    ...ministries.map((m) => ({ url: `${BASE}/republic/government/${m.id}` })),
    ...articles.map((a) => ({ url: `${BASE}/news/${a.id}` })),
  ];
}
