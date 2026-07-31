import type { Metadata } from "next";
import { SectionHeading } from "@/components/Cards";
import { FlockDirectory } from "@/components/FlockDirectory";
import { chickens, chickensOfTribe, tribes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Flock",
  description:
    "The citizens of the Republic of Kisi. Search and filter every chicken " +
    "by name, tribe, role, laying status, and personality.",
};

export default function FlockPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        kicker="The Citizen Registry"
        title="Meet the Flock"
        lede="Every bird at Kisi is an individual, with a name, a history, allies, rivals, and (in several documented cases) a political agenda. Search the registry."
      />

      <section
        id="tribes"
        aria-labelledby="tribes-heading"
        className="mt-10 scroll-mt-24 rounded-3xl border border-kisi-green-900/10 bg-kisi-cream-200 p-6 sm:p-8"
      >
        <p className="kicker text-kisi-gold-700">The two founding lines</p>
        <h2
          id="tribes-heading"
          className="font-display mt-1 text-2xl font-bold text-kisi-green-900 sm:text-3xl"
        >
          One Republic, two tribes
        </h2>
        <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
          Every citizen is born into one of two lines. Tribe here means
          heritage, not party: birds of both lines sit in the cabinet, lead the
          opposition, keep goal for rival teams, and share the mango tree at
          dusk. Today the Republic counts 650 citizens across the two lines. A
          few tell their stories here; the rest keep the nation running.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {tribes.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-kisi-green-900/10 bg-white p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: t.accent }}
                />
                <h3 className="font-display text-xl font-bold text-kisi-green-900">
                  {t.name}
                </h3>
              </div>
              <p className="kicker mt-1 text-kisi-gold-700">{t.tagline}</p>
              <p className="mt-3 text-sm text-kisi-charcoal-600">
                {t.description}
              </p>
              <dl className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t border-kisi-green-900/10 pt-3">
                <div>
                  <dt className="sr-only">Population</dt>
                  <dd>
                    <span className="font-display text-2xl font-black text-kisi-green-900">
                      {t.flock.total.toLocaleString("en-NG")}
                    </span>{" "}
                    <span className="text-sm text-kisi-charcoal-600">birds</span>
                  </dd>
                </div>
                <p className="text-sm text-kisi-charcoal-600">{t.flock.note}</p>
                <p className="kicker ml-auto text-kisi-charcoal-600">
                  {chickensOfTribe(t.id).length} profiled
                </p>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <FlockDirectory chickens={chickens} />
      </div>
    </div>
  );
}
