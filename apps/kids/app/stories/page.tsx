import type { Metadata } from "next";
import Link from "next/link";
import { stories } from "@/content/stories";
import { KidScene } from "@/components/KidScene";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Illustrated read-along African fables and folktales for children, told by " +
    "Dede and Zizi. Each tale notes where it comes from.",
};

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        📖 Stories
      </h1>
      <p className="mt-2 text-lg text-kisi-charcoal-900">
        Read along with us! African fables and folktales, one page at a time.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {stories.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/stories/${s.slug}`}
              className="block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-kisi-green-900/10 transition-shadow hover:shadow-md"
            >
              <KidScene scene={s.pages[0].scene} className="aspect-[16/9] w-full" />
              <div className="p-5">
                <h2 className="font-display text-2xl font-black text-kisi-green-900">
                  {s.title}
                </h2>
                <p className="mt-1 text-kisi-charcoal-900">{s.intro}</p>
                <p className="mt-2 text-xs text-kisi-charcoal-600">{s.origin}</p>
                <span className="mt-3 inline-block rounded-full bg-kids-sky/25 px-4 py-2 text-sm font-bold text-kisi-green-900">
                  Read it &rarr;
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
