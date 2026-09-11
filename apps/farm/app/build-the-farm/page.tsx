import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Cards";
import { CampaignInterestForm } from "@/components/CampaignInterestForm";
import {
  builds,
  CAMPAIGN_TOTAL_IS_FLOOR,
  CAMPAIGN_TOTAL_USD,
  cornerstone,
  namingTiers,
  whatYouGet,
} from "./campaign";

export const metadata: Metadata = {
  title: "Build the Farm",
  description:
    "Put your name on a real Nigerian farm. Kisi is building a hatchery, a " +
    "feed mill, solar power, a cold room and a farm house, and every gift " +
    "names something real in the Republic of Kisi.",
};

const goalLabel = (goalUSD: number | null) =>
  goalUSD === null
    ? "goal set by farm"
    : `$${(goalUSD / 1000).toLocaleString("en-US")}k`;

const BUILD_ICON: Record<string, React.ReactNode> = {
  hatchery: (
    <path d="M12 3c3.5 3 5 6.5 5 9.5A5 5 0 0 1 7 12.5C7 9.5 8.5 6 12 3zM9.5 14.5l1.5 1.5 3-3" />
  ),
  "feed-mill": (
    <>
      <path d="M6 3h12l-1.5 6H7.5L6 3z" />
      <path d="M7.5 9l-1 5.5a3.5 3.5 0 0 0 3.5 4h4a3.5 3.5 0 0 0 3.5-4L16.5 9" />
      <path d="M10 13h4" />
    </>
  ),
  solar: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  "cold-room": (
    <>
      <path d="M12 2v20M4 7l16 10M20 7L4 17" />
      <path d="M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
    </>
  ),
  "farm-house": (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
};

export default function BuildTheFarmPage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="kicker text-kisi-gold-700">
              Build the Farm · A Kisi capital campaign
            </p>
            <h1 className="font-display mt-3 text-5xl font-black leading-[1.03] text-kisi-green-900 sm:text-6xl">
              Put your name
              <br />
              on the farm.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-kisi-charcoal-600">
              We are raising{" "}
              <strong className="text-kisi-charcoal-900">
                {CAMPAIGN_TOTAL_IS_FLOOR ? "over " : ""}$
                {CAMPAIGN_TOTAL_USD.toLocaleString("en-US")}
              </strong>{" "}
              for five builds that change daily life for every bird at Kisi: a
              hatchery, a feed mill, solar, a cold room, and a farm house. We
              can&apos;t post you a Nigerian egg. We can put your name on the
              place it comes from.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#register"
                className="rounded-full bg-kisi-green-900 px-7 py-3.5 font-semibold text-kisi-cream-100 hover:bg-kisi-green-700"
              >
                Register your interest
              </Link>
              <Link
                href="#builds"
                className="rounded-full border border-kisi-green-900/25 px-6 py-3.5 font-semibold text-kisi-green-900 hover:border-kisi-green-900/50"
              >
                See the five builds
              </Link>
            </div>
          </div>

          {/* Honest "where this stands" card, no invented figures */}
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-kisi-green-900/10 bg-white p-7 shadow-sm">
              <p className="kicker text-kisi-gold-700">Where this stands</p>
              <p className="font-display mt-2 text-2xl font-bold text-kisi-green-900">
                Opening soon
              </p>
              <p className="mt-3 text-sm text-kisi-charcoal-600">
                We are setting the naming amounts and completing the farm&apos;s
                legal and payment setup. When the campaign opens, this is where
                you&apos;ll see how much has been raised, reported from the
                farm&apos;s real records.
              </p>
              <div className="my-5 h-px bg-kisi-green-900/10" />
              <p className="text-xs text-kisi-charcoal-600">
                We publish no invented figures. There is no fake progress bar
                here on purpose. Register below to be first when naming opens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIVE BUILDS */}
      <section
        id="builds"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12"
      >
        <SectionHeading
          kicker="The five builds"
          title="Five things, one farm"
          lede="Back the one you care about. The money goes to a working farm; your name goes on what it pays for."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((b) => (
            <div
              key={b.id}
              className="flex flex-col rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-kisi-green-900 text-kisi-gold-300">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {BUILD_ICON[b.id]}
                </svg>
              </span>
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-kisi-green-900">
                  {b.name}
                </h3>
                <span className="font-display text-lg font-black text-kisi-earth-700">
                  {goalLabel(b.goalUSD)}
                </span>
              </div>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{b.blurb}</p>
              <div className="mt-auto pt-5">
                <span className="kicker inline-block rounded-full bg-kisi-cream-200 px-3 py-1 text-kisi-earth-700">
                  Naming opens soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NAMING LADDER */}
      <section className="bg-kisi-green-900 py-16 text-kisi-cream-100">
        <div className="mx-auto max-w-6xl px-4">
          <p className="kicker text-kisi-gold-300">
            Ways to put your name on it
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            From a single hen to the whole hatchery
          </h2>
          <p className="mt-3 max-w-2xl text-kisi-cream-100/80">
            Every gift names something real in the Republic of Kisi. The bigger
            the gift, the bigger the landmark, and the longer your name lives on
            the map. Amounts are set by the farm at launch.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {namingTiers.map((t) => (
              <div
                key={t.id}
                className="flex flex-col rounded-2xl border border-kisi-gold-300/25 bg-kisi-cream-100/5 p-6"
              >
                <span className="kicker text-kisi-gold-300">{t.tier}</span>
                <h3 className="font-display mt-3 text-xl font-bold">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-kisi-cream-100/75">{t.blurb}</p>
                <p className="font-display mt-4 text-lg font-black text-kisi-gold-300">
                  Set at launch
                </p>
                <Link
                  href="#register"
                  className="mt-3 text-sm font-semibold text-kisi-cream-100 hover:text-kisi-gold-300"
                >
                  Notify me &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Cornerstone */}
          <div className="mt-4 flex flex-col items-start justify-between gap-6 rounded-2xl border border-kisi-gold-300/40 bg-kisi-indigo-800 p-7 sm:flex-row sm:items-center">
            <div>
              <span className="kicker text-kisi-gold-300">
                {cornerstone.tier}
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold">
                {cornerstone.name}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-kisi-cream-100/85">
                {cornerstone.blurb}
              </p>
            </div>
            <Link
              href="/visit"
              className="shrink-0 rounded-full bg-kisi-gold-300 px-6 py-3 font-bold text-kisi-indigo-900 hover:bg-kisi-gold-500"
            >
              Talk to the farm &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <p className="kicker text-kisi-gold-700">For our people abroad</p>
            <h2 className="font-display mt-2 text-3xl font-bold leading-tight text-kisi-green-900 sm:text-4xl">
              We cannot post you an egg. We can give you a place in the story.
            </h2>
            <p className="mt-4 text-kisi-charcoal-600">
              Most people who love Kisi live far from the farm, in London,
              Atlanta, Toronto, Lagos on a screen. So the reward isn&apos;t a
              parcel. It&apos;s your name, on a real Nigerian farm and inside
              the Republic the world is watching.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {whatYouGet.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-kisi-green-900/10 bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-kisi-green-900">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-kisi-charcoal-600">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAIN WORDS (legal) */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="rounded-2xl border-l-4 border-kisi-gold-500 bg-kisi-cream-200 p-6">
          <h2 className="font-display text-xl font-bold text-kisi-charcoal-900">
            Plain words about the money
          </h2>
          <div className="mt-4 grid gap-x-10 gap-y-2 text-sm text-kisi-charcoal-600 sm:grid-cols-2">
            <p>
              These are{" "}
              <strong className="text-kisi-charcoal-900">
                naming sponsorships to a working, for-profit farm
              </strong>
              . They are not charitable donations and they are{" "}
              <strong className="text-kisi-charcoal-900">
                not tax-deductible
              </strong>
              .
            </p>
            <p>
              <strong className="text-kisi-charcoal-900">
                Naming is honorary, not ownership.
              </strong>{" "}
              You do not own the hen, the house, or the land. She stays a
              resident of Kisi Farm.
            </p>
            <p>
              When payment opens it will happen on a{" "}
              <strong className="text-kisi-charcoal-900">
                secure hosted checkout
              </strong>
              . Card details never touch this site and are never stored by us.
            </p>
            <p>
              Full terms, refunds and privacy are on the{" "}
              <Link href="/support/terms" className="underline">
                support terms
              </Link>{" "}
              page. Amounts and goals are set by the farm before launch.
            </p>
          </div>
        </div>
      </section>

      {/* REGISTER INTEREST */}
      <section
        id="register"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12"
      >
        <div className="rounded-3xl border border-kisi-green-900/10 bg-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-display text-3xl font-black text-kisi-green-900 sm:text-4xl">
            Be first to put your name on it
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-kisi-charcoal-600">
            Naming opens once amounts and the farm&apos;s payment setup are
            confirmed. Leave your email and you&apos;ll be first to hear, from a
            single hen to a whole build.
          </p>
          <div className="mt-6 flex justify-center">
            <CampaignInterestForm />
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-kisi-charcoal-600">
          Prefer to fund feed, vet care, or sponsor a single hen?{" "}
          <Link
            href="/support#ways"
            className="font-semibold text-kisi-green-700 underline"
          >
            See everyday ways to support
          </Link>
          .
        </p>
        <p className="mt-2 text-center text-sm text-kisi-indigo-800">
          New to Kisi? Meet the chickens first at{" "}
          <a href="https://kisi.africa" className="font-semibold underline">
            kisi.africa
          </a>
        </p>
      </section>
    </div>
  );
}
