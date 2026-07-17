import type { Metadata } from "next";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { MilestoneCard, SectionHeading } from "@/components/Cards";
import { DemoContentNotice, FictionDisclaimer } from "@/components/Disclaimer";
import { eggCensus, eggMilestones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Egg Life",
  description:
    "First eggs, landmark counts, laying breaks, and honoured retirements — " +
    "the egg-laying life of the Kisi flock, told with respect.",
};

export default function EggsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="mixed" />
        <DemoBadge />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Egg Life
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Every egg at Kisi belongs to a hen with a name, and we mark her
        milestones the way you&apos;d mark a friend&apos;s: first eggs
        celebrated, laying breaks respected, retirements honoured. Hens are
        not machines here — that&apos;s policy, welfare practice, and (in the
        Republic) constitutional law.
      </p>
      <DemoContentNotice />

      {/* Census */}
      <section className="mt-12">
        <SectionHeading
          kicker="The Bureau of Egg Statistics"
          title="National Egg Census"
          lede="Monthly totals, audited by the opposition at her own insistence. Figures shown are demonstration data until real farm records are published."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {eggCensus.map((c) => (
            <div key={c.period} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="kicker text-kisi-gold-500">{c.label}</p>
              <p className="font-display mt-2 text-5xl font-black text-kisi-green-900">
                {c.total}
              </p>
              <p className="mt-1 text-sm text-kisi-charcoal-600">eggs recorded</p>
              <p className="mt-3 text-xs text-kisi-charcoal-600">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="mt-16">
        <SectionHeading kicker="The Record Book" title="Recent milestones" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eggMilestones.map((m) => (
            <MilestoneCard key={m.id} milestone={m} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <div className="flex flex-wrap gap-2">
          <WorldBadge world="fact" />
        </div>
        <h2 className="font-display mt-3 text-2xl font-bold">
          How laying actually works
        </h2>
        <div className="mt-4 grid gap-6 text-sm text-kisi-cream-100/85 md:grid-cols-3">
          <p>
            A healthy hen lays in natural cycles — more in her first laying
            years, gradually fewer as she matures. Pauses for moulting, rest,
            weather, or broodiness are normal and healthy, not a problem to
            be fixed.
          </p>
          <p>
            Light, feed quality, calcium, clean water, and low stress all
            shape laying. Good farms manage these for the bird&apos;s
            wellbeing first; consistent eggs are the result, not the goal
            that overrides everything.
          </p>
          <p>
            Older hens slow down and eventually stop. At Kisi, retirement is
            planned for, and senior hens keep their place, their shade, and
            their names. Detailed practice notes for our own farm will appear
            here as records are published.
          </p>
        </div>
      </section>

      <FictionDisclaimer />
    </div>
  );
}
