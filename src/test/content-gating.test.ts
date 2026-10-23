import { describe, expect, it } from "vitest";
import { properties, listedProperties } from "@/content/properties";
import { landParcels, listedParcels } from "@/content/land";
import { caseStudies, publishedCaseStudies } from "@/content/case-studies";
import { isListedProperty, isListedParcel, isPublishedCaseStudy } from "@/content/types";

/**
 * Publishing-gate rules from the client content pack: nothing is shown to the
 * public unless it is explicitly verified and approved for publication.
 */
describe("content publish gating", () => {
  it("lists only published, enquiry-available properties", () => {
    expect(listedProperties.map((p) => p.slug)).toEqual(
      properties.filter(isListedProperty).map((p) => p.slug),
    );
  });

  it("never lists the withheld draft property (ready-homes)", () => {
    expect(properties.map((p) => p.slug)).toContain("ready-homes");
    expect(listedProperties.map((p) => p.slug)).not.toContain("ready-homes");
  });

  it("publishes no land parcels until one is verified", () => {
    expect(landParcels.length).toBeGreaterThan(0); // template preview exists for the team
    expect(listedParcels).toEqual([]); // nothing public yet
    expect(listedParcels).toEqual(landParcels.filter(isListedParcel));
  });

  it("publishes no case studies until the client approves one", () => {
    expect(caseStudies.length).toBeGreaterThan(0); // draft exists for review
    expect(publishedCaseStudies).toEqual([]);
    expect(publishedCaseStudies).toEqual(caseStudies.filter(isPublishedCaseStudy));
  });
});
