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
      "bigger flock, and eggs we can trace from day one. This is how Kisi " +
      "grows the strong parent stock Nigeria is short of.",
  },
  {
    id: "farm-house",
    name: "The Farm House",
    goalUSD: 110_000,
    blurb:
      "A permanent house on the farm: quarters for the team who keep the " +
      "birds, space to receive visitors, and a proper base to run the place " +
      "day to day as Kisi grows.",
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
  name: "Name the Hatchery or the Farm House",
  blurb:
    "The two landmark builds each carry one founding name, cast on a " +
    "permanent plaque at the farm and on the site. This is a conversation, " +
    "not a checkout. Tell us who you are.",
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
