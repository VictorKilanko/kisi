import type { Metadata } from "next";
import Link from "next/link";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { WantedPoster } from "@/components/WantedPoster";
import { WellWishesForm } from "@/components/WellWishesForm";
import { getChicken } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bantu — Night Watchman of Coop Two",
  description:
    "Bantu stood in the doorway of Coop Two until twelve chicks were out. " +
    "The Republic of Kisi remembers him. Leave a message for the flock.",
};

export default function BantuPage() {
  const bantu = getChicken("bantu");
  const danladi = getChicken("sergeant-danladi");
  const ngozi = getChicken("sisi-ngozi");
  const femi = getChicken("small-femi");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Memorial header */}
      <div className="text-center">
        <p className="kicker text-kisi-charcoal-600">In loving memory</p>
        <div className="mt-5 flex justify-center">
          <ChickenPortrait chicken={bantu} size={180} framed />
        </div>
        <h1 className="font-display mt-6 text-4xl font-black text-kisi-green-900 sm:text-5xl">
          Bantu
        </h1>
        <p className="font-display mt-2 text-xl text-kisi-gold-700">
          &ldquo;The Night Whistle&rdquo;
        </p>
        <p className="kicker mt-1 text-kisi-charcoal-600">
          Night Watchman of Coop Two
        </p>
      </div>

      <div className="gazette-rule mt-10" />

      {/* His story */}
      <div className="mt-10 space-y-5 text-lg leading-relaxed text-kisi-charcoal-600">
        {bantu.bio.map((p, i) => (
          <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-kisi-green-900" : ""}>
            {p}
          </p>
        ))}
      </div>

      {/* His words */}
      {bantu.quotes.length > 0 && (
        <blockquote className="mt-10 border-l-4 border-kisi-gold-500 bg-kisi-cream-200 py-5 pl-6 pr-4">
          <p className="font-display text-2xl font-bold text-kisi-green-900">
            &ldquo;{bantu.quotes[0].text}&rdquo;
          </p>
          <footer className="mt-2 text-sm text-kisi-charcoal-600">
            {bantu.quotes[0].context}
          </footer>
        </blockquote>
      )}

      {/* Well-wishes */}
      <section className="mt-14">
        <h2 className="font-display text-3xl font-black text-kisi-green-900">
          Send your well-wishes
        </h2>
        <p className="mt-3 text-kisi-charcoal-600">
          The flock has been quiet since. If you would like to say something —
          to Bantu, to Sergeant Danladi who reached him, or to the twelve
          chicks who got out the far side — leave it here. The farm reads
          every one.
        </p>
        <div className="mt-6">
          <WellWishesForm />
        </div>
      </section>

      {/* Those he left */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-kisi-green-900">
          Those he left behind
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {[danladi, ngozi, femi].map((c) => (
            <li
              key={c.id}
              className="rounded-2xl border border-kisi-green-900/10 bg-white p-5 text-center"
            >
              <div className="flex justify-center">
                <ChickenPortrait chicken={c} size={72} />
              </div>
              <h3 className="font-display mt-3 font-bold text-kisi-green-900">
                <Link href={`/flock/${c.id}`} className="hover:underline">
                  {c.name}
                </Link>
              </h3>
              <p className="mt-1 text-xs text-kisi-charcoal-600">
                {c.roleTitle ?? c.nickname}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* The hunt continues */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-kisi-green-900">
          The one who did it is still out there
        </h2>
        <p className="mt-3 text-kisi-charcoal-600">
          The Ministry of Security has posted a bounty. If you see it, do not
          approach it — raise the alarm and find a guard.
        </p>
        <div className="mt-6">
          <WantedPoster />
        </div>
      </section>
    </div>
  );
}
