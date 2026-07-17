import type { Metadata } from "next";
import Link from "next/link";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/Cards";
import { PlaceholderNotice } from "@/components/Disclaimer";
import { SupportCheckout } from "@/components/SupportCheckout";
import { supportTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Support the Chickens",
  description:
    "Farm support and chicken sponsorship for the real birds of Kisi — " +
    "tiers, terms, and a programme that opens only after its legal review.",
};

const KIND_LABEL = {
  "farm-support": "Farm support payment",
  sponsorship: "Sponsorship",
} as const;

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fact" />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Support the Chickens
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Real birds, real feed, real care. Support Kisi&apos;s flock through
        the categories below — each one names plainly what your payment is
        and what it funds.
      </p>

      <div className="mt-6 max-w-2xl">
        <PlaceholderNotice>
          <strong>Not accepting payments yet.</strong> The full checkout is
          built and tested in sandbox mode, but it stays closed until the
          business&apos;s legal registration status is confirmed and the
          wording review is complete. Until then, buttons below will tell
          you — honestly — that the programme hasn&apos;t opened. Amounts
          are also still to be set by the farm.
        </PlaceholderNotice>
      </div>

      {/* What these payments are (and aren't) */}
      <section className="mt-10 rounded-2xl border-l-4 border-kisi-gold-500 bg-kisi-cream-200 p-5 text-sm text-kisi-charcoal-600">
        <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
          Plain words about the money
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1.5">
          <li>
            These are <strong>farm support payments and sponsorships</strong>{" "}
            to a working farm — <strong>not</strong> charitable donations,
            and <strong>not tax-deductible</strong>.
          </li>
          <li>
            <strong>Sponsoring a chicken is not ownership.</strong> Your
            sponsorship funds a named bird&apos;s care and story updates;
            she remains a resident of Kisi Farm.
          </li>
          <li>
            Payment happens on our provider&apos;s <strong>secure hosted
            checkout</strong> — card details never touch this website and
            are never stored by us.
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

      {/* Tiers */}
      <section className="mt-12">
        <SectionHeading
          kicker="The Programme"
          title="Ways to support"
          lede="Amounts will be set by the farm at launch. Every tier states its kind and destination."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {supportTiers.map((t) => (
            <li key={t.id} className="flex flex-col rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-kisi-green-900">
                  {t.name}
                </h3>
                <span className="kicker rounded-full bg-kisi-cream-200 px-3 py-1 text-kisi-charcoal-600">
                  {KIND_LABEL[t.kind]} · {t.cadence === "monthly" ? "monthly" : "one-time"}
                </span>
              </div>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{t.whatItFunds}</p>
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
              {t.isDemo && (
                <p className="mt-3">
                  <DemoBadge />
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Transparency — no invented figures */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="kicker text-kisi-gold-300">Transparency</h2>
        <p className="font-display mt-2 text-2xl font-bold">
          Where support goes — reported honestly, or not at all
        </p>
        <div className="mt-4 grid gap-6 text-sm text-kisi-cream-100/85 md:grid-cols-2">
          <div>
            <p>
              When the programme opens, this section will report what came in
              and what it funded — feed bought, vet visits covered, repairs
              made — using the farm&apos;s real records.
            </p>
            <p className="mt-3">
              Until those records exist, it stays empty on purpose.{" "}
              <strong>We publish no invented figures.</strong> An empty
              honest box beats a full fake one.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {["Support received", "Feed funded", "Vet care funded", "Water & housing"].map((label) => (
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
