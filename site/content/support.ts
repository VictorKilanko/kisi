import type { SupportTier } from "@/lib/schemas";

/**
 * planned support tiers.
 * All amounts are deliberately unset (null): pricing is the owner's call
 * and is tracked in docs/CONTENT_CHECKLIST.md. Wording rules: these are
 * farm-support payments and sponsorships — NOT charitable or
 * tax-deductible donations; sponsoring a chicken never confers ownership.
 */
export const supportTiers: SupportTier[] = [
  {
    id: "feed",
    name: "Feed a Citizen",
    kind: "farm-support",
    cadence: "one-time",
    amountNGN: null,
    whatItFunds:
      "Quality feed for the flock — the Republic's largest and most " +
      "cheerfully consumed budget line.",
  },
  {
    id: "water",
    name: "Clean Water",
    kind: "farm-support",
    cadence: "one-time",
    amountNGN: null,
    whatItFunds:
      "Water-point upkeep and clean troughs — the everyday work behind the " +
      "Clean Water and Healthy Feathers Act.",
  },
  {
    id: "vet",
    name: "Veterinary Care",
    kind: "farm-support",
    cadence: "one-time",
    amountNGN: null,
    whatItFunds:
      "Vaccinations, check-ups, and recovery care — Dr. Featherwell's " +
      "real-world counterpart's department.",
  },
  {
    id: "housing",
    name: "Better Housing",
    kind: "farm-support",
    cadence: "one-time",
    amountNGN: null,
    whatItFunds:
      "Coop maintenance, nesting boxes, ventilation, and rainy-season " +
      "repairs.",
  },
  {
    id: "solar",
    name: "Solar & Light",
    kind: "farm-support",
    cadence: "one-time",
    amountNGN: null,
    whatItFunds:
      "Solar lighting upkeep so the national light schedule survives the " +
      "national light debate.",
  },
  {
    id: "senior-hens",
    name: "The Senior Hen Fund",
    kind: "farm-support",
    cadence: "monthly",
    amountNGN: null,
    whatItFunds:
      "Comfortable retirement for the hens who've earned it — shade, " +
      "space, and unhurried afternoons under Mama Gold's Law.",
  },
  {
    id: "education",
    name: "Farm Education",
    kind: "farm-support",
    cadence: "one-time",
    amountNGN: null,
    whatItFunds:
      "School visit materials and agricultural education content as the " +
      "programme develops.",
  },
  {
    id: "sponsor-chicken",
    name: "Sponsor a Chicken",
    kind: "sponsorship",
    cadence: "monthly",
    amountNGN: null,
    whatItFunds:
      "One named bird's feed, care, and story updates. You'll follow her " +
      "life in the Republic by name.",
    note:
      "Sponsorship supports a named bird's care and story. It is not " +
      "ownership: she remains a resident of Kisi Farm and, constitutionally, " +
      "a free citizen of the Republic.",
  },
];
