import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow, ReviewNotice, SectionHeading } from "@/components/bits";
import { LeadForm } from "@/components/lead-form";
import { contactForm } from "@/content/forms";

const ROUTES = [
  {
    label: "Buying a property",
    body: "Share your property type, preferred location, budget range and intended use — the team will confirm current availability and the next step.",
    link: { label: "Explore properties", to: "/properties" },
  },
  {
    label: "Stalled project discussion",
    body: "Share a brief, factual summary of the project and your role. The team will advise on an appropriate next step.",
    link: { label: "Understand the revival approach", to: "/project-revival" },
  },
  {
    label: "Land or industrial requirement",
    body: "Share the intended use, preferred geography, approximate area and timeframe.",
    link: { label: "See land opportunities", to: "/land-industrial" },
  },
  {
    label: "Channel partnership",
    body: "Share your operating locations and experience to begin the partner conversation.",
    link: { label: "Register as a partner", to: "/channel-partners" },
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dreamland Developers | Satara Property Enquiries" },
      {
        name: "description",
        content:
          "Contact Dreamland Developers about properties, land opportunities, stalled projects or channel partnership. Tell us what you need and the team will advise the next step.",
      },
      { property: "og:title", content: "Contact Dreamland Developers" },
      {
        property: "og:description",
        content:
          "Property enquiries, virtual consultations and guided Satara site visits start with a conversation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Dreamland"
        title={
          <>
            Start with a conversation. <em>Move forward with clarity.</em>
          </>
        }
        intro="Tell us what you need — a property, a land brief, a stalled project or a partnership. The team will review your enquiry and advise the appropriate next step."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <Eyebrow className="text-gold-ink">Where is your enquiry headed?</Eyebrow>
            <SectionHeading>Every enquiry starts with the facts.</SectionHeading>
            <div className="property-grid" style={{ marginTop: 22 }}>
              {ROUTES.map((r) => (
                <article key={r.label}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{r.label}</h3>
                  <p style={{ color: "var(--ink-muted)", fontSize: ".92rem", lineHeight: 1.8, marginBottom: 12 }}>{r.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <ReviewNotice title="Contact details pending client approval">
              The business phone number, WhatsApp number, email address and office address are awaiting Dreamland's
              approved details and are not shown on the website yet. Until they are confirmed and configured, use the
              enquiry form on this page — submissions are received and stored by the website, and the team follows up
              from the details you provide. The phone and WhatsApp buttons in the site header currently show a
              notice instead of dialling, because no approved number has been provided.
            </ReviewNotice>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="section contact" id="enquire">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Reveal>
              <Eyebrow>General enquiries</Eyebrow>
              <h2>
                Tell us <em>what you need.</em>
              </h2>
              <p>
                Share your requirement and preferred contact method. Our team will review the enquiry and follow up
                using the details you provide.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span>↗</span>Property enquiries and virtual consultations
                </div>
                <div className="contact-detail">
                  <span>↗</span>Guided site visits arranged around your shortlist
                </div>
                <div className="contact-detail">
                  <span>↗</span>Stalled project, land and partnership conversations
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <LeadForm config={contactForm} id="enquiry" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
