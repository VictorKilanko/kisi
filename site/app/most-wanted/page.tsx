import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { WantedPoster } from "@/components/WantedPoster";
import { monitorLizard } from "@/content/wanted";
import { getChicken } from "@/lib/content";

export const metadata: Metadata = {
  title: "Most Wanted — The Monitor Lizard",
  description:
    "The Republic of Kisi has posted a bounty for the monitor lizard that " +
    "killed Bantu, night watchman of Coop Two. Full notice, description, " +
    "and what to do if you see it.",
};

export default function MostWantedPage() {
  const w = monitorLizard;
  const minister = getChicken("pete-okpara");
  const danladi = getChicken("sergeant-danladi");
  const bantu = getChicken("bantu");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="kicker text-kisi-earth-700">Ministry of Security</p>
      <h1 className="font-display mt-2 text-4xl font-black text-kisi-green-900 sm:text-5xl">
        The Republic&apos;s Most Wanted
      </h1>
      <p className="mt-4 text-lg text-kisi-charcoal-600">
        It came through the drainage channel at night. It killed Bantu, the
        watchman of Coop Two, who stood in the doorway until the chicks were
        out. There is now a bounty on it, and the Ministry of Security wants
        every citizen and every visitor to know its face.
      </p>

      <div className="mt-10">
        <WantedPoster full />
      </div>

      {/* Description */}
      <section className="mt-12">
        <SectionHeading kicker="Know it when you see it" title="Description" />
        <div className="space-y-3 text-kisi-charcoal-600">
          {w.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h3 className="font-display mt-8 text-xl font-bold text-kisi-green-900">
          Identifying marks
        </h3>
        <ul className="mt-3 space-y-2">
          {w.identifyingMarks.map((m) => (
            <li key={m} className="flex gap-3 text-kisi-charcoal-600">
              <span aria-hidden="true" className="text-kisi-earth-700">
                ✦
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bounty */}
      <section className="mt-12 rounded-3xl bg-kisi-charcoal-900 p-8 text-kisi-cream-100">
        <p className="kicker text-kisi-gold-300">The bounty</p>
        <p className="font-display mt-2 text-5xl font-black text-kisi-gold-300">
          {w.bounty}
        </p>
        <p className="mt-4 max-w-2xl text-kisi-cream-100/85">{w.bountyNote}</p>
        <p className="mt-3 text-sm text-kisi-cream-100/70">Issued by {w.issuedBy}</p>
      </section>

      {/* Safety */}
      <section className="mt-12 rounded-2xl border-l-4 border-kisi-earth-700 bg-kisi-cream-200 p-6">
        <h2 className="font-display text-2xl font-black text-kisi-earth-700">
          If you see it
        </h2>
        <p className="mt-3 text-kisi-charcoal-600">{w.approach}</p>
      </section>

      {/* The birds on the case */}
      <section className="mt-12">
        <SectionHeading
          kicker="On the case"
          title="The birds hunting it"
          lede="Two shifts, one fence line, and a roll call read aloud every night."
        />
        <ul className="grid gap-6 sm:grid-cols-2">
          {[minister, danladi].map((c) => (
            <li
              key={c.id}
              className="flex gap-4 rounded-2xl border border-kisi-green-900/10 bg-white p-5"
            >
              <ChickenPortrait chicken={c} size={72} framed />
              <div>
                <h3 className="font-display text-lg font-bold text-kisi-green-900">
                  <Link href={`/flock/${c.id}`} className="hover:underline">
                    {c.name}
                  </Link>
                </h3>
                <p className="kicker mt-0.5 text-kisi-gold-700">{c.roleTitle}</p>
                <p className="mt-2 text-sm text-kisi-charcoal-600">{c.shortBio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Bantu */}
      <section className="mt-12 rounded-3xl border-2 border-kisi-gold-500 bg-white p-8">
        <div className="flex flex-wrap items-center gap-5">
          <ChickenPortrait chicken={bantu} size={96} framed />
          <div>
            <p className="kicker text-kisi-charcoal-600">The reason for all of this</p>
            <h2 className="font-display mt-1 text-2xl font-black text-kisi-green-900">
              Bantu, Night Watchman of Coop Two
            </h2>
            <p className="mt-2 max-w-xl text-kisi-charcoal-600">
              Twelve chicks went out the far side. Every one of them got out.
              The flock marks his rest with a whistle at dusk — and the
              Republic would be glad of a word from you.
            </p>
            <Link
              href="/bantu"
              className="mt-4 inline-block rounded-full bg-kisi-green-700 px-6 py-3 font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
            >
              Send your well-wishes to Bantu →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
