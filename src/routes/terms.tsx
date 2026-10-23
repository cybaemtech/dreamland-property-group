import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow, ReviewNotice, SectionHeading } from "@/components/bits";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Dreamland Developers" },
      {
        name: "description",
        content:
          "Terms governing the use of the Dreamland Developers website, including the accuracy of property information, no-guarantee statements and independent verification guidance.",
      },
      { property: "og:title", content: "Terms of Use | Dreamland Developers" },
      {
        property: "og:description",
        content:
          "Website information is indicative; availability and terms are confirmed through the authorised team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        intro="The basis on which the information on this website is provided and how it may be used."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <ReviewNotice title="Draft pending client-approved legal text">
              These terms are a working draft prepared for Dreamland's review. They must be checked and approved by
              the company and its legal adviser before publication — including RERA/MahaRERA registration numbers
              where required, the full company identity and governing-law details.
            </ReviewNotice>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 40 }}>
              <Eyebrow className="text-gold-ink">Information on this website</Eyebrow>
              <SectionHeading>Indicative, not an offer.</SectionHeading>
              <p>
                Property, land and project information on this website is provided for general information. It does
                not constitute an offer, a legal representation or a binding commitment. Availability, specifications
                and commercial terms can change and are confirmed only through the authorised Dreamland team and
                current written documents.
              </p>
              <p>
                Photographs and visuals labelled as illustrative are not photographs of the actual property and must
                not be relied upon as evidence of appearance, finish or condition.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 44 }}>
              <Eyebrow className="text-gold-ink">Independent verification</Eyebrow>
              <SectionHeading>Verify before you commit.</SectionHeading>
              <p>
                Before any transaction, buyers should independently verify title, approvals, project registration
                and transaction documents with their own qualified legal and financial advisers. Our team can share
                the project information available for review, but cannot confirm legal suitability for your purchase.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 44 }}>
              <Eyebrow className="text-gold-ink">No guarantees</Eyebrow>
              <SectionHeading>No assured returns or outcomes.</SectionHeading>
              <p>
                No particular appreciation, resale value, rental income, project completion date or revival outcome
                is offered or guaranteed. Project revival engagements depend on project-specific feasibility,
                approvals, funding, stakeholder agreement and contracts, and any proposed engagement defines its own
                scope and conditions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 44 }}>
              <Eyebrow className="text-gold-ink">Use of this website</Eyebrow>
              <SectionHeading>Fair use of our content.</SectionHeading>
              <p>
                Content on this website may be viewed and shared for the purpose of evaluating an enquiry with
                Dreamland. It may not be republished, altered or used to make claims about Dreamland projects beyond
                the information approved for distribution. Channel partners follow the additional terms of their
                written agreement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
