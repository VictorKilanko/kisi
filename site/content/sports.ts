import type { Match, Team } from "@/lib/schemas";

/** SAMPLE CONTENT — the fictional Coop Premier League and championships. */
export const teams: Team[] = [
  {
    id: "solar-queens",
    name: "Solar Queens",
    home: "The sunny run, west side",
    motto: "We Rise With the Panels",
    color: "#d9a02b",
    isDemo: true,
  },
  {
    id: "mango-united",
    name: "Mango Tree United",
    home: "The shade, obviously",
    motto: "Deep Roots, Long Games",
    color: "#1f5130",
    isDemo: true,
  },
  {
    id: "harmattan-fc",
    name: "Harmattan FC",
    home: "The dust-bath end",
    motto: "We Arrive With the Wind",
    color: "#c05621",
    isDemo: true,
  },
  {
    id: "sunrise-rovers",
    name: "Sunrise Rovers",
    home: "Coop One forecourt",
    motto: "First Up, First There",
    color: "#23305e",
    isDemo: true,
  },
];

/**
 * SAMPLE CONTENT — league results ("chicken football": a rolling-ball
 * pecking game; all activities are gentle and bird-safe by league law).
 */
export const matches: Match[] = [
  {
    id: "m1",
    sport: "Chicken football",
    date: "2026-05-09",
    homeId: "solar-queens",
    awayId: "harmattan-fc",
    homeScore: 3,
    awayScore: 1,
    note: "Adaora hat-trick; Harmattan blamed the wind, which is their answer to everything.",
    isDemo: true,
  },
  {
    id: "m2",
    sport: "Chicken football",
    date: "2026-05-16",
    homeId: "mango-united",
    awayId: "sunrise-rovers",
    homeScore: 2,
    awayScore: 2,
    note: "Played in perfect shade. Both sides satisfied, which the league considers a failure of competitive spirit.",
    isDemo: true,
  },
  {
    id: "m3",
    sport: "Chicken football",
    date: "2026-05-23",
    homeId: "sunrise-rovers",
    awayId: "solar-queens",
    homeScore: 0,
    awayScore: 4,
    note: "The Rovers were first up and first there; the Queens were everything after that.",
    isDemo: true,
  },
  {
    id: "m4",
    sport: "Chicken football",
    date: "2026-05-30",
    homeId: "harmattan-fc",
    awayId: "mango-united",
    homeScore: 1,
    awayScore: 0,
    note: "The wind, for once, cooperated. Harmattan declined to comment, smugly.",
    isDemo: true,
  },
  {
    id: "m5",
    sport: "Chicken football",
    date: "2026-06-06",
    homeId: "solar-queens",
    awayId: "mango-united",
    homeScore: 2,
    awayScore: 1,
    note: "Top-of-table clash. Settled, inevitably, by the captain, inevitably late in the day.",
    isDemo: true,
  },
  {
    id: "m6",
    sport: "Chicken football",
    date: "2026-06-13",
    homeId: "sunrise-rovers",
    awayId: "harmattan-fc",
    note: "Postponed — rain, then the Perch Jumping Final, then a scheduling dispute now before the Supreme Pecking Council.",
    isDemo: true,
  },
  {
    id: "m7",
    sport: "Chicken football",
    date: "2026-06-20",
    homeId: "mango-united",
    awayId: "solar-queens",
    homeScore: 1,
    awayScore: 1,
    note: "United parked the tree. The champions called it 'anti-football'; the shade called it home advantage.",
    isDemo: true,
  },
  {
    id: "m8",
    sport: "Chicken football",
    date: "2026-06-27",
    homeId: "harmattan-fc",
    awayId: "sunrise-rovers",
    homeScore: 2,
    awayScore: 3,
    note: "The rearranged fixture, played at last by order of the Supreme Pecking Council. The Rovers rose earliest, as ever.",
    isDemo: true,
  },
  {
    id: "m9",
    sport: "Chicken football",
    date: "2026-07-04",
    homeId: "solar-queens",
    awayId: "sunrise-rovers",
    homeScore: 3,
    awayScore: 0,
    note: "Adaora's 10th of the season. The Bureau of Egg Statistics double-checked, out of habit.",
    isDemo: true,
  },
  {
    id: "m10",
    sport: "Chicken football",
    date: "2026-07-11",
    homeId: "mango-united",
    awayId: "harmattan-fc",
    homeScore: 0,
    awayScore: 0,
    note: "A windless day at the shade end. Neither side's excuse was available, so neither side scored.",
    isDemo: true,
  },
];

/** SAMPLE CONTENT — upcoming fixtures. */
export const fixtures: { date: string; homeId: string; awayId: string; note: string; isDemo: true }[] = [
  {
    date: "2026-07-25",
    homeId: "sunrise-rovers",
    awayId: "mango-united",
    note: "Kickoff 'after the afternoon feed, weather and gallery singing permitting.'",
    isDemo: true,
  },
  {
    date: "2026-08-01",
    homeId: "harmattan-fc",
    awayId: "solar-queens",
    note: "The wind has been formally invited.",
    isDemo: true,
  },
];

/** SAMPLE CONTENT — top scorers, Coop Premier League. */
export const topScorers: { name: string; chickenId?: string; teamId: string; goals: number; isDemo: true }[] = [
  { name: "Flash Adaora", chickenId: "flash-adaora", teamId: "solar-queens", goals: 10, isDemo: true },
  { name: "Early Bird Ekundayo", teamId: "sunrise-rovers", goals: 6, isDemo: true },
  { name: "Shade Captain Rótìmí", teamId: "mango-united", goals: 4, isDemo: true },
];

/** SAMPLE CONTENT — Perch Jumping Championship roll of honour. */
export const perchChampionship: {
  year: string;
  champion: string;
  note: string;
  isDemo: true;
}[] = [
  {
    year: "2024",
    champion: "Túndé 'Quickfoot' Balógun",
    note: "The minister's playing days. The victory lap lasted longer than the final.",
    isDemo: true,
  },
  {
    year: "2025",
    champion: "Flash Adaora",
    note: "A new era, announced at full speed.",
    isDemo: true,
  },
  {
    year: "2026",
    champion: "Flash Adaora",
    note: "The rain final. Record height, first attempt, gatepost engraved.",
    isDemo: true,
  },
];
