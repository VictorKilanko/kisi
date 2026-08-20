import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { chickens } from "@kisi/canon";
import { FARM_URL, KIDS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Kisi Africa",
  description:
    "Kisi Africa is a living world of chicken characters and the Republic they " +
    "run. Meet the flock, follow the stories, and step into a nation of hens " +
    "with names, opinions, and very strong feelings about breakfast.",
};

const faces = chickens.slice(0, 6);

const entryPoints = [
  {
    href: "/flock",
    title: "Meet the Chickens",
    blurb: "The whole cast, one profile at a time. Names, personalities, friends, rivals, and the stories that made them.",
  },
  {
    href: "/republic",
    title: "Enter the Republic",
    blurb: "The constitution (the queue), the cabinet, the free press, and the President who insists breakfast is at seven, not seven-ish.",
  },
  {
    href: "/republic/stories",
    title: "Read the Big Stories",
    blurb: "The serials people come back for. First eggs, elections, rivalries, reconciliations, told beat by beat.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="kicker text-kisi-gold-700">About</p>
      <h1 className="font-display mt-2 text-4xl font-black text-kisi-green-900 sm:text-5xl">
        This is Kisi Africa.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-kisi-charcoal-900">
        Kisi Africa is a living world of chicken characters, and the Republic
        they run. Every hen and rooster here has a name, a personality, a
        history, and an opinion. Together they have built themselves a whole
        nation: a President, a Coop Assembly, a free press, a sports league, and
        a national philosophy that fits on one line.
      </p>
      <p className="mt-4 max-w-2xl font-display text-xl font-bold italic text-kisi-green-700">
        Every chicken has a story.
      </p>

      {/* the faces */}
      <div className="mt-8 flex flex-wrap gap-4" aria-hidden="true">
        {faces.map((c) => (
          <ChickenPortrait key={c.id} chicken={c} size={84} />
        ))}
      </div>

      {/* what it is */}
      <section className="mt-14 max-w-3xl">
        <SectionHeading kicker="What this is" title="A soap opera with feathers" />
        <div className="space-y-4 text-kisi-charcoal-900">
          <p>
            Think of it as an ongoing story you can drop into any time. The
            drama is real (well, real to the chickens): elections are won and
            lost, an outspoken opposition leader keeps being annoyingly correct,
            a shy young hen lays her first egg while the whole nation holds its
            breath, and somebody is always, always upset about the breakfast
            schedule.
          </p>
          <p>
            It is warm, it is funny, and it is meant to be returned to. New
            stories land as the Republic goes about its business. Follow a
            favourite chicken, take a side in the politics, or just come for the
            gossip in The Coop Times.
          </p>
          <p className="text-sm text-kisi-charcoal-600">
            Kisi is rooted in a real working farm in southwestern Nigeria. The
            birds are real; the Republic is how we tell their story. If you want
            the eggs, that is where Kisi Farm comes in.
          </p>
        </div>
      </section>

      {/* explore the universe */}
      <section className="mt-14 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="font-display text-2xl font-bold">The wider Kisi world</h2>
        <p className="mt-3 max-w-2xl text-kisi-cream-100/85">
          Kisi Africa is the story. Two sister places carry it further: one
          where you can actually buy what the flock produces, and one built just
          for the youngest visitors.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href={FARM_URL}
            className="rounded-2xl bg-kisi-cream-100 p-5 text-kisi-green-900 transition-shadow hover:shadow-lg"
          >
            <p className="font-display text-xl font-bold">Kisi Farm &rarr;</p>
            <p className="mt-1 text-sm text-kisi-charcoal-600">
              The real farm shop. Order farm-fresh eggs and day-old chicks, laid
              and raised by the hens you just met.
            </p>
          </a>
          <a
            href={KIDS_URL}
            className="rounded-2xl bg-kisi-gold-300 p-5 text-kisi-charcoal-900 transition-shadow hover:shadow-lg"
          >
            <p className="font-display text-xl font-bold">Kisi Kids &rarr;</p>
            <p className="mt-1 text-sm text-kisi-charcoal-900/80">
              Stories, songs and gentle lessons with the chickens of Kisi, made
              for young viewers.
            </p>
          </a>
        </div>
      </section>

      {/* start here */}
      <section className="mt-14">
        <SectionHeading kicker="Start here" title="Three ways in" />
        <ul className="grid gap-6 sm:grid-cols-3">
          {entryPoints.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className="block h-full rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl font-bold text-kisi-green-900">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-kisi-charcoal-600">{e.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-kisi-green-700">
                  Go &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
