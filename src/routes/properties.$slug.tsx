import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import {
  AtAGlance,
  CTAButton,
  Eyebrow,
  FaqList,
  IllustrativeNote,
  ReviewNotice,
  SectionHeading,
} from "@/components/bits";
import { LeadForm } from "@/components/lead-form";
import { propertyEnquiryForm } from "@/content/forms";
import { buyingFaqs } from "@/content/faqs";
import { properties, isListedProperty } from "@/content/properties";
import { track, events } from "@/lib/analytics";

export const Route = createFileRoute("/properties/$slug")({
  beforeLoad: ({ params }) => {
    const property = properties.find((p) => p.slug === params.slug);
    // Only published, enquiry-available records resolve to a public page.
    if (!property || !isListedProperty(property)) throw notFound();
  },
  head: ({ params }) => {
    const property = properties.find((p) => p.slug === params.slug);
    if (!property) return { meta: [{ title: "Property | Dreamland Developers" }] };
    const title = `${property.name} in ${property.location} | Dreamland Developers`;
    const description = `Explore ${property.name}, a ${property.category.toLowerCase()} property in ${property.location}. Review available details and request current availability, pricing and a guided site visit.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/properties/${property.slug}` }],
    };
  },
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { slug } = Route.useParams();
  const property = properties.find((p) => p.slug === slug)!;

  useEffect(() => {
    track(events.propertyView, { property_id: property.id, property_name: property.name });
  }, [property.id, property.name]);

  return (
    <main>
      <PageHero
        eyebrow={`${property.category} · ${property.location}`}
        title={property.name}
        intro={property.pageIntro}
        image={property.heroImage}
        breadcrumbs={[{ label: "Properties", to: "/properties" }, { label: property.name }]}
        actions={[
          { label: "Request Current Availability", variant: "gold", anchor: "#enquire" },
          { label: "Book a Guided Site Visit", variant: "outline", anchor: "#enquire" },
        ]}
      />

      <section className="section detail-body" style={{ paddingTop: 56 }}>
        <div className="container-narrow">
          <ReviewNotice title="Content in review">
            {property.publishingNote} Unverified facts on this page are labelled “Verify” and are published only
            after Dreamland confirms them.
          </ReviewNotice>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <AtAGlance rows={property.atAGlance} />
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 64 }}>
              <Eyebrow className="text-gold-ink">About the property</Eyebrow>
              <SectionHeading>Understand the property before you visit.</SectionHeading>
              <p>{property.about}</p>
              <p>
                Use the information below to decide whether the property aligns with your requirements. For any item
                not listed, contact our team for clarification.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Property highlights</Eyebrow>
              {property.highlights.length > 0 ? (
                <ul className="highlights-list" style={{ marginTop: 22 }}>
                  {property.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : (
                <p className="image-note" style={{ marginTop: 20 }}>
                  Verified property highlights will be published here once confirmed by Dreamland. No unverified
                  features or claims are shown.
                </p>
              )}
            </div>
          </Reveal>

          {/* Gallery */}
          <Reveal>
            <div style={{ marginTop: 64 }}>
              <Eyebrow className="text-gold-ink">Gallery &amp; walkthrough</Eyebrow>
              <SectionHeading>See the property as it is.</SectionHeading>
              {property.gallery.length > 0 && (
                <div className="gallery-grid">
                  {property.gallery.map((img, i) => (
                    <figure key={i}>
                      <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={1280} />
                      <figcaption>Illustrative image — not the actual property</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              <IllustrativeNote>
                View current photographs and video walkthroughs of the actual property. Any render, illustrative
                visual or proposed design is labelled clearly and kept separate from photographs of the existing
                property. The images shown here are illustrative placeholders awaiting approved project photography.
              </IllustrativeNote>
              <div style={{ marginTop: 18 }}>
                <CTAButton to="/contact" variant="outline-dark">
                  Request a Virtual Walkthrough
                </CTAButton>
              </div>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal>
            <div className="prose-block" style={{ marginTop: 64 }}>
              <Eyebrow className="text-gold-ink">Location and access</Eyebrow>
              <SectionHeading>Understand the location.</SectionHeading>
              <p>{property.locationDescription}</p>
            </div>
          </Reveal>

          {/* Specifications */}
          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Specifications and costs</Eyebrow>
              <SectionHeading>Review the details.</SectionHeading>
              <dl className="spec-list" style={{ marginTop: 10 }}>
                {property.specs.map((spec) => (
                  <div className="spec-item" key={spec.label}>
                    <dt>{spec.label}</dt>
                    {spec.verified ? <dd>{spec.value}</dd> : <dd className="pending">{spec.value}<span className="pending-tag">Verify</span></dd>}
                  </div>
                ))}
              </dl>
              <p className="image-note" style={{ marginTop: 14 }}>
                Ask for the latest cost sheet so you can understand the asking price, included items and other
                applicable charges before proceeding.
              </p>
              <div style={{ marginTop: 18, display: "flex", gap: 13, flexWrap: "wrap" }}>
                <a className="btn btn-gold btn-sm" href="#enquire" onClick={() => track(events.costSheetRequest, { property_id: property.id })}>
                  Request the Current Cost Sheet
                </a>
                <a
                  className="btn btn-outline-dark btn-sm"
                  href="#enquire"
                  onClick={() => track(events.propertyBrochureRequest, { property_id: property.id })}
                >
                  Download Property Brochure
                </a>
              </div>
              <p className="image-note" style={{ marginTop: 10 }}>
                {property.brochureNote}
              </p>
            </div>
          </Reveal>

          {/* Documents */}
          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Documents and status</Eyebrow>
              <SectionHeading>Review the available project information.</SectionHeading>
              <div className="doc-list" style={{ marginTop: 10 }}>
                {property.documents.map((doc) => (
                  <div className="doc-item" key={doc.name}>
                    <strong>{doc.name}</strong>
                    <span className="doc-status">{doc.status}</span>
                    <span className="doc-date">{doc.lastVerified}</span>
                  </div>
                ))}
              </div>
              <p className="image-note" style={{ marginTop: 14 }}>
                The documents that apply to a property depend on its type and status. Our team can explain which
                project records are available for review. Buyers should independently verify relevant title,
                approvals, project registration and transaction documents with qualified professionals before
                committing.
              </p>
            </div>
          </Reveal>

          {/* FAQs */}
          <Reveal>
            <div style={{ marginTop: 64 }}>
              <Eyebrow className="text-gold-ink">Frequently asked questions</Eyebrow>
              <SectionHeading>Before you enquire.</SectionHeading>
              <FaqList items={buyingFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section contact" id="enquire">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Reveal>
              <Eyebrow>Property enquiry</Eyebrow>
              <h2>
                Would you like to <em>evaluate this property?</em>
              </h2>
              <p>
                Tell us what you need to know. Our team will respond with the next steps and the information
                currently available.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span>↗</span>Request current availability and the property pack
                </div>
                <div className="contact-detail">
                  <span>↗</span>Virtual walkthroughs for Pune &amp; Mumbai buyers
                </div>
                <div className="contact-detail">
                  <span>↗</span>Guided site visits arranged around your shortlist
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <LeadForm config={propertyEnquiryForm} prefill={{ project: property.name }} id="enquiry" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
