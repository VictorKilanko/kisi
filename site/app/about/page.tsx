import type { Metadata } from "next";
import Link from "next/link";
import { WorldBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/Cards";
import { PlaceholderNotice } from "@/components/Disclaimer";
import { farmStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Kisi Farm",
  description:
    "The real poultry farm behind the Republic — our story, our welfare " +
    "commitment, and how we run the farm in southwestern Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fact" />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        About Kisi Farm
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        This page is the factual heart of the website. Everything here is
        either verified information from the farm, or a clearly marked
        placeholder waiting for it — never an invention.
      </p>

      {/* Story */}
      <section className="mt-12 max-w-3xl">
        <SectionHeading kicker="Our Story" title="A real farm in southwestern Nigeria" />
        <div className="space-y-4 text-kisi-charcoal-900">
          <p>
            Kisi is a working poultry farm in southwestern Nigeria, currently
            focused on raising laying hens with care, good feed, clean water,
            and honest management. The chickens you meet across this website
            as &ldquo;citizens of the Republic&rdquo; are (or will be, once
            our records and photographs are published) the real birds that
            live here.
          </p>
          <p>
            We built this website on one belief: farm animals are
            individuals. Giving our hens names, stories, and a gloriously
            self-important fictional government is our way of inviting you to
            care about them the way we do — and of showing, honestly, how a
            small Nigerian farm works.
          </p>
        </div>
        <div className="mt-6">
          <PlaceholderNotice>
            <strong>Awaiting farm records:</strong> the founding story,
            mission and vision in the owner&apos;s words, and team
            introductions will appear here once supplied. Tracked in the
            project&apos;s content checklist — nothing will be invented in
            the meantime.
          </PlaceholderNotice>
        </div>
      </section>

      {/* Farm facts */}
      <section className="mt-16">
        <SectionHeading
          kicker="Farm Facts"
          title="The operation, honestly documented"
          lede="Where a figure hasn't been verified by the farm yet, we say so plainly."
        />
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {farmStats.map((s) => (
            <div key={s.id} className="rounded-2xl border border-kisi-green-900/10 bg-white p-5">
              <dt className="kicker text-kisi-charcoal-600">{s.label}</dt>
              {s.isPlaceholder ? (
                <dd className="mt-2 text-sm italic text-kisi-earth-700">
                  Awaiting farm records
                </dd>
              ) : (
                <dd className="mt-2 font-semibold text-kisi-green-900">
                  {s.value}
                  {s.source && (
                    <span className="mt-1 block text-xs font-normal text-kisi-charcoal-600">
                      Source: {s.source}
                    </span>
                  )}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </section>

      {/* Welfare commitment */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="font-display text-2xl font-bold">Our welfare commitment</h2>
        <div className="mt-4 grid gap-6 text-sm text-kisi-cream-100/85 md:grid-cols-2">
          <ul className="list-inside list-disc space-y-2">
            <li>Birds are individuals, not inventory — every featured hen has a name.</li>
            <li>Clean water and quality feed come before production targets.</li>
            <li>Natural laying cycles are respected; laying breaks are normal.</li>
            <li>Senior hens keep their place on the farm as they slow down.</li>
          </ul>
          <ul className="list-inside list-disc space-y-2">
            <li>Illness is treated promptly and privately, and reported with dignity.</li>
            <li>Biosecurity protects the flock — visits are managed carefully.</li>
            <li>We never fabricate certifications, numbers, or claims.</li>
            <li>Where practice details aren&apos;t published yet, we say &ldquo;awaiting records,&rdquo; not guesses.</li>
          </ul>
        </div>
      </section>

      {/* Pointers */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <Link
          href="/agric-city"
          className="rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <h2 className="font-display text-xl font-bold text-kisi-green-900">
            The bigger dream: Kisi Agric City →
          </h2>
          <p className="mt-2 text-sm text-kisi-charcoal-600">
            The long-term vision for a diversified agricultural city — with
            every plan honestly labeled as operating, in development, or
            proposed.
          </p>
        </Link>
        <Link
          href="/visit"
          className="rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <h2 className="font-display text-xl font-bold text-kisi-green-900">
            Get in touch →
          </h2>
          <p className="mt-2 text-sm text-kisi-charcoal-600">
            Questions, partnerships, media, schools, or future visits — the
            contact page routes them all.
          </p>
        </Link>
      </section>
    </div>
  );
}
