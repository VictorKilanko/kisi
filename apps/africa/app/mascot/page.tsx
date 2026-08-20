import type { Metadata } from "next";
import Link from "next/link";
import { MascotPortrait } from "@/components/MascotPortrait";
import { mascot } from "@/lib/content";

export const metadata: Metadata = {
  title: "Taco, the Mascot",
  description:
    "Meet Taco, the mascot of the Republic of Kisi. No office, a warm " +
    "welcome for every visitor, and time for every new chick.",
};

export default function MascotPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="grid items-center gap-8 rounded-3xl border border-kisi-gold-500/30 bg-white p-8 sm:grid-cols-[auto_1fr]">
        <MascotPortrait size={220} />
        <div>
          <p className="kicker text-kisi-gold-700">{mascot.title}</p>
          <h1 className="font-display mt-1 text-5xl font-black text-kisi-green-900">
            {mascot.name}
          </h1>
          <p className="mt-3 text-lg italic text-kisi-charcoal-600">
            {mascot.tagline}
          </p>
          <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
            {mascot.facts.map((f) => (
              <div key={f.label}>
                <dt className="kicker text-kisi-charcoal-600">{f.label}</dt>
                <dd className="mt-0.5">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <p className="mt-8 max-w-2xl text-lg text-kisi-charcoal-900">
        {mascot.intro}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <section aria-labelledby="taco-story">
          <h2
            id="taco-story"
            className="font-display text-2xl font-bold text-kisi-green-900"
          >
            The story of Taco
          </h2>
          <div className="prose-kisi mt-4 space-y-4 text-kisi-charcoal-900">
            {mascot.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <figure className="mt-8 rounded-2xl bg-kisi-indigo-800 p-6 text-kisi-cream-100">
            <blockquote className="font-display text-xl font-bold">
              &ldquo;{mascot.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-kisi-cream-100/70">
              {mascot.quote.context}
            </figcaption>
          </figure>
        </section>

        <aside>
          <section className="rounded-2xl border border-kisi-green-900/10 bg-kisi-cream-200 p-6">
            <h2 className="kicker text-kisi-gold-700">
              Taco&rsquo;s self-appointed duties
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-kisi-charcoal-900">
              {mascot.duties.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-kisi-gold-700">
                    &#9733;
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-6 rounded-2xl border border-kisi-green-900/10 bg-white p-6 text-sm text-kisi-charcoal-600">
            <p>
              Taco belongs to the whole flock. Meet the citizens Taco greets
              every morning.
            </p>
            <Link
              href="/flock"
              className="mt-3 inline-block font-semibold text-kisi-green-700 hover:underline"
            >
              Meet the Chickens &rarr;
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
