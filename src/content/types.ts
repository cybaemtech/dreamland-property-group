/**
 * CMS-ready content record types.
 *
 * These types are the publishing contract for properties, land parcels and
 * case studies. A record becomes public only when `publishStatus` is
 * "published" and `availableForEnquiry` is true. Adding a new property means
 * adding a new record to the relevant data module — no page redesign.
 */

export type PublishStatus =
  | "draft"
  | "in_review"
  | "published"
  | "temporarily_unavailable"
  | "archived";

/** Standard placeholder shown wherever a fact is not yet client-verified. */
export const TBC = "To be confirmed by Dreamland";

export interface MediaItem {
  src: string;
  alt: string;
  /** Every shipped image is illustrative until approved photography replaces it. */
  illustrative: true;
}

export interface VerifiedRow {
  label: string;
  value: string;
  verified: boolean;
}

export interface DocumentRow {
  name: string;
  status: "Available for review" | "Available on request" | "Not applicable" | "To be confirmed";
  lastVerified: string;
}

export interface PropertyRecord {
  id: string;
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "Plot or Land" | "Other";
  location: string;
  locationVerified: boolean;
  /** Card meta line, e.g. ["Homes", "Wade Phata, Satara"]. */
  cardMeta: string[];
  summary: string;
  pageIntro: string;
  priceDisplay: string;
  priceVerified: boolean;
  publishStatus: PublishStatus;
  availableForEnquiry: boolean;
  /** Internal note for the Dreamland team; also shown in the page review notice. */
  publishingNote: string;
  heroImage: MediaItem;
  gallery: MediaItem[];
  atAGlance: VerifiedRow[];
  about: string;
  highlights: string[];
  locationDescription: string;
  specs: VerifiedRow[];
  documents: DocumentRow[];
  brochureNote: string;
  lastVerified: string;
}

export interface LandParcelRecord {
  id: string;
  slug: string;
  name: string;
  location: string;
  locationVerified: boolean;
  summary: string;
  pageIntro: string;
  publishStatus: PublishStatus;
  availableForEnquiry: boolean;
  /** Sample/template records are shown only inside a clearly labelled preview. */
  templatePreview?: boolean;
  publishingNote: string;
  heroImage: MediaItem;
  atAGlance: VerifiedRow[];
  about: string;
  lastVerified: string;
}

export interface CaseStudyRecord {
  id: string;
  slug: string;
  title: string;
  intro: string;
  challenge: string;
  approach: string[];
  outcome: string;
  lessons: string;
  publishStatus: PublishStatus;
  publishingNote: string;
  lastVerified: string;
}

export function isListedProperty(p: PropertyRecord): boolean {
  return p.publishStatus === "published" && p.availableForEnquiry;
}

export function isListedParcel(p: LandParcelRecord): boolean {
  return p.publishStatus === "published" && p.availableForEnquiry && !p.templatePreview;
}

export function isPublishedCaseStudy(c: CaseStudyRecord): boolean {
  return c.publishStatus === "published";
}
