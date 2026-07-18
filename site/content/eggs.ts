import type { EggMilestone } from "@/lib/schemas";

/**
 * Egg milestones recorded at Kisi.
 * Real milestones will come from Kisi Farm's actual laying records once the
 * owner approves what may be published. Hens are never presented as
 * machines: milestones celebrate lives, and laying breaks and retirement
 * are honored as much as counts.
 */
export const eggMilestones: EggMilestone[] = [
  {
    id: "chi-chi-first",
    chickenId: "chi-chi",
    date: "2026-06-02",
    type: "first-egg",
    story:
      "The Republic's most-awaited first egg. Certified within the hour, " +
      "celebrated with a retroactive public holiday, answered with four " +
      "words: 'I did my best.'",
  },
  {
    id: "mama-gold-400",
    chickenId: "mama-gold",
    date: "2026-03-15",
    type: "count",
    count: 400,
    story:
      "Four hundred recorded eggs across a long and unhurried career. " +
      "National ceremony; her review: 'The first one was harder.'",
  },
  {
    id: "mama-gold-break",
    chickenId: "mama-gold",
    date: "2026-04-30",
    type: "laying-break",
    story:
      "A well-earned laying break, announced from the mango tree. 'I am " +
      "not retiring. I am delegating.' The Republic approves; the trough " +
      "queue still parts for her.",
  },
  {
    id: "adedoyin-census",
    chickenId: "adedoyin-mama-decree",
    date: "2026-05-20",
    type: "count",
    count: 180,
    story:
      "The President's running total, published in the Census by her own " +
      "insistence: 'The Republic has no royal eggs.' Audited, at her " +
      "request, by the opposition.",
  },
  {
    id: "quiet-grace-return",
    chickenId: "quiet-grace",
    date: "2026-02-10",
    type: "return-to-lay",
    story:
      "After her long recovery seasons ago, every egg from Grace is " +
      "quietly recorded and loudly cherished. Dr. Featherwell's case file " +
      "note reads, in full: 'See? Welfare first.'",
  },
  {
    id: "halima-recount",
    chickenId: "halima-iron-feathers",
    date: "2026-06-30",
    type: "count",
    count: 210,
    story:
      "Two hundred and ten eggs, counted — obviously — twice. The only " +
      "citizen who files her own returns in duplicate.",
  },
];

/** National Egg Census — monthly recorded totals. */
export const eggCensus: {
  period: string;
  label: string;
  total: number;
  note: string;
}[] = [
  {
    period: "2026-04",
    label: "April 2026",
    total: 262,
    note: "Recount demanded by the NGA; totals confirmed. 'Suspicious,' said the opposition.",
  },
  {
    period: "2026-05",
    label: "May 2026",
    total: 278,
    note: "Includes the fully audited presidential contribution.",
  },
  {
    period: "2026-06",
    label: "June 2026",
    total: 291,
    note: "Chi-Chi's first egg counted with ceremony; the Bureau added a small star to the ledger, against regulations, unanimously.",
  },
];
