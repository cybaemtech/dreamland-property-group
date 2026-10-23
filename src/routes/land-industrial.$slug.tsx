import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { AtAGlance, CTAButton, IllustrativeNote, ReviewNotice, SectionHeading, Eyebrow } from "@/components/bits";
import { LeadForm } from "@/components/lead-form";
import { landForm } from "@/content/forms";
import { landParcels, isListedParcel } from "@/content/land";
import { track, events } from "@/lib/analytics";
import { useEffect } from "react";

export const Route = createFileRoute("/land-industrial/$slug")({
  beforeLoad: ({ params }) => {
    const parcel = landParcels.find((p) => p.slug === params.slug);
    // Template previews stay viewable for internal review but are not indexed;
    // unpublished and non-template records do not resolve at all.
    if (!parcel || (!isListedParcel(parcel) && !parcel.templatePreview)) throw notFound();
  },
  head: ({ params }) => {
    const parcel = landParcels.find((p) => p.slug === params.slug);
    if (!parcel) return { meta: [{ title: "Land Parcel | Dreamland Developers" }] };
    const draft = parcel.publishStatus !== "published";
    const title = `${parcel.name} | Dreamland Developers`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: draft
            ? `Template preview of a land parcel listing: ${parcel.summary} Not a live listing.`
            : parcel.summary,
        },
        ...(draft ? [{ name: "robots", content: "noindex, nofollow" }] : []),
        { property: "og:title", content: title },
        { property: "og:description", content: parcel.summary },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/land-industrial/${parcel.slug}` }],
    };
  },
  component: ParcelPage,
});

function ParcelPage() {
  const { slug } = Route.useParams();
  const parcel = landParcels.find((p) => p.slug === slug)!;
  const isDraft = parcel.publishStatus !== "published";

  useEffect(() => {
    if (!isDraft) {
      track("parcel_view", { parcel_id: parcel.id, parcel_name: parcel.name });
    }
  }, [parcel.id, parcel.name, isDraft]);

  return (
    <main>
      <PageHero
        eyebrow={`Land · ${parcel.location}`}
        title={parcel.name}
        intro={parcel.pageIntro}
        image={parcel.heroImage}
        breadcrumbs={[{ label: "Land & Industrial", to: "/land-industrial" }, { label: parcel.name }]}
        actions={[{ label: "Share Your Land Requirement", variant: "gold", anchor: "#enquire" }]}
      />

      <section className="section detail-body" style={{ paddingTop: 56 }}>
        <div className="container-narrow">
          {isDraft && (
            <ReviewNotice title="Template preview — not a live listing">
              {parcel.publishingNote}
            </ReviewNotice>
          )}

          <Reveal>
            <div style={{ marginTop: isDraft ? 40 : 64 }}>
              <AtAGlance rows={parcel.atAGlance} />
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 64 }}>
              <Eyebrow className="text-gold-ink">About this parcel</Eyebrow>
              <SectionHeading>Understand the opportunity before you enquire.</SectionHeading>
              <p>{parcel.about}</p>
            </div>
          </Reveal>

          <Reveal>
            <IllustrativeNote>
              The image shown is illustrative and does not depict the actual parcel. Current site photographs, access
              maps and boundary information are shared through the team once a parcel is verified for distribution.
            </IllustrativeNote>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 44 }}>
              <Eyebrow className="text-gold-ink">Verification notice</Eyebrow>
              <p>
                The status disclosed for each parcel must be reviewed and independently verified. Buyers should
                obtain professional advice on title, land-use classification, permissions, access and other relevant
                matters before committing to any transaction.
              </p>
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
                Ask about this <em>opportunity.</em>
              </h2>
              <p>
                Share your intended use and questions. Our team will respond with the information currently approved
                for sharing.
              </p>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <LeadForm config={landForm} prefill={{ message: `Enquiry regarding: ${parcel.name}` }} id="enquiry" />
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: 64 }}>
        <div className="container-narrow">
          <CTAButton to="/land-industrial" variant="outline-dark">
            Back to Land Opportunities
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
