import type { Ministry } from "@/lib/schemas";

/**
 * the fictional cabinet ministries of the Republic of Kisi.
 * The satire is affectionate: the paperwork is Nigerian-bureaucracy-shaped
 * (circulars, white papers, things happening "with immediate effect"), but
 * no real office, agency, or official is referenced or imitated.
 */
export const ministries: Ministry[] = [
  {
    id: "egg-affairs",
    name: "Ministry of Egg Affairs",
    shortName: "Egg Affairs",
    ministerId: "bright-feather",
    motto: "One Nation, One Shell",
    responsibilities: [
      "Custodian of the National Egg Census",
      "Certification of first eggs and landmark counts",
      "Egg-handling standards from nest to collection tray",
      "Annual State of the Shell address",
    ],
    projects: [
      {
        name: "Operation Gentle Hands",
        status: "ongoing",
        blurb:
          "A retraining programme on respectful egg collection, launched after " +
          "the Assembly ruled that eggs 'are laid, not seized.'",
      },
      {
        name: "The Egg Registry Digitisation Committee",
        status: "stalled",
        blurb:
          "Announced with fanfare; currently awaiting the report of the " +
          "sub-committee set up to review the committee's terms of reference.",
      },
    ],
  },
  {
    id: "feed-agriculture",
    name: "Ministry of Feed and Agriculture",
    shortName: "Feed & Agriculture",
    ministerId: null,
    actingNote:
      "Portfolio held in acting capacity by the Presidency since the last " +
      "reshuffle. A substantive appointment is expected 'very soon,' and has " +
      "been for some time.",
    motto: "By Grain We Stand",
    responsibilities: [
      "The National Feed Budget and its many defenders",
      "Grain quality, storage, and the war on damp",
      "Kitchen-scrap diplomacy with the farmhouse",
      "Seasonal forage planning",
    ],
    projects: [
      {
        name: "National Feed Budget (Current Cycle)",
        status: "ongoing",
        blurb:
          "The Republic's single largest expenditure. The opposition calls it " +
          "'generous to a fault'; the government calls it 'an investment in " +
          "national morale.'",
      },
    ],
  },
  {
    id: "health-vet",
    name: "Ministry of Health and Veterinary Affairs",
    shortName: "Health & Veterinary",
    ministerId: "dr-amara-featherwell",
    motto: "Prevention Before Panic",
    responsibilities: [
      "The Featherwell Bulletin — calm, weekly, evidence-based",
      "Vaccination days and the national cold chain (a cool box)",
      "Quarantine protocol and visitor foot-baths",
      "Dignified care for recovering and senior citizens",
    ],
    projects: [
      {
        name: "Clean Beak Initiative",
        status: "completed",
        blurb:
          "Water-point hygiene overhaul. Delivered on time, under budget, and " +
          "without a single press conference — a national first.",
      },
      {
        name: "Senior Hen Wellness Rounds",
        status: "ongoing",
        blurb:
          "Weekly welfare visits to retired layers, usually ending in " +
          "storytelling that runs well over the allotted time.",
      },
    ],
  },
  {
    id: "coop-security",
    name: "Ministry of Security",
    shortName: "Security",
    ministerId: "pete-okpara",
    motto: "Every Bird Counted, By Name",
    responsibilities: [
      "Perimeter integrity and the nightly roll call",
      "The hunt for the monitor lizard",
      "Predator early-warning and the alarm call network",
      "Drainage grates, fence gaps, and door-closing at sunset",
      "Escort and cover for the chicks of Coop Two",
    ],
    projects: [
      {
        name: "The Bantu Protocol",
        status: "ongoing",
        blurb:
          "Every bird counted aloud, by name, at the door of every coop, " +
          "every night. Named for the watchman of Coop Two. Unpopular for " +
          "three days; now the sound the Republic sleeps to.",
      },
      {
        name: "Drainage and fence hardening",
        status: "completed",
        blurb:
          "The channel the lizard used is barred and the east fence gap is " +
          "closed. The ministry considers this necessary and insufficient.",
      },
      {
        name: "The bounty",
        status: "ongoing",
        blurb:
          "A standing reward for information leading to the capture of the " +
          "monitor lizard, posted at every coop and on this website.",
      },
    ],
  },
  {
    id: "sports",
    name: "Ministry of Sports and Recreation",
    shortName: "Sports",
    ministerId: "tunde-quickfoot",
    motto: "Speed, Spirit, Sportsmanship",
    responsibilities: [
      "The Coop Premier League and its fixture chaos",
      "The Perch Jumping Championship",
      "Grassroots chick athletics",
      "The Stadium Project (see: The Stadium Project)",
    ],
    projects: [
      {
        name: "The Stadium Project",
        status: "stalled",
        blurb:
          "A second sports field, promised in three consecutive manifestos. " +
          "The Minister insists the project is '90 percent complete,' a figure " +
          "unchanged since it was '80 percent complete.'",
      },
      {
        name: "Chick Sprint Saturdays",
        status: "ongoing",
        blurb: "Youth athletics every week. Wildly popular; frequently muddy.",
      },
    ],
  },
  {
    id: "social-affairs",
    name: "Ministry of Social Affairs and Flock Relations",
    shortName: "Social Affairs",
    ministerId: null,
    actingNote:
      "Currently coordinated by Elder Yeye Alaba in a strictly advisory, " +
      "strictly indispensable capacity.",
    motto: "One Flock, Many Feathers",
    responsibilities: [
      "The national social calendar and hatch-day registry",
      "Dispute mediation (perch-related, mostly)",
      "The First Grain Festival and the Feather Gala",
      "Welfare visits and community ceremonies",
    ],
    projects: [
      {
        name: "The Reconciliation Bench",
        status: "completed",
        blurb:
          "A designated shady spot where quarrelling parties must sit until " +
          "they have shared at least one handful of grain. Success rate: " +
          "remarkable.",
      },
    ],
  },
  {
    id: "energy-solar",
    name: "Ministry of Energy and Solar Affairs",
    shortName: "Energy & Solar",
    ministerId: null,
    actingNote: "Vacant. Applications are reviewed at sunrise, naturally.",
    motto: "Light When It Matters",
    responsibilities: [
      "The solar-light schedule and its passionate public consultations",
      "Dusk-to-dawn illumination policy",
      "Energy education ('the sun is free; the panel was not')",
    ],
    projects: [
      {
        name: "Solar Schedule Harmonisation",
        status: "ongoing",
        blurb:
          "An attempt to settle, once and for all, whether lights-out should " +
          "follow the sun or the Speaker's bedtime.",
      },
    ],
  },
  {
    id: "water-environment",
    name: "Ministry of Water and Environmental Affairs",
    shortName: "Water & Environment",
    ministerId: null,
    actingNote:
      "Administered jointly with Health & Veterinary Affairs pending appointment.",
    motto: "Clean Water, Clear Conscience",
    responsibilities: [
      "Trough standards and refill schedules",
      "Rainy-season drainage watch",
      "Dust-bath conservation areas",
      "Implementation of the Clean Water and Healthy Feathers Act",
    ],
    projects: [
      {
        name: "Clean Water and Healthy Feathers Act rollout",
        status: "ongoing",
        blurb:
          "The Republic's proudest legislation, implemented trough by trough.",
      },
    ],
  },
  {
    id: "youth-chick",
    name: "Ministry of Youth and Chick Development",
    shortName: "Youth & Chick Development",
    ministerId: null,
    actingNote:
      "The Young Chick Representation Bill proposes that this ministry be " +
      "led, for the first time, by an actual young chicken. Debate continues.",
    motto: "Every Chick Counts",
    responsibilities: [
      "Chick education and foraging apprenticeships",
      "Mentorship pairings with senior hens",
      "The national hatch-day registry (junior section)",
    ],
    projects: [
      {
        name: "Foraging 101",
        status: "ongoing",
        blurb:
          "A practical curriculum. Final exam: find the good spot behind the " +
          "water tank before your instructor does.",
      },
    ],
  },
  {
    id: "culture",
    name: "Ministry of Culture and Entertainment",
    shortName: "Culture",
    ministerId: null,
    actingNote:
      "Run by an enthusiastic committee of volunteers pending appointment; " +
      "the committee's minutes are performed rather than read.",
    motto: "The Republic Sings",
    responsibilities: [
      "The dawn chorus (artistic direction: the Vice President)",
      "Feather-display season and the Feather Gala",
      "Oral history: the mango-tree storytelling sessions",
      "Praise-poetry archives of the Republic",
    ],
    projects: [
      {
        name: "The Kisi Songbook",
        status: "announced",
        blurb:
          "A national anthology of coop songs, opening naturally with the " +
          "Vice President's celebrated 4:45 a.m. arrangement.",
      },
    ],
  },
];
