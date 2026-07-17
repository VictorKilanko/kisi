import {
  AgricCityProjectSchema,
  ArticleSchema,
  BillSchema,
  ChickenSchema,
  EggMilestoneSchema,
  ExecutiveOrderSchema,
  FarmStatSchema,
  MatchSchema,
  MinistrySchema,
  PartySchema,
  SocialEventSchema,
  TeamSchema,
  TimelineEventSchema,
  type Article,
  type Chicken,
  type EggMilestone,
  type Match,
  type Ministry,
  type Party,
  type Team,
  type TimelineEvent,
} from "@/lib/schemas";
import { articles as rawArticles } from "@/content/articles";
import { chickens as rawChickens } from "@/content/chickens";
import { eggCensus, eggMilestones as rawMilestones } from "@/content/eggs";
import {
  agricCityProjects as rawProjects,
  farmStats as rawStats,
  mascot,
} from "@/content/farm";
import {
  bills as rawBills,
  executiveOrders as rawOrders,
  presidentialDiary,
} from "@/content/government";
import { ministries as rawMinistries } from "@/content/ministries";
import { parties as rawParties } from "@/content/parties";
import { socialEvents as rawSocial } from "@/content/social";
import { matches as rawMatches, perchChampionship, teams as rawTeams } from "@/content/sports";
import { timelineEvents as rawTimeline } from "@/content/timeline";

/**
 * Content loading + validation.
 * Everything here runs at build time (all pages are statically generated),
 * so schema violations and broken relationships fail the build, not the
 * visitor's browser.
 */

function validateAll<T>(schema: { parse: (v: unknown) => T }, items: unknown[], label: string): T[] {
  return items.map((item, i) => {
    try {
      return schema.parse(item);
    } catch (err) {
      throw new Error(`Invalid ${label} at index ${i}: ${String(err)}`);
    }
  });
}

export const chickens: Chicken[] = validateAll(ChickenSchema, rawChickens, "chicken");
export const parties: Party[] = validateAll(PartySchema, rawParties, "party");
export const ministries: Ministry[] = validateAll(MinistrySchema, rawMinistries, "ministry");
export const articles: Article[] = validateAll(ArticleSchema, rawArticles, "article")
  .slice()
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
export const bills = validateAll(BillSchema, rawBills, "bill");
export const executiveOrders = validateAll(ExecutiveOrderSchema, rawOrders, "executive order");
export const eggMilestones: EggMilestone[] = validateAll(
  EggMilestoneSchema,
  rawMilestones,
  "egg milestone",
)
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));
export const timelineEvents: TimelineEvent[] = validateAll(
  TimelineEventSchema,
  rawTimeline,
  "timeline event",
)
  .slice()
  .sort((a, b) => a.date.localeCompare(b.date));
export const teams: Team[] = validateAll(TeamSchema, rawTeams, "team");
export const matches: Match[] = validateAll(MatchSchema, rawMatches, "match");
export const socialEvents = validateAll(SocialEventSchema, rawSocial, "social event")
  .slice()
  .sort((a, b) => a.date.localeCompare(b.date));
export const farmStats = validateAll(FarmStatSchema, rawStats, "farm stat");
export const agricCityProjects = validateAll(
  AgricCityProjectSchema,
  rawProjects,
  "Agric City project",
);
export { eggCensus, mascot, perchChampionship, presidentialDiary };

/* ---------------------------------------------------------------- lookups */

const chickenById = new Map(chickens.map((c) => [c.id, c]));
const partyById = new Map(parties.map((p) => [p.id, p]));
const ministryById = new Map(ministries.map((m) => [m.id, m]));
const teamById = new Map(teams.map((t) => [t.id, t]));
const articleById = new Map(articles.map((a) => [a.id, a]));

export function getChicken(id: string): Chicken {
  const c = chickenById.get(id);
  if (!c) throw new Error(`Unknown chicken id: ${id}`);
  return c;
}
export const findChicken = (id: string) => chickenById.get(id);
export const getParty = (id: string) => partyById.get(id);
export const getMinistry = (id: string) => ministryById.get(id);
export const getTeam = (id: string) => teamById.get(id);
export const getArticle = (id: string) => articleById.get(id);

export function articlesForChicken(chickenId: string): Article[] {
  return articles.filter((a) => a.relatedChickenIds.includes(chickenId));
}
export function articlesForMinistry(ministryId: string): Article[] {
  return articles.filter((a) => a.relatedMinistryIds.includes(ministryId));
}
export function timelineForChicken(chickenId: string): TimelineEvent[] {
  return timelineEvents.filter((e) => e.chickenIds.includes(chickenId));
}
export function milestonesForChicken(chickenId: string): EggMilestone[] {
  return eggMilestones.filter((m) => m.chickenId === chickenId);
}
export function ministerOf(ministry: Ministry): Chicken | undefined {
  return ministry.ministerId ? chickenById.get(ministry.ministerId) : undefined;
}

/* --------------------------------------------------------- league table */

export interface TableRow {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export function leagueTable(): TableRow[] {
  const rows = new Map<string, TableRow>(
    teams.map((t) => [
      t.id,
      { team: t, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
    ]),
  );
  for (const m of matches) {
    if (m.homeScore === undefined || m.awayScore === undefined) continue;
    const home = rows.get(m.homeId)!;
    const away = rows.get(m.awayId)!;
    home.played++;
    away.played++;
    home.goalsFor += m.homeScore;
    home.goalsAgainst += m.awayScore;
    away.goalsFor += m.awayScore;
    away.goalsAgainst += m.homeScore;
    if (m.homeScore > m.awayScore) {
      home.won++;
      away.lost++;
      home.points += 3;
    } else if (m.homeScore < m.awayScore) {
      away.won++;
      home.lost++;
      away.points += 3;
    } else {
      home.drawn++;
      away.drawn++;
      home.points++;
      away.points++;
    }
  }
  return [...rows.values()].sort(
    (a, b) =>
      b.points - a.points ||
      b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst) ||
      a.team.name.localeCompare(b.team.name),
  );
}

/* ---------------------------------------------------- integrity checks */

function assert(cond: boolean, msg: string): void {
  if (!cond) throw new Error(`Content integrity: ${msg}`);
}

// Blocklist guard: fictional parties must not echo real Nigerian parties.
const REAL_PARTY_NAMES = [
  "all progressives congress",
  "peoples democratic party",
  "labour party",
  "new nigeria peoples party",
  "all progressives grand alliance",
  "social democratic party",
  "young progressives party",
  "african democratic congress",
];

for (const p of parties) {
  assert(
    !REAL_PARTY_NAMES.includes(p.name.toLowerCase()),
    `party "${p.name}" matches a real Nigerian party name`,
  );
  if (p.leaderId) assert(chickenById.has(p.leaderId), `party ${p.id} leader ${p.leaderId} unknown`);
}

for (const c of chickens) {
  for (const f of c.friends) {
    assert(chickenById.has(f), `chicken ${c.id} friend ${f} unknown`);
    assert(getChicken(f).friends.includes(c.id), `friendship ${c.id} → ${f} is not symmetric`);
  }
  for (const r of c.rivals) {
    assert(chickenById.has(r), `chicken ${c.id} rival ${r} unknown`);
    assert(getChicken(r).rivals.includes(c.id), `rivalry ${c.id} → ${r} is not symmetric`);
  }
  if (c.partyId) assert(partyById.has(c.partyId), `chicken ${c.id} party ${c.partyId} unknown`);
  if (c.ministryId)
    assert(ministryById.has(c.ministryId), `chicken ${c.id} ministry ${c.ministryId} unknown`);
  if (c.teamId) assert(teamById.has(c.teamId), `chicken ${c.id} team ${c.teamId} unknown`);
  assert(
    !(c.status === "memorial" && c.sponsorable),
    `memorial chicken ${c.id} cannot be sponsorable`,
  );
}

for (const m of ministries) {
  if (m.ministerId)
    assert(chickenById.has(m.ministerId), `ministry ${m.id} minister ${m.ministerId} unknown`);
}
for (const a of articles) {
  for (const id of a.relatedChickenIds)
    assert(chickenById.has(id), `article ${a.id} references unknown chicken ${id}`);
  for (const id of a.relatedMinistryIds)
    assert(ministryById.has(id), `article ${a.id} references unknown ministry ${id}`);
}
for (const b of bills) {
  assert(chickenById.has(b.sponsorId), `bill ${b.id} sponsor ${b.sponsorId} unknown`);
}
for (const e of timelineEvents) {
  for (const id of e.chickenIds)
    assert(chickenById.has(id), `timeline ${e.id} references unknown chicken ${id}`);
  if (e.articleId) assert(articleById.has(e.articleId), `timeline ${e.id} article ${e.articleId} unknown`);
}
for (const m of rawMilestones) {
  assert(chickenById.has(m.chickenId), `egg milestone ${m.id} chicken ${m.chickenId} unknown`);
}
for (const m of matches) {
  assert(teamById.has(m.homeId) && teamById.has(m.awayId), `match ${m.id} has an unknown team`);
}
for (const s of rawSocial) {
  for (const id of s.attendeeIds)
    assert(chickenById.has(id), `social event ${s.id} attendee ${id} unknown`);
}
