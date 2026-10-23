import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * Public enquiry endpoint — the single intake for every lead form on the site.
 *
 * Security model:
 * - Zod validates shape, lengths and the consent requirement.
 * - A honeypot field must stay empty (simple bot filter).
 * - A lightweight in-memory rate limiter caps bursts per IP.
 * - The submission is stored through server-side (service) credentials only;
 *   anonymous visitors have no direct Data API access to the table.
 * - CRM forwarding is intentionally not wired yet: it requires the client's
 *   CRM credentials. Rows are queued in the enquiries table until then.
 */

const bodySchema = z.object({
  formType: z.enum(["property", "property_pack", "revival", "land", "partner", "contact"]),
  payload: z
    .record(z.string(), z.string().max(2000))
    .refine((p) => Object.keys(p).length > 0 && Object.keys(p).length <= 40, "Invalid payload"),
  consent: z.literal(true),
  pagePath: z.string().max(300),
  attribution: z.record(z.string(), z.string().max(300)).optional(),
  hp_company_website: z.string().max(0).optional().or(z.literal("")),
});

const RATE_LIMIT = 6; // submissions per window per IP
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; windowStart: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export const Route = createFileRoute("/api/public/enquiries")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip =
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          request.headers.get("x-real-ip") ||
          "unknown";
        if (rateLimited(ip)) {
          return Response.json({ error: "Too many submissions. Please try again shortly." }, { status: 429 });
        }

        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        const parsed = bodySchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json({ error: "Please check the form fields and try again." }, { status: 400 });
        }
        const { formType, payload, pagePath, attribution } = parsed.data;

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { error } = await supabaseAdmin.from("enquiries").insert({
            form_type: formType,
            payload,
            attribution: attribution ?? {},
            page_path: pagePath,
          });
          if (error) {
            console.error("enquiry insert failed:", error.message);
            return Response.json({ error: "We could not record your enquiry. Please try again." }, { status: 500 });
          }
          return Response.json({ ok: true });
        } catch (err) {
          console.error("enquiry endpoint error:", err instanceof Error ? err.message : err);
          return Response.json({ error: "Service temporarily unavailable. Please try again." }, { status: 500 });
        }
      },
    },
  },
});
