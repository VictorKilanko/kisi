import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Timeline } from "@/components/Cards";
import { ChickenPortrait } from "@kisi/ui";
import { findChicken, storyArcs } from "@kisi/canon";
import { FARM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Arcs",
  description:
    "The Republic's running storylines, first eggs, grain scandals, " +
    "retirements, rain finals, and recoveries, told beat by beat.",
};

export default function StoriesPage() {
  // Newest storyline first: sort by each arc's latest (last, since events are
  // date-ascending) revealed beat, so the freshest drama leads the page.
  const arcs = storyArcs()
    .slice()
    .sort((a, b) => {
      const aLatest = a.events[a.events.length - 1]?.date ?? "";
      const bLatest = b.events[b.events.length - 1]?.date ?? "";
      return bLatest.localeCompare(aLatest);
    });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Story Arcs
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        The Republic doesn&apos;t just have news, it has serials. Follow
        each storyline from its first beat, and jump to the citizens living
        it. New chapters appear as the flock writes them.
      </p>

      <div className="mt-12 space-y-14">
        {arcs.map((arc) => {
          const cast = [...new Set(arc.events.flatMap((e) => e.chickenIds))]
            .map((id) => findChicken(id))
            .filter((c) => c !== undefined);
          return (
            <section key={arc.id} aria-labelledby={`arc-${arc.id}`}>
              <SectionHeading kicker="Storyline" title={arc.title} lede={arc.summary} />
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="kicker text-kisi-charcoal-600">Featuring:</span>
                {cast.map((c) => (
                  <Link
                    key={c.id}
                    href={`/flock/${c.id}`}
                    className="flex items-center gap-1.5 rounded-full bg-kisi-cream-200 py-1 pl-1 pr-3 text-xs font-semibold hover:bg-kisi-gold-300/40"
                  >
                    <ChickenPortrait chicken={c} size={24} />
                    {c.name}
                  </Link>
                ))}
              </div>
              <Timeline events={arc.events} />
            </section>
          );
        })}
      </div>

      {/* Funnel: every story leads back to the real farm behind it */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-center text-kisi-cream-100">
        <h2 className="font-display text-2xl font-bold">
          Every story here runs on real feed.
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-kisi-cream-100/85">
          The Republic grows on a real working farm. Over at Kisi Farm you can
          keep the flock laying, lit, and housed, and take home the eggs while
          you are at it.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`${FARM_URL}/eggs`}
            className="rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
          >
            Order Eggs at Kisi Farm
          </a>
          <a
            href={`${FARM_URL}/support`}
            className="rounded-full bg-kisi-cream-100 px-6 py-3 font-semibold text-kisi-green-900 hover:bg-white"
          >
            Support the Flock
          </a>
        </div>
      </section>
    </div>
  );
}
