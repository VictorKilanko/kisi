import type { MetadataRoute } from "next";

/**
 * Web app manifest, served by Next at /manifest.webmanifest. Makes Kisi
 * installable to a phone home screen as a standalone app. Icons are Taco's
 * face (the farm logo); the maskable icon is the green full-bleed version.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kisi Farm, The Republic of Kisi",
    short_name: "Kisi",
    description:
      "A working poultry farm in southwestern Nigeria, run by the chickens " +
      "themselves. Order farm-fresh eggs and follow the Republic.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#faf5e9",
    theme_color: "#1f5130",
    categories: ["food", "shopping", "entertainment"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Order our eggs", short_name: "Order", url: "/shop" },
      { name: "Support the chickens", short_name: "Support", url: "/support" },
      { name: "Meet the flock", short_name: "Flock", url: "/flock" },
    ],
  };
}
