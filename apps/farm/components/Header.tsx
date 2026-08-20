"use client";

import Link from "next/link";
import { useState } from "react";
import { AFRICA_URL } from "@/lib/site";

/**
 * kisifarm header. Business nav, with a working mobile menu (this is the
 * commercial site and most Nigerian visitors are on phones).
 */
const nav = [
  { href: "/eggs", label: "Eggs" },
  { href: "/chicks", label: "Day-old Chicks" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About the Farm" },
  { href: "/visit", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-kisi-green-700/15 bg-kisi-cream-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          onClick={close}
          className="font-display text-xl font-bold text-kisi-green-900"
        >
          Kisi Farm
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm font-medium md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-kisi-charcoal-900 hover:text-kisi-green-700"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={AFRICA_URL}
            className="font-semibold text-kisi-green-700 hover:text-kisi-green-900"
          >
            The Republic &rarr;
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-kisi-green-900/20 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="farm-mobile-nav"
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
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="farm-mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-kisi-green-700/15 bg-kisi-cream-100 md:hidden"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block rounded px-2 py-2 hover:bg-kisi-cream-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={AFRICA_URL}
                onClick={close}
                className="block rounded px-2 py-2 font-semibold text-kisi-green-700 hover:bg-kisi-cream-200"
              >
                The Republic &rarr;
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
