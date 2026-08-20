import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: {
    default: "Kisi Farm, Fresh Eggs and Day-old Chicks",
    template: "%s · Kisi Farm",
  },
  description:
    "Kisi Farm is a working poultry farm in southwestern Nigeria. Order " +
    "farm-fresh eggs and day-old chicks, laid and raised by hens with names.",
  openGraph: {
    siteName: "Kisi Farm",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisi Farm, Fresh Eggs and Day-old Chicks",
    description:
      "A working poultry farm in southwestern Nigeria. Order farm-fresh eggs " +
      "and day-old chicks.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f5130",
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
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
