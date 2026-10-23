import { createFileRoute } from "@tanstack/react-router";
import journeyRevival from "@/assets/journey-revival.jpg";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTAButton, Eyebrow, FaqList, ReviewNotice, SectionHeading } from "@/components/bits";
import { LeadForm } from "@/components/lead-form";
import { revivalForm } from "@/content/forms";
import { revivalFaqs } from "@/content/faqs";
import { publishedCaseStudies } from "@/content/case-studies";
import { revivalSteps } from "@/content/revival-steps";

const AUDIENCES = [
  {
    title: "Developers with stalled projects",
    body: "Residential, commercial or mixed-use developments where activity has slowed or stopped, and a structured discussion is needed to understand what a recovery path may involve.",
  },
  {
    title: "Landowners with distressed assets",
    body: "Landowners whose land is tied to a stalled or incomplete development and who want a factual assessment of the situation and available options.",
  },
  {
    title: "Lenders and institutions",
    body: "Stakeholders seeking clarity on the actual position of a project before considering restructuring, takeover discussions or further steps.",
  },
  {
    title: "Buyers in stalled projects",
    body: "Existing buyers and their groups who need someone to assess the project situation and explain what options may realistically be available.",
  },
];

export const Route = createFileRoute("/project-revival")({
  head: () => ({
    meta: [
      { title: "Stalled Project Revival | Dreamland Developers Satara" },
      {
        name: "description",
        content:
          "Has a real-estate project stalled? Dreamland Developers can assess the project situation, stakeholders and documentation, and discuss whether a practical recovery path may be possible.",
      },
      { property: "og:title", content: "Stalled Project Revival | Dreamland Developers" },
      {
        property: "og:description",
        content:
          "Understand our structured revival approach: assess, clarify, evaluate feasibility, align stakeholders, define a plan and track progress — with expectations stated honestly.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/project-revival" }],
  }),
  component: RevivalPage,
});

function RevivalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dreamland Project Revival"
        title={
          <>
            When a project stalls, the way forward must be <em>built on facts.</em>
          </>
        }
        intro="Dreamland Developers can assess a stalled project's situation — construction status, stakeholders, documentation and outstanding obligations — and discuss whether a practical recovery path may be possible."
        image={{ src: journeyRevival, alt: "Architectural construction structure with strong geometry — illustrative image" }}
        breadcrumbs={[{ label: "Project Revival" }]}
        actions={[
          { label: "Request an Initial Discussion", variant: "gold", anchor: "#enquire" },
          { label: "Explore Case Studies", variant: "outline", anchor: "#case-studies" },
        ]}
      />

      {/* The problem is rarely just construction */}
      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <Eyebrow className="text-gold-ink">A structured start</Eyebrow>
            <SectionHeading>The problem is rarely just construction.</SectionHeading>
            <p>
              Behind most stalled projects sit several connected questions. Before any recovery plan is proposed,
              Dreamland begins by understanding the full picture:
            </p>
            <ul className="prose-list">
              <li>What is the current legal and documentation status of the project?</li>
              <li>What does the construction status actually look like on site, and what work remains?</li>
              <li>Which stakeholders are involved — landowners, lenders, buyers, contractors, authorities?</li>
              <li>What financial and regulatory obligations are outstanding?</li>
              <li>What resources are realistically available to resume and complete the work?</li>
              <li>Is there a practical recovery path that balances the interests of the stakeholders involved?</li>
            </ul>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Who can approach Dreamland?</Eyebrow>
              <div className="property-grid" style={{ marginTop: 22 }}>
                {AUDIENCES.map((a) => (
                  <article key={a.title}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{a.title}</h3>
                    <p style={{ color: "var(--ink-muted)", fontSize: ".92rem", lineHeight: 1.8 }}>{a.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="section revival">
        <div className="container">
          <div className="revival-top">
            <Reveal>
              <div>
                <Eyebrow>How Dreamland approaches revival</Eyebrow>
                <h2>
                  A structured path, <em>not a promise.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="revival-intro">
                <p>
                  Recovery work is planned against the specific project: its status, stakeholders, documentation and
                  practical feasibility. The sequence below describes how an engagement is typically structured —
                  subject to assessment and agreement on scope.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="revival-steps six">
            {revivalSteps.map((step, i) => (
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
            <span>Feasibility, approvals and stakeholder agreement determine whether an engagement proceeds.</span>
            <span>Project Revival / Dreamland Developers</span>
          </div>
        </div>
      </section>

      {/* What we need to begin */}
      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <Eyebrow className="text-gold-ink">Start the conversation</Eyebrow>
            <SectionHeading>What we need to begin.</SectionHeading>
            <p>
              An initial discussion does not require a complete file. A short factual summary is enough to begin:
            </p>
            <ul className="prose-list">
              <li>The project's location, type and current status.</li>
              <li>Your role and authority in relation to the project.</li>
              <li>The main challenge as you see it.</li>
              <li>Key stakeholders currently involved.</li>
            </ul>
            <p>
              Further records — title documents, approvals, agreements, financial information — can be requested
              later through an agreed process, once a detailed review is appropriate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="section selected" id="case-studies">
        <div className="container">
          <div className="section-top">
            <Reveal>
              <div>
                <Eyebrow>Selected project revival cases</Eyebrow>
                <h2>
                  Recovery is a process,
                  <br />
                  not a slogan.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p>
                Where a revival engagement has reached a verifiable stage, we share what actually happened — the
                starting condition, the work carried out and the current status. Results are stated factually, with
                dates and evidence, without guaranteed outcomes.
              </p>
            </Reveal>
          </div>
          {publishedCaseStudies.length > 0 ? (
            <div className="property-grid">
              {publishedCaseStudies.map((cs) => (
                <Reveal key={cs.slug}>
                  <article className="property-card">
                    <a href={`/project-revival/case-studies/${cs.slug}`} aria-label={`Read case study: ${cs.title}`}>
                      <div className="property-meta">
                        <span>Project revival</span>
                        <span>Case study</span>
                      </div>
                      <h3>{cs.title}</h3>
                      <p>{cs.intro}</p>
                      <span className="text-link">Read the Case Study</span>
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="empty-state">
                <Eyebrow className="text-gold-ink">No case studies are published yet</Eyebrow>
                <h3>Case studies are published only after verification.</h3>
                <p>
                  Each case study appears here only once the underlying facts, permissions and outcome claims have
                  been reviewed and approved. Until then, we prefer to say nothing rather than imply results we
                  cannot document.
                </p>
                <CTAButton to="/contact">Discuss a Stalled Project</CTAButton>
              </div>
            </Reveal>
          )}
          <ReviewNotice title="Client review preview (not yet published)">
            A draft case study — “Satara stalled-residential draft” — is being prepared and awaits the client's
            approved narrative, permissions, verified outcomes, dates, evidence and legal/regulatory review before
            publication.{" "}
            <a
              href="/project-revival/case-studies/satara-stalled-residential"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Preview the draft case study
            </a>{" "}
            to review what is being prepared. It is not a published case study and makes no claims.
          </ReviewNotice>
        </div>
      </section>

      {/* Honest expectations */}
      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <ReviewNotice title="What this service does — and does not — promise">
              Dreamland provides structured project assessment, coordination and execution support where engagement
              is agreed. We do not guarantee project completion, returns, timelines or specific outcomes. Every
              proposed engagement defines its own scope, conditions and responsibilities, and outcomes depend on
              project-specific feasibility, approvals, funding, stakeholder agreement and contracts.
            </ReviewNotice>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Frequently asked questions</Eyebrow>
              <SectionHeading>Before you write to us.</SectionHeading>
              <FaqList items={revivalFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section contact" id="enquire">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Reveal>
              <Eyebrow>Project revival enquiry</Eyebrow>
              <h2>
                Request an initial <em>project discussion.</em>
              </h2>
              <p>
                Share a brief, factual summary of the situation and your role. Our team will review it and advise on
                an appropriate next step — before any engagement is proposed.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span>↗</span>A structured assessment, not a sales pitch
                </div>
                <div className="contact-detail">
                  <span>↗</span>Records requested only through an agreed process
                </div>
                <div className="contact-detail">
                  <span>↗</span>Scope, conditions and responsibilities defined in writing
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <LeadForm config={revivalForm} id="enquiry" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
