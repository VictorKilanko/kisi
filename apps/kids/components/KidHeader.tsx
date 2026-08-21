import Link from "next/link";

/** Big, friendly, pre-reader-safe nav (emoji + word). No dropdowns, all tappable. */
export const PILLARS = [
  { href: "/stories", label: "Stories", emoji: "📖" },
  { href: "/heroes", label: "Heroes", emoji: "🦸🏾" },
  { href: "/words", label: "Words", emoji: "🗣️" },
  { href: "/songs", label: "Songs", emoji: "🎵" },
  { href: "/printables", label: "Printables", emoji: "🖍️" },
] as const;

export function KidHeader() {
  return (
    <header className="bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden className="text-2xl">🐣</span>
          <span className="font-display text-2xl font-black text-kisi-green-900">
            Kisi Kids
          </span>
        </Link>
        <nav aria-label="Kisi Kids sections" className="flex flex-wrap gap-2">
          {PILLARS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="flex items-center gap-1.5 rounded-full bg-kids-sun/25 px-4 py-2 text-sm font-bold text-kisi-charcoal-900 hover:bg-kids-sun/50"
            >
              <span aria-hidden>{p.emoji}</span>
              {p.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
