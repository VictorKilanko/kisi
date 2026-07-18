import type { MetadataRoute } from "next";

// Required by Next 16 under `output: "export"` — see app/sitemap.ts.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://victorkilanko.com/kisi/sitemap.xml",
  };
}
