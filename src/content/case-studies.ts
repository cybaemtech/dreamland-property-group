/**
 * Project revival case studies.
 *
 * A case study page must not go live until the client verifies the figures,
 * approves the narrative and confirms it is authorised to share the project
 * name, records, images and outcomes. The draft below stays unpublished and
 * is reachable only as a clearly-labelled client review preview.
 */

import { isPublishedCaseStudy, type CaseStudyRecord } from "./types";

export const caseStudies: CaseStudyRecord[] = [
  {
    id: "CS-SATARA-01",
    slug: "satara-stalled-residential",
    title: "Bringing focus back to a stalled residential project in Satara",
    intro:
      "A stalled development can become more difficult to resolve when construction, stakeholder expectations, claims and project documentation all need attention at once. In this Satara case, the recovery approach focused on prioritising a workable project, coordinating the relevant stakeholders and addressing the practical steps required to restart activity.",
    challenge:
      "The project faced a combination of project-delivery and stakeholder issues. Progress required a clearer view of lender and supplier matters, existing customer agreements, the project's remaining inventory and the steps required to regularise its position. [CLIENT TO VERIFY: approved description of the original condition and which details may be disclosed publicly.]",
    approach: [
      "Prioritised one project for focused attention rather than spreading effort across several unresolved projects.",
      "Convened discussions with relevant lenders and stakeholders to establish an approach to project progress and repayment coordination.",
      "Worked through selected supplier, contractor and other outstanding matters as documented in the approved case record.",
      "Restarted site / operational activity and reviewed remaining inventory.",
      "Coordinated with relevant parties on customer agreements and applicable project registration or extension matters.",
    ],
    outcome:
      "[INSERT VERIFIED OUTCOMES, DATES AND EVIDENCE. DO NOT PUBLISH THE SOURCE NOTES' INCONSISTENT INVENTORY FIGURES.] Only measurable outcomes that can be substantiated — verified milestones, documented matters resolved, approvals obtained, construction restarted, units sold or booked as defined, or customer handover status — will be published.",
    lessons:
      "The project illustrates why stalled-project recovery needs focused prioritisation, stakeholder communication, accurate project information and a practical execution plan. The appropriate recovery path will differ from one project to another.",
    publishStatus: "draft",
    publishingNote:
      "Requires: permission to identify the project and stakeholders; verified before/after photographs with dates; verified timeline and status; disclosable resolution records; approved metrics and definitions; confirmed legal and regulatory wording; final approval from Dreamland's authorised representative.",
    lastVerified: "Pending client verification",
  },
];

export const publishedCaseStudies = caseStudies.filter(isPublishedCaseStudy);
export { isPublishedCaseStudy };
