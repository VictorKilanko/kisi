import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Runs before every request: refreshes the Supabase session and redirects
 * signed-out users to /login. (In Next.js 16 this file convention is named
 * `proxy`, formerly `middleware`.)
 */
export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  // Run on all paths except static assets and image files.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
