import type { Metadata } from "next";
import { WorldBadge } from "@/components/Badges";

export const metadata: Metadata = {
  title: "Fact & Fiction — The Full Disclaimer",
  description:
    "What is real and what is story on the Kisi website, in plain language.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        Fact &amp; Fiction
      </h1>
      <p className="mt-3 text-kisi-charcoal-600">
        This website mixes a real farm with a fictional world, on purpose and
        openly. Here is exactly where the line is.
      </p>

      <section className="mt-10 space-y-6">
        <div className="rounded-2xl border-l-4 border-kisi-green-700 bg-white p-6">
          <WorldBadge world="fact" />
          <h2 className="font-display mt-3 text-xl font-bold text-kisi-green-900">
            What is real
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-kisi-charcoal-600">
            <li>Kisi is a real poultry farm in southwestern Nigeria.</li>
            <li>The chickens are real animals receiving real care.</li>
            <li>
              Farming information on fact-labeled pages is intended to be
              accurate; unverified details show placeholders, never
              inventions.
            </li>
            <li>
              The Agric City page describes genuine long-term ambitions,
              honestly labeled operating / in development / proposed.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border-l-4 border-kisi-gold-500 bg-white p-6">
          <WorldBadge world="fiction" />
          <h2 className="font-display mt-3 text-xl font-bold text-kisi-green-900">
            What is fiction
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-kisi-charcoal-600">
            <li>
              The Republic of Kisi — its presidency, ministries, Coop
              Assembly, courts, parties, elections, newspaper, and sports
              league — is an invented storytelling world.
            </li>
            <li>
              Political stories are satire and entertainment. They draw on
              the general flavour of public life, never on identifiable real
              people. Any resemblance to any real person, party, or event is
              coincidental.
            </li>
            <li>
              All political parties in the Republic are fictional and
              deliberately unlike any real Nigerian party.
            </li>
            <li>
              Polls, censuses, and statistics inside the fiction are part of
              the story unless explicitly marked as farm records.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border-l-4 border-kisi-earth-500 bg-white p-6">
          <h2 className="font-display text-xl font-bold text-kisi-green-900">
            Sample content
          </h2>
          <p className="mt-3 text-sm text-kisi-charcoal-600">
            The characters currently on this site (all twelve citizens, their
            biographies, records, and quotes) are demonstration content,
            marked with a &ldquo;Sample content&rdquo; badge. They exist to
            show how the site works and will be replaced by the real flock —
            real names, real photographs, real milestones — as farm records
            are published. We never present invented details as real facts.
          </p>
        </div>

        <div className="rounded-2xl bg-kisi-cream-200 p-6 text-sm text-kisi-charcoal-600">
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            Animal welfare note
          </h2>
          <p className="mt-2">
            Our storytelling never plays animal distress for laughs. Illness,
            aging, and loss — when they occur in the real flock — will be
            reported with dignity, and memorial pages carry no satire and no
            sponsorship buttons.
          </p>
        </div>
      </section>
    </div>
  );
}
