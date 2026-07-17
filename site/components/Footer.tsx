import Link from "next/link";

const FOOTER_LINKS = [
  {
    heading: "The Republic",
    links: [
      { href: "/flock", label: "Meet the Flock" },
      { href: "/republic/presidency", label: "The Presidency" },
      { href: "/republic/assembly", label: "Coop Assembly" },
      { href: "/news", label: "The Coop Times" },
      { href: "/republic/sports", label: "Sports" },
    ],
  },
  {
    heading: "The Farm",
    links: [
      { href: "/about", label: "About Kisi" },
      { href: "/eggs", label: "Egg Life" },
      { href: "/agric-city", label: "Agric City Vision" },
      { href: "/visit", label: "Visit & Contact" },
      { href: "/support", label: "Support the Chickens" },
    ],
  },
  {
    heading: "The Small Print",
    links: [
      { href: "/disclaimer", label: "Fact & Fiction Disclaimer" },
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Use" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-kisi-green-900 text-kisi-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">Kisi</p>
          <p className="mt-2 text-sm text-kisi-cream-100/80">
            Where every chicken has a story. A real poultry farm in
            southwestern Nigeria — and the proud, entirely fictional Republic
            its chickens govern.
          </p>
        </div>
        {FOOTER_LINKS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="kicker text-kisi-gold-300">{col.heading}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-kisi-gold-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-kisi-cream-100/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-kisi-cream-100/70">
          <p>
            The Republic of Kisi is a fictional storytelling world; its
            citizens are real chickens at Kisi. Political content is satire.
            Characters shown are demonstration content pending real flock
            records. &copy; {new Date().getFullYear()} Kisi. All original
            characters and designs.
          </p>
        </div>
      </div>
    </footer>
  );
}
