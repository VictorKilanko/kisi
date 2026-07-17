import type { Party } from "@/lib/schemas";

/**
 * SAMPLE CONTENT — entirely fictional political parties of the Republic of
 * Kisi. Invented for satire; they do not reference, resemble, or borrow the
 * names, logos, colors, or slogans of any real Nigerian political party.
 */
export const parties: Party[] = [
  {
    id: "ppp",
    name: "Progressive Peckers Party",
    abbr: "PPP",
    slogan: "Forward with Feed!",
    color: "#1f5130",
    leaderId: "adedoyin-mama-decree",
    description:
      "The governing party. Broad, confident, and fond of commissioning " +
      "things — nesting boxes, water troughs, committees. Its manifesto, " +
      "'The Agenda for Renewed Pecking,' runs to forty-one pages, of which " +
      "the section on breakfast punctuality is by far the most quoted.",
    isDemo: true,
  },
  {
    id: "nga",
    name: "New Grain Alliance",
    abbr: "NGA",
    slogan: "Count Every Egg. Twice.",
    color: "#23305e",
    leaderId: "halima-iron-feathers",
    description:
      "The main opposition. Forensic, tireless, allergic to round numbers. " +
      "The NGA has demanded an independent recount of the National Egg " +
      "Census every month since records began, and has been right to at " +
      "least once.",
    isDemo: true,
  },
  {
    id: "fff",
    name: "Free Feathers Front",
    abbr: "FFF",
    slogan: "Perches for All!",
    color: "#c05621",
    description:
      "Small, idealistic, and decisive out of all proportion to its size — " +
      "the FFF holds the balance of votes on the Nesting Box Expansion " +
      "Bill and knows it. Party meetings are held under the mango tree and " +
      "open with one minute of contented scratching.",
    isDemo: true,
  },
];
