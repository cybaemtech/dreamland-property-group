import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow, ReviewNotice, SectionHeading } from "@/components/bits";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dreamland Developers" },
      {
        name: "description",
        content:
          "How Dreamland Developers collects, uses and protects information submitted through this website's enquiry forms, including attribution data and consent.",
      },
      { property: "og:title", content: "Privacy Policy | Dreamland Developers" },
      { property: "og:description", content: "How enquiry information submitted through this website is handled." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How information submitted through this website is collected, used and protected."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="section detail-body">
        <div className="container-narrow">
          <Reveal>
            <ReviewNotice title="Draft pending client-approved legal text">
              This policy is a working draft prepared for Dreamland's review. It must be checked and approved by the
              company and its legal adviser before publication, including the exact data-retention periods, the
              appointed contact person and the grievance details required under Indian law.
            </ReviewNotice>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 40 }}>
              <Eyebrow className="text-gold-ink">What we collect</Eyebrow>
              <SectionHeading>Information you submit through our forms.</SectionHeading>
              <p>
                When you submit an enquiry through this website, we receive the details you enter: your name, phone
                number, email address (if provided), city, enquiry details and your consent. Different forms collect
                different fields — a property enquiry collects what is needed to respond about that property; a
                project-revival enquiry collects the brief factual summary you choose to share.
              </p>
              <p>
                Alongside what you type, we record basic context about how you reached us: the page you submitted
                from, the referring website, the campaign parameters in the link you followed (such as UTM
                parameters), and the date and time. This helps us understand which channels bring useful enquiries.
              </p>
              <p>
                We do not ask for, and ask you not to submit, passwords, highly sensitive personal data or
                confidential financial records through these forms. Further records are requested later, if needed,
                through an agreed process.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 44 }}>
              <Eyebrow className="text-gold-ink">How it is used</Eyebrow>
              <SectionHeading>Only to respond to your enquiry.</SectionHeading>
              <p>
                Enquiry information is used to review your requirement, contact you through your preferred method,
                and maintain a record of the conversation. It is not published, sold or shared with third parties
                for unrelated marketing. If any CRM or communication system is connected later, this policy will be
                updated to describe it.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose-block" style={{ marginTop: 44 }}>
              <Eyebrow className="text-gold-ink">Consent, retention and your choices</Eyebrow>
              <SectionHeading>Your enquiry, your control.</SectionHeading>
              <p>
                Each form requires your explicit consent before it can be submitted, and states that consent is
                subject to this policy. You may withdraw consent or request correction or deletion of your enquiry
                record at any time by contacting us — using the contact details published once approved, or by
                replying to our follow-up.
              </p>
              <p>
                Enquiry records are retained for as long as needed to handle the enquiry and maintain a business
                record, and then removed in line with the retention period Dreamland approves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
