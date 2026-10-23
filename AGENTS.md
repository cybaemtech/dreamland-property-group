<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project conventions

- Directory pages with detail children are layout routes: `properties.tsx`, `project-revival.tsx` and `land-industrial.tsx` render only `<Outlet />`; their page bodies live in the sibling `*.index.tsx` leaves. Reason: TanStack Router nests `x.$slug.tsx` under `x.tsx`, so a full-page parent without an Outlet blocks its detail pages from rendering.
- All colour, typography and shared section styles are tokens/classes in `src/styles.css`; components never hardcode colours.
- Content records in `src/content/*` follow the publish gating in `src/content/types.ts` — only `publishStatus: "published"` and `availableForEnquiry` records reach public pages; unverified facts are labelled with `TBC` or "Verify", never invented. The gates are asserted in `src/test/content-gating.test.ts`.
- Lead forms post to `src/routes/api/public/enquiries.ts` (Zod validation, consent, honeypot, rate limit) and store into `public.enquiries`; CRM forwarding is intentionally unwired until Dreamland supplies CRM credentials.
- Homepage-specific editorial refinements are scoped under `.home-editorial`; the reusable property rail owns scroll controls and the homepage reuses the existing `LeadForm` contact configuration. Reason: visual refinement must not fork enquiry handling or disrupt detail-page layouts.
