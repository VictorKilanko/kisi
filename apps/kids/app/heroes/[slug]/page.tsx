import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { heroes, getHero } from "@/content/heroes";
import { KidScene } from "@/components/KidScene";

export function generateStaticParams() {
  return heroes.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hero = getHero(slug);
  if (!hero) return { title: "Hero" };
  return { title: hero.name, description: `${hero.name}: ${hero.knownFor}` };
}

export default async function HeroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hero = getHero(slug);
  if (!hero) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/heroes" className="text-sm font-bold text-kisi-green-700 hover:underline">
        &larr; All heroes
      </Link>

      <div className="mt-3 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-kisi-green-900/10">
        <KidScene scene="tree" className="aspect-[16/7] w-full" />
        <div className="p-6">
          <h1 className="font-display text-3xl font-black text-kisi-green-900 sm:text-4xl">
            {hero.name}
          </h1>
          <p className="mt-1 font-semibold text-kisi-green-700">
            {hero.country} · {hero.lived}
          </p>

          <p className="mt-4 rounded-2xl bg-kids-sky/15 px-4 py-3 text-lg text-kisi-charcoal-900">
            <span className="font-bold">Zizi:</span> {hero.question}
          </p>

          <ul className="mt-4 space-y-2 text-lg text-kisi-charcoal-900">
            {hero.facts.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden className="text-kids-leaf">●</span>
                {f}
              </li>
            ))}
          </ul>

          <p className="mt-5 rounded-2xl bg-kids-leaf/15 px-4 py-3 text-lg font-bold text-kisi-green-900">
            🌟 {hero.takeaway}
          </p>
        </div>
      </div>
    </div>
  );
}
