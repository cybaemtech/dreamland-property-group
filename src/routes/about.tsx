import { createFileRoute } from "@tanstack/react-router";
import craftImage from "@/assets/craft-detail.jpg";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTAButton, CtaBand, Eyebrow, ReviewNotice, SectionHeading } from "@/components/bits";

const PRINCIPLES = [
  {
    title: "Understand before promising",
    body: "Every engagement starts with the situation as it actually is — construction status, documentation, stakeholders, constraints. Proposals follow understanding, not the reverse.",
  },
  {
    title: "Verify before publishing",
    body: "Facts shown on this website are reviewed before they appear. Anything not yet confirmed is labelled rather than implied, and availability is confirmed through the team.",
  },
  {
    title: "Coordinate the stakeholders",
    body: "Real-estate work is multi-party by nature. We invest in structured discussion between landowners, buyers, lenders, contractors and authorities — because execution depends on it.",
  },
  {
    title: "Communicate what is real",
    body: "Progress is reported against agreed milestones. We state plainly what is done, what is pending and what depends on others — including when the answer is “not yet”.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dreamland Developers | Satara Real Estate" },
      {
        name: "description",
        content:
          "Dreamland Developers works across property sales, land opportunities and stalled-project revival from a base in Satara — serving buyers in Pune, Mumbai and the surrounding region.",
      },
      { property: "og:title", content: "About Dreamland Developers | Satara Real Estate" },
      {
        property: "og:description",
        content:
          "Satara roots, a wider buyer horizon, and a working style built on verified information and structured execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Dreamland"
        title={
          <>
            Satara roots. A wider <em>buyer horizon.</em>
          </>
        }
        intro="Dreamland Developers works across property sales, land opportunities and selected stalled-project revival from a base in Satara — serving buyers and stakeholders in Pune, Mumbai and the surrounding region."
        image={{ src: craftImage, alt: "Architectural craft detail — illustrative image" }}
        breadcrumbs={[{ label: "About" }]}
        actions={[{ label: "Contact Dreamland", variant: "gold", to: "/contact" }]}
      />

      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <div className="prose-block">
              <Eyebrow className="text-gold-ink">Our story</Eyebrow>
              <SectionHeading>Built in Satara. Working across the region.</SectionHeading>
              <p>
                Dreamland Developers is a Satara-based real-estate company. Our work spans three connected areas:
                bringing residential and commercial properties to buyers, opening selected land and industrial
                opportunities to structured enquiry, and taking on the harder conversations that stalled projects
                require.
              </p>
              <p>
                Many of the buyers we serve live outside Satara — in Pune and Mumbai especially. That shaped how we
                work: the information a buyer needs to evaluate a property must be available before they travel, and
                a site visit should come after the questions are answered, not before.
              </p>
              <p>
                We would rather say “this is being verified” than fill a page with claims we cannot stand behind.
                That principle runs through every listing, every project discussion and every case study on this
                website.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">How we work</Eyebrow>
              <SectionHeading>Four principles, applied consistently.</SectionHeading>
              <div className="property-grid" style={{ marginTop: 22 }}>
                {PRINCIPLES.map((p) => (
                  <article key={p.title}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{p.title}</h3>
                    <p style={{ color: "var(--ink-muted)", fontSize: ".92rem", lineHeight: 1.8 }}>{p.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ReviewNotice title="To be confirmed with Dreamland">
              Company registration details, founding history, leadership names and completed-project record are
              intentionally not shown here. They will be added only once the company has reviewed and approved the
              specific wording, photographs and documentary references for publication.
            </ReviewNotice>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Talk to us about <em>what you are planning.</em>
          </>
        }
        body="Whether you are searching for a property, evaluating a land opportunity or discussing a stalled project, tell us what you need."
        primary={{ label: "Contact Dreamland", to: "/contact" }}
        secondary={{ label: "Explore Properties", to: "/properties" }}
      />

      <section className="section-tight" style={{ paddingBottom: 64 }}>
        <div className="container-narrow" style={{ textAlign: "left" }}>
          <CTAButton to="/project-revival" variant="outline-dark">
            Learn About Project Revival
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
