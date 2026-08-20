/**
 * @kisi/canon — the single source of truth for the Kisi universe.
 *
 * Every property (kisi.africa, kisifarm, kisikids, and the social factory)
 * imports the cast, the story, and the schemas from here, so a chicken's name,
 * role, and history are defined in exactly one place and never drift between
 * sites.
 *
 * Two layers are exported:
 *   - schemas: the Zod schemas and their inferred types (Chicken, Party, ...).
 *   - content: the validated data plus the derived accessors and relationship
 *     helpers (chickens, storyArcs(), getChicken(), leagueTable(), ...).
 */
export * from "./schemas";
export * from "./content";

// Raw data consumed directly by an app surface (the Most Wanted poster).
export { monitorLizard } from "./data/wanted";
