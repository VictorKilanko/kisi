import Link from "next/link";
import { ChickenPortrait } from "@kisi/ui";
import { PILLARS } from "@/components/KidHeader";
import { dede, zizi, dedePronunciation } from "@/lib/hosts";

const TILE_BG: Record<string, string> = {
  "/stories": "bg-kids-sky/20 hover:bg-kids-sky/35",
  "/heroes": "bg-kids-leaf/20 hover:bg-kids-leaf/35",
  "/words": "bg-kids-berry/20 hover:bg-kids-berry/35",
  "/songs": "bg-kids-sun/25 hover:bg-kids-sun/45",
  "/printables": "bg-kisi-green-500/15 hover:bg-kisi-green-500/30",
};

const TILE_BLURB: Record<string, string> = {
  "/stories": "Read-along African fables",
  "/heroes": "Real African heroes",
  "/words": "New words to say",
  "/songs": "Sing along with us",
  "/printables": "Print, colour and play",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Welcome from the hosts */}
      <section className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-kisi-green-900/10 sm:p-8">
        <div className="flex items-end justify-center gap-3">
          <div className="w-28 sm:w-32">
            <ChickenPortrait chicken={dede} size={128} />
            <p className="mt-1 font-display font-bold text-kisi-green-900">Dede</p>
            <p className="text-xs text-kisi-charcoal-600">say &ldquo;{dedePronunciation}&rdquo;</p>
          </div>
          <div className="w-32 sm:w-40">
            <ChickenPortrait chicken={zizi} size={160} />
            <p className="mt-1 font-display font-bold text-kisi-green-900">Zizi</p>
            <p className="text-xs text-kisi-charcoal-600">Dede&rsquo;s niece</p>
          </div>
        </div>
        <h1 className="mt-5 font-display text-3xl font-black text-kisi-green-900 sm:text-5xl">
          Hello! Come and learn with us.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-kisi-charcoal-900">
          I&rsquo;m <strong>Zizi</strong>, and this is my Uncle <strong>Dede</strong>.
          Together we tell African stories, sing songs, learn new words, and meet
          real African heroes. Pick a colour and let&rsquo;s go!
        </p>
      </section>

      {/* Pillar tiles */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className={`flex items-center gap-4 rounded-3xl p-6 transition-colors ${TILE_BG[p.href]}`}
          >
            <span aria-hidden className="text-5xl">{p.emoji}</span>
            <span>
              <span className="block font-display text-2xl font-black text-kisi-green-900">
                {p.label}
              </span>
              <span className="block text-sm text-kisi-charcoal-900">
                {TILE_BLURB[p.href]}
              </span>
            </span>
          </Link>
        ))}
        <div className="flex items-center gap-4 rounded-3xl bg-kisi-cream-200 p-6">
          <span aria-hidden className="text-5xl">📺</span>
          <span>
            <span className="block font-display text-2xl font-black text-kisi-green-900">
              Videos
            </span>
            <span className="block text-sm text-kisi-charcoal-900">
              Coming soon to YouTube!
            </span>
          </span>
        </div>
      </section>
    </div>
  );
}
