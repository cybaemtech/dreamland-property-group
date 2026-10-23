# Dreamland Property Group

Act as a senior UI/UX designer, real-estate growth strategist, and full-stack developer. Build a premium, production-ready Dreamland Developers website using the uploaded Dreamland_Premium_Landing_Page_Option3.html as the visual and animation reference, and the DOCX and Markdown files as the authoritative website content and business requirements.

Requirements:

Preserve the premium cinematic aesthetic, elegant typography, architectural imagery, smooth scroll animations, micro-interactions, and mobile responsiveness.

Build three distinct business journeys: Property Sales, Stalled Project Revival, and Land & Industrial Opportunities.

Create dedicated detail pages for individual properties, downloadable brochures, revival case studies, and land listings.

Support adding new properties through reusable templates/CMS-ready data structures without redesigning pages.

Target buyers in Pune and Mumbai with property enquiries, virtual consultations, and guided Satara site visits.

Integrate CRM-ready lead forms, source/campaign attribution, analytics events, and clear conversion tracking.

Optimise SEO, accessibility, mobile performance, and Core Web Vitals.

Use consistent branding and premium UX across every page. Every CTA must navigate to the correct page or action.

Never invent project facts, prices, approvals, testimonials, RERA details, or performance claims. Use clearly labelled placeholders wherever information is unverified.

Do not leave forms or integrations pretending to work. Clearly identify anything requiring API keys, backend configuration, CRM credentials, or client approval.

Execution: First establish the complete sitemap and reusable design system, then build the homepage and all three business journeys with their detail-page templates. Use the uploaded documents as the source of truth. Deliver a cohesive, functional website—not just a landing page or static mockup.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deployment on Netlify

This project uses TanStack Start with the official `@netlify/vite-plugin-tanstack-start` plugin for full-stack SSR and API route hosting.

1. **Push to Git**: Push your latest code to GitHub, GitLab, or Bitbucket.
2. **Import into Netlify**: Select **Add new site** > **Import an existing project**.
3. **Build settings** (auto-configured via `netlify.toml`):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/client`
4. **Environment Variables**: Add these in **Site configuration > Environment variables**:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable key
   - `VITE_SUPABASE_URL`: Your Supabase project URL (client-side)
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase publishable key (client-side)
   - `SUPABASE_SERVICE_ROLE_KEY`: (Optional) For server-side admin functions
   - `DATABASE_URL`: (Optional) If running Drizzle database migrations

