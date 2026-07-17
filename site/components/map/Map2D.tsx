"use client";

import type { EnrichedHotspot, HotspotKind } from "@/lib/mapData";

/**
 * The lightweight 2D farm map — an illustrated plan built from the SAME
 * hotspot data as the 3D world. Every hotspot is a real <button>: keyboard
 * focusable, screen-reader labeled, zero WebGL required.
 */

const KIND_COLOR: Record<HotspotKind, string> = {
  gate: "#1f5130",
  coop: "#c05621",
  palace: "#d9a02b",
  assembly: "#23305e",
  cabinet: "#23305e",
  eggs: "#faf5e9",
  store: "#8a3e1f",
  tanks: "#4f7f9c",
  solar: "#2b3a55",
  clinic: "#f5f2ea",
  field: "#6f9c5c",
  square: "#3f6b35",
  house: "#d9a02b",
  office: "#faf5e9",
  post: "#7a5535",
  channel: "#4f7f9c",
  zone: "#d9a02b",
};

export function Map2D({
  hotspots,
  selectedId,
  onSelect,
}: {
  hotspots: EnrichedHotspot[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-kisi-green-900/15"
      style={{ aspectRatio: "5 / 4", background: "linear-gradient(180deg, #6f9c5c 0%, #5c8a4e 60%, #557f47 100%)" }}
    >
      {/* decorative plan features (paths, shade) — not interactive */}
      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {/* main path from the entrance */}
        <rect x="47.5" y="40" width="5" height="38" fill="#b98a5a" rx="1" />
        {/* cross path along the coop row */}
        <rect x="12" y="49" width="72" height="4" fill="#b98a5a" rx="1" />
        {/* drainage line, west side */}
        <rect x="6.5" y="30" width="2.4" height="44" fill="#4f7f9c" rx="1" opacity="0.8" />
        {/* shade blobs */}
        <circle cx="46" cy="20" r="7" fill="#3f6b35" opacity="0.5" />
        <circle cx="20" cy="60" r="4.5" fill="#3f6b35" opacity="0.35" />
        <circle cx="80" cy="58" r="4" fill="#3f6b35" opacity="0.35" />
        {/* sports field patch */}
        <rect x="64" y="10" width="16" height="11" fill="#7fae6b" rx="1.5" />
        {/* agric city horizon */}
        <rect x="78" y="2" width="17" height="9" fill="#d9a02b" opacity="0.25" rx="1.5" />
      </svg>

      {hotspots.map((h) => {
        const selected = h.id === selectedId;
        return (
          <button
            key={h.id}
            type="button"
            onClick={() => onSelect(h.id)}
            aria-pressed={selected}
            aria-label={`${h.name} — open details`}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-1.5 py-0.5 text-[10px] font-semibold leading-tight shadow-sm transition-transform hover:scale-105 sm:px-2 sm:py-1 sm:text-xs ${
              selected
                ? "z-10 border-kisi-gold-500 bg-kisi-charcoal-900 text-kisi-cream-100"
                : "border-black/20 bg-kisi-cream-100/95 text-kisi-charcoal-900"
            }`}
            style={{ left: `${h.x}%`, top: `${(h.y / 80) * 100}%` }}
          >
            <span
              aria-hidden="true"
              className="mr-1 inline-block h-2 w-2 rounded-full align-middle"
              style={{ backgroundColor: KIND_COLOR[h.kind], outline: "1px solid rgba(0,0,0,.25)" }}
            />
            {h.name}
          </button>
        );
      })}
    </div>
  );
}
