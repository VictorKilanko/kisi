---
description: Read the plan and continue building Kisi from wherever the last session stopped
---

Continue building the Kisi project. Do this in order:

1. **Read `docs/PLAN.md`.** It is the source of truth: what Kisi is, the house rules,
   the phases, and status markers showing what is done (`[x]`), in progress (`[~]`),
   and outstanding (`[ ]`).
2. **Read `docs/LESSONS.md`** for hard-won gotchas — particularly the environment
   notes (Node availability, PowerShell pitfalls) and the standing rules.
3. **Run `git status` and `git log --oneline -5`** to see the actual state of the tree,
   which is the ground truth if it disagrees with the plan.
4. **State briefly** which phase you are resuming and the next 2–3 tasks you intend to
   do, then start work. Do not ask for permission on routine implementation decisions
   already covered by the plan.
5. **As you complete tasks, update the status markers in `docs/PLAN.md`.** That file is
   the handoff to the next session — if it is stale, the next session starts blind.
6. **Before ending the session**, update `docs/PLAN.md` and `docs/LESSONS.md`, then
   commit with a descriptive message.

Key reminders that override default behaviour:

- Kisi is a **working poultry farm**; the Republic is the entertainment brand around
  it and the chickens are the influencers. Never frame the farm as secondary.
- **Stay in the world** — no "fictional"/"sample content" labels anywhere on the site.
- Be honest about money and about verification: never claim tests or builds passed
  without running them. Node may not be installed locally; CI is the real gate.
- Work on `feature/kisi-poultry-republic`, never commit directly to `main`.
- Never commit secrets, tokens, or the private local machine path.

If the user passed arguments after the command, treat them as the specific focus for
this session and prioritise them over the plan's default ordering: $ARGUMENTS
