"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { FARM_URL } from "@/lib/site";

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
  // Which accordion groups are expanded on the mobile menu. All collapsed by
  // default so the menu opens short and every item is reachable with a tap.
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const closeMenu = () => {
    setOpen(false);
    setOpenMenu(null);
    setExpanded(new Set());
  };
  const toggleSection = (label: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });

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
                      openMenu === item.label
                        ? "visible opacity-100"
                        : "invisible opacity-0"
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

        {/* Desktop call to action */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={FARM_URL}
            className="heartbeat inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kisi-green-700 px-5 py-2 text-sm font-semibold text-kisi-cream-100 shadow-md transition-colors hover:bg-kisi-green-900"
          >
            <span aria-hidden="true">🥚</span> Shop Kisi Farm
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
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav: a scrollable list with a pinned Shop footer, so a long
          menu never hides items and the sales button is always in reach. */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="flex max-h-[calc(100dvh-4rem)] flex-col border-t border-kisi-green-900/10 bg-kisi-cream-100 lg:hidden"
        >
          <ul className="flex-1 space-y-1 overflow-y-auto overscroll-contain px-4 py-3">
            {/* Stories front and centre on phones */}
            <li className="pb-1">
              <Link
                href="/republic/stories"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-kisi-gold-500 px-4 py-3 text-center font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
              >
                <span aria-hidden="true">📖</span> Read the Farm Stories
              </Link>
            </li>
            {NAV.map((item) => {
              if ("children" in item) {
                const isOpen = expanded.has(item.label);
                // Slug (no spaces) so the id is valid HTML and aria-controls
                // resolves. The panel is always rendered, hidden when closed,
                // so the controlled element always exists.
                const panelId = `m-${item.label
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`;
                return (
                  <li
                    key={item.label}
                    className="border-b border-kisi-green-900/10 last:border-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(item.label)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between rounded px-2 py-3 text-left font-medium text-kisi-charcoal-900 hover:bg-kisi-cream-200"
                    >
                      {item.label}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`shrink-0 text-kisi-green-700 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <ul
                      id={panelId}
                      className={`pb-2 pl-2 ${isOpen ? "" : "hidden"}`}
                    >
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={closeMenu}
                            className="block rounded px-4 py-2.5 text-kisi-charcoal-900 hover:bg-kisi-cream-200"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li
                  key={item.href}
                  className="border-b border-kisi-green-900/10 last:border-0"
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block rounded px-2 py-3 font-medium hover:bg-kisi-cream-200 ${
                      pathname === item.href
                        ? "text-kisi-green-700"
                        : "text-kisi-charcoal-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Pinned footer: the farm shop is where sales happen, so it never
              scrolls out of reach. */}
          <div className="shrink-0 border-t border-kisi-green-900/10 bg-kisi-cream-100 px-4 py-3">
            <a
              href={FARM_URL}
              onClick={closeMenu}
              className="heartbeat flex items-center justify-center gap-2 rounded-full bg-kisi-green-700 px-4 py-3 text-center font-semibold text-kisi-cream-100 shadow-md"
            >
              <span aria-hidden="true">🥚</span> Shop Kisi Farm
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
