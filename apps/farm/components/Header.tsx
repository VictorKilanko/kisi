import Link from "next/link";
import { AFRICA_URL } from "@/lib/site";

/**
 * kisifarm header. Business nav only. The commerce routes (/eggs, /chicks,
 * /support, /about, /visit) land in Phase 3; the links are in place now so the
 * shell is complete.
 */
const nav = [
  { href: "/eggs", label: "Eggs" },
  { href: "/chicks", label: "Day-old Chicks" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About the Farm" },
  { href: "/visit", label: "Visit" },
];

export function Header() {
  return (
    <header className="border-b border-kisi-green-700/15 bg-kisi-cream-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-display text-xl font-bold text-kisi-green-900">
          Kisi Farm
        </Link>
        <nav aria-label="Primary" className="hidden gap-5 text-sm font-medium md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-kisi-charcoal-900 hover:text-kisi-green-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={AFRICA_URL}
          className="text-sm font-semibold text-kisi-green-700 hover:text-kisi-green-900"
        >
          The Republic &rarr;
        </a>
      </div>
    </header>
  );
}
