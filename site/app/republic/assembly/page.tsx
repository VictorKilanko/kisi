import type { Metadata } from "next";
import Link from "next/link";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/Cards";
import { FictionDisclaimer } from "@/components/Disclaimer";
import { Poll } from "@/components/Poll";
import { bills, findChicken, parties } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Coop Assembly",
  description:
    "The legislature of the Republic of Kisi — parties, bills, votes, and " +
    "the Free Feathers Front's seventeen amendments.",
};

const BILL_STATUS: Record<string, { label: string; cls: string }> = {
  proposed: { label: "Proposed", cls: "bg-kisi-cream-200 text-kisi-charcoal-600" },
  "in-debate": { label: "In debate", cls: "bg-kisi-gold-300 text-kisi-charcoal-900" },
  passed: { label: "Passed", cls: "bg-kisi-green-500 text-white" },
  rejected: { label: "Rejected", cls: "bg-kisi-earth-500 text-white" },
};

export default function AssemblyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fiction" />
        <DemoBadge />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        The Coop Assembly
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        The Republic&apos;s legislature sits after the afternoon feed, on the
        principle that no bird is reasonable while hungry. Debates are loud,
        procedure is sacred, and the gallery has been known to sing.
      </p>

      {/* Parties */}
      <section className="mt-12">
        <SectionHeading
          kicker="The Parties"
          title="Registered political parties"
          lede="All parties are entirely fictional inventions of the Republic — none references any real political party."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {parties.map((p) => {
            const leader = p.leaderId ? findChicken(p.leaderId) : undefined;
            return (
              <li
                key={p.id}
                className="rounded-2xl border-t-4 bg-white p-6 shadow-sm"
                style={{ borderTopColor: p.color }}
              >
                <h3 className="font-display text-xl font-bold text-kisi-green-900">
                  {p.name}
                </h3>
                <p className="kicker mt-1" style={{ color: p.color }}>
                  {p.abbr} · “{p.slogan}”
                </p>
                <p className="mt-3 text-sm text-kisi-charcoal-600">{p.description}</p>
                {leader && (
                  <p className="mt-3 text-sm">
                    Leader:{" "}
                    <Link
                      href={`/flock/${leader.id}`}
                      className="font-semibold text-kisi-green-700 hover:underline"
                    >
                      {leader.name}
                      {leader.nickname ? ` “${leader.nickname}”` : ""}
                    </Link>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Bills */}
      <section className="mt-16">
        <SectionHeading
          kicker="Order Paper"
          title="Bills before the Assembly"
        />
        <ul className="space-y-5">
          {bills.map((b) => {
            const sponsor = findChicken(b.sponsorId);
            const status = BILL_STATUS[b.status];
            return (
              <li key={b.id} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-kisi-indigo-900">
                    {b.title}
                  </h3>
                  <span className={`kicker rounded-full px-3 py-1 ${status.cls}`}>
                    {status.label}
                  </span>
                </div>
                <p className="mt-2 text-sm text-kisi-charcoal-600">{b.summary}</p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                  {sponsor && (
                    <span>
                      Sponsor:{" "}
                      <Link
                        href={`/flock/${sponsor.id}`}
                        className="font-semibold text-kisi-green-700 hover:underline"
                      >
                        {sponsor.name}
                      </Link>
                    </span>
                  )}
                  {b.votes && (
                    <span className="text-kisi-charcoal-600">
                      Ayes {b.votes.ayes} · Nays {b.votes.nays} · Abstentions{" "}
                      {b.votes.abstentions}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Public gallery poll */}
      <section className="mt-16 max-w-xl">
        <SectionHeading
          kicker="The Public Gallery"
          title="Have your (non-binding) say"
        />
        <Poll
          id="breakfast-time"
          question="Should national breakfast move from 7:00 to 6:45?"
          options={[
            "Yes — the early bird is objectively correct",
            "No — Executive Order No. 1 is sacred",
            "Only if the Vice President crows later",
            "Refer it to a committee (and its sub-committee)",
          ]}
          resultJoke="Your view has been entered into the record and will be read aloud twice, as is now traditional. The time remains 7:00."
        />
      </section>

      {/* Electoral commission note */}
      <section className="mt-16 rounded-2xl border border-kisi-indigo-800/15 bg-kisi-cream-200 p-6">
        <h2 className="kicker text-kisi-indigo-800">
          A note from the Kisi Electoral Commission
        </h2>
        <p className="mt-2 text-sm text-kisi-charcoal-600">
          General elections are held whenever the Republic feels strongly
          enough, which is often. Voter turnout is traditionally 100 percent,
          minus anyone mid-dust-bath. Future visitor polls on this website
          will be entertainment only and are not binding on any chicken.
        </p>
      </section>

      <FictionDisclaimer />
    </div>
  );
}
