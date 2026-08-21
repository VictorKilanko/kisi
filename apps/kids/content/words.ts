/**
 * Kisi Kids "word of the day": REAL African words and greetings, taught
 * accurately (spelling, meaning, pronunciation, language noted). Start with
 * high-confidence Yoruba and Swahili words. When unsure, leave it out.
 */
export interface KidWord {
  word: string;
  language: "Yoruba" | "Swahili";
  meaning: string;
  /** Simple "say it like ..." guide. */
  say: string;
  use: string;
  emoji: string;
}

export const words: KidWord[] = [
  {
    word: "Ẹ káàárọ̀",
    language: "Yoruba",
    meaning: "Good morning",
    say: "eh KAA-ah-raw",
    use: "Say it to greet someone in the morning.",
    emoji: "🌅",
  },
  {
    word: "Jambo",
    language: "Swahili",
    meaning: "Hello",
    say: "JAM-bo",
    use: "Say hello to a friend.",
    emoji: "👋",
  },
  {
    word: "Ẹ ṣé",
    language: "Yoruba",
    meaning: "Thank you",
    say: "eh SHEH",
    use: "Say it when someone helps you.",
    emoji: "🧡",
  },
  {
    word: "Asante",
    language: "Swahili",
    meaning: "Thank you",
    say: "ah-SAHN-teh",
    use: "Say thank you, the Swahili way.",
    emoji: "🙏",
  },
];
