/**
 * Kisi Kids printables: print-friendly / downloadable sheets. Rendered as SVG
 * line art by PrintableSheet so a child can print and colour (browser Print ->
 * a clean sheet). Real high-res art can replace these later (kisikids/assets).
 */
export interface KidPrintable {
  slug: string;
  title: string;
  kind: "colouring" | "activity";
  /** Shown on the card. */
  description: string;
  /** Printed on the sheet as the child's instruction. */
  instruction: string;
}

export const printables: KidPrintable[] = [
  {
    slug: "colour-in-zizi",
    title: "Colour in Zizi",
    kind: "colouring",
    description: "Print Zizi and give her all the colours you like.",
    instruction: "Colour Zizi any way you like. She loves bright colours!",
  },
  {
    slug: "count-the-eggs",
    title: "Count the Eggs",
    kind: "activity",
    description: "Count the eggs, then colour them in. One to five!",
    instruction: "Count the eggs out loud, write the number, then colour them in.",
  },
];

export const getPrintable = (slug: string) =>
  printables.find((p) => p.slug === slug);
