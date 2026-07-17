import type { AgricCityProject, FarmStat } from "@/lib/schemas";

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

/**
 * KISI AGRIC CITY — the long-term vision.
 * MANDATORY LABELING: every project carries an honest status. Nothing
 * "proposed" is ever presented as existing.
 */
export const agricCityProjects: AgricCityProject[] = [
  {
    id: "poultry",
    name: "Poultry operation",
    status: "operating",
    description:
      "The heart of Kisi today: laying hens, daily care, and the eggs " +
      "that started it all. Details and figures will appear here as farm " +
      "records are published.",
  },
  {
    id: "poultry-expansion",
    name: "Expanded poultry & hatchery",
    status: "proposed",
    description:
      "Growing the flock and hatching on-site, so the Republic can issue " +
      "birth certificates. (The paperwork, at least, is ready.)",
  },
  {
    id: "feed-mill",
    name: "Feed mill",
    status: "proposed",
    description:
      "Milling feed on-site for quality, cost, and the strategic security " +
      "of the National Feed Budget.",
  },
  {
    id: "crops",
    name: "Crop production",
    status: "proposed",
    description:
      "Maize and staple crops to feed birds and neighbours alike.",
  },
  {
    id: "livestock",
    name: "Livestock",
    status: "proposed",
    description: "Goats, sheep, and cattle in a diversified operation.",
  },
  {
    id: "vet-clinic",
    name: "Veterinary clinic & laboratory",
    status: "proposed",
    description:
      "Animal health services for the farm and the wider community.",
  },
  {
    id: "processing",
    name: "Food processing & cold storage",
    status: "proposed",
    description: "Adding value on-site and keeping it fresh.",
  },
  {
    id: "renewable",
    name: "Renewable energy",
    status: "proposed",
    description:
      "Solar and other renewables powering the whole agricultural city.",
  },
  {
    id: "training",
    name: "Agricultural training & education",
    status: "proposed",
    description:
      "Courses, school visits, and farmer training — raising the next " +
      "generation of Nigerian agriculturists.",
  },
  {
    id: "agritourism",
    name: "Agritourism & farm visits",
    status: "proposed",
    description:
      "One day: come and meet the Republic in person. (The Republic is " +
      "already drafting the welcome protocol.)",
  },
  {
    id: "research",
    name: "Research partnerships",
    status: "proposed",
    description:
      "Working with universities and development organisations on " +
      "practical agricultural research.",
  },
  {
    id: "marketplace",
    name: "Marketplace & investment platform",
    status: "proposed",
    description:
      "Produce sales, managed farming services, and investment " +
      "opportunities as the city grows.",
  },
];
