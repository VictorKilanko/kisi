import type { Bill, ExecutiveOrder } from "@/lib/schemas";

/** fictional legislation of the Coop Assembly. */
export const bills: Bill[] = [
  {
    id: "clean-water-act",
    title: "Clean Water and Healthy Feathers Act",
    sponsorId: "dr-amara-featherwell",
    status: "passed",
    summary:
      "Mandates daily trough inspection, wet-season drainage watch, and a " +
      "national standard for water 'you would let your own chick drink.' " +
      "Passed unanimously after Dr. Featherwell's committee testimony, " +
      "which consisted of one glass of before and one glass of after.",
    votes: { ayes: 41, nays: 0, abstentions: 2 },
  },
  {
    id: "nesting-box-expansion",
    title: "National Nesting Box Expansion Bill",
    sponsorId: "adedoyin-mama-decree",
    status: "in-debate",
    summary:
      "Proposes six additional nesting boxes and the retirement of the " +
      "creaky one everyone avoids. Deadlocked: the government cites " +
      "national dignity, the opposition cites the budget, and the Free " +
      "Feathers Front — which holds the deciding votes — has tabled " +
      "seventeen amendments about perch access and is enjoying itself " +
      "enormously.",
  },
  {
    id: "senior-hen-retirement-act",
    title: "Senior Hen Retirement Protection Act ('Mama Gold's Law')",
    sponsorId: "yeye-alaba",
    status: "in-debate",
    summary:
      "Guarantees every retired layer shade, priority at the trough, and " +
      "freedom from sudden committee membership. Passed its second reading " +
      "amid singing; third reading scheduled for after the Feather Gala " +
      "'so that everyone is in the right mood.'",
    votes: { ayes: 43, nays: 0, abstentions: 0 },
  },
  {
    id: "young-chick-representation",
    title: "Young Chick Representation Bill",
    sponsorId: "flash-adaora",
    status: "proposed",
    summary:
      "Would reserve one Assembly seat and the Youth & Chick Development " +
      "portfolio for a citizen under one year old. Sponsored from outside " +
      "the Assembly by petition — 118 footprints collected at Chick Sprint " +
      "Saturdays. Elders are said to be 'studying it,' which the sponsor " +
      "has described as 'the place bills go to nap.'",
  },
  {
    id: "coop-security-modernization",
    title: "Coop Security Modernization Bill",
    sponsorId: "halima-iron-feathers",
    status: "proposed",
    summary:
      "A rare opposition-sponsored security bill: louder alarm calls, a " +
      "second dusk headcount, and a standing consultation with the geese. " +
      "The government supports it in principle, which the sponsor notes " +
      "'is where support goes to cool down.'",
  },
];

/** executive orders of the presidency. */
export const executiveOrders: ExecutiveOrder[] = [
  {
    number: 1,
    title: "The Punctual Breakfast Order",
    date: "2025-05-02",
    summary:
      "Breakfast shall be served at seven. Not seven-ish. Signed with a " +
      "flourish and read aloud twice.",
  },
  {
    number: 7,
    title: "The Queue Integrity Order",
    date: "2025-09-14",
    summary:
      "Codifies the trough queue: order of arrival, no wing-barging, " +
      "chicks and senior hens served first. Widely regarded as the " +
      "constitution's better half.",
  },
  {
    number: 12,
    title: "The Dust Bath Preservation Order",
    date: "2026-01-20",
    summary:
      "Designates the three best dust-bathing spots as protected national " +
      "commons. 'Some things,' the preamble notes, 'belong to everyone or " +
      "to no one.'",
  },
  {
    number: 15,
    title: "The Retroactive Public Holiday (Chi-Chi's Egg) Order",
    date: "2026-06-02",
    summary:
      "Declares a public holiday effective immediately and retroactively, " +
      "so that no one is marked absent. The presidency's most popular " +
      "order to date.",
  },
];

/** the weekly presidential diary. */
export const presidentialDiary: { day: string; entry: string }[] =
  [
    {
      day: "Monday",
      entry:
        "06:58 — trough-side inspection, two minutes early, because leadership. " +
        "Cabinet meeting: the Feed Budget defended, the Stadium Project 'progressing.'",
    },
    {
      day: "Tuesday",
      entry:
        "Audience with the Bureau of Egg Statistics. Received the weekly " +
        "figures; forwarded them, unopened, to the opposition 'to save time.'",
    },
    {
      day: "Wednesday",
      entry:
        "State visit to Coop Three (childhood home). Unveiled a small plaque " +
        "at the ordinary nest. Wept briefly; denied it briefly.",
    },
    {
      day: "Thursday",
      entry:
        "Coop Assembly — observed the Nesting Box debate from the gallery. " +
        "The Free Feathers Front tabled amendment eighteen. Admirable stamina.",
    },
    {
      day: "Friday",
      entry:
        "Signed no orders. 'A quiet Friday is also governance.' Evening " +
        "scratch at the fence line with the Leader of the Opposition, " +
        "officially unconfirmed.",
    },
    {
      day: "Saturday",
      entry:
        "Chick Sprint Saturdays — flagged off the junior 20-metre. Photo " +
        "opportunity with the sprint clinic; outran nobody; claimed otherwise.",
    },
    {
      day: "Sunday",
      entry:
        "Mango tree, low branch, listening. Mama Gold told the week better " +
        "than my press secretary does. Rested.",
    },
  ];
