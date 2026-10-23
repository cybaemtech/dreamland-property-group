import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTAButton, Eyebrow, ReviewNotice, SectionHeading } from "@/components/bits";
import { caseStudies } from "@/content/case-studies";

export const Route = createFileRoute("/project-revival/case-studies/$slug")({
  beforeLoad: ({ params }) => {
    if (!caseStudies.some((cs) => cs.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const cs = caseStudies.find((c) => c.slug === params.slug);
    if (!cs) return { meta: [{ title: "Case Study | Dreamland Developers" }] };
    const draft = cs.publishStatus !== "published";
    const title = draft
      ? `${cs.name} (Draft — in review) | Dreamland Developers`
      : `${cs.name} | Dreamland Developers`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: draft
            ? `Draft case study: ${cs.summary} This draft is in client review and is not yet a published case study.`
            : cs.summary,
        },
        // Drafts are intentionally not indexed until approved and published.
        ...(draft ? [{ name: "robots", content: "noindex, nofollow" }] : []),
        { property: "og:title", content: title },
        { property: "og:description", content: cs.summary },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/project-revival/case-studies/${cs.slug}` }],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const cs = caseStudies.find((c) => c.slug === slug)!;
  const isDraft = cs.publishStatus !== "published";

  return (
    <main>
      <PageHero
        eyebrow={`${cs.category} · ${cs.location}`}
        title={cs.name}
        intro={cs.pageIntro}
        image={cs.heroImage}
        breadcrumbs={[
          { label: "Project Revival", to: "/project-revival" },
          { label: "Case Studies", to: "/project-revival" },
          { label: cs.name },
        ]}
        actions={[{ label: "Discuss a Stalled Project", variant: "gold", to: "/project-revival" }]}
      />

      <section className="section detail-body" style={{ paddingTop: 56 }}>
        <div className="container-narrow">
          {isDraft && (
            <ReviewNotice title="Draft — in client review (not published)">
              {cs.publishingNote} This page is hidden from search engines until the narrative, permissions, verified
              outcomes, dates, evidence and legal/regulatory review are approved.
            </ReviewNotice>
          )}

          <Reveal>
            <div className="prose-block" style={{ marginTop: isDraft ? 40 : 64 }}>
              <Eyebrow className="text-gold-ink">Background</Eyebrow>
              <SectionHeading>Understanding the starting condition.</SectionHeading>
              <p>{cs.challenge}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Approach</Eyebrow>
              <SectionHeading>What the revival work involved.</SectionHeading>
              <ul className="prose-list">
                {cs.approach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Outcome</Eyebrow>
              <SectionHeading>The current status, stated carefully.</SectionHeading>
              <ReviewNotice title="Outcome and evidence status">
                {cs.outcomeNotice}
              </ReviewNotice>
              <p style={{ marginTop: 18 }}>{cs.outcome}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 54 }}>
              <Eyebrow className="text-gold-ink">Lessons</Eyebrow>
              <SectionHeading>What this case reinforces.</SectionHeading>
              <p>{cs.lessons}</p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 54 }}>
              <CTAButton to="/project-revival" variant="outline-dark">
                Understand Our Revival Approach
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
