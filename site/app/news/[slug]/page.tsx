import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { ArticleCard, formatDate } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { FictionDisclaimer } from "@/components/Disclaimer";
import { articles, findChicken, getArticle, getMinistry } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.headline} · The Coop Times`,
    description: article.standfirst,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category === article.category ||
          a.relatedChickenIds.some((id) => article.relatedChickenIds.includes(id))),
    )
    .slice(0, 2);

  // Fiction gets schema.org's SatiricalArticle type — machine-readable
  // honesty; real farm announcements are plain Articles.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": article.world === "fact" ? "Article" : "SatiricalArticle",
    headline: article.headline,
    description: article.standfirst,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: `The Coop Times (${article.author.name})` },
    isPartOf: { "@type": "CreativeWork", name: "The Republic of Kisi (fictional storytelling world)" },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p>
        <Link href="/news" className="text-sm font-semibold text-kisi-indigo-800 hover:underline">
          ← The Coop Times front page
        </Link>
      </p>

      <article className="mt-6">
        <header className="border-b-2 border-kisi-indigo-800/20 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <WorldBadge world={article.world} />
            <span className="kicker text-kisi-charcoal-600">
              {article.category.replace("-", " ")}
            </span>
            {article.isDemo && <DemoBadge />}
          </div>
          <h1 className="font-display mt-4 text-3xl font-black leading-tight text-kisi-indigo-900 sm:text-4xl">
            {article.headline}
          </h1>
          <p className="mt-3 text-lg text-kisi-charcoal-600">{article.standfirst}</p>
          <p className="mt-4 text-sm text-kisi-charcoal-600">
            By <strong>{article.author.name}</strong>, {article.author.title} ·{" "}
            {formatDate(article.publishedAt)}
          </p>
        </header>

        <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed">
          {article.body.map((p, i) =>
            p.startsWith("DISCLAIMER:") ? (
              <p key={i} className="rounded-lg bg-kisi-cream-200 px-4 py-3 text-sm text-kisi-charcoal-600">
                {p}
              </p>
            ) : (
              <p key={i}>{p}</p>
            ),
          )}
        </div>
      </article>

      {/* Related characters */}
      {article.relatedChickenIds.length > 0 && (
        <section className="mt-10 rounded-2xl border border-kisi-green-900/10 bg-white p-6">
          <h2 className="kicker text-kisi-charcoal-600">In this story</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {article.relatedChickenIds.map((id) => {
              const c = findChicken(id)!;
              return (
                <li key={id}>
                  <Link
                    href={`/flock/${c.id}`}
                    className="flex items-center gap-2 rounded-full bg-kisi-cream-200 py-1 pl-1 pr-4 text-sm font-medium hover:bg-kisi-gold-300/40"
                  >
                    <ChickenPortrait chicken={c} size={32} />
                    {c.name}
                  </Link>
                </li>
              );
            })}
            {article.relatedMinistryIds.map((id) => {
              const m = getMinistry(id)!;
              return (
                <li key={id}>
                  <Link
                    href={`/republic/government/${m.id}`}
                    className="inline-flex items-center rounded-full bg-kisi-indigo-800 px-4 py-1.5 text-sm font-medium text-kisi-cream-100 hover:bg-kisi-indigo-900"
                  >
                    {m.shortName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="kicker text-kisi-charcoal-600">Also in the paper</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} compact />
            ))}
          </div>
        </section>
      )}

      {article.world !== "fact" && <FictionDisclaimer />}
    </div>
  );
}
