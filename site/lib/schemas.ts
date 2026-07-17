import { z } from "zod";

/**
 * Content schemas — the typed contract from docs/CONTENT_MODEL.md.
 * All demo/sample records carry `isDemo: true` and render a visible
 * "Sample content" badge until the owner supplies real flock data.
 * Validation runs at module load in lib/content.ts, so invalid content
 * fails the build — never the visitor.
 */

export const World = z.enum(["fact", "fiction", "mixed"]);
export type World = z.infer<typeof World>;

export const ChickenStatus = z.enum([
  "active",
  "recovering",
  "retired",
  "memorial",
]);
export type ChickenStatus = z.infer<typeof ChickenStatus>;

export const LayingStatus = z.enum([
  "not-yet",
  "laying",
  "break",
  "retired",
  "n-a",
]);

export const Branch = z.enum([
  "presidency",
  "cabinet",
  "assembly",
  "judiciary",
  "opposition",
  "agency",
  "press",
  "none",
]);

export const PartySchema = z.object({
  id: z.string(),
  name: z.string(),
  abbr: z.string(),
  slogan: z.string(),
  color: z.string(),
  leaderId: z.string().optional(),
  description: z.string(),
  isDemo: z.literal(true),
});
export type Party = z.infer<typeof PartySchema>;

export const MinistrySchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  ministerId: z.string().nullable(),
  actingNote: z.string().optional(),
  motto: z.string(),
  responsibilities: z.array(z.string()),
  projects: z.array(
    z.object({
      name: z.string(),
      status: z.enum(["announced", "ongoing", "completed", "stalled"]),
      blurb: z.string(),
    }),
  ),
  isDemo: z.literal(true),
});
export type Ministry = z.infer<typeof MinistrySchema>;

export const QuoteSchema = z.object({
  text: z.string(),
  context: z.string().optional(),
});

export const PortraitColors = z.object({
  body: z.string(),
  comb: z.string(),
  accent: z.string(),
  bg: z.string(),
});

export const ChickenSchema = z.object({
  id: z.string(),
  name: z.string(),
  fullName: z.string().optional(),
  nickname: z.string().optional(),
  honorific: z.string().optional(),
  /** Yoruba-style praise line with English translation, where fitting. */
  oriki: z.object({ line: z.string(), meaning: z.string() }).optional(),
  sex: z.enum(["hen", "rooster"]),
  breed: z.string(),
  ageNote: z.string(),
  status: ChickenStatus,
  layingStatus: LayingStatus,
  roleTitle: z.string().optional(),
  branch: Branch,
  ministryId: z.string().optional(),
  partyId: z.string().optional(),
  teamId: z.string().optional(),
  personality: z.array(z.string()).min(2),
  favoriteFood: z.string().optional(),
  shortBio: z.string(),
  bio: z.array(z.string()).min(2),
  friends: z.array(z.string()),
  rivals: z.array(z.string()),
  family: z
    .array(z.object({ relation: z.string(), note: z.string() }))
    .optional(),
  quotes: z.array(QuoteSchema),
  achievements: z.array(z.string()),
  colors: PortraitColors,
  sponsorable: z.boolean(),
  isDemo: z.literal(true),
});
export type Chicken = z.infer<typeof ChickenSchema>;

export const ArticleCategory = z.enum([
  "politics",
  "society",
  "sports",
  "egg-economy",
  "health",
  "culture",
  "interview",
  "opinion",
  "investigation",
  "farm-announcement",
]);
export type ArticleCategory = z.infer<typeof ArticleCategory>;

export const ArticleSchema = z.object({
  id: z.string(),
  headline: z.string(),
  standfirst: z.string(),
  category: ArticleCategory,
  world: World,
  publishedAt: z.string(),
  author: z.object({ name: z.string(), title: z.string() }),
  body: z.array(z.string()).min(2),
  relatedChickenIds: z.array(z.string()),
  relatedMinistryIds: z.array(z.string()),
  isDemo: z.literal(true),
});
export type Article = z.infer<typeof ArticleSchema>;

export const BillSchema = z.object({
  id: z.string(),
  title: z.string(),
  sponsorId: z.string(),
  status: z.enum(["proposed", "in-debate", "passed", "rejected"]),
  summary: z.string(),
  votes: z
    .object({ ayes: z.number(), nays: z.number(), abstentions: z.number() })
    .optional(),
  isDemo: z.literal(true),
});
export type Bill = z.infer<typeof BillSchema>;

export const ExecutiveOrderSchema = z.object({
  number: z.number(),
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  isDemo: z.literal(true),
});
export type ExecutiveOrder = z.infer<typeof ExecutiveOrderSchema>;

export const EggMilestoneSchema = z.object({
  id: z.string(),
  chickenId: z.string(),
  date: z.string(),
  type: z.enum([
    "first-egg",
    "count",
    "laying-break",
    "return-to-lay",
    "retirement",
  ]),
  count: z.number().optional(),
  story: z.string(),
  isDemo: z.literal(true),
});
export type EggMilestone = z.infer<typeof EggMilestoneSchema>;

export const TimelineEventSchema = z.object({
  id: z.string(),
  chickenIds: z.array(z.string()).min(1),
  date: z.string(),
  arcId: z.string().optional(),
  world: World,
  type: z.enum([
    "hatch",
    "arrival",
    "first-egg",
    "egg-milestone",
    "appointment",
    "election",
    "health",
    "recovery",
    "friendship",
    "rivalry",
    "reconciliation",
    "sports",
    "social",
    "retirement",
    "controversy",
    "custom",
  ]),
  title: z.string(),
  body: z.string(),
  articleId: z.string().optional(),
  isDemo: z.literal(true),
});
export type TimelineEvent = z.infer<typeof TimelineEventSchema>;

export const TeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  home: z.string(),
  motto: z.string(),
  color: z.string(),
  isDemo: z.literal(true),
});
export type Team = z.infer<typeof TeamSchema>;

export const MatchSchema = z.object({
  id: z.string(),
  sport: z.string(),
  date: z.string(),
  homeId: z.string(),
  awayId: z.string(),
  homeScore: z.number().optional(),
  awayScore: z.number().optional(),
  note: z.string().optional(),
  isDemo: z.literal(true),
});
export type Match = z.infer<typeof MatchSchema>;

export const SocialEventSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  type: z.enum([
    "hatch-day",
    "festival",
    "club",
    "ceremony",
    "storytelling",
    "community",
  ]),
  description: z.string(),
  attendeeIds: z.array(z.string()),
  isDemo: z.literal(true),
});
export type SocialEvent = z.infer<typeof SocialEventSchema>;

/** Real-farm figure. Renders "awaiting farm records" until value + source exist. */
export const FarmStatSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    value: z.string().nullable(),
    source: z.string().optional(),
    isPlaceholder: z.boolean(),
  })
  .refine((s) => s.isPlaceholder || (s.value !== null && !!s.source), {
    message: "A non-placeholder FarmStat needs both a value and a source.",
  });
export type FarmStat = z.infer<typeof FarmStatSchema>;

export const AgricCityStatus = z.enum([
  "operating",
  "in-development",
  "proposed",
]);
export type AgricCityStatus = z.infer<typeof AgricCityStatus>;

export const AgricCityProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: AgricCityStatus,
  description: z.string(),
});
export type AgricCityProject = z.infer<typeof AgricCityProjectSchema>;
