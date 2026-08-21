# PIPELINE.md — the AI video production runbook (for when tools are ready)

Videos are the long-term heart of Kisi Kids, produced with **AI tools** (fast, low-cost). Tools
are not in hand yet, so this is the plan to follow when they are. The website is built first and
shares characters/stories with the videos so the two stay aligned.

## The pipeline
1. **Script** — from a site story/hero/word/song (one script, `scripts/`, using `TEMPLATE.md`).
   Dede + Zizi in voice (see BIBLE.md); one real teaching beat; a recap or song; a gentle "watch
   again / find us at kids.kisi.africa".
2. **Voice** — the **locked AI voice per character** (a specific TTS/voice id + settings recorded
   in BIBLE.md). Same voice every episode. Warm delivery; leave room for a child to answer Zizi.
3. **Visuals** — seed the AI video/image tool from the **model sheet** reference art in `assets/`
   (a fixed character reference), so Dede and Zizi look identical across shots. Prefer tools that
   support a locked character reference / consistent-character workflow.
4. **Edit** — assemble, add the fixed intro/outro, music/SFX palette. Keep pacing calm.
5. **Publish to YouTube** — mark **"Made for Kids"** (COPPA): this disables comments and
   personalized ads by design; that is intended. Then embed on the site (`youtube-nocookie`),
   filed under its pillar.

## Consistency checklist (every episode)
- [ ] Characters seeded from the same model-sheet reference (no drift in colour/shape).
- [ ] Dede's voice = the locked voice; Zizi's voice = the locked voice (unchanged).
- [ ] Same intro/outro, same music/SFX palette.
- [ ] Facts are real and sourced (accuracy rule); a fable/song's origin is stated.
- [ ] Marked "Made for Kids"; no autoplay-with-sound anywhere it embeds.
- [ ] The matching site story/hero/word/song entry links to the video; both stay in sync.

## When these exist, record them here
- Dede AI voice: `<tool + voice id + settings>` — tbd
- Zizi AI voice: `<tool + voice id + settings>` — tbd
- Video tool + character-reference workflow: `<tool>` — tbd
- Model-sheet reference files: `assets/model-sheet-dede.*`, `assets/model-sheet-zizi.*` — tbd
