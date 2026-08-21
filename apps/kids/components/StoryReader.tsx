"use client";

import { useState } from "react";
import type { KidStory } from "@/content/stories";
import { KidScene } from "@/components/KidScene";

/** A read-along "book": one big illustrated page at a time, with kid-sized controls. */
export function StoryReader({ story }: { story: KidStory }) {
  const [i, setI] = useState(0);
  const total = story.pages.length;
  const page = story.pages[i];
  const last = i === total - 1;

  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-kisi-green-900/10 sm:p-6">
      <div className="overflow-hidden rounded-2xl">
        <KidScene scene={page.scene} className="aspect-[16/10] w-full" />
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-center text-xl leading-relaxed text-kisi-charcoal-900 sm:text-2xl">
        {page.text}
      </p>

      {last && (
        <p className="mx-auto mt-4 max-w-2xl rounded-2xl bg-kids-leaf/15 px-4 py-3 text-center text-lg font-bold text-kisi-green-900">
          🌟 {story.lesson}
        </p>
      )}

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setI((n) => Math.max(0, n - 1))}
          disabled={i === 0}
          className="rounded-full bg-kisi-cream-200 px-6 py-3 text-base font-bold text-kisi-green-900 disabled:opacity-40"
        >
          &larr; Back
        </button>

        <div className="flex gap-1.5" aria-hidden>
          {story.pages.map((_, n) => (
            <span
              key={n}
              className={`h-2.5 w-2.5 rounded-full ${n === i ? "bg-kids-sky" : "bg-kisi-green-900/15"}`}
            />
          ))}
        </div>

        {last ? (
          <button
            type="button"
            onClick={() => setI(0)}
            className="rounded-full bg-kids-leaf px-6 py-3 text-base font-bold text-kisi-charcoal-900"
          >
            Read again ↺
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setI((n) => Math.min(total - 1, n + 1))}
            className="rounded-full bg-kids-sky px-6 py-3 text-base font-bold text-kisi-charcoal-900"
          >
            Next &rarr;
          </button>
        )}
      </div>
      <p className="mt-3 text-center text-sm text-kisi-charcoal-600">
        Page {i + 1} of {total}
      </p>
    </div>
  );
}
