import type { Metadata } from "next";
import Link from "next/link";
import { MilestoneCard, SectionHeading } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { PlaceholderNotice } from "@/components/Disclaimer";
import {
  eggCensus,
  eggMilestones,
  getMinistry,
  ministerOf,
} from "@kisi/canon";
import { FARM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Economy, Eggs, the Hatchery & the Feed Budget",
  description:
    "The economy of the Republic of Kisi runs on one thing: good eggs, laid by " +
    "named hens and counted honestly. The National Egg Census, the hatchery, and " +
    "the ministers who keep the feed budget straight.",
};

// The economic cabinet, the ministries that run the nation's business.
const ECON_MINISTRIES = ["egg-affairs", "feed-agriculture", "youth-chick"] as const;

export default function EconomyPage() {
  const latest = eggCensus[eggCensus.length - 1];
  const recent = eggCensus.slice(-4);
  const peak = Math.max(...recent.map((c) => c.total));
  const recentMilestones = eggMilestones.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <div className="rounded-3xl bg-kisi-green-900 p-10 text-kisi-cream-100">
        <p className="kicker text-kisi-gold-300">The Economy of the Republic</p>
        <h1 className="font-display mt-3 text-4xl font-black sm:text-5xl">
          A nation that runs on eggs
        </h1>
        <p className="mt-4 max-w-2xl text-kisi-cream-100/85">
          Every economy needs an export. Ours has feathers. The hens of Kisi
          lay, the Bureau of Egg Statistics counts, and the Feed &amp; Agriculture
          ministry makes sure the grain arrives, so the crate that reaches your
          kitchen was laid by a hen with a name, a page, and, frankly, opinions.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`${FARM_URL}/eggs`}
            className="rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
          >
            Buy eggs at Kisi Farm &rarr;
          </a>
          <Link
            href="/eggs"
            className="rounded-full border border-kisi-cream-100/40 px-6 py-3 font-semibold hover:bg-kisi-cream-100/10"
          >
            Inside egg production
          </Link>
        </div>
      </div>

      {/* ECONOMIC INDICATOR, the census */}
      <section className="mt-12">
        <SectionHeading
          kicker="The National Egg Census"
          title="This month's output"
          lede="The one economic indicator the whole Republic agrees to argue about."
        />
        <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
          <div className="rounded-2xl bg-kisi-cream-200 p-6">
            <p className="font-display text-6xl font-black text-kisi-green-900">
              {latest.total.toLocaleString("en-NG")}
            </p>
            <p className="text-sm text-kisi-charcoal-600">
              eggs recorded · {latest.label}
            </p>
            <p className="mt-3 max-w-xs text-sm text-kisi-charcoal-600">
              {latest.note}
            </p>
          </div>

          {/* recent-months bars (accessible: a real table, drawn as bars) */}
          <figure className="rounded-2xl border border-kisi-green-900/10 bg-white p-6">
            <figcaption className="kicker text-kisi-gold-700">
              Recorded totals, recent months
            </figcaption>
            <table className="mt-4 w-full">
              <caption className="sr-only">
                National Egg Census recorded totals for recent months
              </caption>
              <tbody>
                {recent.map((c) => (
                  <tr key={c.label}>
                    <th
                      scope="row"
                      className="whitespace-nowrap py-2 pr-4 text-left text-sm font-medium text-kisi-charcoal-900"
                    >
                      {c.label}
                    </th>
                    <td className="w-full py-2">
                      <span
                        className="block h-4 rounded-full bg-kisi-gold-500"
                        style={{ width: `${Math.round((c.total / peak) * 100)}%` }}
                      />
                    </td>
                    <td className="py-2 pl-4 text-right text-sm font-bold tabular-nums text-kisi-green-900">
                      {c.total.toLocaleString("en-NG")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        </div>
      </section>

      {/* WHERE TO BUY, eggs + hatchery, both at Kisi Farm */}
      <section className="mt-16">
        <SectionHeading
          kicker="Open for business"
          title="What the Republic sells"
          lede="The eggs and chicks are real, and they are sold at Kisi Farm, the working farm behind all of this."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Eggs */}
          <div className="flex flex-col rounded-3xl border border-kisi-gold-500/40 bg-white p-8">
            <h3 className="font-display text-2xl font-black text-kisi-green-900">
              Farm-fresh eggs
            </h3>
            <p className="mt-3 flex-1 text-kisi-charcoal-600">
              Collected by hand every morning and packed the same day. You can
              read about the hen who laid them here, then order a crate over at
              Kisi Farm, where price and delivery are confirmed before you pay a
              naira.
            </p>
            <div className="mt-6">
              <a
                href={`${FARM_URL}/eggs`}
                className="inline-block rounded-full bg-kisi-green-700 px-6 py-3 font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
              >
                Order eggs at Kisi Farm &rarr;
              </a>
            </div>
          </div>

          {/* Hatchery */}
          <div
            id="hatchery"
            className="flex scroll-mt-24 flex-col rounded-3xl border border-kisi-green-900/10 bg-kisi-cream-200 p-8"
          >
            <h3 className="font-display text-2xl font-black text-kisi-green-900">
              The Hatchery
            </h3>
            <p className="mt-3 flex-1 text-kisi-charcoal-600">
              How the Republic grows its citizens, and how a new keeper starts a
              flock. Day-old chicks and point-of-lay pullets are the next arm of
              the economy, raised on the same farm as the layers.
            </p>
            <div className="mt-4">
              <PlaceholderNotice>
                <strong>Hatchery ordering opens as the flock grows.</strong> No
                chick numbers or prices are posted yet, Kisi Farm quotes each
                enquiry directly rather than publish a figure that isn&apos;t real.
              </PlaceholderNotice>
            </div>
            <div className="mt-6">
              <a
                href={`${FARM_URL}/chicks`}
                className="inline-block rounded-full border border-kisi-green-700 px-6 py-3 font-semibold text-kisi-green-700 hover:bg-white"
              >
                Day-old chicks at Kisi Farm &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="mt-16">
        <SectionHeading
          kicker="On the production line"
          title="Latest from the laying houses"
          lede="Milestones as they happen, because behind every economic figure is a hen having a very big day."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {recentMilestones.map((m) => (
            <MilestoneCard key={m.id} milestone={m} />
          ))}
        </div>
        <p className="mt-6">
          <Link
            href="/eggs"
            className="font-semibold text-kisi-green-700 hover:underline"
          >
            All egg milestones →
          </Link>
        </p>
      </section>

      {/* THE ECONOMIC CABINET */}
      <section className="mt-16">
        <SectionHeading
          kicker="Who keeps it running"
          title="The economic cabinet"
          lede="Three ministries, one shared obsession: that the eggs are counted and the feed budget balances."
        />
        <ul className="grid gap-6 sm:grid-cols-3">
          {ECON_MINISTRIES.map((id) => {
            const ministry = getMinistry(id);
            if (!ministry) return null;
            const minister = ministerOf(ministry);
            return (
              <li
                key={id}
                className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  {minister && <ChickenPortrait chicken={minister} size={48} />}
                  <div>
                    <Link
                      href={`/republic/government/${ministry.id}`}
                      className="font-display font-bold text-kisi-green-900 hover:underline"
                    >
                      {ministry.shortName}
                    </Link>
                    <p className="text-xs text-kisi-charcoal-600">
                      {minister ? minister.name : ministry.actingNote ?? "Vacant"}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-kisi-charcoal-600">
                  {ministry.responsibilities.join(" · ")}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* BACK THE FARM */}
      <section className="mt-16 rounded-3xl bg-kisi-indigo-800 p-8 text-kisi-cream-100">
        <h2 className="font-display text-2xl font-bold">
          Rather back the whole enterprise?
        </h2>
        <p className="mt-3 max-w-2xl text-kisi-cream-100/85">
          Buying eggs keeps the Republic solvent. If you&apos;d like to do more,
          feed, clean water, veterinary care, or a comfortable retirement for a
          senior hen, Kisi Farm has a straight-talking way to help, with no
          confusion about where the money goes.
        </p>
        <a
          href={`${FARM_URL}/support`}
          className="mt-6 inline-block rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
        >
          Support the flock at Kisi Farm &rarr;
        </a>
      </section>
    </div>
  );
}
