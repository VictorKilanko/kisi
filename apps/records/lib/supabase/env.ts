/**
 * Supabase connection settings, read from environment variables.
 *
 * The app is designed to boot even before Supabase is configured: pages check
 * `hasSupabaseEnv()` and show a friendly setup screen instead of crashing, so
 * `pnpm dev` always renders something.
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function hasSupabaseEnv(): boolean {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
}

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3003"
).replace(/\/$/, "");
