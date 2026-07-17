import type { Metadata } from "next";
import { DemoBadge } from "@/components/Badges";
import { ArticleCard } from "@/components/Cards";
import { FictionDisclaimer } from "@/components/Disclaimer";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Coop Times",
  description:
    "The Republic of Kisi's national newspaper — politics, society, sports, " +
    "the egg economy, and the investigations that keep the cabinet punctual.",
};

export default function NewsPage() {
  const [lead, ...rest] = articles;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Masthead */}
      <header className="border-b-4 border-double border-kisi-indigo-800 pb-6 text-center">
        <p className="kicker text-kisi-charcoal-600">
          The Republic&apos;s newspaper of record · est. before the water tank
        </p>
        <h1 className="font-display mt-2 text-5xl font-black tracking-tight text-kisi-indigo-900 sm:text-6xl">
          The Coop Times
        </h1>
        <p className="mt-2 text-sm italic text-kisi-charcoal-600">
          “All the news that&apos;s fit to peck.”
        </p>
        <div className="mt-3 flex justify-center">
          <DemoBadge />
        </div>
      </header>

      {/* Lead story */}
      {lead && (
        <section aria-label="Lead story" className="mt-10">
          <ArticleCard article={lead} />
        </section>
      )}

      {/* The rest of the paper */}
      <section aria-label="More stories" className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </section>

      <FictionDisclaimer />
    </div>
  );
}
