import type { FarmStat } from "@/lib/schemas";

/**
 * REAL-FARM CONTENT AREA.
 * Rule: no real fact is ever invented. Stats without owner-verified values
 * are placeholders and render as "awaiting farm records."
 * Tracked in docs/CONTENT_CHECKLIST.md.
 */
export const farmStats: FarmStat[] = [
  {
    id: "location",
    label: "Location",
    value: "Southwestern Nigeria",
    source: "Owner brief (region-level only; precise location withheld by policy)",
    isPlaceholder: false,
  },
  {
    id: "flock-size",
    label: "Current flock size",
    value: null,
    isPlaceholder: true,
  },
  {
    id: "breeds",
    label: "Breeds raised",
    value: null,
    isPlaceholder: true,
  },
  {
    id: "housing",
    label: "Housing system",
    value: null,
    isPlaceholder: true,
  },
  {
    id: "water",
    label: "Water system",
    value: null,
    isPlaceholder: true,
  },
  {
    id: "energy",
    label: "Energy & solar",
    value: null,
    isPlaceholder: true,
  },
  {
    id: "vet-care",
    label: "Veterinary care",
    value: null,
    isPlaceholder: true,
  },
  {
    id: "team",
    label: "Farm team",
    value: null,
    isPlaceholder: true,
  },
];

/** Mascot section — entirely pending owner input. */
export const mascot = {
  name: null as string | null,
  placeholderNote:
    "Kisi Farm has a mascot — and we're saving the introduction until we " +
    "can do it properly, with real photographs and the real story. Name, " +
    "species, biography, and portrait gallery are awaiting the owner's " +
    "records. Watch this space.",
};
