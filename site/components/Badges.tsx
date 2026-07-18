import type { ChickenStatus } from "@/lib/schemas";

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
