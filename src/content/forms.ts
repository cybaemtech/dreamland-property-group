import type { LeadFormConfig } from "@/components/lead-form";

const CITIES = ["Pune", "Mumbai", "Satara & nearby", "Elsewhere in Maharashtra", "Other"] as const;
const CONTACT_METHODS = ["Phone call", "WhatsApp", "Email"] as const;

export const propertyEnquiryForm: LeadFormConfig = {
  formType: "property",
  panelTitle: "Evaluate this property",
  panelTag: "Property enquiry",
  eventName: "property_enquiry",
  submitLabel: "Request Current Availability",
  successMessage:
    "Thank you for contacting Dreamland Developers. Your enquiry has been received by the website. Our team will review the information and follow up using the contact details you provided.",
  fields: [
    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: "Email (optional)", type: "email", autoComplete: "email" },
    { name: "current_city", label: "Current city", type: "select", required: true, options: [...CITIES] },
    { name: "budget_range", label: "Budget range (optional)", type: "text", placeholder: "Approximate budget" },
    {
      name: "intended_use",
      label: "Intended use",
      type: "select",
      options: ["Personal / family use", "Investment consideration", "Business use", "Other"],
    },
    {
      name: "preferred_next_step",
      label: "Preferred next step",
      type: "select",
      options: [
        "Property information pack",
        "Call me",
        "Virtual walkthrough",
        "Guided site visit",
      ],
    },
    { name: "preferred_contact", label: "Preferred contact method", type: "select", options: [...CONTACT_METHODS] },
    {
      name: "message",
      label: "Your requirements (optional)",
      type: "textarea",
      full: true,
      placeholder: "Property type, intended use, preferred location, budget range or project context",
    },
  ],
};

export const propertyPackForm: LeadFormConfig = {
  formType: "property_pack",
  panelTitle: "Request the property pack",
  panelTag: "Information first",
  eventName: "property_pack_request",
  submitLabel: "Request a Property Information Pack",
  successMessage:
    "Thank you. Your information request has been received by the website. The team will share the materials currently approved for distribution.",
  fields: [
    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: "Email (optional)", type: "email", autoComplete: "email" },
    { name: "current_city", label: "Current city", type: "select", required: true, options: [...CITIES] },
    { name: "project", label: "Property / project", type: "text", required: true, placeholder: "Property you are asking about" },
    {
      name: "preferred_next_step",
      label: "Preferred next step",
      type: "select",
      options: ["Property information pack", "Virtual walkthrough", "Guided site visit", "Call me"],
    },
    {
      name: "message",
      label: "Notes (optional)",
      type: "textarea",
      full: true,
      placeholder: "Anything specific you want the pack to cover",
    },
  ],
};

export const revivalForm: LeadFormConfig = {
  formType: "revival",
  panelTitle: "Request an initial project discussion",
  panelTag: "Stalled project",
  eventName: "project_revival_form_submit",
  submitLabel: "Request an Initial Project Discussion",
  successMessage:
    "Thank you. Your enquiry has been received by the website. The team will review the enquiry and advise on an appropriate next step.",
  note: "Please do not submit passwords, highly sensitive personal data or confidential financial records through this form. Further records can be shared later through an agreed controlled channel.",
  fields: [
    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "organisation", label: "Organisation (optional)", type: "text", autoComplete: "organization" },
    {
      name: "role_authority",
      label: "Role / authority",
      type: "select",
      required: true,
      options: [
        "Landowner",
        "Authorised representative",
        "Lender / institutional stakeholder",
        "Existing buyer group or association",
        "Developer / potential partner",
        "Other",
      ],
    },
    { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: "Email (optional)", type: "email", autoComplete: "email" },
    { name: "project_location", label: "Project location", type: "text", required: true },
    {
      name: "project_type",
      label: "Type of project",
      type: "select",
      options: ["Residential", "Commercial", "Mixed-use", "Plotting", "Other"],
    },
    {
      name: "current_status",
      label: "Current status",
      type: "select",
      options: ["Stalled under construction", "Partially complete", "Complete but unsold", "Other"],
    },
    {
      name: "key_stakeholders",
      label: "Key stakeholders involved",
      type: "text",
      placeholder: "Lenders, buyer groups, contractors, authorities…",
    },
    { name: "preferred_time", label: "Preferred time to discuss (optional)", type: "text" },
    {
      name: "main_challenge",
      label: "Main challenge (brief)",
      type: "textarea",
      required: true,
      full: true,
      placeholder: "A short factual summary of the situation and what you are seeking",
    },
  ],
};

export const landForm: LeadFormConfig = {
  formType: "land",
  panelTitle: "Share your land requirement",
  panelTag: "Land & industrial",
  eventName: "land_information_request",
  submitLabel: "Share Your Land Requirement",
  successMessage:
    "Thank you. Your land enquiry has been received by the website. The team will review the brief and respond about the next step.",
  fields: [
    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "organisation", label: "Organisation (optional)", type: "text", autoComplete: "organization" },
    {
      name: "role",
      label: "You are a…",
      type: "select",
      required: true,
      options: [
        "Individual evaluating a plot",
        "Business looking for industrial / commercial land",
        "Organisation with a defined acquisition requirement",
        "Landowner seeking a structured discussion",
        "Channel partner",
      ],
    },
    { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: "Email (optional)", type: "email", autoComplete: "email" },
    { name: "current_city", label: "Current city", type: "select", options: [...CITIES] },
    {
      name: "intended_use",
      label: "Intended use",
      type: "select",
      required: true,
      options: ["Residential plot", "Industrial land", "Commercial land", "Other"],
    },
    { name: "target_size", label: "Approximate area required", type: "text", placeholder: "e.g. acres / sq ft (optional)" },
    { name: "preferred_geography", label: "Preferred geography", type: "text" },
    {
      name: "timeframe",
      label: "Timeframe",
      type: "select",
      options: ["Immediate", "1–3 months", "3–6 months", "6+ months", "Exploring"],
    },
    {
      name: "message",
      label: "Essential requirements / questions (optional)",
      type: "textarea",
      full: true,
      placeholder: "Access needs, conditions, specific questions",
    },
  ],
};

export const partnerForm: LeadFormConfig = {
  formType: "partner",
  panelTitle: "Register your interest",
  panelTag: "Channel partner",
  eventName: "channel_partner_form_submit",
  submitLabel: "Submit Partner Enquiry",
  successMessage:
    "Thank you. Your partner enquiry has been received by the website. The team will review the enquiry and explain the current partner process.",
  note: "Registering interest does not itself appoint a person as a Dreamland partner. Appointment, permissions and commercial terms take effect only after required verification and written agreement.",
  fields: [
    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "company_agency", label: "Company / agency", type: "text", autoComplete: "organization" },
    { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "operating_locations", label: "Operating locations", type: "text", required: true },
    {
      name: "experience",
      label: "Experience",
      type: "select",
      options: ["0–2 years", "2–5 years", "5–10 years", "10+ years"],
    },
    {
      name: "registration_details",
      label: "Registration details (if applicable)",
      type: "text",
      placeholder: "RERA agent registration etc. (optional)",
    },
    {
      name: "preferred_category",
      label: "Preferred property category",
      type: "select",
      options: ["Residential", "Commercial", "Land", "All categories"],
    },
    { name: "enquiry_volume", label: "Approximate enquiry volume (optional)", type: "text" },
    {
      name: "referral_method",
      label: "Referral method",
      type: "select",
      options: ["Direct walk-ins", "Digital campaigns", "Portal leads", "Personal network", "Other"],
    },
  ],
};

export const contactForm: LeadFormConfig = {
  formType: "contact",
  panelTitle: "Start a conversation",
  panelTag: "Tell us what you need",
  eventName: "contact_form_submit",
  submitLabel: "Request a conversation",
  successMessage:
    "Thank you for contacting Dreamland Developers. Your enquiry has been received by the website. Our team will review the information and follow up using the contact details you provided.",
  fields: [
    { name: "full_name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    { name: "organisation", label: "Organisation (optional)", type: "text", autoComplete: "organization" },
    { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: "Email (optional)", type: "email", autoComplete: "email" },
    { name: "current_city", label: "Current city", type: "select", required: true, options: [...CITIES] },
    {
      name: "enquiry_type",
      label: "Enquiry type",
      type: "select",
      required: true,
      options: [
        "Buying a property",
        "Stalled project discussion",
        "Land or industrial requirement",
        "Channel partnership",
        "Other",
      ],
    },
    {
      name: "project_reference",
      label: "Project / property / parcel (if applicable)",
      type: "text",
      placeholder: "e.g. Adarshdeep, Madhukosh, a land brief…",
    },
    { name: "preferred_contact", label: "Preferred contact method", type: "select", options: [...CONTACT_METHODS] },
    {
      name: "message",
      label: "Message / requirement summary",
      type: "textarea",
      required: true,
      full: true,
      placeholder: "What are you looking to achieve?",
    },
  ],
};
