import type { AgricCityStatus, ChickenStatus, World } from "@/lib/schemas";

/**
 * The fact/fiction/demo badging system — Decision D6.
 * Green = farm fact · gold = Republic fiction · terracotta = sample content.
 */

export function WorldBadge({ world }: { world: World }) {
  if (world === "fact") {
    return (
      <span className="kicker inline-flex items-center gap-1 rounded-full bg-kisi-green-700 px-3 py-1 text-kisi-cream-100">
        Farm fact
      </span>
    );
  }
  if (world === "fiction") {
    return (
      <span className="kicker inline-flex items-center gap-1 rounded-full bg-kisi-gold-500 px-3 py-1 text-kisi-charcoal-900">
        Republic fiction
      </span>
    );
  }
  return (
    <span className="kicker inline-flex items-center gap-1 rounded-full bg-kisi-indigo-800 px-3 py-1 text-kisi-cream-100">
      Fact &amp; fiction
    </span>
  );
}

export function DemoBadge() {
  return (
    <span
      className="kicker inline-flex items-center gap-1 rounded-full border border-kisi-earth-500 px-3 py-1 text-kisi-earth-700"
      title="Demonstration content — will be replaced with real Kisi Farm records"
    >
      Sample content
    </span>
  );
}

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

const PROJECT_LABELS: Record<AgricCityStatus, { label: string; cls: string }> = {
  operating: { label: "Operating today", cls: "bg-kisi-green-700 text-kisi-cream-100" },
  "in-development": {
    label: "In development",
    cls: "bg-kisi-gold-500 text-kisi-charcoal-900",
  },
  proposed: {
    label: "Proposed — long-term vision",
    cls: "border border-kisi-charcoal-600 text-kisi-charcoal-600",
  },
};

export function ProjectStatusBadge({ status }: { status: AgricCityStatus }) {
  const s = PROJECT_LABELS[status];
  return (
    <span className={`kicker inline-flex items-center rounded-full px-3 py-1 ${s.cls}`}>
      {s.label}
    </span>
  );
}
