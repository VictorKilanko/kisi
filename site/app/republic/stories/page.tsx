import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Timeline } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { findChicken, storyArcs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Story Arcs",
  description:
    "The Republic's running storylines — first eggs, grain scandals, " +
    "retirements, rain finals, and recoveries — told beat by beat.",
};

export default function StoriesPage() {
  const arcs = storyArcs();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Story Arcs
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        The Republic doesn&apos;t just have news — it has serials. Follow
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

    </div>
  );
}
