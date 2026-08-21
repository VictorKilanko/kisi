"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { FARM_URL, KIDS_URL } from "@/lib/site";

const NAV = [
  { href: "/flock", label: "Meet the Chickens" },
  {
    label: "Farm Stories",
    children: [
      { href: "/republic/stories", label: "Big Stories" },
      { href: "/republic/social", label: "Life & Parties" },
      { href: "/republic/map", label: "Walk the Farm (3D)" },
    ],
  },
  {
    label: "Politics",
    children: [
      { href: "/republic/presidency", label: "The Presidency" },
      { href: "/republic/government", label: "The Government" },
      { href: "/republic/assembly", label: "The Coop Assembly" },
      { href: "/republic", label: "About the Republic" },
    ],
  },
  {
    label: "Economy",
    children: [
      { href: "/economy", label: "The Economy" },
      { href: "/eggs", label: "Egg Life" },
    ],
  },
  { href: "/republic/sports", label: "Sports" },
  {
    label: "Media",
    children: [
      { href: "/news", label: "The Coop Times" },
      { href: "/most-wanted", label: "Most Wanted" },
    ],
  },
  {
    label: "About",
    children: [
      { href: "/about", label: "About Kisi Africa" },
      { href: "/mascot", label: "The Mascot" },
      { href: "/visit", label: "Contact" },
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const closeMenu = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-kisi-green-900/10 bg-kisi-cream-100/95 backdrop-blur">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label="Kisi, home">
          <Logo size={40} tagline />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) =>
              "children" in item ? (
                <li key={item.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 whitespace-nowrap rounded px-2.5 py-2 text-sm font-medium text-kisi-charcoal-900 hover:bg-kisi-cream-200"
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu((v) => (v === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-xs opacity-70">
                      ▾
                    </span>
                  </button>
                  <ul
                    className={`absolute left-0 top-full z-50 min-w-52 rounded-lg border border-kisi-green-900/10 bg-kisi-cream-100 p-1 shadow-lg transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${
                      openMenu === item.label ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={closeMenu}
                          className="block whitespace-nowrap rounded px-3 py-2 text-sm text-kisi-charcoal-900 hover:bg-kisi-cream-200"
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
                    className={`whitespace-nowrap rounded px-2.5 py-2 text-sm font-medium hover:bg-kisi-cream-200 ${
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
          </ul>
        </nav>

        {/* Desktop calls to action */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={FARM_URL}
            className="whitespace-nowrap rounded-full bg-kisi-green-700 px-5 py-2 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
          >
            Kisi Farm
          </a>
          <a
            href={KIDS_URL}
            className="whitespace-nowrap rounded-full border border-kisi-green-700/40 px-5 py-2 text-sm font-semibold text-kisi-green-700 hover:bg-kisi-cream-200"
          >
            Kisi Kids
          </a>
        </div>

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
            {/* Stories front and centre on phones */}
            <li className="pb-2">
              <Link
                href="/republic/stories"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-kisi-gold-500 px-4 py-3 text-center font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
              >
                <span aria-hidden="true">📖</span> Read the Farm Stories
              </Link>
            </li>
            {NAV.map((item) =>
              "children" in item ? (
                <li key={item.label}>
                  <span className="kicker block px-2 pt-3 text-kisi-charcoal-600">
                    {item.label}
                  </span>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={closeMenu}
                          className="block rounded px-4 py-2 hover:bg-kisi-cream-200"
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
                    onClick={closeMenu}
                    className="block rounded px-2 py-2 font-medium hover:bg-kisi-cream-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={FARM_URL}
                onClick={closeMenu}
                className="block rounded-full bg-kisi-green-700 px-4 py-2 text-center font-semibold text-kisi-cream-100"
              >
                Kisi Farm
              </a>
              <a
                href={KIDS_URL}
                onClick={closeMenu}
                className="block rounded-full border border-kisi-green-700/40 px-4 py-2 text-center font-semibold text-kisi-green-700"
              >
                Kisi Kids
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
