/**
 * Simple in-memory fixed-window rate limiter.
 *
 * Note: state is per server instance, so on serverless platforms each
 * instance keeps its own counters. That is fine for basic abuse
 * protection on a portfolio site; switch to a shared store (e.g.
 * Upstash Redis) if you ever need strict global limits.
 */

interface WindowEntry {
  count: number;
  windowStart: number;
}

const store = new Map<string, WindowEntry>();

const MAX_STORE_SIZE = 10_000;

export interface RateLimitOptions {
  /** Maximum requests allowed per window. */
  limit: number;
  /** Window size in milliseconds. */
  windowMs: number;
}

export function rateLimit(
  key: string,
  { limit, windowMs }: RateLimitOptions
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now - entry.windowStart >= windowMs) {
    // Evict expired entries opportunistically so the map cannot grow forever
    if (store.size >= MAX_STORE_SIZE) {
      for (const [k, v] of store) {
        if (now - v.windowStart >= windowMs) store.delete(k);
      }
    }
    store.set(key, { count: 1, windowStart: now });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  entry.count += 1;
  if (entry.count > limit) {
    const retryAfterSeconds = Math.ceil(
      (entry.windowStart + windowMs - now) / 1000
    );
    return { allowed: false, retryAfterSeconds };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/** Extract the client IP from proxy headers (Vercel sets x-forwarded-for). */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}
