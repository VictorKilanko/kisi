import type { MetadataRoute } from "next";

/**
 * Web app manifest, served by Next at /manifest.webmanifest. Makes Kisi
 * installable to a phone home screen as a standalone app. Icons are Taco's
 * face (the farm logo); the maskable icon is the green full-bleed version.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kisi, The Republic of Kisi",
    short_name: "Kisi",
    description:
      "A living world of chicken characters and the Republic they run. Meet " +
      "the flock, follow the stories, and step into the Republic of Kisi.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#faf5e9",
    theme_color: "#1f5130",
    categories: ["entertainment", "news"],
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
      { name: "Meet the flock", short_name: "Flock", url: "/flock" },
      { name: "Read the stories", short_name: "Stories", url: "/republic/stories" },
      { name: "Enter the Republic", short_name: "Republic", url: "/republic" },
    ],
  };
}
