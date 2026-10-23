import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-architecture.jpg";
import journeyProperties from "@/assets/journey-properties.jpg";
import journeyRevival from "@/assets/journey-revival.jpg";
import journeyLand from "@/assets/journey-land.jpg";
import landImage from "@/assets/land-parcel.jpg";
import { Reveal } from "@/components/reveal";
import { CTAButton, CtaBand, EmptyState, Eyebrow, IllustrativeNote, TextLink } from "@/components/bits";
import { PropertyCard } from "@/components/cards";
import { listedProperties } from "@/content/properties";
import { track, events } from "@/lib/analytics";

const REVIVAL_HOME_STEPS = [
  { n: "01", tag: "Understand", title: "Assess", body: "Review the background, site condition, construction status, stakeholder map, key documents and immediate concerns." },
  { n: "02", tag: "Identify", title: "Clarify", body: "Separate confirmed facts from unresolved issues: approvals, title questions, claims, financial information and stakeholder permissions." },
  { n: "03", tag: "Evaluate", title: "Feasibility", body: "Work with the relevant legal, technical and financial professionals to understand whether a realistic recovery path may exist." },
  { n: "04", tag: "Coordinate", title: "Align", body: "Where appropriate, facilitate structured discussions with authorised stakeholders and define responsibilities and dependencies." },
  { n: "05", tag: "Define", title: "Plan", body: "Subject to feasibility and approvals, define the proposed workstreams, milestones, costs, governance and commercial model." },
  { n: "06", tag: "Progress", title: "Execute", body: "If an engagement proceeds, track agreed milestones and communicate progress through the agreed governance structure." },
];

const BUYER_STEPS = [
  { n: "01", title: "Share your requirements.", body: "Tell us the property type, preferred location, approximate budget and intended use." },
  { n: "02", title: "Review the information.", body: "Our team can share approved photographs, specifications, available documents and current pricing information." },
  { n: "03", title: "Speak with the team.", body: "Discuss your questions and arrange a virtual walkthrough where available." },
  { n: "04", title: "Plan a site visit.", body: "Visit the property, inspect its actual condition and complete your own due diligence before making a decision." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreamland Developers | Properties, Land & Project Revival in Satara" },
      {
        name: "description",
        content:
          "Explore residential and commercial property opportunities in Satara, discover land and industrial opportunities, or discuss a stalled real-estate project with Dreamland Developers.",
      },
      { property: "og:title", content: "Dreamland Developers | Satara Property Opportunities" },
      {
        property: "og:description",
        content:
          "Satara roots. A wider buyer horizon. Explore properties, request verified information and plan a guided visit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        // Organization structured data — only visible, factual information.
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Dreamland Developers",
          areaServed: ["Satara", "Pune", "Mumbai"],
          description:
            "Property opportunities, land enquiries and selected stalled-project revival discussions in Satara and surrounding markets.",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main id="top">
      {/* ============ Hero ============ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src={heroImage}
            alt="Contemporary residential architecture in warm evening light — illustrative image"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow">Rooted in Satara. Connected to new opportunities.</span>
            <h1 id="hero-title">
              <span className="line">
                <span>Satara's</span>
              </span>
              <span className="line">
                <span>next&nbsp;chapter</span>
              </span>
              <span className="line">
                <span><em></em> starts here!</span>
              </span>
            </h1>
            <p className="hero-description">
              Explore Satara property opportunities from wherever you are&nbsp; whether you are considering a home,
              commercial space or a property investment. Request current project information, speak with the team
              virtually and plan a guided visit when an opportunity fits your needs.
            </p>
            <div className="hero-actions">
              <CTAButton to="/properties">Explore Properties</CTAButton>
              <CTAButton to="/project-revival" variant="outline">
                Discuss a Stalled Project
              </CTAButton>
            </div>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-left">
              <span>
                <b>01</b> Satara
              </span>
              <span className="meta-sep"></span>
              <span>Pune</span>
              <span className="meta-sep"></span>
              <span>Mumbai</span>
            </div>
            <Link className="scroll-cue" to="/about">
              Explore the approach <i></i>
            </Link>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          Satara / Pune / Mumbai
        </div>
      </section>

      {/* ============ Ribbon ============ */}
      <div className="ribbon" aria-label="Dreamland business areas">
        <div className="ribbon-track" aria-hidden="true">
          <span>Property opportunities</span>
          <b>✳</b>
          <span>Land &amp; industrial</span>
          <b>✳</b>
          <span>Project revival</span>
          <b>✳</b>
          <span>Guided site visits</span>
          <b>✳</b>
          <span>Property opportunities</span>
          <b>✳</b>
          <span>Land &amp; industrial</span>
          <b>✳</b>
          <span>Project revival</span>
          <b>✳</b>
          <span>Guided site visits</span>
          <b>✳</b>
        </div>
      </div>

      {/* ============ Statement ============ */}
      <section className="statement" id="intro">
        <div className="container statement-grid">
          <aside className="statement-aside">
            <Reveal>
              <Eyebrow>Satara roots. Wider reach.</Eyebrow>
              <p className="statement-note">
                Exploring Satara from Pune or Mumbai? Start with a virtual conversation, request the available
                property information, and plan a guided site visit when you are ready.
              </p>
            </Reveal>
          </aside>
          <div className="statement-copy">
            <Reveal delay={1}>
              <h2>
                Real-estate decisions need <em>more than a promise.</em>
              </h2>
              <div className="statement-bottom">
                <p>
                  Dreamland works across property sales, selected land opportunities and stalled-project recovery. Our
                  approach is to understand the situation, clarify the available information, coordinate the work
                  required and communicate the next steps responsibly.
                </p>
                <TextLink to="/about">About Dreamland</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Three journeys ============ */}
      <section className="section journeys" id="three-ways">
        <div className="container">
          <div className="section-top">
            <Reveal>
              <div>
                <Eyebrow>Three ways to work with Dreamland</Eyebrow>
                <h2>
                  From property search
                  <br />
                  to project revival.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p>
                Whether you are buying a home, assessing commercial space, exploring land or facing a stalled project,
                start with the information and conversation relevant to you.
              </p>
            </Reveal>
          </div>
          <div className="journey-grid">
            <Reveal delay={1}>
              <Link to="/properties" className="journey-card" onClick={() => track(events.propertyView, { context: "journey_card" })}>
                <img src={journeyProperties} alt="Light-filled contemporary residential interior" loading="lazy" width={1024} height={1280} />
                <span className="journey-number">01 / Buy in Satara</span>
                <span className="journey-mark" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <p className="journey-label">Explore Properties</p>
                  <h3>
                    Find a property
                    <br />
                    that fits your plans.
                  </h3>
                  <p>
                    Browse currently listed residential and commercial properties. Review available specifications,
                    location details, photographs, disclosed project information and current availability before
                    arranging a visit.
                  </p>
                  <span className="text-link">View Available Properties</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/project-revival" className="journey-card">
                <img src={journeyRevival} alt="Architectural construction structure with strong geometry" loading="lazy" width={1024} height={1280} />
                <span className="journey-number">02 / Turnaround</span>
                <span className="journey-mark" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <p className="journey-label">Project Revival</p>
                  <h3>
                    When a project
                    <br />
                    stalls, plan.
                  </h3>
                  <p>
                    A stalled real-estate project can involve more than construction. Dreamland can discuss the
                    situation and assess whether a practical recovery path may be possible.
                  </p>
                  <span className="text-link">Explore Project Revival</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={3}>
              <Link to="/land-industrial" className="journey-card">
                <img src={journeyLand} alt="Expansive open land and green landscape" loading="lazy" width={1024} height={1280} />
                <span className="journey-number">03 / Land &amp; business</span>
                <span className="journey-mark" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <p className="journey-label">Land &amp; Industrial Opportunities</p>
                  <h3>
                    Evaluate land with
                    <br />
                    the facts in view.
                  </h3>
                  <p>
                    Explore selected land and industrial opportunities with available parcel information, location
                    context and documented status. Share your brief with our team.
                  </p>
                  <span className="text-link">Explore Land Opportunities</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Featured properties ============ */}
      <section className="section selected" id="properties">
        <div className="container">
          <div className="section-top">
            <Reveal>
              <div>
                <Eyebrow>Featured properties</Eyebrow>
                <h2>
                  Explore current
                  <br />
                  opportunities.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p>
                Every property has different considerations. Start with the location, understand the property, and
                request the latest availability and cost information directly from our team.
              </p>
            </Reveal>
          </div>
          {listedProperties.length > 0 ? (
            <div className="project-rail" tabIndex={0} aria-label="Currently listed Dreamland properties">
              {listedProperties.map((property, i) => (
                <Reveal key={property.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <PropertyCard property={property} index={i} />
                </Reveal>
              ))}
            </div>
          ) : (
            <EmptyState
              heading="New opportunities are being reviewed."
              body="Contact our team with your property requirements. We will confirm whether a currently available opportunity matches your needs."
            >
              <CTAButton to="/contact">Share Your Requirements</CTAButton>
            </EmptyState>
          )}
          <IllustrativeNote />
          <div style={{ marginTop: 26 }}>
            <CTAButton to="/properties" variant="outline-dark">
              View All Properties
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ Pune & Mumbai buyer journey ============ */}
      <section className="section buyer-journey" id="buyer-journey">
        <div className="container">
          <div className="buyer-heading">
            <Reveal>
              <div>
                <Eyebrow>For buyers in Pune &amp; Mumbai</Eyebrow>
                <h2>
                  Explore Satara before <em>making the journey.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="buyer-intro">
                <p>
                  Buying from outside Satara should not mean making decisions without the information you need. Start
                  remotely, ask questions, review the available property pack and arrange a guided visit when you are
                  ready to evaluate a property in person.
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
          <div className="buyer-steps four">
            {BUYER_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="buyer-step">
                  <span className="buyer-step-num">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="buyer-footer">
            <Reveal>
              <p>
                Clear information first. A site visit when you are ready. No assumed returns or one-size-fits-all
                promises.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ display: "flex", gap: 13, flexWrap: "wrap" }}>
                <CTAButton to="/contact">Request a Property Information Pack</CTAButton>
                <CTAButton to="/contact" variant="outline-dark">
                  Arrange a Virtual Consultation
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Project revival feature ============ */}
      <section className="section revival" id="revival">
        <div className="container">
          <div className="revival-top">
            <Reveal>
              <div>
                <Eyebrow>Dreamland Project Revival</Eyebrow>
                <h2>
                  Every stalled project has its own story. The way forward must be{" "}
                  <em>specific to it.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="revival-intro">
                <p>
                  The right recovery approach begins with understanding the facts: project status, stakeholders,
                  documentation, outstanding obligations, available resources and practical feasibility. Dreamland
                  brings these considerations into one structured discussion before a recovery plan is proposed.
                </p>
                <CTAButton to="/project-revival">Understand Our Revival Approach</CTAButton>
              </div>
            </Reveal>
          </div>
          <div className="revival-steps six">
            {REVIVAL_HOME_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={(i % 3) as 0 | 1 | 2}>
                <article className="revival-step">
                  <div className="step-top">
                    <span>{step.n}</span>
                    <span>{step.tag}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="revival-foot">
            <span>Every project is different. Feasibility, legal position and outcomes require independent assessment.</span>
            <span>Project Revival / Dreamland Developers</span>
          </div>
        </div>
      </section>

      {/* ============ Land band ============ */}
      <section className="land" id="land">
        <div className="land-image">
          <img src={landImage} alt="Open landscape with land and distant hills — illustrative image" loading="lazy" width={1600} height={1024} />
        </div>
        <div className="container land-content">
          <Reveal>
            <div className="land-copy">
              <Eyebrow>Land &amp; Industrial Opportunities</Eyebrow>
              <h2>
                Start with the
                <br />
                <em>right details.</em>
              </h2>
              <p>
                For business and land requirements, share the intended use, preferred location and parcel size. The
                team can then discuss relevant opportunities, access and documentation, subject to individual site
                verification.
              </p>
              <CTAButton to="/land-industrial">Explore Land Opportunities</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Closing CTA ============ */}
      <CtaBand
        title={
          <>
            Start with a conversation. <em>Move forward with clarity.</em>
          </>
        }
        body="Whether you are searching for a property, evaluating a land opportunity or discussing a stalled project, tell us what you need. We will help identify the appropriate next step."
        primary={{ label: "Explore Properties", to: "/properties" }}
        secondary={{ label: "Contact Dreamland", to: "/contact" }}
      />
    </main>
  );
}
