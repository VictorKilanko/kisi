import type { ChickenStatus, Tribe } from "@/lib/schemas";

/** Citizen status badges used across the flock directory and profiles. */

const STATUS_LABELS: Record<ChickenStatus, { label: string; cls: string }> = {
  active: { label: "Active citizen", cls: "bg-kisi-green-700 text-white" },
  recovering: { label: "Recovering", cls: "bg-kisi-gold-300 text-kisi-charcoal-900" },
  retired: { label: "Retired", cls: "bg-kisi-indigo-800 text-kisi-cream-100" },
  memorial: { label: "In loving memory", cls: "bg-kisi-charcoal-600 text-kisi-cream-100" },
};

export function StatusBadge({ status }: { status: ChickenStatus }) {
  const s = STATUS_LABELS[status];
  return (
    <span className={`kicker inline-flex items-center rounded-full px-3 py-1 ${s.cls}`}>
      {s.label}
    </span>
  );
}

/** Tribe (founding line) badges. Outlined, to sit apart from the solid status pill. */
const TRIBE_LABELS: Record<Tribe, { label: string; cls: string }> = {
  "isa-brown": {
    label: "Isa-Brown",
    cls: "border-kisi-earth-700/40 bg-kisi-earth-700/10 text-kisi-earth-700",
  },
  noiler: {
    label: "Noiler",
    cls: "border-kisi-green-700/40 bg-kisi-green-700/10 text-kisi-green-700",
  },
};

export function TribeBadge({ tribe }: { tribe: Tribe }) {
  const t = TRIBE_LABELS[tribe];
  return (
    <span
      className={`kicker inline-flex items-center rounded-full border px-3 py-1 ${t.cls}`}
    >
      {t.label}
    </span>
  );
}
