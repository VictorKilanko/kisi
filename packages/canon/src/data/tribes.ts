import type { Tribe } from "../schemas";

/**
 * The two founding lines of the Republic of Kisi.
 * Both are real poultry breeds raised at Kisi Farm: the Isa-Brown, a
 * renowned brown-egg layer, and the Noiler, Nigeria's own hardy
 * dual-purpose bird. In the Republic they are "tribes," meaning heritage,
 * not party. Citizens of both lines serve across the government, the sports
 * field, and the press, and the nation's whole story is one of the two
 * raised side by side.
 */
export interface TribeInfo {
  id: Tribe;
  name: string;
  tagline: string;
  description: string;
  /** Colour used for the tribe's identity dot. */
  accent: string;
  /** Real flock figures from Kisi Farm records (July 2026). */
  flock: { total: number; note: string };
}

export const tribes: TribeInfo[] = [
  {
    id: "isa-brown",
    name: "Isa-Brown",
    tagline: "The layers' line",
    description:
      "Warm brown feathers, steady tempers, and the most dependable eggs in " +
      "the Republic. The Isa-Brown are the backbone of the egg economy: they " +
      "keep the National Egg Census climbing and the breakfast trays full. " +
      "Where you find a calm hand on the ledger or a record-setting nest, you " +
      "will usually find an Isa-Brown.",
    accent: "#8a3e1f",
    flock: { total: 350, note: "200 active layers" },
  },
  {
    id: "noiler",
    name: "Noiler",
    tagline: "The hardy, free-ranging line",
    description:
      "Quick, tough, and happiest out on the range, the Noiler are Nigeria's " +
      "own dual-purpose bird. They forage in any weather, walk the fence line " +
      "at night, and fill the sports field by day. When the Republic needs " +
      "grit, a guard, or a sprinter, it calls a Noiler.",
    accent: "#2e7d46",
    flock: { total: 300, note: "270 cockerels, 30 hens" },
  },
];
