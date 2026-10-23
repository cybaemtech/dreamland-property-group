import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import journeyImage from "@/assets/journey-properties.jpg";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTAButton, Eyebrow, ReviewNotice, SectionHeading } from "@/components/bits";
import { PropertyCard } from "@/components/cards";
import { listedProperties } from "@/content/properties";
import { propertyPackForm } from "@/content/forms";
import { LeadForm } from "@/components/lead-form";

const FILTERS = ["All", "Residential", "Commercial", "Plot or Land"] as const;

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties for Sale in Satara | Dreamland Developers" },
      {
        name: "description",
        content:
          "Explore currently listed residential and commercial properties from Dreamland Developers in Satara and surrounding locations. Request current availability and property details.",
      },
      { property: "og:title", content: "Properties for Sale in Satara | Dreamland Developers" },
      {
        property: "og:description",
        content:
          "Explore residential and commercial properties currently listed by Dreamland Developers. Compare the details that matter, request current availability, and speak with our team.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const filtered =
    filter === "All" ? listedProperties : listedProperties.filter((p) => p.category === filter);

  return (
    <main>
      <PageHero
        eyebrow="Explore Properties"
        title={
          <>
            Find the right <em>place to start.</em>
          </>
        }
        intro="Explore residential and commercial properties currently listed by Dreamland Developers. Compare the details that matter, request current availability, and speak with our team before planning a visit."
        image={{ src: journeyImage, alt: "Light-filled contemporary residential interior — illustrative image" }}
        breadcrumbs={[{ label: "Properties" }]}
        actions={[{ label: "Help Me Find a Property", to: "/contact" }]}
      />

      {/* Property finder */}
      <section className="section-tight detail-body">
        <div className="container">
          <Reveal>
            <Eyebrow className="text-gold-ink">Property finder</Eyebrow>
            <SectionHeading>What are you looking for?</SectionHeading>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`btn btn-sm ${filter === f ? "btn-gold" : "btn-outline-dark"}`}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                >
                  {f === "All" ? "All properties" : f}
                </button>
              ))}
            </div>
            <p className="image-note" style={{ marginTop: 16 }}>
              A budget filter appears only once approved price data is maintained for the listings. Status filters are
              enabled as verified statuses are published for each property.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Listing section */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <Eyebrow className="text-gold-ink">Listing section</Eyebrow>
            <SectionHeading>Current property opportunities</SectionHeading>
            <p className="prose-block" style={{ marginBottom: 34, color: "var(--ink-muted)", fontSize: ".9rem", lineHeight: 1.85 }}>
              Listings below reflect the information currently approved for publication. Availability and commercial
              terms can change; contact the team to confirm the latest details.
            </p>
          </Reveal>
          {filtered.length > 0 ? (
            <div className="property-grid">
              {filtered.map((property, i) => (
                <Reveal key={property.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <PropertyCard property={property} index={i} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="empty-state">
                <Eyebrow className="text-gold-ink">No matching property found</Eyebrow>
                <h3>Tell us what you are looking for.</h3>
                <p>
                  Share your preferred property type, location, budget range and intended use. Our team will review
                  your requirements and let you know whether a listed opportunity is relevant.
                </p>
                <CTAButton to="/contact">Share My Requirements</CTAButton>
              </div>
            </Reveal>
          )}
          <ReviewNotice title="Publishing rule">
            Only properties marked Published and Available for Enquiry appear in this directory. Unverified unit
            counts, unapproved prices, guaranteed appreciation, unverified distance claims and availability copied
            from old brochures are never shown.
          </ReviewNotice>
        </div>
      </section>

      {/* Remote buyers */}
      <section className="section buyer-journey">
        <div className="container">
          <div className="buyer-heading">
            <Reveal>
              <div>
                <Eyebrow>Buying from Pune or Mumbai?</Eyebrow>
                <h2>
                  Start remotely. <em>Visit when you are ready.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="buyer-intro">
                <p>
                  Request the property information you need before travelling. Our team can help you understand the
                  published details, answer initial questions and arrange a site visit for a property you wish to
                  inspect.
                </p>
                <div className="buyer-markets">
                  <span>Pune</span>
                  <i>→</i>
                  <span>Satara</span>
                  <i>←</i>
                  <span>Mumbai</span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <LeadForm config={propertyPackForm} id="pack-form" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
