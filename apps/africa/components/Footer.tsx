import Link from "next/link";
import { TacoMark } from "@/components/Logo";
import { FARM_URL, KIDS_URL } from "@/lib/site";

const isExternal = (href: string) => href.startsWith("http");

const FOOTER_LINKS = [
  {
    heading: "The Republic",
    links: [
      { href: "/flock", label: "Meet the Chickens" },
      { href: "/republic/presidency", label: "The President" },
      { href: "/republic/assembly", label: "Coop Assembly" },
      { href: "/news", label: "The Coop Times" },
      { href: "/republic/sports", label: "Sports" },
      { href: "/most-wanted", label: "Most Wanted" },
      { href: "/bantu", label: "Remembering Bantu" },
    ],
  },
  {
    // Commerce lives on kisifarm now; these link out to the farm shop.
    heading: "The Farm Shop",
    links: [
      { href: `${FARM_URL}/eggs`, label: "Order Eggs" },
      { href: `${FARM_URL}/chicks`, label: "Day-old Chicks" },
      { href: `${FARM_URL}/support`, label: "Support the Chickens" },
      { href: `${FARM_URL}/about`, label: "About the Farm" },
      { href: `${FARM_URL}/visit`, label: "Visit & Contact" },
      { href: KIDS_URL, label: "Kisi Kids" },
    ],
  },
  {
    heading: "The Small Print",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Use" },
      { href: `${FARM_URL}/support/terms`, label: "Support Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-kisi-green-900 text-kisi-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <TacoMark size={40} title="Kisi" />
            <p className="font-display text-2xl font-black tracking-tight">KISI</p>
          </div>
          <p className="mt-3 text-sm text-kisi-cream-100/80">
            Where every chicken has a story. A working poultry farm in
            southwestern Nigeria, run, top to tail, by the chickens themselves.
            Welcome to the Republic of Kisi.
          </p>
        </div>
        {FOOTER_LINKS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="kicker text-kisi-gold-300">{col.heading}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) =>
                isExternal(l.href) ? (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-kisi-gold-300">
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-kisi-gold-300">
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-kisi-cream-100/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-kisi-cream-100/70">
          <p>
            The Republic of Kisi, a nation of chickens at Kisi Farm,
            southwestern Nigeria. &copy; {new Date().getFullYear()} Kisi. All
            characters, stories, and designs are original to Kisi Farm.
          </p>
        </div>
      </div>
    </footer>
  );
}
