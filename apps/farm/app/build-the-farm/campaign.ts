/**
 * "Build the Farm" capital campaign data.
 *
 * Honesty rules (see docs/CONTENT_CHECKLIST.md):
 *  - Build goals are the owner's confirmed real figures. A goal left `null`
 *    renders as "goal set by farm" rather than an invented number.
 *  - We publish NO "raised so far" figures until the campaign is open and the
 *    numbers come from real records. There are no progress bars here.
 *  - Naming amounts are `null` (owner's call) and render as "set at launch".
 *  - Naming is honorary sponsorship of a working, for-profit farm. It is not
 *    a charitable/tax-deductible donation and confers no ownership.
 */

export type Build = {
  id: string;
  name: string;
  /** Confirmed goal in USD, or null when the farm has not set it yet. */
  goalUSD: number | null;
  blurb: string;
};

export const builds: Build[] = [
  {
    id: "hatchery",
    name: "The Hatchery",
    goalUSD: 100_000,
    blurb:
      "Our own chicks, hatched here instead of bought in. Healthier birds, a " +
      "bigger flock, and eggs we can trace from day one.",
  },
  {
    id: "feed-mill",
    name: "The Feed Mill",
    goalUSD: 10_000,
    blurb:
      "Feed is a poultry farm's biggest cost. Milling our own means fresher " +
      "nutrition, better laying, and prices we control instead of chasing " +
      "the market.",
  },
  {
    id: "solar",
    name: "The Solar System",
    goalUSD: 50_000,
    blurb:
      "Nigeria's grid comes and goes. Solar keeps the lights steady, lay " +
      "cycles regular, and nights safe, without burning diesel every week.",
  },
  {
    id: "cold-room",
    name: "The Cold Room",
    goalUSD: 100_000,
    blurb:
      "In the heat, eggs spoil fast and prices crash at harvest. A cold room " +
      "lets us sell when the price is right, waste less, and reach more " +
      "customers with fresh eggs.",
  },
];

/**
 * The campaign total, summed from the build goals. One source of truth: change
 * a build's goalUSD and the hero total follows. If any goal is still `null` the
 * page shows "over" this figure; when all are set it is the exact total.
 */
export const CAMPAIGN_TOTAL_USD = builds.reduce(
  (sum, b) => sum + (b.goalUSD ?? 0),
  0,
);

/** True while any build goal is unset, so the total is a floor ("over $X"). */
export const CAMPAIGN_TOTAL_IS_FLOOR = builds.some((b) => b.goalUSD === null);

export type NamingTier = {
  id: string;
  tier: string;
  name: string;
  blurb: string;
};

export const namingTiers: NamingTier[] = [
  {
    id: "hen",
    tier: "Entry",
    name: "Name a Hen",
    blurb:
      "One of the Republic's hens carries your name in her profile and in " +
      "every story update she appears in.",
  },
  {
    id: "solar-light",
    tier: "Supporter",
    name: "Name a Solar Light",
    blurb:
      "Light one corner of a coop. Your name sits beside the lamp that keeps " +
      "the birds safe after dark.",
  },
  {
    id: "street",
    tier: "Landmark",
    name: "Name a Farm Street",
    blurb:
      "A street in the Republic bears your name on the map, where the " +
      "chickens live, walk, and make the news.",
  },
  {
    id: "poultry-house",
    tier: "Founder",
    name: "Name a Poultry House",
    blurb:
      "A whole house of birds named for you or your family, with a founding " +
      "plaque and its own page on the farm.",
  },
];

export const cornerstone = {
  tier: "Cornerstone · Major gift",
  name: "Name the Hatchery, Feed Mill, Cold Room or Solar Array",
  blurb:
    "The four big builds carry one founding name each, cast on a permanent " +
    "plaque at the farm and on the site. This is a conversation, not a " +
    "checkout. Tell us who you are.",
};

export const whatYouGet = [
  {
    title: "Your name on the map",
    body: "On the hen, the street, the house or the build you chose, visible to every visitor.",
  },
  {
    title: "Story updates",
    body: "When your hen lays, campaigns, or makes headlines, you hear about it first.",
  },
  {
    title: "A founding certificate",
    body: "A digital certificate of the thing you named, dated and signed from the farm.",
  },
  {
    title: "A real farm, funded",
    body: "Your gift goes to the build, reported back from the farm's real records.",
  },
];
