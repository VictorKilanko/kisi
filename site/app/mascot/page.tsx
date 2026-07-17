import type { Metadata } from "next";
import { WorldBadge } from "@/components/Badges";
import { PlaceholderNotice } from "@/components/Disclaimer";
import { mascot } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Farm Mascot",
  description:
    "Kisi Farm's mascot — a proper introduction is coming, with real " +
    "photographs and the real story.",
};

export default function MascotPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="mixed" />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        The Mascot
      </h1>
      <p className="mt-3 text-kisi-charcoal-600">
        Every great republic has a beloved national figure who holds no
        office, answers no questions, and outranks everybody. Ours is real —
        and deserves a real introduction.
      </p>

      <div className="mt-10 rounded-3xl border border-kisi-gold-500/30 bg-white p-8 text-center">
        {/* Placeholder silhouette */}
        <svg
          viewBox="0 0 120 120"
          width="180"
          height="180"
          role="img"
          aria-label="Mystery silhouette — the mascot's portrait is coming soon"
          className="mx-auto rounded-2xl"
        >
          <rect width="120" height="120" rx="16" fill="#f1e8d4" />
          <ellipse cx="60" cy="75" rx="32" ry="26" fill="#55534b" opacity="0.25" />
          <circle cx="60" cy="40" r="18" fill="#55534b" opacity="0.25" />
          <text
            x="60"
            y="66"
            textAnchor="middle"
            fontSize="34"
            fill="#55534b"
            fontFamily="Georgia, serif"
          >
            ?
          </text>
        </svg>
        <h2 className="font-display mt-6 text-2xl font-bold text-kisi-green-900">
          {mascot.name ?? "Name withheld pending the official unveiling"}
        </h2>
        <div className="mt-4 text-left">
          <PlaceholderNotice>{mascot.placeholderNote}</PlaceholderNotice>
        </div>
        <p className="mt-6 text-sm text-kisi-charcoal-600">
          The Republic&apos;s Ministry of Culture has requested naming rights.
          The request is pending. The request will remain pending.
        </p>
      </div>
    </div>
  );
}
