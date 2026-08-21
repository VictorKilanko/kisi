/**
 * Kisi Kids stories: illustrated read-along "books" (fables + history), told by
 * Dede and Zizi. Traditional tales are retold, with their origin noted (never
 * claimed as ours). Each story doubles as a future video script (see
 * kisikids/scripts). Illustrations are scene keys rendered by KidScene.
 */
export type SceneKey =
  | "tortoise"
  | "birds-feast"
  | "sky-fall"
  | "mended-shell"
  | "tree"
  | "sunrise";

export interface StoryPage {
  scene: SceneKey;
  text: string;
}

export interface KidStory {
  slug: string;
  title: string;
  pillar: "fables" | "history";
  /** Real origin of the tale; shown to families. Required for traditional tales. */
  origin: string;
  lesson: string;
  /** A one-line intro in Zizi's voice for the story card. */
  intro: string;
  pages: StoryPage[];
}

export const stories: KidStory[] = [
  {
    slug: "why-the-tortoise-has-a-cracked-shell",
    title: "Why the Tortoise Has a Cracked Shell",
    pillar: "fables",
    origin:
      "A traditional West African folktale, told for generations across Igbo, " +
      "Yoruba, and other cultures, about Ìjàpá the tortoise. Retold here for Kisi Kids.",
    lesson: "Share with your friends, and listen when they help you.",
    intro: "Ooh, this one is about a clever, greedy tortoise. Ask Uncle Dede!",
    pages: [
      {
        scene: "tortoise",
        text: "Long ago, Tortoise was clever, but oh, he was greedy. When food was short, he still wanted the most.",
      },
      {
        scene: "birds-feast",
        text: "One day the birds were invited to a great feast up in the sky. 'Take me too!' said Tortoise. So each bird lent him one feather, and he flew up with them.",
      },
      {
        scene: "birds-feast",
        text: "At the feast, Tortoise told the sky people his name was 'All of You'. So when the food came and they said 'This is for all of you', Tortoise ate it ALL. The birds got none.",
      },
      {
        scene: "sky-fall",
        text: "The birds were cross. One by one they took their feathers back. Now Tortoise could not fly home. 'Tell my wife to lay out something soft!' he called down.",
      },
      {
        scene: "sky-fall",
        text: "But a bird carried the wrong message. Tortoise's wife laid out all the hard things instead. Tortoise fell, and his smooth shell cracked into many pieces.",
      },
      {
        scene: "mended-shell",
        text: "Kind hands glued his shell back, patch by patch. That is why, to this day, the tortoise's shell has many little lines. Share, said the birds. And listen. Tortoise never forgot again.",
      },
    ],
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
