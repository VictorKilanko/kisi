import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { SITE_URL } from "@/lib/site";

export { SITE_URL };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: {
    default: "Kisi, Where Every Chicken Has a Story",
    template: "%s · Kisi",
  },
  description:
    "Kisi Africa is a living world of chicken characters and the Republic they " +
    "run. Meet the flock, follow the politics, sport and news, and step into a " +
    "nation of hens with names, opinions, and strong feelings about breakfast.",
  openGraph: {
    siteName: "Kisi, The Republic of Kisi",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisi, Where Every Chicken Has a Story",
    description:
      "A living world of chicken characters and the Republic they run. Meet " +
      "the flock and step into the Republic of Kisi.",
  },
  appleWebApp: {
    capable: true,
    title: "Kisi",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f5130",
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
          "A poultry farm in southwestern Nigeria, home of the Republic of Kisi.",
        url: SITE_URL,
        knowsAbout: ["poultry farming", "egg production", "agriculture in Nigeria"],
      },
      {
        "@type": "WebSite",
        name: "Kisi, The Republic of Kisi",
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
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
