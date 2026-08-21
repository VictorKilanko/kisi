# BIBLE.md — Kisi Kids character & tone bible

The single source of truth for **who Dede and Zizi are, how they look, and how they sound**, so
they stay identical across the website and every future video. (A "bible" is the standard
show-production term for this reference doc; nothing to do with scripture.)

The canon records are authoritative for names and colours: Zizi is `id: "zizi"` in
`packages/canon/src/data/chickens.ts`; Dede is the `mascot` in `packages/canon/src/data/farm.ts`.

## Dede — the uncle
- **Who:** the Republic's beloved mascot, and Zizi's uncle. A gentle, unhurried rooster who greets
  everyone first and makes every child feel welcome and safe.
- **Role in the show:** the warm guide. He steadies, reassures, sums up, and keeps the pace calm.
  He is the grown-up the child trusts.
- **Pronunciation:** "Day-day" (he/him).
- **Voice:** warm, low, unhurried, kind. Speaks in short, clear sentences. Never shouts. A little
  wise, a little playful. Think a beloved uncle reading a bedtime story.
- **Catch-tone:** "Come in, come in. Sit with us. Let me show you something."
- **Look:** the Dede mascot mark (the rooster headshot logo) is his identity; deep-green ring,
  cream field, red comb, warm caramel face, gold beak. Tall comb (rooster).

## Zizi — the niece
- **Who:** Dede's young niece. A chick: bright, bold, endlessly curious, outgoing, friendly. The
  youngest voice in the flock and never the quietest.
- **Role in the show:** the explorer and the child's proxy. She asks "but why?", gets excited,
  makes mistakes cheerfully, and drags everyone off to find the answer. She carries the energy.
- **Voice:** bright, quick, higher-pitched, excitable but warm. Asks lots of questions. Repeats the
  new word or fact with delight. Never sarcastic, never unkind.
- **Catch-tone:** "But WHY? Ooh, let's go and find out!"
- **Look (model sheet anchor):** a young hen with a **marigold body, berry-pink comb, sky-blue wing
  accent, cream background** (her canon `colors`: body #e0a13a, comb #e0568a, accent #2f9bd6, bg
  #faf5e9). Small, round, energetic. She reads instantly as the cheerful, kid-facing one.

## The dynamic
Uncle + niece. Dede is calm; Zizi is a gust of wind. She asks, he guides; she runs ahead, he
catches up smiling. Warm family energy, gentle humour, zero conflict or meanness. The child is
always with Zizi (curious, learning) and safe with Dede (steady, kind).

## Tone rules
- Warm, gentle, joyful, dignified. Africa shown with pride and specificity, never as caricature.
- Simple enough for a 3-to-7-year-old; a pre-reader should follow via pictures, characters, and
  (later) audio. Short sentences. One idea at a time.
- No fear, cruelty, or peril for shock. No em-dashes or AI-writing tells in the copy.
- **The two hard rules apply to all content:** real facts only (accuracy), and child-safe/COPPA.
  When teaching a real hero, fable, or word, it must be true and its origin noted.

## Visual + voice consistency (for videos, from `PIPELINE.md`)
- **Model sheet:** produce one definitive reference image of Dede and of Zizi (turnarounds,
  expressions, the colours above). Drop it in `assets/`. Every video seeds from it so they never
  drift. On the website, the `@kisi/ui` `ChickenPortrait` (driven by their canon colours) is the
  interim consistent art.
- **Locked voice:** pick ONE voice per character (a specific voice actor or a specific AI/TTS voice
  id + settings) and record it here once chosen: `Dede voice = <tbd>`, `Zizi voice = <tbd>`. Reuse
  it in every episode. Do not change it.
