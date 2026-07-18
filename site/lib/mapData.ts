/**
 * The Farm Map — shared hotspot data.
 *
 * Single source of truth for BOTH the 3D world (React Three Fiber) and the
 * lightweight 2D fallback: same ids, same positions, same stories. Positions
 * are percentages on a 100 x 80 plan (x → east, y → south); the 3D scene
 * derives world coordinates from them.
 *
 * The layout reflects practical SW-Nigeria poultry realism (see
 * docs/3D_WORLD_PLAN.md): open-sided houses set east–west for heat and
 * ventilation, generous roof overhangs for rain, shade trees, a raised feed
 * store, water tanks, solar, drainage, a foot-bath at the entrance, and a
 * quarantine area deliberately separated from the flock. It is a stylized
 * impression, not a site plan of the real farm.
 */

export type MapWorld = "fact" | "fiction" | "mixed" | "vision";

export type HotspotKind =
  | "gate"
  | "coop"
  | "palace"
  | "assembly"
  | "cabinet"
  | "eggs"
  | "store"
  | "tanks"
  | "solar"
  | "clinic"
  | "field"
  | "square"
  | "house"
  | "office"
  | "post"
  | "channel"
  | "zone";

export interface MapHotspot {
  id: string;
  name: string;
  kind: HotspotKind;
  world: MapWorld;
  /** percent coordinates on the 100 x 80 plan */
  x: number;
  y: number;
  description: string;
  realism?: string;
  links: { href: string; label: string }[];
  residentIds: string[];
}

export const MAP_HOTSPOTS: MapHotspot[] = [
  {
    id: "main-entrance",
    name: "Main Entrance & Foot-bath",
    kind: "gate",
    world: "fact",
    x: 50,
    y: 74,
    description:
      "Every visit to Kisi starts here — at the gate, the visitor book, " +
      "and the humble foot-bath, the single most underrated hero of poultry " +
      "farming.",
    realism:
      "Foot-baths and controlled entry are basic biosecurity: most disease " +
      "walks in on feet and tyres.",
    links: [{ href: "/about", label: "About Kisi Farm" }],
    residentIds: [],
  },
  {
    id: "coop-one",
    name: "Coop One",
    kind: "coop",
    world: "mixed",
    x: 32,
    y: 52,
    description:
      "The oldest laying house, and — by right of sitting there first — " +
      "home of Mama Gold's shady end. Open-sided, breezy, and set " +
      "east–west so the sun crosses the roof, not the birds.",
    realism:
      "In hot climates, open-sided houses aligned east–west with big roof " +
      "overhangs keep birds cool and dry through heat and heavy rain.",
    links: [
      { href: "/eggs", label: "Egg Life" },
      { href: "/flock", label: "Meet the residents" },
    ],
    residentIds: ["mama-gold", "quiet-grace", "chi-chi"],
  },
  {
    id: "coop-two",
    name: "Coop Two",
    kind: "coop",
    world: "mixed",
    x: 46,
    y: 52,
    description:
      "The busy house — young layers, strong opinions, and the site of the " +
      "famous flu-season quarantine that Dr. Featherwell managed with five " +
      "calm words a day.",
    realism:
      "Ventilation, dry litter, and stocking space per bird matter more " +
      "than any gadget.",
    links: [
      { href: "/flock", label: "Meet the Flock" },
      { href: "/news", label: "The Coop Times" },
    ],
    residentIds: ["halima-iron-feathers", "flash-adaora"],
  },
  {
    id: "presidential-coop",
    name: "The Presidential Coop",
    kind: "palace",
    world: "fiction",
    x: 62,
    y: 48,
    description:
      "Official residence of Her Excellency. Architecturally identical to " +
      "every other nesting box, plus one small flag. The queue outside is " +
      "immaculate.",
    links: [
      { href: "/republic/presidency", label: "The Presidency" },
      { href: "/flock/adedoyin-mama-decree", label: "Meet the President" },
    ],
    residentIds: ["adedoyin-mama-decree", "baba-segun"],
  },
  {
    id: "coop-assembly",
    name: "The Coop Assembly",
    kind: "assembly",
    world: "fiction",
    x: 28,
    y: 30,
    description:
      "The legislature sits in the shade after the afternoon feed, on the " +
      "constitutional principle that no bird is reasonable while hungry. " +
      "Gallery singing: frequent.",
    links: [{ href: "/republic/assembly", label: "Bills & debates" }],
    residentIds: ["yeye-alaba"],
  },
  {
    id: "cabinet-row",
    name: "Cabinet Row",
    kind: "cabinet",
    world: "fiction",
    x: 18,
    y: 40,
    description:
      "Ten ministries, one row of perches, several acting appointments, " +
      "and the second filing perch of national fame — now a minor " +
      "monument.",
    links: [{ href: "/republic/government", label: "Government & Cabinet" }],
    residentIds: ["bright-feather", "dr-amara-featherwell"],
  },
  {
    id: "egg-center",
    name: "Egg Collection Center",
    kind: "eggs",
    world: "fact",
    x: 40,
    y: 40,
    description:
      "Where the National Egg Census begins: daily collection, gentle " +
      "handling (Operation Gentle Hands applies), cool storage, honest " +
      "counting.",
    realism:
      "Frequent collection and cool, clean storage protect egg quality; " +
      "rough handling is the enemy.",
    links: [{ href: "/eggs", label: "The Egg Census" }],
    residentIds: [],
  },
  {
    id: "feed-store",
    name: "Feed Store",
    kind: "store",
    world: "mixed",
    x: 56,
    y: 36,
    description:
      "The national treasury, raised off the ground and defended from " +
      "damp, rats, and unauthorized snacking. Site of the Missing " +
      "Breakfast Grain Affair.",
    realism:
      "Feed is a laying farm's biggest cost — raised, dry, sealed storage " +
      "protects both money and bird health.",
    links: [
      { href: "/republic/government/feed-agriculture", label: "Ministry of Feed" },
      { href: "/news/missing-breakfast-grain", label: "The Grain Affair" },
    ],
    residentIds: [],
  },
  {
    id: "water-tanks",
    name: "Water Tanks",
    kind: "tanks",
    world: "fact",
    x: 68,
    y: 34,
    description:
      "Clean water, all day, every day — the Clean Water and Healthy " +
      "Feathers Act made it law in the Republic; good practice made it " +
      "policy on the farm first.",
    realism:
      "A laying hen drinks roughly twice as much as she eats; water " +
      "quality shows up in eggs within days.",
    links: [
      { href: "/republic/government/water-environment", label: "Water & Environment" },
    ],
    residentIds: [],
  },
  {
    id: "solar-array",
    name: "Solar Array",
    kind: "solar",
    world: "fact",
    x: 78,
    y: 46,
    description:
      "Panels tilted at the sun, powering lights on the national schedule " +
      "— a schedule debated more passionately than any budget.",
    realism:
      "Reliable, gentle lighting supports laying cycles; solar beats " +
      "generator noise, fumes, and fuel costs.",
    links: [
      { href: "/republic/government/energy-solar", label: "Energy & Solar Affairs" },
    ],
    residentIds: [],
  },
  {
    id: "vet-quarantine",
    name: "Veterinary & Quarantine",
    kind: "clinic",
    world: "mixed",
    x: 12,
    y: 14,
    description:
      "Dr. Featherwell's calm domain, set deliberately apart from the " +
      "coops. New arrivals and recovering birds stay here first — " +
      "distance is the medicine that costs nothing.",
    realism:
      "Quarantining new or sick birds away from the flock, downwind and " +
      "down-slope, is core disease control on any serious farm.",
    links: [
      { href: "/republic/government/health-vet", label: "Health & Veterinary Affairs" },
      { href: "/flock/dr-amara-featherwell", label: "Meet Dr. Featherwell" },
    ],
    residentIds: [],
  },
  {
    id: "sports-field",
    name: "National Sports Field",
    kind: "field",
    world: "fiction",
    x: 72,
    y: 16,
    description:
      "Home of the Coop Premier League, the Perch Jumping Championship, " +
      "and the engraved gatepost. The second field remains 90 percent " +
      "complete.",
    links: [
      { href: "/republic/sports", label: "Fixtures & results" },
      { href: "/flock/flash-adaora", label: "Meet Flash Adaora" },
    ],
    residentIds: ["flash-adaora", "tunde-quickfoot"],
  },
  {
    id: "mango-square",
    name: "Mango Tree Square",
    kind: "square",
    world: "fiction",
    x: 46,
    y: 20,
    description:
      "The Republic's living room: Sunday storytelling on the low branch, " +
      "the Reconciliation Bench in the shade, and the eldest citizens " +
      "gently correcting each other's history.",
    realism:
      "Shade trees do real work on a hot farm — cooler birds, calmer " +
      "birds, better ground.",
    links: [{ href: "/republic/social", label: "Social Life" }],
    residentIds: ["mama-gold", "yeye-alaba"],
  },
  {
    id: "mascot-house",
    name: "The Mascot's House",
    kind: "house",
    world: "mixed",
    x: 84,
    y: 64,
    description:
      "Residence of a national figure who holds no office, answers no " +
      "questions, and outranks everybody. Identity: pending the official " +
      "unveiling.",
    links: [{ href: "/mascot", label: "The Mascot (coming soon)" }],
    residentIds: [],
  },
  {
    id: "farm-office",
    name: "Farm Office",
    kind: "office",
    world: "fact",
    x: 38,
    y: 68,
    description:
      "Records, ledgers, and the kettle. Where the real farm is run — and " +
      "where the Republic's census figures are, allegedly, 'reviewed for " +
      "tone.'",
    links: [{ href: "/visit", label: "Visit & Contact" }],
    residentIds: ["kola-quill"],
  },
  {
    id: "security-post",
    name: "Security Post",
    kind: "post",
    world: "mixed",
    x: 62,
    y: 70,
    description:
      "The Ministry of Coop Security maintains a dusk headcount, a " +
      "perimeter watch, and a standing consultation with the geese. The " +
      "hawk remains classified.",
    realism:
      "Predator-proofing — fencing, covered runs, secure doors at dusk — " +
      "is everyday reality for Nigerian poultry farms.",
    links: [
      { href: "/republic/government/coop-security", label: "Ministry of Coop Security" },
    ],
    residentIds: [],
  },
  {
    id: "drainage",
    name: "Drainage Channels",
    kind: "channel",
    world: "fact",
    x: 8,
    y: 52,
    description:
      "Unglamorous, essential. When the wet season arrives all at once — " +
      "and it does — these channels are the difference between a farm and " +
      "a pond.",
    realism:
      "Sloped ground and clear drainage keep litter dry; dry litter means " +
      "healthy feet and clean eggs.",
    links: [{ href: "/about", label: "How the farm works" }],
    residentIds: [],
  },
  {
    id: "drainage-channel",
    name: "The Drainage Channel",
    kind: "zone",
    world: "mixed",
    x: 86,
    y: 6,
    description:
      "Where the monitor lizard came through on the night of 9 July. The " +
      "grate is barred now and the second-shift patrol passes it twice an " +
      "hour, but no bird lingers here after dark.",
    realism:
      "Heavy wet-season rainfall needs somewhere to go. Open channels keep " +
      "coops dry — and are exactly the soft, covered route a predator uses, " +
      "which is why they get barred and patrolled.",
    links: [
      { href: "/most-wanted", label: "The Most Wanted notice" },
      { href: "/republic/government/coop-security", label: "Ministry of Security" },
    ],
    residentIds: ["pete-okpara", "sergeant-danladi"],
  },
];

/** Derive 3D world coordinates from plan percentages. */
export function toWorld(h: { x: number; y: number }): [number, number] {
  return [(h.x - 50) * 0.9, (h.y - 40) * 0.85];
}

export const WORLD_LABEL: Record<MapWorld, string> = {
  fact: "Farm fact",
  fiction: "Republic fiction",
  mixed: "Fact & fiction",
  vision: "Future vision",
};

/** A hotspot resident, enriched server-side from the content system. */
export interface MapResident {
  id: string;
  name: string;
  nickname?: string;
  /** portrait palette, reused for the little 3D chicken figures */
  body: string;
  comb: string;
}

export interface EnrichedHotspot extends MapHotspot {
  residents: MapResident[];
}
