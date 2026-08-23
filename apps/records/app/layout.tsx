import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kisi Farm Records",
    template: "%s · Kisi Farm Records",
  },
  description:
    "Record daily flock, egg, feed, health and cash data for Kisi Farm. " +
    "The living farm ledger behind kisi.africa.",
  robots: { index: false, follow: false }, // private app, keep out of search
};

export const viewport: Viewport = {
  themeColor: "#1f5130",
  width: "device-width",
  initialScale: 1,
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
        <main id="main" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
