import type { Metadata } from "next";
import { songs } from "@/content/songs";
import { KidScene } from "@/components/KidScene";

export const metadata: Metadata = {
  title: "Songs",
  description:
    "Sing along with Dede and Zizi. Simple, joyful songs for children. Audio " +
    "coming soon.",
};

export default function SongsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        🎵 Songs
      </h1>
      <p className="mt-2 text-lg text-kisi-charcoal-900">
        Sing along with us! (Music is coming soon, for now, sing the words.)
      </p>

      {songs.map((song) => (
        <article
          key={song.slug}
          className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-kisi-green-900/10"
        >
          <KidScene scene="sunrise" className="aspect-[16/6] w-full" />
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-2xl font-black text-kisi-green-900">
                {song.title}
              </h2>
              <span className="rounded-full bg-kids-sun/25 px-3 py-1 text-xs font-bold text-kisi-charcoal-900">
                {song.origin}
              </span>
            </div>
            <p className="mt-1 text-kisi-charcoal-900">{song.intro}</p>

            <div className="mt-4 space-y-1 text-lg leading-relaxed text-kisi-charcoal-900">
              {song.lines.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-3" />
                ) : (
                  <p key={i} className={line.startsWith("(") ? "font-bold text-kisi-green-700" : ""}>
                    {line}
                  </p>
                ),
              )}
            </div>

            <p className="mt-5 rounded-2xl bg-kids-leaf/15 px-4 py-3 text-sm font-bold text-kisi-green-900">
              🎈 This song teaches: {song.teaches}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
