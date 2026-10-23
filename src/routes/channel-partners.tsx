import { createFileRoute } from "@tanstack/react-router";
import journeyImage from "@/assets/journey-properties.jpg";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTAButton, Eyebrow, FaqList, ReviewNotice, SectionHeading } from "@/components/bits";
import { partnerForm } from "@/content/forms";
import { partnerFaqs } from "@/content/faqs";

const EXPECTATIONS = [
  {
    title: "Approved materials only",
    body: "Partners receive marketing materials approved for distribution. Project facts, prices and availability come from current, team-confirmed sources — not from altered or outdated materials.",
  },
  {
    title: "Information that holds up",
    body: "Before you commit to a client conversation, you can request the property information currently approved for sharing, including disclosed project status and documentation.",
  },
  {
    title: "Clear process",
    body: "Registration of interest, verification, written agreement, then active collaboration. Appointment, permissions and commercial terms take effect only after the required steps are complete.",
  },
];

export const Route = createFileRoute("/channel-partners")({
  head: () => ({
    meta: [
      { title: "Channel Partners | Dreamland Developers Satara" },
      {
        name: "description",
        content:
          "Register your interest as a Dreamland Developers channel partner. Approved materials, verified project information and a clear appointment process for partners serving Pune, Mumbai and Satara buyers.",
      },
      { property: "og:title", content: "Channel Partners | Dreamland Developers" },
      {
        property: "og:description",
        content:
          "Work with Dreamland Developers as a channel partner: approved marketing materials, verified project information and a clearly defined appointment process.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/channel-partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dreamland Channel Partners"
        title={
          <>
            Partner with a team that <em>verifies what it shares.</em>
          </>
        }
        intro="We are building a partner network to serve buyers in Pune, Mumbai and Satara. Partners work with approved materials and verified project information — and represent Dreamland under clear written terms."
        image={{ src: journeyImage, alt: "Light-filled contemporary residential interior — illustrative image" }}
        breadcrumbs={[{ label: "Channel Partners" }]}
        actions={[{ label: "Register Your Interest", variant: "gold", anchor: "#enquire" }]}
      />

      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <Eyebrow className="text-gold-ink">How the partnership works</Eyebrow>
            <SectionHeading>Registration is the start, not the appointment.</SectionHeading>
            <p>
              Interest in partnering with Dreamland is welcome. The process is deliberately clear so both sides know
              where they stand at every stage:
            </p>
            <ol className="step-list">
              <li>
                <strong>Register interest.</strong>
                <p>Share your details, operating locations and experience through the form on this page.</p>
              </li>
              <li>
                <strong>Verification.</strong>
                <p>
                  The team reviews the registration and may request registration documents (such as RERA agent
                  registration, where applicable) and references.
                </p>
              </li>
              <li>
                <strong>Written agreement.</strong>
                <p>
                  Appointment, permissions and commercial terms take effect only through a written agreement — never
                  from registration alone.
                </p>
              </li>
              <li>
                <strong>Active collaboration.</strong>
                <p>
                  Partners use approved materials, receive current project information, and refer enquiries through
                  the agreed process.
                </p>
              </li>
            </ol>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">What partners can expect</Eyebrow>
              <div className="property-grid" style={{ marginTop: 22 }}>
                {EXPECTATIONS.map((e) => (
                  <article key={e.title}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{e.title}</h3>
                    <p style={{ color: "var(--ink-muted)", fontSize: ".92rem", lineHeight: 1.8 }}>{e.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ReviewNotice title="Commercial terms">
              Commission structures, slab rates and incentive schemes are not published on this website. They are
              shared with partners through the written agreement once verification is complete. Registering interest
              does not itself appoint a person as a Dreamland partner.
            </ReviewNotice>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Frequently asked questions</Eyebrow>
              <SectionHeading>Before you register.</SectionHeading>
              <FaqList items={partnerFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partner form */}
      <section className="section contact" id="enquire">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Reveal>
              <Eyebrow>Channel partner enquiry</Eyebrow>
              <h2>
                Register your <em>interest.</em>
              </h2>
              <p>
                Share your details and operating context. Our team will review the enquiry and explain the current
                partner process.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span>↗</span>Serving buyers across Pune, Mumbai and Satara
                </div>
                <div className="contact-detail">
                  <span>↗</span>Approved materials and verified information only
                </div>
                <div className="contact-detail">
                  <span>↗</span>Appointment by written agreement
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <LeadForm config={partnerForm} id="enquiry" />
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: 64 }}>
        <div className="container-narrow">
          <CTAButton to="/properties" variant="outline-dark">
            See What We Currently List
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
