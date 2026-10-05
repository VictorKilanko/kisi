import Image from "next/image";
import Link from "next/link";
import { chickens } from "@kisi/canon";
import { ChickenPortrait } from "@kisi/ui";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AFRICA_URL } from "@/lib/site";

/**
 * kisifarm home. Hero, the laying hens pulled live from the shared canon, and
 * the three things the farm sells: eggs, day-old chicks, and chicken meat.
 */
const layingHens = chickens.filter((c) => c.layingStatus === "laying").slice(0, 3);

const lines = [
  {
    href: "/eggs",
    title: "Farm-fresh eggs",
    body: "Crates of eggs laid this week by the flock. Order by the crate; we quote you directly.",
    cta: "Order eggs",
  },
  {
    href: "/meat",
    title: "Chicken meat",
    body: "Farm chicken raised here and processed to order. Pick your day and we prepare it fresh.",
    cta: "Order chicken",
  },
  {
    href: "/chicks",
    title: "Day-old chicks",
    body: "Healthy day-old chicks and point-of-lay pullets as the hatchery grows. Ask about availability.",
    cta: "Ask about chicks",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-kisi-green-900 text-kisi-cream-100">
        <Image
          src="/photos/poultry-house-1.jpg"
          alt="Inside a poultry house at Kisi Farm: birds on fresh wood-shaving litter with feeders and drinkers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Deep-green wash so the cream text stays readable and the photo reads
            as part of the brand rather than a pasted-in snapshot. Darker on the
            right on small screens (text goes full-width there), lighter on
            desktop so the photo can breathe beside the text. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-kisi-green-900 via-kisi-green-900/95 to-kisi-green-900/70 md:via-kisi-green-900/90 md:to-kisi-green-900/50"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="kicker text-kisi-gold-300">Kisi Farm · Southwestern Nigeria</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Fresh eggs and farm chicken, from hens with names.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-kisi-cream-200">
            Kisi Farm is a working poultry farm in southwestern Nigeria. We sell
            farm-fresh eggs, chicken meat raised and processed to order, and
            day-old chicks, straight from the flock to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/eggs"
              className="rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
            >
              Order eggs
            </Link>
            <Link
              href="/meat"
              className="rounded-full border border-kisi-cream-200/40 px-6 py-3 font-semibold text-kisi-cream-100 hover:border-kisi-cream-100"
            >
              Order chicken meat
            </Link>
            <WhatsAppButton message="Hi Kisi Farm, I'd like to place an order." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-kisi-green-900">
          The hens behind your eggs
        </h2>
        <p className="mt-2 max-w-2xl text-kisi-charcoal-600">
          Follow their full lives over in{" "}
          <a href={AFRICA_URL} className="font-semibold text-kisi-green-700 hover:underline">
            the Republic
          </a>
          .
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layingHens.map((hen) => (
            <li
              key={hen.id}
              className="overflow-hidden rounded-2xl border border-kisi-green-700/15 bg-kisi-cream-100"
            >
              <div className="flex justify-center bg-kisi-cream-200 p-4">
                <ChickenPortrait chicken={hen} size={128} />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-bold text-kisi-green-900">
                  {hen.name}
                </p>
                {hen.roleTitle ? (
                  <p className="text-sm text-kisi-charcoal-600">{hen.roleTitle}</p>
                ) : null}
                <p className="mt-2 text-sm text-kisi-charcoal-900">{hen.shortBio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-kisi-cream-200">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
          {lines.map((line) => (
            <div
              key={line.href}
              className="flex flex-col rounded-2xl border border-kisi-green-700/15 bg-kisi-cream-100 p-6"
            >
              <h3 className="font-display text-xl font-bold text-kisi-green-900">
                {line.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-kisi-charcoal-900">{line.body}</p>
              <Link
                href={line.href}
                className="mt-4 font-semibold text-kisi-green-700 hover:text-kisi-green-900"
              >
                {line.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
