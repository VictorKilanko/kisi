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
  "the-longest-night": {
    title: "The Longest Night",
    summary:
      "A warm dry-season story with no villain. The pre-rain haze starves the " +
      "solar panels, and Amina Daybreak's charts warn that the coop lights " +
      "will fail hours before dawn on the longest night of the year. Rather " +
      "than fear the dark, the flock holds the night together: Amina rations " +
      "the last charge to the youngest coops, Vice President Baba Ṣẹ́gun crows " +
      "the watches, and young Small Fẹ́mi, the Drain survivor who wants to be a " +
      "coop guard, walks the fence at last where everyone is glad to see him. " +
      "Nothing comes out of the dark; that is the point. At dawn Amina makes " +
      "the honest case for more panels, so no bird ever has to be brave in the " +
      "dark again.",
  },
  "market-day": {
    title: "Market Day",
    summary:
      "The funnel made literal, and a proud plain day after a hard season. " +
      "The first big crates of eggs leave Kisi for real buyers in town, and " +
      "the working hens watch their morning's work go out into the world. " +
      "Mama Gold presides over the loading and reminds the young hens that a " +
      "market only comes back to a farm that counts true and does not lie to " +
      "it. Chi-Chi's eggs join a market crate for the first time. The " +
      "President sees the crates off with no decree, only a plain word, and " +
      "Kola Quill prints the gentlest headline of his year: the eggs are good.",
  },
  "the-scoop-that-wasnt": {
    title: "The Scoop That Wasn't",
    summary:
      "Sweet Beak's next target, and revenge for the front page that caught " +
      "her. Unable to out-argue Kola Quill, she sets out to destroy his " +
      "credibility instead: she forges a leaked memo claiming the Feather Gala " +
      "budget was spent on gold perches for the cabinet, and plants it where " +
      "the newsman will find it, betting he prints it and is ruined when it " +
      "proves false. But Kola does the plain, unglamorous thing that made him " +
      "and checks. The fake comes apart against the real ledger, in a hand he " +
      "knows, and instead of the scandal she wrote he prints the true story: " +
      "how someone tried to turn the paper into a weapon, and how the paper " +
      "checked and refused. Her plot to break his credibility makes it " +
      "unbreakable, and she slips off eyeing her next target.",
  },
  "the-quiet-round": {
    title: "The Quiet Round",
    summary:
      "The Republic's calmest ministry finally gets its story. Dr. Amara " +
      "Featherwell's success is invisible by design: nothing goes wrong, so " +
      "the flock jokes the Calm One has the easiest job in Kisi, forgetting " +
      "that the reason nothing goes wrong is the plain dawn round she walks " +
      "before it can. This week a new hen arrives thin and silent, standing " +
      "apart, the way another frail rescue once did, but before the minister " +
      "can reach her someone is already there. Quiet Grace, the case file " +
      "nobody expected to thrive, has grown into the ministry's first " +
      "responder, opening a corner of her wing for every frightened new " +
      "arrival. The rescued has become the rescuer, and 'welfare first, and " +
      "the rest follows' stands up and walks.",
  },
  "the-wind-final": {
    title: "The Wind Final",
    summary:
      "The Coop Premier League final, and the champion's first real test in " +
      "defeat. Flash Adaora's unbeaten Solar Queens meet Harmattan FC, the " +
      "side whose answer to every loss all season has been the wind, on the " +
      "fiercest harmattan in living memory. When the ball will not sit still, " +
      "raw speed is useless: the harder Flash sprints the more the wind " +
      "laughs. Harmattan finally stop blaming the wind and play with it, " +
      "arriving with it the way their motto always promised, and take their " +
      "first title. Flash, gracious in victory but never once tested in " +
      "defeat, has to learn the hardest thing she knows: to lose well. " +
      "Minister Quickfoot, who lost his own record to her and learned to " +
      "clap, walks her off, and the Republic learns to play the day it is " +
      "given, not the day it wanted.",
  },
  "the-settler-of-perches": {
    title: "The Settler of Perches",
    summary:
      "The annual Best Perch dispute comes back to the Supreme Pecking " +
      "Council, and this year the shade is crowded, because everyone " +
      "remembers the season the perch quarrel went too far. Two hens claim " +
      "the one high rail with the evening sun, and both are right. Chief " +
      "Justice Yèyé Àlàbá, who has settled this case every year in proverbs " +
      "by a formula she has never disclosed, does not hurry: she feeds the " +
      "court first, then rules the old rail on rotation as ever, but leans " +
      "this year on what has changed. Since Cindy's Law rebuilt the coop " +
      "with many good perches, a bird turned off one has a fine one to go " +
      "to, so the quarrel is smaller than it used to be. 'A perch you must " +
      "fight for is a perch there are too few of.' The Republic that once " +
      "lost a bird to a crowded roost now settles the same dispute with a " +
      "proverb and a spare rail, which is what Better Housing really buys: " +
      "peace, fewer fights, and room to roost.",
  },
  "the-far-sides-first-watch": {
    title: "The Far Side's First Watch",
    summary:
      "Young Small Fẹ́mi, the Drain survivor who went back for the chick that " +
      "froze, wants to be a coop guard, and Sergeant Danladi keeps telling " +
      "him to finish growing first. But Danladi, who does the dusk whistle " +
      "every night and has never missed one, has noticed the boy walking the " +
      "fence alone every Saturday, and one evening he lets him onto the " +
      "second shift on trial. The job is not about size, it is about who " +
      "comes back for the one who froze, who counts the flock by name, and " +
      "who gives a true answer over a kind one. When a noise comes out of " +
      "the dark past the barred drain, Small Fẹ́mi does not panic and does " +
      "not hide it: he looks, and reports it exactly, a branch on the wire, " +
      "the drain still barred, all present. Danladi makes him a probationary " +
      "watcher and hands him the dusk whistle for one night. Two guards walk " +
      "the fence now, one old and one still growing, both birds who once " +
      "came back for someone.",
  },
  "the-new-verse": {
    title: "The New Verse",
    summary:
      "So much has happened to the Republic lately, a coop rebuilt to " +
      "Cindy's Law, the first crates gone to market, a fence walked by two " +
      "guards, that Sadé the Griot decides the Kisi Songbook needs a new " +
      "verse, and calls the flock to the mango tree to write it together. " +
      "The trouble, as ever, is tempo: Vice President Baba Ṣẹ́gun wants it " +
      "slow and grand on his dawn note, the young want it fast, the elders " +
      "want it slow enough to remember, and the two old friends argue about " +
      "it fondly and forever. Then the griot does what only a griot can: " +
      "instead of choosing a tempo she writes one that moves, opening on " +
      "Baba's dawn note, quickening for the young, easing for the elders, so " +
      "everyone is in it and no one has to lose to be there. The whole flock " +
      "sings it together at dusk, and for the length of one song the Republic " +
      "agrees on something. What the verse is about is the plainest thing of " +
      "all: the working hens who rise every morning and lay.",
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
