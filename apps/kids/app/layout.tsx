import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { KidHeader } from "@/components/KidHeader";
import { KidFooter } from "@/components/KidFooter";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: {
    default: "Kisi Kids, Stories and Songs from the Farm",
    template: "%s · Kisi Kids",
  },
  description:
    "Kisi Kids brings the chickens of Kisi Farm to young viewers with stories, " +
    "songs and gentle lessons about animals, food and kindness. Hatching soon.",
  openGraph: { siteName: "Kisi Kids", type: "website", locale: "en_NG" },
};

export const viewport: Viewport = {
  themeColor: "#2f9bd6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <KidHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <KidFooter />
      </body>
    </html>
  );
}
