"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/flock", label: "Meet the Flock" },
  {
    label: "The Republic",
    children: [
      { href: "/republic", label: "About the Republic" },
      { href: "/republic/presidency", label: "The Presidency" },
      { href: "/republic/government", label: "Government & Cabinet" },
      { href: "/republic/assembly", label: "Coop Assembly" },
      { href: "/republic/sports", label: "Sports" },
      { href: "/republic/social", label: "Social Life" },
    ],
  },
  { href: "/news", label: "The Coop Times" },
  { href: "/eggs", label: "Egg Life" },
  {
    label: "The Farm",
    children: [
      { href: "/about", label: "About Kisi" },
      { href: "/mascot", label: "The Mascot" },
      { href: "/agric-city", label: "Agric City Vision" },
      { href: "/visit", label: "Visit & Contact" },
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-kisi-green-900/10 bg-kisi-cream-100/95 backdrop-blur">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Kisi — home">
          {/* Simple original egg-and-leaf mark (placeholder for the designed logo) */}
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <ellipse cx="16" cy="18" rx="10" ry="12" fill="#1f5130" />
            <ellipse cx="16" cy="18" rx="6.5" ry="8.5" fill="#faf5e9" />
            <path d="M16 4c3 2 4 5 3 7-3-1-4-4-3-7z" fill="#d9a02b" />
          </svg>
          <span className="font-display text-xl font-bold text-kisi-green-900">
            Kisi
          </span>
          <span className="kicker hidden text-kisi-charcoal-600 sm:inline">
            The Republic of Kisi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) =>
              "children" in item ? (
                <li key={item.label} className="group relative">
                  <button
                    type="button"
                    className="rounded px-3 py-2 text-sm font-medium text-kisi-charcoal-900 hover:bg-kisi-cream-200"
                    aria-haspopup="true"
                  >
                    {item.label} <span aria-hidden="true">▾</span>
                  </button>
                  <ul className="invisible absolute left-0 top-full z-50 min-w-52 rounded-lg border border-kisi-green-900/10 bg-kisi-cream-100 p-1 opacity-0 shadow-lg transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded px-3 py-2 text-sm text-kisi-charcoal-900 hover:bg-kisi-cream-200"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded px-3 py-2 text-sm font-medium hover:bg-kisi-cream-200 ${
                      pathname === item.href
                        ? "text-kisi-green-700"
                        : "text-kisi-charcoal-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link
                href="/support"
                className="ml-2 rounded-full bg-kisi-green-700 px-4 py-2 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
              >
                Support the Chickens
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-kisi-green-900/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-t border-kisi-green-900/10 bg-kisi-cream-100 lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3">
            {NAV.map((item) =>
              "children" in item ? (
                <li key={item.label}>
                  <span className="kicker block px-2 pt-3 text-kisi-charcoal-600">
                    {item.label}
                  </span>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded px-4 py-2 hover:bg-kisi-cream-200">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded px-2 py-2 font-medium hover:bg-kisi-cream-200">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li className="pt-2">
              <Link
                href="/support"
                className="block rounded-full bg-kisi-green-700 px-4 py-2 text-center font-semibold text-kisi-cream-100"
              >
                Support the Chickens
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
