# KIDS_PLAN.md — the Kisi Kids runbook

**Point a session at this folder and say "continue" to build the next Kisi Kids thing.**
Start at the **▶ RESUME HERE** marker at the bottom; it always names what to build next.

Kisi Kids (kids.kisi.africa) is the children's brand of the Kisi universe. Two chicken hosts,
**Dede** (the warm uncle-guide) and **Zizi** (his fun, curious young niece), teach children about
**African history, fables and folktales, songs, languages, and African heroes and leaders.**

Long-term it is **video-first** (Blippi/Cocomelon: animated YouTube videos watched on repeat).
The videos are not in production yet (tools pending), so we are **building the website first** and
writing the **video plans in parallel**, keeping the two aligned: same characters, same pillars,
same look, so a story on the site becomes a video script later.

## The two hard rules (never break)
1. **Accuracy.** Everything taught is **real**: history, heroes, languages, and traditional stories
   must be factual, sourced, age-appropriate, and respectful. Dede and Zizi are the fictional
   hosts; the learning is real. Never invent a fact, misdate an event, or misattribute a hero.
   Note each fable/song's origin. Teach language accurately. Keep hero choices non-partisan.
2. **Child safety.** No data collection on children, no ads, no dark patterns, reduced-motion
   respected, no autoplay-with-sound. A parents' area stays separate. Future YouTube videos are
   marked **"Made for Kids"** (COPPA): no personalized ads, no comments.

## The five content pillars
See `curriculum/` for each: `history.md`, `fables.md`, `songs.md`, `languages.md`, `heroes.md`.
Every piece works as **both** a website page and a future video (one script, two outputs).

## Where things live
- **Characters + tone:** `BIBLE.md` (Dede + Zizi, voices, look, the model sheet + locked voices).
- **Video production:** `PIPELINE.md` (the AI pipeline for when tools are ready).
- **Scripts:** `scripts/` (episode scripts; `TEMPLATE.md` is the format).
- **Curriculum outlines:** `curriculum/`.
- **Art + audio drops:** `assets/` (real Dede/Zizi art and song audio land here; see its README).
- **The website:** `apps/kids/` (routes + `apps/kids/content/*.ts` typed content model).
- **The cast:** `packages/canon` (Zizi is `id: "zizi"`, Dede is the `mascot` in `data/farm.ts`).

## Consistency (site <-> video)
- Characters come from `@kisi/canon` + `@kisi/ui` (deterministic portraits), so Dede/Zizi/birds
  look the same on the site and seed the video reference art.
- A site story/hero entry names its matching `scripts/` file; keep them in sync.
- Visual identity: one **model sheet** (see BIBLE.md / assets), one **locked voice** per character.

## Roadmap
1. **[this round]** Kid-friendly website: home + stories/heroes/words/songs/printables, one strong
   seed each, typed content model, consistent SVG illustrations. Zizi in canon. This folder.
2. Grow content per pillar; add real song audio; add a first script to `scripts/`.
3. When video tools are ready: produce episode 1 from a site story via `PIPELINE.md`; embed it on
   the site (`youtube-nocookie`), organized by pillar.
4. Commissioned/AI reference art for Dede + Zizi into `assets/`, swapped into the site.
5. Parents' area; printables library; more languages.

## ▶ RESUME HERE
**2026-08-21 — foundation + first website build.** Building the kid-friendly Kisi Kids website
(home + stories, heroes, words, songs, printables with one seed each), Zizi added to canon, this
folder created. **Next:** add a second story + hero, write the first episode `scripts/` file from the
seed story, and (when audio is available) real song audio. Keep the two hard rules; reuse
`@kisi/ui` for characters; keep site and scripts aligned.
