import type { FarmStat } from "../schemas";

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

/** The Republic's mascot: Dede. He/him. */
export const mascot = {
  name: "Dede",
  title: "Mascot of the Republic of Kisi",
  tagline: "No office, all heart. Dede greets you first.",
  facts: [
    { label: "Office", value: "None. Outranks everybody anyway." },
    { label: "Tribe", value: "Both, by belonging to neither" },
    { label: "Known for", value: "Greeting every visitor first" },
  ],
  intro:
    "Every great republic has a beloved national figure who holds no office, " +
    "answers no questions, and outranks everybody. At Kisi, that figure is " +
    "Dede. He is first to every gathering, first to the gate, and first to " +
    "welcome a face he has never seen before.",
  bio: [
    "Nobody appointed Dede. He simply turned up one morning at the front of " +
      "every gathering and has been there ever since. When the flock lines up " +
      "for the dawn chorus, Dede is at the end of the row. When a hatch-day is " +
      "celebrated, he is already there. When a nervous new chick arrives, he " +
      "walks it to the feed line personally.",
    "Dede belongs to no tribe, which is exactly why both claim him. The " +
      "Isa-Brown say he has the patience of a good layer; the Noiler say he " +
      "has the nerve of a range bird. Dede lets both be right and eats at " +
      "whichever trough is closest.",
    "His morning round is the Republic's most reliable clock. Chicks are told " +
      "that if they are kind, brave, and finish their feed, they too might grow " +
      "up to greet the whole nation by name. Very few things at Kisi are " +
      "non-negotiable. Dede's morning welcome to every visitor is one of them.",
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
    context: "Dede's whole philosophy, as interpreted by the flock",
  },
};
