/**
 * The Republic's most wanted.
 *
 * The monitor lizard entered through the drainage channel on the night of
 * 9 July and killed Bantu, night watchman of Coop Two. The Ministry of
 * Security has posted a standing bounty for information leading to its
 * capture. It has not been seen since 14 July.
 */

export interface WantedNotice {
  id: string;
  name: string;
  alias: string;
  species: string;
  charge: string;
  lastSeen: string;
  lastSeenDate: string;
  description: string[];
  identifyingMarks: string[];
  bounty: string;
  bountyNote: string;
  issuedBy: string;
  approach: string;
}

export const monitorLizard: WantedNotice = {
  id: "the-drain",
  name: "UNIDENTIFIED MONITOR LIZARD",
  alias: "The Drain",
  species: "Monitor lizard (Varanus)",
  charge:
    "The killing of Bantu, Night Watchman of Coop Two, and repeated armed " +
    "incursion into the territory of the Republic.",
  lastSeen: "Drainage channel, east fence line, moving toward the treeline",
  lastSeenDate: "2026-07-14",
  description: [
    "Long-bodied, low to the ground, and faster than it looks. Moves along " +
      "the drainage line where the ground is soft and the noise is covered " +
      "by running water.",
    "Hunts at night and in the hour before dawn. Has entered the farm at " +
      "least four times. On three of those occasions it was driven off. On " +
      "the fourth, it was not.",
    "It is patient. Sergeant Danladi's report notes that it waited out two " +
      "full patrol passes before moving. The Ministry has stopped calling " +
      "this an animal problem and started calling it what it is.",
  ],
  identifyingMarks: [
    "Pale forked tongue, tested constantly on the air",
    "Dark banding across the back, lighter yellow spotting along the flank",
    "Notch in the tail, roughly a third of the way down",
    "Leaves a dragging track between clawmarks in soft ground",
  ],
  bounty: "500,000 grains",
  bountyNote:
    "Paid from the National Feed Budget by order of the Assembly, to any " +
    "citizen or visitor whose information leads to its capture. The vote " +
    "was unanimous. The Leader of the Opposition seconded it herself.",
  issuedBy: "Ministry of Security · Office of the Minister, Pete Okpara",
  approach:
    "DO NOT APPROACH IT. Raise the alarm call, get the chicks inside, and " +
    "find a guard. No citizen is to confront it alone — this is a standing " +
    "order of the Ministry and the Minister has said he will enforce it " +
    "personally.",
};
