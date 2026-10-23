/**
 * Property records — the single source of truth for the properties directory
 * and every property detail page. New properties are added as new records.
 *
 * Every fact below comes from the client content pack; anything not verified
 * is a labelled placeholder. Photography shipped with the site is illustrative
 * and must be replaced with approved project photographs before launch.
 */

import heroResidential from "@/assets/property-residential.jpg";
import heroCommercial from "@/assets/property-commercial.jpg";
import interior from "@/assets/journey-properties.jpg";
import craft from "@/assets/craft-detail.jpg";
import {
  TBC,
  isListedProperty,
  type PropertyRecord,
} from "./types";

export const properties: PropertyRecord[] = [
  {
    id: "PRJ-ADARSHDEEP",
    slug: "adarshdeep",
    name: "Adarshdeep",
    category: "Residential",
    location: "Wade Phata, Satara",
    locationVerified: false,
    cardMeta: ["Homes", "Wade Phata, Satara"],
    summary:
      "Explore the available residential inventory at Adarshdeep near Wade Phata, Satara. Request current unit availability, specifications and the property information pack before arranging a visit.",
    pageIntro:
      "Explore Adarshdeep, a residential property near Wade Phata, Satara. Review the available property details and speak with our team for current availability, pricing information and next steps.",
    priceDisplay: "Request current price",
    priceVerified: false,
    publishStatus: "published",
    availableForEnquiry: true,
    publishingNote:
      "Meeting notes reference unsold inventory, but unit-level availability must be reconfirmed. No inventory counts are published until verified. The precise address and map pin are pending confirmation.",
    heroImage: {
      src: heroResidential,
      alt: "Illustrative image of a contemporary residential building — not the actual property",
      illustrative: true,
    },
    gallery: [
      {
        src: interior,
        alt: "Illustrative image of a residential interior — not the actual property",
        illustrative: true,
      },
      {
        src: craft,
        alt: "Illustrative image of architectural material detail — not the actual property",
        illustrative: true,
      },
    ],
    atAGlance: [
      { label: "Location", value: "Wade Phata, Satara — precise address to be confirmed", verified: false },
      { label: "Property type", value: "Residential", verified: true },
      { label: "Current status", value: TBC, verified: false },
      { label: "Available configurations", value: TBC, verified: false },
      { label: "Area", value: TBC, verified: false },
      { label: "Price", value: "Request current price", verified: false },
      { label: "Possession / readiness", value: TBC, verified: false },
      { label: "Project registration (MahaRERA)", value: TBC, verified: false },
    ],
    about:
      "Adarshdeep is located near Wade Phata, Satara. This page brings together the property information currently approved for sharing, including its type, specifications, photographs, disclosed status and available supporting documents. Items still pending verification are clearly labelled and will be updated as Dreamland confirms them.",
    highlights: [],
    locationDescription:
      "The precise address, map pin and access routes for Adarshdeep are being confirmed. Distance and travel-time information will be published only after it has been checked.",
    specs: [
      { label: "Configuration", value: TBC, verified: false },
      { label: "Area measurement and type", value: TBC, verified: false },
      { label: "Included features", value: TBC, verified: false },
      { label: "Parking / common facilities", value: TBC, verified: false },
      { label: "Price and payment terms", value: "Request the current cost sheet", verified: false },
      { label: "Other applicable charges", value: "Referenced in the approved cost sheet", verified: false },
    ],
    documents: [
      { name: "Title and ownership records", status: "Available on request", lastVerified: "Pending verification" },
      { name: "Project registration (MahaRERA)", status: "To be confirmed", lastVerified: "Pending verification" },
      { name: "Approved plans / sanctions", status: "To be confirmed", lastVerified: "Pending verification" },
      { name: "Cost sheet", status: "Available on request", lastVerified: "Pending verification" },
    ],
    brochureNote:
      "The brochure will be available once the current document set is approved for distribution. Request the property information pack in the meantime.",
    lastVerified: "Pending verification",
  },
  {
    id: "PRJ-MADHUKOSH",
    slug: "madhukosh",
    name: "Madhukosh",
    category: "Commercial",
    location: "Satara",
    locationVerified: false,
    cardMeta: ["Shops", "Satara"],
    summary:
      "Explore commercial shop opportunities at Madhukosh in Satara. Request current shop availability, dimensions, permitted use information and an itemised cost sheet.",
    pageIntro:
      "Explore Madhukosh, a commercial property in Satara. Review the available property details and speak with our team for current shop availability, dimensions and next steps.",
    priceDisplay: "Request current price",
    priceVerified: false,
    publishStatus: "published",
    availableForEnquiry: true,
    publishingNote:
      "Source notes contain inconsistent shop inventory figures. The total, sold, reserved and available unit counts must be reconciled before any count is published. The notes reference the Medha–Mahabaleshwar Road / Mulacha Oadha area; the precise address and map pin are pending confirmation.",
    heroImage: {
      src: heroCommercial,
      alt: "Illustrative image of a commercial retail building — not the actual property",
      illustrative: true,
    },
    gallery: [
      {
        src: craft,
        alt: "Illustrative image of architectural material detail — not the actual property",
        illustrative: true,
      },
    ],
    atAGlance: [
      { label: "Location", value: "Satara — Medha–Mahabaleshwar Road / Mulacha Oadha area, to be confirmed", verified: false },
      { label: "Property type", value: "Commercial (shops)", verified: true },
      { label: "Current status", value: TBC, verified: false },
      { label: "Available configurations", value: TBC, verified: false },
      { label: "Area", value: TBC, verified: false },
      { label: "Price", value: "Request current price", verified: false },
      { label: "Permitted use", value: TBC, verified: false },
      { label: "Project registration (MahaRERA)", value: TBC, verified: false },
    ],
    about:
      "Madhukosh is a commercial property in Satara. This page brings together the property information currently approved for sharing, including shop availability, dimensions, permitted use information and available supporting documents. Items still pending verification are clearly labelled and will be updated as Dreamland confirms them.",
    highlights: [],
    locationDescription:
      "The precise address, map pin and access routes for Madhukosh are being confirmed. Distance and travel-time information will be published only after it has been checked.",
    specs: [
      { label: "Configuration", value: TBC, verified: false },
      { label: "Area measurement and type", value: TBC, verified: false },
      { label: "Included features", value: TBC, verified: false },
      { label: "Parking / common facilities", value: TBC, verified: false },
      { label: "Price and payment terms", value: "Request the current cost sheet", verified: false },
      { label: "Other applicable charges", value: "Referenced in the approved cost sheet", verified: false },
    ],
    documents: [
      { name: "Title and ownership records", status: "Available on request", lastVerified: "Pending verification" },
      { name: "Project registration (MahaRERA)", status: "To be confirmed", lastVerified: "Pending verification" },
      { name: "Approved plans / sanctions", status: "To be confirmed", lastVerified: "Pending verification" },
      { name: "Cost sheet", status: "Available on request", lastVerified: "Pending verification" },
    ],
    brochureNote:
      "The brochure will be available once the current document set is approved for distribution. Request the property information pack in the meantime.",
    lastVerified: "Pending verification",
  },
  {
    id: "PRJ-READY-LOC-TBC",
    slug: "ready-to-move-homes",
    name: "Ready-to-move homes",
    category: "Residential",
    location: "Location to be confirmed",
    locationVerified: false,
    cardMeta: ["1 BHK · 2 BHK", "Location to be confirmed"],
    summary:
      "Explore currently available 1 BHK and 2 BHK homes in a completed residential building. The location and project name require confirmation before this record can be published.",
    pageIntro:
      "Explore currently available 1 BHK and 2 BHK homes in a completed residential building. The correct location and project name must be confirmed with Dreamland before publication.",
    priceDisplay: "Request current price",
    priceVerified: false,
    publishStatus: "draft",
    availableForEnquiry: false,
    publishingNote:
      "Source notes identify Lonand; a later discussion referred to Lonikand. These are different locations. Confirm the correct property and address with the client before publication. This record stays out of the directory until confirmed.",
    heroImage: {
      src: interior,
      alt: "Illustrative image of a residential interior — not the actual property",
      illustrative: true,
    },
    gallery: [],
    atAGlance: [
      { label: "Location", value: "Lonand or Lonikand — requires confirmation", verified: false },
      { label: "Property type", value: "Residential (1 BHK / 2 BHK)", verified: true },
      { label: "Current status", value: TBC, verified: false },
      { label: "Available configurations", value: "1 BHK and 2 BHK (to be reconfirmed)", verified: false },
      { label: "Area", value: TBC, verified: false },
      { label: "Price", value: "Request current price", verified: false },
      { label: "Possession / readiness", value: "Reported complete — to be verified", verified: false },
      { label: "Project registration (MahaRERA)", value: TBC, verified: false },
    ],
    about:
      "A completed residential building with 1 BHK and 2 BHK homes has been identified for listing. Its location, project name and documentation status require confirmation before this record is published.",
    highlights: [],
    locationDescription:
      "The location is unresolved: source notes mention Lonand, a later discussion mentioned Lonikand. Confirm with the client before publication.",
    specs: [
      { label: "Configuration", value: "1 BHK / 2 BHK — to be reconfirmed", verified: false },
      { label: "Area measurement and type", value: TBC, verified: false },
      { label: "Included features", value: TBC, verified: false },
      { label: "Parking / common facilities", value: TBC, verified: false },
      { label: "Price and payment terms", value: "Request the current cost sheet", verified: false },
      { label: "Other applicable charges", value: "Referenced in the approved cost sheet", verified: false },
    ],
    documents: [
      { name: "Title and ownership records", status: "To be confirmed", lastVerified: "Pending verification" },
      { name: "Project registration (MahaRERA)", status: "To be confirmed", lastVerified: "Pending verification" },
      { name: "Completion certificate", status: "To be confirmed", lastVerified: "Pending verification" },
    ],
    brochureNote: "No approved brochure is available for this record yet.",
    lastVerified: "Pending verification",
  },
];

export const listedProperties = properties.filter(isListedProperty);
export { isListedProperty };
