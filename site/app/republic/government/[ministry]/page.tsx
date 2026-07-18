import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { ArticleCard } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { FictionDisclaimer } from "@/components/Disclaimer";
import { articlesForMinistry, getMinistry, ministries, ministerOf } from "@/lib/content";

export function generateStaticParams() {
  return ministries.map((m) => ({ ministry: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ministry: string }>;
}): Promise<Metadata> {
  const { ministry: id } = await params;
  const ministry = getMinistry(id);
  if (!ministry) return { title: "Ministry not found" };
  return {
    title: ministry.name,
    description: `${ministry.name} of the Republic of Kisi — “${ministry.motto}.”`,
  };
}

const PROJECT_STATUS_LABEL: Record<string, string> = {
  announced: "Announced",
  ongoing: "Ongoing",
  completed: "Completed",
  stalled: "Stalled (officially: progressing)",
};

export default async function MinistryPage({
  params,
}: {
  params: Promise<{ ministry: string }>;
}) {
  const { ministry: id } = await params;
  const ministry = getMinistry(id);
  if (!ministry) notFound();

  const minister = ministerOf(ministry);
  const articles = articlesForMinistry(ministry.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p>
        <Link
          href="/republic/government"
          className="text-sm font-semibold text-kisi-green-700 hover:underline"
        >
          ← All ministries
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <WorldBadge world="fiction" />
        <DemoBadge />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-indigo-900">
        {ministry.name}
      </h1>
      <p className="kicker mt-2 text-kisi-gold-700">“{ministry.motto}”</p>

      {/* Minister */}
      <section className="mt-8 rounded-2xl border border-kisi-indigo-800/15 bg-white p-6">
        {minister ? (
          <div className="flex items-center gap-5">
            <ChickenPortrait chicken={minister} size={96} framed />
            <div>
              <p className="kicker text-kisi-charcoal-600">The Minister</p>
              <h2 className="font-display text-xl font-bold text-kisi-green-900">
                <Link href={`/flock/${minister.id}`} className="hover:underline">
                  {minister.name}
                  {minister.nickname ? ` “${minister.nickname}”` : ""}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-kisi-charcoal-600">{minister.shortBio}</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="kicker text-kisi-charcoal-600">The Minister</p>
            <p className="mt-2 text-sm text-kisi-charcoal-600">
              {ministry.actingNote ?? "The position is vacant."}
            </p>
          </div>
        )}
      </section>

      {/* Mandate */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-bold text-kisi-green-900">Mandate</h2>
        <ul className="mt-4 space-y-2">
          {ministry.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-3 text-kisi-charcoal-600">
              <span aria-hidden="true" className="text-kisi-gold-700">
                ▸
              </span>
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-kisi-green-900">
          Active projects
        </h2>
        <ul className="mt-4 space-y-4">
          {ministry.projects.map((p) => (
            <li key={p.name} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-kisi-indigo-900">{p.name}</h3>
                <span className="kicker rounded-full bg-kisi-cream-200 px-3 py-1 text-kisi-charcoal-600">
                  {PROJECT_STATUS_LABEL[p.status]}
                </span>
              </div>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Press coverage */}
      {articles.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-kisi-green-900">
            In The Coop Times
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {articles.map((a) => (
              <ArticleCard key={a.id} article={a} compact />
            ))}
          </div>
        </section>
      )}

      <FictionDisclaimer />
    </div>
  );
}
