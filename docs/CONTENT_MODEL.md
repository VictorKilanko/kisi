# CONTENT_MODEL.md — Structured Content Architecture (Phase 1)

Content lives in-repo (`/content`) as typed TypeScript/JSON records plus MDX
for long-form articles, validated by Zod schemas at build time. Pages are
templates over this data; the owner (with Claude Code's help) edits content,
never components. Schemas below are the planning contract; the Zod versions
are implemented at Phase 2 scaffold.

## Global conventions

- Every record: `id` (stable slug), `createdAt`, `updatedAt`.
- **`isDemo: boolean`** on every record — demo/sample content renders a
  visible "Sample content" badge and is listed in `CONTENT_CHECKLIST.md` for
  replacement. Real facts never enter the repo unverified.
- **`world: "fact" | "fiction" | "mixed"`** on displayable records drives the
  fact/fiction badging system.
- Dates ISO 8601; ages may be `estimated: true`.
- All images: `src`, `alt` (required), `credit?`.

## Core content types

### Chicken
```ts
Chicken {
  id: slug; name: string; nickname?: string;
  isDemo: boolean;
  portrait?: Image; gallery: Image[];
  breed?: string;                 // placeholder until owner confirms breeds
  sex: "hen" | "rooster" | "unknown";
  hatchDate?: date | { estimated: true; approx: string };
  arrivalDate?: date;
  status: "active" | "recovering" | "retired" | "memorial";
  layingStatus?: "not-yet" | "laying" | "break" | "retired" | "n/a";
  officeId?: ref<Position>;       // current government office
  partyId?: ref<Party>;
  personality: string[];          // trait tags for filtering
  bio: markdown;                  // personal history
  favoriteFood?: string;
  friends: ref<Chicken>[]; rivals: ref<Chicken>[];
  family?: { relation: string; chickenId: ref<Chicken> }[];
  socialGroups: ref<SocialGroup>[];
  teamId?: ref<Team>;
  quotes: { text: string; context?: string }[];
  achievements: string[];
  sponsorable: boolean;           // shows support button (Phase 4)
}
```
Derived at build time (never hand-maintained): articles mentioning the
chicken, timeline (from TimelineEvents), egg history (from EggMilestones),
health history (from HealthUpdates).

### TimelineEvent
```ts
TimelineEvent {
  id; chickenIds: ref<Chicken>[]; date; world;
  type: "hatch" | "arrival" | "first-egg" | "egg-milestone" | "appointment"
      | "resignation" | "election" | "health" | "recovery" | "friendship"
      | "rivalry" | "reconciliation" | "sports" | "social" | "retirement"
      | "memorial" | "custom";
  title; body?: markdown; articleId?: ref<Article>;
}
```
Story arcs (friendship, rivalry, campaign, illness-and-recovery, first egg,
retirement, season, controversy, leadership transition) are `TimelineEvent`
sequences sharing an `arcId`, so an arc can be rendered as a serial.

### Government
```ts
Position { id; title; branch: "presidency" | "cabinet" | "assembly"
          | "judiciary" | "agency" | "opposition"; ministryId?; rank: number }
Ministry { id; name; iconId; ministerId: ref<Chicken>; responsibilities: string[];
           announcements: ref<Article>[]; projects: { name; status; blurb }[] }
Party    { id; name; slogan; color; leaderId; isDemo: true /* always fictional */ }
Bill     { id; title; sponsorId; status: "proposed" | "debated" | "passed"
          | "rejected"; summary: markdown; votes?: { for: n; against: n; abstain: n } }
ExecutiveOrder { id; number; title; date; body: markdown }
```
The org chart renders from `Position.rank` + `branch` — no hand-drawn chart
data.

### The Coop Times
```ts
Article {
  id; headline; standfirst?; category: "politics" | "society" | "sports"
    | "egg-economy" | "health" | "culture" | "interview" | "opinion"
    | "investigation" | "farm-announcement";
  world;                       // farm-announcements are "fact"
  publishedAt; authorId: ref<Chicken> | staff;   // chicken journalists!
  hero?: Image; body: MDX;
  relatedChickens: ref<Chicken>[]; relatedMinistries: ref<Ministry>[];
  ogImage?: Image; needsDisclaimer: boolean;
}
```

### Egg life
```ts
EggMilestone { id; chickenId; date; type: "first-egg" | "count-50" | "count-100"
              | "count-custom" | "laying-break" | "return-to-lay" | "retirement";
              count?: number; story?: markdown; isDemo }
EggCensus    { period: "YYYY-MM" | "YYYY-Www"; totalEggs?: number; note?;
              isDemo }   // real numbers only from owner records
HealthUpdate { id; chickenId; date; status: "well" | "under-care" | "recovering"
              | "recovered"; note: markdown /* dignified tone rule applies */ }
```

### Sports & social
```ts
Team   { id; name; emblemId; colors; players: ref<Chicken>[]; sport }
Match  { id; sport; date; homeId; awayId; score?; report?: ref<Article> }
Season { id; sport; year; table: computed }
SocialGroup { id; name; description }
SocialEvent { id; date; title; type: "hatch-day" | "festival" | "club"
             | "ceremony" | "community"; attendees: ref<Chicken>[]; story?: markdown }
```

### Farm (fact side)
```ts
FarmStat   { id; label; value?: string; source?: string; isPlaceholder: boolean }
             // renders "coming soon" until owner supplies value + source
Mascot     { name?; species?; bio?; gallery; isPlaceholder: true /* until owner input */ }
AgricCityProject { id; name; status: "operating" | "in-development" | "proposed";
                   description; zone? }   // status label is mandatory in UI
SupportTier { id; name; amountNGN?; whatItFunds; kind: "one-time" | "recurring"
             | "sponsorship"; legalCopyKey }  // wording gated on legal status
TeamMember { id; name; role; photo?; consentConfirmed: boolean }  // never publish without consent
```

## Directory layout (Phase 2)

```
content/
  chickens/*.ts        ministries/*.ts      parties.ts
  positions.ts         bills/*.ts           orders/*.ts
  articles/*.mdx       eggs/milestones.ts   eggs/census.ts
  health/*.ts          sports/{teams,matches}.ts
  social/{groups,events}.ts  timeline/*.ts
  farm/{stats,team,mascot}.ts agric-city/projects.ts
  support/tiers.ts
messages/en.json       # all UI strings (i18n-ready)
```

## Validation & integrity rules (build-time)

1. All `ref<>` fields must resolve (no orphan relationships).
2. Friendships/rivalries are validated as symmetric.
3. A chicken with `status: "memorial"` cannot be `sponsorable`.
4. `FarmStat` without `source` must have `isPlaceholder: true`.
5. Republic-world records referencing real-world claims fail the build.
6. Every image requires `alt`.
7. `Party` names are checked against a blocklist of real Nigerian party names.

## Localization

UI strings in `/messages/en.json` from day one; content records get optional
`translations?: { yo?: ..., pcm?: ... }` fields later. No machine-translated
content is auto-published (editorial review workflow per brief §11).
