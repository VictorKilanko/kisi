import type { Metadata } from "next";
import Link from "next/link";
import { WorldBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/Cards";
import { FictionDisclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "The Republic of Kisi",
  description:
    "A sovereign nation of chickens (fictional), federated with a real " +
    "poultry farm (factual). Constitution, institutions, and doors into both.",
};

const INSTITUTIONS = [
  {
    href: "/republic/presidency",
    title: "The Presidency",
    blurb:
      "Her Excellency, the executive orders, the weekly diary, and breakfast at seven — not seven-ish.",
  },
  {
    href: "/republic/government",
    title: "Government & Cabinet",
    blurb:
      "Ten ministries, several of them even staffed. Home of the National Feed Budget.",
  },
  {
    href: "/republic/assembly",
    title: "The Coop Assembly",
    blurb:
      "Bills, debates, and the Free Feathers Front's seventeen amendments. Democracy, with feathers.",
  },
  {
    href: "/news",
    title: "The Coop Times",
    blurb:
      "The free press. Five front pages on the Missing Breakfast Grain and counting.",
  },
  {
    href: "/republic/sports",
    title: "Sports",
    blurb:
      "The Coop Premier League, the Perch Jumping Championship, and the rain final that made a nation roar.",
  },
  {
    href: "/republic/social",
    title: "Social Life",
    blurb:
      "The Feather Gala, the First Grain Festival, Sunday storytelling, and the Reconciliation Bench.",
  },
];

export default function RepublicPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl bg-kisi-indigo-800 p-10 text-kisi-cream-100">
        <div className="flex flex-wrap gap-2">
          <WorldBadge world="fiction" />
        </div>
        <h1 className="font-display mt-4 text-4xl font-black sm:text-5xl">
          The Republic of Kisi
        </h1>
        <p className="mt-4 max-w-2xl text-kisi-cream-100/85">
          A proud and entirely fictional nation, population: the chickens of a
          real Nigerian poultry farm. The Republic has a constitution (the
          queue), a treasury (the feed store), an anthem (4:45 a.m., daily,
          whether you like it or not), and a national philosophy:{" "}
          <em className="text-kisi-gold-300">
            every chicken has a story, and most of them have opinions.
          </em>
        </p>
        <p className="mt-4 max-w-2xl text-sm text-kisi-cream-100/70">
          Motto: <strong>Unity · Feed · Progress</strong>. National colours:
          green for the farm, gold for the morning sun, indigo for official
          paperwork, of which there is a great deal.
        </p>
      </div>

      <div className="mt-12">
        <SectionHeading
          kicker="The Institutions"
          title="Doors into the Republic"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSTITUTIONS.map((inst) => (
            <li key={inst.href}>
              <Link
                href={inst.href}
                className="block h-full rounded-2xl border border-kisi-indigo-800/15 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="font-display text-xl font-bold text-kisi-indigo-900">
                  {inst.title}
                </h2>
                <p className="mt-2 text-sm text-kisi-charcoal-600">{inst.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-kisi-green-700">
                  Enter →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <FictionDisclaimer />
    </div>
  );
}
