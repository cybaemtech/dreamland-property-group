/**
 * Dreamland Developers — analytics event layer.
 *
 * Events are pushed to window.dataLayer (GTM-compatible). A GTM/GA4
 * container ID must be configured by the client before publish; until then
 * the dataLayer is populated but no measurement request is sent.
 * Event names follow the content pack (section 16).
 */

const ATTR_KEY = "dreamland_attribution_v1";

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  referrer?: string;
  landing_page?: string;
  captured_at?: string;
}

export function track(event: string, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ts: new Date().toISOString(),
    ...data,
  });
}

/** Read attribution stored on first landing, merged with any current params. */
export function getAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  let stored: AttributionData = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTR_KEY) || "{}") as AttributionData;
  } catch {
    stored = {};
  }
  const params = new URLSearchParams(window.location.search);
  const live: AttributionData = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"]) {
    const v = params.get(key);
    if (v) live[key] = v.slice(0, 120);
  }
  return { ...stored, ...live };
}

/** Store first-touch attribution once per session. Call on app mount. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data: AttributionData = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"]) {
      const v = params.get(key);
      if (v) data[key] = v.slice(0, 120);
    }
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
      data.referrer = document.referrer.slice(0, 300);
    }
    data.landing_page = window.location.pathname;
    data.captured_at = new Date().toISOString();
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable — attribution is best-effort */
  }
}

/** Event names defined in the content pack, section 16. */
export const events = {
  propertyView: "property_view",
  propertyBrochureRequest: "property_brochure_request",
  costSheetRequest: "cost_sheet_request",
  whatsappClick: "whatsapp_click",
  callClick: "call_click",
  virtualConsultationRequest: "virtual_consultation_request",
  siteVisitRequest: "site_visit_request",
  projectRevivalFormSubmit: "project_revival_form_submit",
  landInformationRequest: "land_information_request",
  channelPartnerFormSubmit: "channel_partner_form_submit",
  contactFormSubmit: "contact_form_submit",
  propertyPackRequest: "property_pack_request",
} as const;
