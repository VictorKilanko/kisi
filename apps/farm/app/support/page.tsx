import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Cards";
import { PlaceholderNotice } from "@/components/Disclaimer";
import { SupportCheckout } from "@/components/SupportCheckout";
import { supportTiers } from "@kisi/canon";

export const metadata: Metadata = {
  title: "Support the Chickens",
  description:
    "Farm support and chicken sponsorship for the real birds of Kisi, " +
    "tiers, terms, and a programme that opens only after its legal review.",
};

const KIND_LABEL = {
  "farm-support": "Farm support payment",
  sponsorship: "Sponsorship",
} as const;

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Support the Chickens
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Real birds, real feed, real care. There are two ways to help the
        chickens of Kisi: keep the flock going day to day, or help build the
        farm&apos;s future and put your name on it.
      </p>

      {/* Two ways to help */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Everyday care */}
        <div className="flex flex-col rounded-3xl border border-kisi-green-900/10 bg-white p-7 shadow-sm">
          <p className="kicker text-kisi-gold-700">Everyday care</p>
          <h2 className="font-display mt-1 text-2xl font-bold text-kisi-green-900">
            Keep the flock going
          </h2>
          <p className="mt-2 text-sm text-kisi-charcoal-600">
            Feed, clean water, veterinary care, better housing, or sponsor a
            named hen and follow her life. Small, steady support for the
            birds&apos; daily life.
          </p>
          <div className="mt-auto pt-5">
            <Link
              href="#ways"
              className="inline-block rounded-full bg-kisi-green-900 px-5 py-2.5 font-semibold text-kisi-cream-100 hover:bg-kisi-green-700"
            >
              See the ways to give &rarr;
            </Link>
          </div>
        </div>
        {/* Build the Farm capital campaign */}
        <div className="flex flex-col rounded-3xl border border-kisi-gold-300/40 bg-kisi-indigo-800 p-7 text-kisi-cream-100 shadow-sm">
          <p className="kicker text-kisi-gold-300">The capital campaign</p>
          <h2 className="font-display mt-1 text-2xl font-bold">
            Build the Farm
          </h2>
          <p className="mt-2 text-sm text-kisi-cream-100/85">
            Put your name on it. Name a hen, a farm street, or a whole poultry
            house as Kisi builds a hatchery, feed mill, solar system and cold
            room.
          </p>
          <div className="mt-auto pt-5">
            <Link
              href="/build-the-farm"
              className="inline-block rounded-full bg-kisi-gold-300 px-5 py-2.5 font-semibold text-kisi-indigo-900 hover:bg-kisi-gold-500"
            >
              Explore the campaign &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* What these payments are (and aren't) */}
      <section className="mt-10 rounded-2xl border-l-4 border-kisi-gold-500 bg-kisi-cream-200 p-5 text-sm text-kisi-charcoal-600">
        <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
          Plain words about the money
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1.5">
          <li>
            These are <strong>farm support payments and sponsorships</strong> to
            a working farm, <strong>not</strong> charitable donations, and{" "}
            <strong>not tax-deductible</strong>.
          </li>
          <li>
            <strong>Sponsoring a chicken is not ownership.</strong> Your
            sponsorship funds a named bird&apos;s care and story updates; she
            remains a resident of Kisi Farm.
          </li>
          <li>
            Payment happens on our provider&apos;s{" "}
            <strong>secure hosted checkout</strong>. Card details never touch
            this website and are never stored by us.
          </li>
          <li>
            Full terms, refunds, and privacy:{" "}
            <Link href="/support/terms" className="underline">
              support terms
            </Link>
            .
          </li>
        </ul>
      </section>

      {/* Keep the flock going: everyday tiers */}
      <section id="ways" className="mt-16 scroll-mt-20">
        <SectionHeading
          kicker="Keep the flock going"
          title="Everyday ways to support"
          lede="Small, steady help for the birds' daily life. Amounts will be set by the farm at launch; every tier states its kind and destination."
        />
        <div className="mb-6 max-w-2xl">
          <PlaceholderNotice>
            <strong>Not accepting payments yet.</strong> The checkout is built
            and tested in sandbox mode, but stays closed until the
            business&apos;s legal registration is confirmed and the wording
            review is complete. Until then the buttons below say so honestly,
            and amounts are still to be set by the farm.
          </PlaceholderNotice>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {supportTiers.map((t) => (
            <li
              key={t.id}
              id={t.id}
              className="flex scroll-mt-24 flex-col rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-kisi-green-900">
                  {t.name}
                </h3>
                <span className="kicker rounded-full bg-kisi-cream-200 px-3 py-1 text-kisi-charcoal-600">
                  {KIND_LABEL[t.kind]} ·{" "}
                  {t.cadence === "monthly" ? "monthly" : "one-time"}
                </span>
              </div>
              <p className="mt-2 text-sm text-kisi-charcoal-600">
                {t.whatItFunds}
              </p>
              {t.note && (
                <p className="mt-2 rounded-lg bg-kisi-cream-200 px-3 py-2 text-xs text-kisi-charcoal-600">
                  {t.note}
                </p>
              )}
              <p className="mt-3 text-sm font-semibold text-kisi-earth-700">
                {t.amountNGN === null
                  ? "Amount set at launch"
                  : `₦${t.amountNGN.toLocaleString("en-NG")}`}
              </p>
              <div className="mt-auto">
                <SupportCheckout tier={t} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Transparency, no invented figures */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="kicker text-kisi-gold-300">Transparency</h2>
        <p className="font-display mt-2 text-2xl font-bold">
          Where support goes, reported honestly, or not at all
        </p>
        <div className="mt-4 grid gap-6 text-sm text-kisi-cream-100/85 md:grid-cols-2">
          <div>
            <p>
              When the programme opens, this section will report what came in
              and what it funded, feed bought, vet visits covered, repairs made,
              using the farm&apos;s real records.
            </p>
            <p className="mt-3">
              Until those records exist, it stays empty on purpose.{" "}
              <strong>We publish no invented figures.</strong> An empty honest
              box beats a full fake one.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              "Support received",
              "Feed funded",
              "Vet care funded",
              "Water & housing",
            ].map((label) => (
              <div key={label} className="rounded-xl bg-kisi-cream-100/10 p-4">
                <dt className="kicker text-kisi-gold-300">{label}</dt>
                <dd className="mt-1 text-sm italic text-kisi-cream-100/70">
                  awaiting real records
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
