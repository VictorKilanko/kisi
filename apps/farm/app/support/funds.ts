/**
 * The five farm funds shown on the Support page.
 *
 * Each has a $20,000 goal (the amount the farm is raising for that build, set
 * by the owner). These are goals, not per-gift prices, and not invented
 * progress: the page shows the target and an honest "just getting started"
 * status, never a fabricated "raised so far" figure.
 *
 * Icon ids map to the inline SVG set in page.tsx.
 */
export interface Fund {
  id: string;
  name: string;
  goalUSD: number;
  /** One compelling line for the card. */
  blurb: string;
  /** A little more detail, shown on the expanded card. */
  detail: string;
  icon: string;
}

export const FUND_GOAL_USD = 20_000;

export const funds: Fund[] = [
  {
    id: "housing",
    name: "Better Housing",
    goalUSD: FUND_GOAL_USD,
    blurb: "Cooler, drier, stronger coops for a growing flock.",
    detail:
      "Ventilation that beats the heat, roofing that holds through the rains, " +
      "and clean nesting boxes. Good housing is the difference between birds " +
      "that merely survive and birds that thrive and lay.",
    icon: "house",
  },
  {
    id: "senior-hens",
    name: "The Senior Hen Fund",
    goalUSD: FUND_GOAL_USD,
    blurb: "A dignified end for the hens who gave us their best years.",
    detail:
      "When a hen's laying days are over, she is cared for to the end and " +
      "processed humanely for meat, with respect and nothing wasted. This " +
      "fund covers that calm, dignified transition, the honest last chapter " +
      "of a working farm.",
    icon: "hen",
  },
  {
    id: "vet",
    name: "Veterinary Care",
    goalUSD: FUND_GOAL_USD,
    blurb: "Vaccines, check-ups, and fast treatment when a bird falls ill.",
    detail:
      "Healthy birds are the whole point. Routine veterinary care and quick " +
      "response to illness keep the flock strong, and strong birds are how " +
      "Kisi builds the parent stock Nigeria is short of.",
    icon: "vet",
  },
  {
    id: "solar",
    name: "Solar, Light & Security",
    goalUSD: FUND_GOAL_USD,
    blurb: "Power through outages, and a farm that's safe day and night.",
    detail:
      "Solar power and lighting that keep the farm running when the grid " +
      "fails, plus fencing and night security that keep predators and thieves " +
      "away from the flock.",
    icon: "solar",
  },
  {
    id: "cold-storage",
    name: "Cold Storage",
    goalUSD: FUND_GOAL_USD,
    blurb: "A cold room so eggs and chicken reach more tables, fresh.",
    detail:
      "Cold storage keeps eggs and processed chicken fresh from the farm to " +
      "the customer. It cuts waste, steadies supply, and lets Kisi reach " +
      "further across Nigeria.",
    icon: "cold",
  },
];

/** $20k total across the five builds, shown in the hero. */
export const FUNDS_TOTAL_USD = funds.reduce((sum, f) => sum + f.goalUSD, 0);
