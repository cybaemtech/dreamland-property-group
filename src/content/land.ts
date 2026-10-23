/**
 * Land & industrial parcel records.
 *
 * No parcel has been verified for publication yet (the content pack defines
 * no approved parcel data). A clearly-labelled template record ships so the
 * Dreamland team can see exactly how a parcel page looks when populated.
 * Directory pages show only published, non-template records.
 */

import landImage from "@/assets/land-parcel.jpg";
import { TBC, isListedParcel, type LandParcelRecord } from "./types";

export const landParcels: LandParcelRecord[] = [
  {
    id: "LND-SATARA-BRIEF",
    slug: "satara-region-land-brief",
    name: "Satara Region Land Opportunity",
    location: "Satara region — specific parcel to be confirmed",
    locationVerified: false,
    summary:
      "Template preview of a land / industrial parcel record. Shows exactly which verified details a live listing will display once Dreamland confirms a parcel.",
    pageIntro:
      "Review the available information for this land opportunity in the Satara region. Contact our team to understand the disclosed details and request the information approved for sharing.",
    publishStatus: "draft",
    availableForEnquiry: false,
    templatePreview: true,
    publishingNote:
      "This is a template preview using clearly-labelled sample data. Do not publish as a live listing. Meeting notes reference plotting and industrial opportunities (Shindewadi / Shirwal corridor mentioned in earlier discussions); parcels must be verified before any live listing is created.",
    heroImage: {
      src: landImage,
      alt: "Illustrative image of a land parcel with road frontage — not the actual parcel",
      illustrative: true,
    },
    atAGlance: [
      { label: "Location", value: "Satara region — to be confirmed", verified: false },
      { label: "Area", value: TBC, verified: false },
      { label: "Land-use classification", value: TBC, verified: false },
      { label: "Access", value: TBC, verified: false },
      { label: "Survey / boundary information", value: TBC, verified: false },
      { label: "Documentation available for review", value: TBC, verified: false },
      { label: "Commercial terms", value: "Request details", verified: false },
      { label: "Listing status and last review date", value: "Template preview — not a live listing", verified: false },
    ],
    about:
      "This page is a template preview showing how a verified land listing will appear. A live parcel description will identify the location, relevant access, known parcel characteristics and the type of enquiry welcomed. It will not claim clear title, approved industrial use or completed conversion unless verified by qualified professionals and authorised for publication.",
    lastVerified: "Template preview",
  },
];

export const listedParcels = landParcels.filter(isListedParcel);
export { isListedParcel };
