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

export const metadata: Metadata = {
  metadataBase: new URL("https://kisi-farm-placeholder.example"), // TODO: real domain pending owner decision (CONTENT_CHECKLIST)
  title: {
    default: "Kisi — Where Every Chicken Has a Story",
    template: "%s · Kisi",
  },
  description:
    "Kisi is a real poultry farm in southwestern Nigeria — home of the " +
    "Republic of Kisi, a fictional chicken nation with a President, a Coop " +
    "Assembly, a national newspaper, and a flock of unforgettable citizens.",
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
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
