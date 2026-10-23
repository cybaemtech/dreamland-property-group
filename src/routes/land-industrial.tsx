import { createFileRoute } from "@tanstack/react-router";
import journeyLand from "@/assets/journey-land.jpg";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTAButton, Eyebrow, FaqList, ReviewNotice, SectionHeading } from "@/components/bits";
import { ParcelCard } from "@/components/cards";
import { listedParcels } from "@/content/land";
import { landForm } from "@/content/forms";
import { landFaqs } from "@/content/faqs";

const LISTING_FIELDS = [
  "Location (with map access, once verified)",
  "Approximate area",
  "Land-use classification as currently documented",
  "Access and frontage",
  "Survey / boundary information available for review",
  "Documentation available for review",
  "Commercial terms — disclosed through the team",
  "Listing status and last review date",
];

export const Route = createFileRoute("/land-industrial")({
  head: () => ({
    meta: [
      { title: "Land & Industrial Opportunities | Dreamland Developers Satara" },
      {
        name: "description",
        content:
          "Explore land and industrial opportunities in the Satara region with Dreamland Developers. Share your land requirement — intended use, preferred location, area and timeframe — and speak with our team.",
      },
      { property: "og:title", content: "Land & Industrial Opportunities | Dreamland Developers" },
      {
        property: "og:description",
        content:
          "Land and industrial opportunities disclosed with available documentation. Share your requirement for a structured conversation.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/land-industrial" }],
  }),
  component: LandPage,
});

function LandPage() {
  return (
    <main>
      <PageHero
        eyebrow="Land & Industrial Opportunities"
        title={
          <>
            Evaluate land with the <em>facts in view.</em>
          </>
        }
        intro="For business and land requirements, share the intended use, preferred location and parcel size. The team can then discuss relevant opportunities, access and documentation — subject to individual site verification."
        image={{ src: journeyLand, alt: "Expansive open land and green landscape — illustrative image" }}
        breadcrumbs={[{ label: "Land & Industrial" }]}
        actions={[{ label: "Share Your Land Requirement", variant: "gold", anchor: "#enquire" }]}
      />

      {/* Directory */}
      <section className="section-tight detail-body" style={{ paddingTop: 56 }}>
        <div className="container">
          <Reveal>
            <Eyebrow className="text-gold-ink">Listing section</Eyebrow>
            <SectionHeading>Current land opportunities</SectionHeading>
            <p className="prose-block" style={{ marginBottom: 30, color: "var(--ink-muted)", fontSize: ".9rem", lineHeight: 1.85 }}>
              Parcels appear here only once their disclosed status has been reviewed and approved for publication.
            </p>
          </Reveal>
          {listedParcels.length > 0 ? (
            <div className="property-grid">
              {listedParcels.map((parcel) => (
                <Reveal key={parcel.slug}>
                  <ParcelCard parcel={parcel} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="empty-state">
                <Eyebrow className="text-gold-ink">No parcels are listed yet</Eyebrow>
                <h3>Land requirements are handled through the team.</h3>
                <p>
                  No parcel has been verified for publication yet, so none is listed. Share your requirement below —
                  the team will assess whether a relevant opportunity exists and discuss it directly. Meeting notes
                  reference plotting and industrial possibilities in the Satara corridor; these are being verified and
                  are not published as listings.
                </p>
                <CTAButton to="/contact">Contact the Team</CTAButton>
              </div>
            </Reveal>
          )}
          <ReviewNotice title="Publishing rule">
            Only parcels marked Published and Available for Enquiry appear in this directory. No parcel is published
            claiming clear title, approved land-use classification or completed conversion unless verified by
            qualified professionals and authorised for release.
          </ReviewNotice>
        </div>
      </section>

      {/* What a listing shows */}
      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <Eyebrow className="text-gold-ink">What a verified listing shows</Eyebrow>
            <SectionHeading>Every published parcel states its status.</SectionHeading>
            <p>
              Land decisions carry different risks from property purchases. A published parcel page shows, at
              minimum:
            </p>
            <ul className="prose-list">
              {LISTING_FIELDS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p>
              Anything not yet verified is labelled as pending rather than implied. Buyers should independently
              verify title, land-use classification, permissions, access and other relevant matters with qualified
              professionals before committing.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Who can submit a requirement</Eyebrow>
              <ul className="prose-list">
                <li>Individuals evaluating a residential or investment plot.</li>
                <li>Businesses looking for industrial or commercial land.</li>
                <li>Organisations with a defined acquisition requirement.</li>
                <li>Landowners seeking a structured discussion about their land.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Frequently asked questions</Eyebrow>
              <SectionHeading>Before you enquire.</SectionHeading>
              <FaqList items={landFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section contact" id="enquire">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Reveal>
              <Eyebrow>Land &amp; industrial enquiry</Eyebrow>
              <h2>
                Share your <em>land requirement.</em>
              </h2>
              <p>
                Tell us the intended use, preferred geography, approximate area and timeframe. Our team will review
                the brief and respond about the next step.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span>↗</span>Custom briefs welcome — no listing required to start
                </div>
                <div className="contact-detail">
                  <span>↗</span>Documentation discussed before any site commitment
                </div>
                <div className="contact-detail">
                  <span>↗</span>Independent verification always recommended
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <LeadForm config={landForm} id="enquiry" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
