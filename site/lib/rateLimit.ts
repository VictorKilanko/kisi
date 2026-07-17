/**
 * Minimal fixed-window rate limiter for the API routes.
 *
 * In-memory by design for this phase: it protects a single running server
 * (including `next start` and preview deployments). NOTE for Phase 5: on
 * multi-instance/serverless hosting each instance keeps its own window, so
 * this is a speed bump, not a fortress — swap the store for Upstash/Redis
 * or the host's rate-limit primitive before heavy production traffic.
 */

const windows = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = windows.get(key);
  if (!entry || entry.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }
  entry.count += 1;
  if (entry.count > limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    };
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Best-effort client key: first forwarded IP, else a shared bucket. */
export function clientKey(req: Request, scope: string): string {
  const fwd = req.headers.get("x-forwarded-for");
  const ip = fwd ? fwd.split(",")[0].trim() : "unknown";
  return `${scope}:${ip}`;
}
