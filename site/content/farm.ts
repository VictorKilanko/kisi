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
    value: "650 birds (350 Isa-Brown, 300 Noiler)",
    source: "Kisi Farm flock records, July 2026",
    isPlaceholder: false,
  },
  {
    id: "breeds",
    label: "Breeds raised",
    value: "Isa-Brown (layers) and Noiler (dual-purpose)",
    source: "Kisi Farm records",
    isPlaceholder: false,
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

/**
 * The Republic's mascot: Taco. Referred to as they/them, since Taco's sex is
 * not fixed; the owner can set he or she and it flows from here.
 */
export const mascot = {
  name: "Taco",
  title: "Mascot of the Republic of Kisi",
  tagline: "You will know Taco by the orange comb.",
  facts: [
    { label: "Office", value: "None. Outranks everybody anyway." },
    { label: "Tribe", value: "Both, by belonging to neither" },
    { label: "Signature", value: "The orange comb" },
  ],
  intro:
    "Every great republic has a beloved national figure who holds no office, " +
    "answers no questions, and outranks everybody. At Kisi, that figure is " +
    "Taco. You will know them at a glance by the blazing orange comb, the " +
    "only one like it on the whole farm.",
  bio: [
    "Nobody appointed Taco. Taco simply turned up one morning at the front of " +
      "every gathering, orange comb catching the sun, and has been there ever " +
      "since. When the flock lines up for the dawn chorus, Taco is at the end " +
      "of the row. When a hatch-day is celebrated, Taco is already there. When " +
      "a nervous new chick arrives, Taco walks it to the feed line personally.",
    "Taco belongs to no tribe, which is exactly why both claim them. The " +
      "Isa-Brown say Taco has the patience of a good layer; the Noiler say " +
      "Taco has the nerve of a range bird. Taco lets both be right and eats at " +
      "whichever trough is closest.",
    "The orange comb is the Republic's most recognisable feature. Chicks are " +
      "told they will grow a fine comb of their own if they are kind, brave, " +
      "and finish their feed. Very few things at Kisi are non-negotiable. " +
      "Taco's morning greeting to every visitor is one of them.",
  ],
  duties: [
    "Greeting every visitor at the gate, whether or not the visitor asked.",
    "Leading the dawn parade from the front, slightly off-key, entirely unbothered.",
    "Walking new chicks to their first meal.",
    "Turning up, uninvited and beloved, at every hatch-day, match, and festival.",
    "Uniting the two tribes by belonging to neither.",
  ],
  quote: {
    text: "You don't need a title to show up first.",
    context: "Taco's whole philosophy, as interpreted by the flock",
  },
};
