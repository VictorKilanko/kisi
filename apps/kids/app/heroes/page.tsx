import type { Metadata } from "next";
import Link from "next/link";
import { heroes } from "@/content/heroes";
import { KidScene } from "@/components/KidScene";

export const metadata: Metadata = {
  title: "Heroes",
  description:
    "Meet real African heroes and leaders, told simply and truthfully for " +
    "children, with Dede and Zizi.",
};

export default function HeroesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        🦸🏾 Heroes
      </h1>
      <p className="mt-2 text-lg text-kisi-charcoal-900">
        Real African heroes who did brave and beautiful things.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {heroes.map((h) => (
          <li key={h.slug}>
            <Link
              href={`/heroes/${h.slug}`}
              className="block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-kisi-green-900/10 transition-shadow hover:shadow-md"
            >
              <KidScene scene="tree" className="aspect-[16/9] w-full" />
              <div className="p-5">
                <h2 className="font-display text-2xl font-black text-kisi-green-900">
                  {h.name}
                </h2>
                <p className="text-sm font-semibold text-kisi-green-700">
                  {h.country} · {h.lived}
                </p>
                <p className="mt-2 text-kisi-charcoal-900">{h.knownFor}</p>
                <span className="mt-3 inline-block rounded-full bg-kids-leaf/25 px-4 py-2 text-sm font-bold text-kisi-green-900">
                  Meet {h.name.split(" ")[0]} &rarr;
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
