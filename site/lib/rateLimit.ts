/**
 * Fixed-window rate limiter for the API routes.
 *
 * Backed by Upstash Redis when configured, with an in-memory fallback.
 *
 * The fallback exists so local dev and preview builds work without secrets —
 * but it is genuinely weak on Vercel, where each serverless instance holds
 * its own Map and an attacker simply lands on a different instance. Set
 * UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in production.
 *
 * Uses Upstash's REST API over `fetch` rather than the SDK: one less
 * dependency, and it works on any runtime.
 */

type Result = { allowed: boolean; retryAfterSeconds: number };

/* ------------------------------------------------------- in-memory fallback */

const windows = new Map<string, { count: number; resetAt: number }>();

function memoryLimit(key: string, limit: number, windowMs: number): Result {
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

/* ------------------------------------------------------------ upstash store */

/**
 * INCR the key, and on first hit set an expiry equal to the window. The
 * counter then expires on its own, which is what makes this a fixed window
 * without needing a cleanup job.
 */
async function upstashLimit(
  url: string,
  token: string,
  key: string,
  limit: number,
  windowMs: number,
): Promise<Result> {
  const windowSeconds = Math.ceil(windowMs / 1000);
  const headers = { Authorization: `Bearer ${token}` };

  const incrRes = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
    method: "POST",
    headers,
    cache: "no-store",
  });
  if (!incrRes.ok) throw new Error(`Upstash INCR failed: ${incrRes.status}`);
  const { result: count } = (await incrRes.json()) as { result: number };

  if (count === 1) {
    await fetch(`${url}/expire/${encodeURIComponent(key)}/${windowSeconds}`, {
      method: "POST",
      headers,
      cache: "no-store",
    });
  }

  if (count > limit) {
    const ttlRes = await fetch(`${url}/ttl/${encodeURIComponent(key)}`, {
      headers,
      cache: "no-store",
    });
    const ttl = ttlRes.ok
      ? ((await ttlRes.json()) as { result: number }).result
      : windowSeconds;
    return { allowed: false, retryAfterSeconds: Math.max(ttl, 1) };
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

/* -------------------------------------------------------------- public API */

export async function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): Promise<Result> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      return await upstashLimit(url, token, key, limit, windowMs);
    } catch (err) {
      // Fail open rather than blocking real customers because Redis blipped.
      // An outage should not close the egg shop.
      console.error("Rate limiter unavailable, falling back to memory:", err);
    }
  }
  return memoryLimit(key, limit, windowMs);
}

/** Best-effort client key: first forwarded IP, else a shared bucket. */
export function clientKey(req: Request, scope: string): string {
  const fwd = req.headers.get("x-forwarded-for");
  const ip = fwd ? fwd.split(",")[0].trim() : "unknown";
  return `${scope}:${ip}`;
}
