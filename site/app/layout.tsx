import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// PLACEHOLDER DOMAIN — deliberately obvious and non-registrable (.example).
// Replace in ONE place per file when the owner chooses the real domain:
// here, app/sitemap.ts, and app/robots.ts (tracked in docs/CONTENT_CHECKLIST.md).
export const SITE_URL = "https://victorkilanko.com/kisi";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: {
    default: "Kisi — Where Every Chicken Has a Story",
    template: "%s · Kisi",
  },
  description:
    "Kisi is a poultry farm in southwestern Nigeria — and home of the " +
    "Republic of Kisi, a chicken nation with a President, a Coop Assembly, " +
    "a national newspaper, and a flock of unforgettable citizens.",
  openGraph: {
    siteName: "Kisi — The Republic of Kisi",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Kisi",
        description:
          "A poultry farm in southwestern Nigeria — home of the Republic of Kisi.",
        url: SITE_URL,
        knowsAbout: ["poultry farming", "egg production", "agriculture in Nigeria"],
      },
      {
        "@type": "WebSite",
        name: "Kisi — The Republic of Kisi",
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#org` },
      },
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
