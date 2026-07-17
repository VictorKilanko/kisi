import type { Metadata } from "next";
import Link from "next/link";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { SectionHeading, formatDate } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { FictionDisclaimer } from "@/components/Disclaimer";
import { findChicken, socialEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Social Life",
  description:
    "The Feather Gala, the First Grain Festival, Sunday storytelling under " +
    "the mango tree, and the rest of the Republic's social calendar.",
};

const TYPE_LABEL: Record<string, string> = {
  "hatch-day": "Hatch-day",
  festival: "National festival",
  club: "Club & clinic",
  ceremony: "Ceremony",
  storytelling: "Storytelling",
  community: "Community",
};

export default function SocialPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fiction" />
        <DemoBadge />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Social Life
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        The Republic takes its celebrations seriously — the owambe spirit
        with feathers. There is a colour of the year (everyone somehow
        already knows it), a storytelling seat under the mango tree, and a
        national institution for ending quarrels with shared grain.
      </p>

      <div className="mt-12">
        <SectionHeading kicker="The Calendar" title="Events of the season" />
        <ul className="grid gap-6 md:grid-cols-2">
          {socialEvents.map((e) => (
            <li key={e.id} className="rounded-2xl border border-kisi-gold-500/25 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="kicker rounded-full bg-kisi-cream-200 px-3 py-1 text-kisi-charcoal-600">
                  {TYPE_LABEL[e.type]}
                </span>
                <span className="text-xs text-kisi-charcoal-600">{formatDate(e.date)}</span>
              </div>
              <h2 className="font-display mt-3 text-xl font-bold text-kisi-green-900">
                {e.title}
              </h2>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{e.description}</p>
              {e.attendeeIds.length > 0 && (
                <div className="mt-4">
                  <p className="kicker text-kisi-charcoal-600">Expected attendance</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {e.attendeeIds.map((id) => {
                      const c = findChicken(id)!;
                      return (
                        <li key={id}>
                          <Link
                            href={`/flock/${c.id}`}
                            className="flex items-center gap-1.5 rounded-full bg-kisi-cream-200 py-1 pl-1 pr-3 text-xs font-medium hover:bg-kisi-gold-300/40"
                          >
                            <ChickenPortrait chicken={c} size={24} />
                            {c.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <FictionDisclaimer />
    </div>
  );
}
