import type { Metadata } from "next";
import { words } from "@/content/words";

export const metadata: Metadata = {
  title: "Words",
  description:
    "Learn real African words and greetings, Yoruba and Swahili, with how to " +
    "say them. A word of the day with Dede and Zizi.",
};

const LANG_BG: Record<string, string> = {
  Yoruba: "bg-kids-berry/15 ring-kids-berry/30",
  Swahili: "bg-kids-sky/15 ring-kids-sky/30",
};

export default function WordsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        🗣️ Words
      </h1>
      <p className="mt-2 text-lg text-kisi-charcoal-900">
        New words to say! Learn a greeting in Yoruba and Swahili.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {words.map((w) => (
          <li
            key={`${w.language}-${w.word}`}
            className={`rounded-3xl p-6 ring-1 ${LANG_BG[w.language]}`}
          >
            <div className="flex items-center justify-between">
              <span aria-hidden className="text-4xl">{w.emoji}</span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-kisi-charcoal-900">
                {w.language}
              </span>
            </div>
            <p className="mt-3 font-display text-3xl font-black text-kisi-green-900">
              {w.word}
            </p>
            <p className="text-lg font-semibold text-kisi-charcoal-900">
              means &ldquo;{w.meaning}&rdquo;
            </p>
            <p className="mt-2 text-kisi-charcoal-900">
              Say it like: <span className="font-bold">{w.say}</span>
            </p>
            <p className="mt-1 text-sm text-kisi-charcoal-600">{w.use}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
