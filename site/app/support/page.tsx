import type { Metadata } from "next";
import Link from "next/link";
import { WorldBadge } from "@/components/Badges";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Support the Chickens",
  description:
    "Sponsorship and farm support for the real birds of Kisi — launching in " +
    "a later phase, once the paperwork is done properly.",
};

const PLANNED_TIERS = [
  {
    name: "Feed a citizen",
    blurb: "Help fund quality feed for the flock.",
  },
  {
    name: "Clean water",
    blurb: "Support the water points every bird drinks from.",
  },
  {
    name: "Veterinary care",
    blurb: "Back vaccinations, check-ups, and recovery care.",
  },
  {
    name: "Sponsor a chicken",
    blurb:
      "Follow one named bird's story with updates. (Sponsorship supports her " +
      "care — it isn't ownership; she remains a free citizen of the Republic.)",
  },
  {
    name: "Senior hen fund",
    blurb: "Comfortable retirement for the hens who've earned it.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fact" />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Support the Chickens
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Real birds, real feed, real care. A support and sponsorship programme
        is planned — and we&apos;re deliberately not launching it until it can
        be done properly.
      </p>

      <div className="mt-8">
        <PlaceholderNotice>
          <strong>Not accepting payments yet.</strong> Before any money moves,
          we will confirm the correct legal wording for support payments
          (sponsorship / farm support — not a charitable donation unless the
          business ever holds that status), publish clear terms including
          refunds and privacy, and use a secure hosted checkout with a trusted
          payment provider in test mode first. No card details will ever be
          handled by this site directly.
        </PlaceholderNotice>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-kisi-green-900">
          What support will fund
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {PLANNED_TIERS.map((t) => (
            <li key={t.name} className="rounded-2xl border border-kisi-green-900/10 bg-white p-5">
              <h3 className="font-semibold text-kisi-green-900">{t.name}</h3>
              <p className="mt-1 text-sm text-kisi-charcoal-600">{t.blurb}</p>
              <p className="kicker mt-3 text-kisi-earth-700">Planned — not yet live</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-kisi-charcoal-600">
        Want to be told when the programme opens? The newsletter is also
        coming in a later phase — for now,{" "}
        <Link href="/visit" className="font-semibold text-kisi-green-700 hover:underline">
          the contact page
        </Link>{" "}
        lists how to reach the farm.
      </p>
    </div>
  );
}
