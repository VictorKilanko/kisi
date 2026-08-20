import type { MetadataRoute } from "next";
import { articles, chickens, ministries } from "@kisi/canon";
import { SITE_URL as BASE } from "@/lib/site";

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
    "/news",
    "/most-wanted",
    "/bantu",
    "/economy",
    "/eggs",
    "/about",
    "/mascot",
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
