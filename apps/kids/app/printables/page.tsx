import type { Metadata } from "next";
import Link from "next/link";
import { printables } from "@/content/printables";

export const metadata: Metadata = {
  title: "Printables",
  description:
    "Free printable colouring and activity sheets for children, print and " +
    "colour with Dede and Zizi.",
};

export default function PrintablesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        🖍️ Printables
      </h1>
      <p className="mt-2 text-lg text-kisi-charcoal-900">
        Print a page, grab your colours, and have fun! (Ask a grown-up to help
        you print.)
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {printables.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/printables/${p.slug}`}
              className="flex h-full flex-col rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-kisi-green-900/10 transition-shadow hover:shadow-md"
            >
              <span aria-hidden className="text-5xl">
                {p.kind === "colouring" ? "🖍️" : "🔢"}
              </span>
              <h2 className="mt-3 font-display text-xl font-black text-kisi-green-900">
                {p.title}
              </h2>
              <p className="mt-1 flex-1 text-sm text-kisi-charcoal-900">
                {p.description}
              </p>
              <span className="mt-3 inline-block rounded-full bg-kids-sky/25 px-4 py-2 text-sm font-bold text-kisi-green-900">
                Open &amp; print &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
