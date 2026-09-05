import {
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
  SupportTierSchema,
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
} from "./schemas";
import { articles as rawArticles } from "./data/articles";
import { chickens as rawChickens } from "./data/chickens";
import { eggCensus, eggMilestones as rawMilestones } from "./data/eggs";
import { farmStats as rawStats, mascot } from "./data/farm";
import {
  bills as rawBills,
  executiveOrders as rawOrders,
  presidentialDiary,
} from "./data/government";
import { ministries as rawMinistries } from "./data/ministries";
import { parties as rawParties } from "./data/parties";
import { socialEvents as rawSocial } from "./data/social";
import { tribes as rawTribes } from "./data/tribes";
import { supportTiers as rawTiers } from "./data/support";
import {
  fixtures,
  matches as rawMatches,
  perchChampionship,
  teams as rawTeams,
  topScorers,
} from "./data/sports";
import { timelineEvents as rawTimeline } from "./data/timeline";

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

/**
 * The Republic tells its stories scene by scene. A beat only appears on the
 * site once its date has arrived, so the website unfolds in step with the
 * Instagram drip and never shows a future-dated scene. Evaluated at build
 * time, so each deploy reveals whatever has since come due. Integrity checks
 * below still run against the full `timelineEvents`, not this view.
 */
const TODAY_ISO = new Date().toISOString().slice(0, 10);
export const revealedTimeline: TimelineEvent[] = timelineEvents.filter(
  (e) => e.date <= TODAY_ISO,
);
export const teams: Team[] = validateAll(TeamSchema, rawTeams, "team");
export const matches: Match[] = validateAll(MatchSchema, rawMatches, "match");
export const socialEvents = validateAll(SocialEventSchema, rawSocial, "social event")
  .slice()
  .sort((a, b) => a.date.localeCompare(b.date));
export const farmStats = validateAll(FarmStatSchema, rawStats, "farm stat");
export const supportTiers = validateAll(SupportTierSchema, rawTiers, "support tier");
export { eggCensus, fixtures, mascot, perchChampionship, presidentialDiary, topScorers };

export const tribes = rawTribes;
const tribeById = new Map<string, (typeof tribes)[number]>(
  tribes.map((t) => [t.id, t] as const),
);
export const getTribe = (id: string) => tribeById.get(id);
export const chickensOfTribe = (id: string) => chickens.filter((c) => c.tribe === id);

const tierById = new Map(supportTiers.map((t) => [t.id, t]));
export const getSupportTier = (id: string) => tierById.get(id);

/** Story arcs: timeline events grouped by arcId, in date order. */
export interface StoryArc {
  id: string;
  title: string;
  summary: string;
  events: TimelineEvent[];
}

const ARC_META: Record<string, { title: string; summary: string }> = {
  "chi-chi-first-egg": {
    title: "Chi-Chi's Road to the First Egg",
    summary:
      "A motherless three-week-old arrival, a borrowed wing, a watching " +
      "nation, and four words that became a national motto.",
  },
  "grain-affair": {
    title: "The Missing Breakfast Grain",
    summary:
      "Two hundred grams, five front pages, one Panel of Inquiry, and the " +
      "most cooperative filing perch in the Republic's history.",
  },
  "mama-gold-retirement": {
    title: "Mama Gold's Long Goodbye (to Laying Only)",
    summary:
      "Egg No. 400, a laying break announced from the mango tree, and the " +
      "law every citizen calls by her name.",
  },
  "perch-championship": {
    title: "The Rain Final",
    summary:
      "A record that fell, a rivalry that retired, and a champion who " +
      "declined to wait for the weather.",
  },
  "the-drain": {
    title: "The Drain",
    summary:
      "A track in the soft ground, a grate that moved at midnight, twelve " +
      "chicks out the far side, and the watchman who did not follow them. " +
      "The Republic's ongoing story, still without an ending.",
  },
  "flu-season": {
    title: "Flu Season, Handled",
    summary:
      "Quarantine, calm, and five words a day, how the Republic (and any " +
      "good farm) beats an outbreak: welfare first, panic never.",
  },
  "the-full-cabinet": {
    title: "A Full Cabinet",
    summary:
      "Six empty ministries, six new ministers, and one Opposition promise " +
      "to audit every budget by Friday. The week the Republic finally filled " +
      "every chair.",
  },
  "the-nesting-box-election": {
    title: "The Nesting Box Election",
    summary:
      "Two big parties, one small kingmaker under the mango tree, and a " +
      "recount demanded before the first count finished. How the Republic " +
      "votes: hungry birds not allowed.",
  },
  "the-fence-line": {
    title: "The Fence Line",
    summary:
      "The Republic's first loss from inside the flock. A hot, crowded week, " +
      "a fight at the roost, and a farewell for Cindy under the mango tree. " +
      "An unfinished story about the housing that keeps a flock safe.",
  },
  "after-the-fence-line": {
    title: "After the Fence Line",
    summary:
      "The rebuild. Coop Three is torn down and raised again to Cindy's Law, " +
      "with the Better Housing money at work: more space, more perches, wide " +
      "vents, and shade. The birds come home to a coop that cannot become a " +
      "fight waiting to happen. One coop down, and many still to go.",
  },
  "the-sweet-beak": {
    title: "The Sweet Beak",
    summary:
      "A schemer in the flock. Ládùn, all honey and quiet doubt, revives the " +
      "Republic's oldest fear, that the grain is going missing, as a whisper " +
      "to unseat honest Musa the Grainkeeper. Kola Quill, who broke the real " +
      "grain scandal, follows the rumour home. A comic downfall, sweetly told.",
  },
  "the-dawn-duel": {
    title: "The Dawn Duel",
    summary:
      "Who owns the dawn? Vice President Baba Ṣẹ́gun has crowed the sun up for " +
      "years, until young Small Fẹ́mi challenges him to beat it. A warm morning " +
      "comedy that ends with two roosters waking the farm, and a reminder that " +
      "waking the coops is not the same as lighting them.",
  },
  "the-sweet-beak-returns": {
    title: "Sweet Beak Strikes Again",
    summary:
      "The schemer overreaches. Cleared but unashamed, Ládùn trades whispers " +
      "for envy and tries to turn coop against coop over the new Cindy's Law " +
      "housing. Then Halima refuses to play politics with it, the grievance " +
      "meeting becomes a Better Housing rally, and Sweet Beak accidentally " +
      "raises money for the very thing she meant to spoil.",
  },
  "the-breakfast-bell": {
    title: "The Breakfast Bell",
    summary:
      "The President's Executive Order No. 1 set breakfast at seven, but a " +
      "clockless farm could never keep it, so Halima Iron Feathers crusades " +
      "to make the order real. The snag is the clock, until the smallest " +
      "voice pegs a bell to the dawn crow. Now Kisi eats on time, and a " +
      "well-fed hen lays a better egg.",
  },
  "chi-chi-first-race": {
    title: "Chi-Chi's First Race",
    summary:
      "The Republic's shy sweetheart lines up for her first real race, " +
      "coached by Flash Adaora and her retired-but-eternal rival Minister " +
      "Quickfoot. Chi-Chi comes second and earns a cheer bigger than the " +
      "winner's, and two old champions cannot resist one more run.",
  },
  "the-elders-bench": {
    title: "The Elders' Bench",
    summary:
      "Mama Gold's Law made real. The flock builds a shaded bench for the " +
      "retired layers by right, the National Grandmother presides ('wages, " +
      "not charity'), and every name is read out and set to song. A thank " +
      "you to the hens who gave the Republic every breakfast it has eaten.",
  },
  "the-second-chair": {
    title: "The Second Chair",
    summary:
      "After the flock cheers her for making the President's breakfast order " +
      "real, Halima Iron Feathers feels the Leader of the Opposition's chair " +
      "grow a size too small. Sweet Beak plants the question, and one dusk by " +
      "the empty first chair, a small new wish begins. Only Kola Quill sees, " +
      "and only he knows how far back these two really go.",
  },
  "the-league-kicks-off": {
    title: "The League Kicks Off",
    summary:
      "A new Coop Premier League season opens with a Túndé Quickfoot speech " +
      "mostly about Túndé, the champion Solar Queens daring everyone to chase " +
      "them, and the smallest debut of all: Chi-Chi's first league race, third " +
      "place, and the loudest cheer on the field.",
  },
  "the-true-count": {
    title: "The True Count",
    summary:
      "Halima Iron Feathers, the Republic's honest auditor, catches a true " +
      "error in the Egg Census that would embarrass the President. Sweet Beak " +
      "whispers her toward an ambush, and for the first time in her life the " +
      "auditor holds a true number back on purpose. She stops short of the " +
      "trap, but her one clean thing, plainness, has quietly bent, and Kola " +
      "Quill feels the fault line take its first real step.",
  },
  "the-kept-number": {
    title: "The Kept Number",
    summary:
      "The record Halima withheld goes public: the President stakes her word " +
      "on it at the gate, then sets a feast to raise it before the whole " +
      "flock. There the auditor neither springs Sweet Beak's ambush nor stays " +
      "silent. She corrects the count and takes the blame for the delay " +
      "herself, shielding the President at the cost of her " +
      "own spotless name. Sweet Beak came for blood and got a confession of " +
      "loyalty, and at the fence the crate-sister crack quiets but does not " +
      "close.",
  },
  "the-reason-i-sleep": {
    title: "The Reason I Sleep",
    summary:
      "Denied her ambush, Sweet Beak tells the President the part Halima hid: " +
      "the lateness was a planned trap. The President laughs it off, but one " +
      "piece is true, and at the fence she asks plainly why her auditor was " +
      "late. Halima cannot say the real answer, so she says nothing of it, and " +
      "the President hears her crate-sister keep something back. The fence goes " +
      "cold. Stung that her sacrifice bought suspicion, Halima's small wish for " +
      "the first chair grows teeth, and Kola Quill watches the crack become a " +
      "fault.",
  },
  "the-first-chair": {
    title: "The First Chair",
    summary:
      "The finale of Halima's long turn. She finally acts on the plan: cold " +
      "and personal, she moves against the President for the first chair " +
      "itself, and the two that could not be split split in front of the whole " +
      "Assembly. That evening the President comes back to the fence, not to " +
      "fight but to say the plain thing, and the reckoning the cold silence " +
      "kept deferring finally happens. Sweet Beak overplays, brags to both " +
      "coops of engineering the rift, and Kola Quill exposes her on the front " +
      "page. At the peak of her power, wounded and vindicated, Halima makes " +
      "her own choice and withdraws the motion, refusing to let a schemer be " +
      "why two crate-sisters could not share a fence. The bond comes back " +
      "tempered, not reset.",
  },
};

export function storyArcs(): StoryArc[] {
  const byArc = new Map<string, TimelineEvent[]>();
  for (const e of revealedTimeline) {
    if (!e.arcId) continue;
    const list = byArc.get(e.arcId) ?? [];
    list.push(e);
    byArc.set(e.arcId, list);
  }
  return [...byArc.entries()].map(([id, events]) => {
    const meta = ARC_META[id];
    if (!meta) throw new Error(`Content integrity: arc ${id} has no ARC_META entry`);
    return { id, ...meta, events };
  });
}

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
  return revealedTimeline.filter((e) => e.chickenIds.includes(chickenId));
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
