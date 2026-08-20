import Link from "next/link";
import { chickens } from "@kisi/canon";
import { AFRICA_URL } from "@/lib/site";

/**
 * kisifarm home. Hero, the laying hens pulled live from the shared canon, and
 * the three business lines (eggs, day-old chicks, support).
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
    href: "/chicks",
    title: "Day-old chicks",
    body: "Healthy day-old chicks and point-of-lay pullets as the hatchery grows. Ask about availability.",
    cta: "Ask about chicks",
  },
  {
    href: "/support",
    title: "Support the flock",
    body: "Back feed, clean water, solar light and better housing. Sponsorship, not charity.",
    cta: "See how",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-kisi-green-900 text-kisi-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="kicker text-kisi-gold-300">Kisi Farm · Southwestern Nigeria</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Farm-fresh eggs from hens with names.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-kisi-cream-200">
            Kisi Farm is a working poultry farm. Every egg we sell was laid by a
            real hen you can meet. Order eggs and day-old chicks, straight from
            the flock.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/eggs"
              className="rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
            >
              Order eggs
            </Link>
            <Link
              href="/chicks"
              className="rounded-full border border-kisi-cream-200/40 px-6 py-3 font-semibold text-kisi-cream-100 hover:border-kisi-cream-100"
            >
              Day-old chicks
            </Link>
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
              <div
                className="flex h-32 items-center justify-center"
                style={{ background: hen.colors.bg }}
              >
                <span
                  className="inline-block h-16 w-16 rounded-full ring-4 ring-white/40"
                  style={{ background: hen.colors.body }}
                  aria-hidden
                />
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
