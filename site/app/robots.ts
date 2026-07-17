import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kisi-farm-placeholder.example/sitemap.xml", // TODO: real domain pending owner decision
  };
}
