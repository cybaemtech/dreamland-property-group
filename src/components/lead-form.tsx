import { useState, type FormEvent } from "react";
import { getAttribution, track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/bits";

export interface FieldDef {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  full?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

export interface LeadFormConfig {
  formType: "property" | "property_pack" | "revival" | "land" | "partner" | "contact";
  panelTitle: string;
  panelTag: string;
  fields: FieldDef[];
  submitLabel: string;
  /** Analytics event fired on successful submit (content pack section 16). */
  eventName: string;
  successMessage: string;
  /** Extra small-print under the form, e.g. the confidential-records warning. */
  note?: string;
}

const CONSENT_TEXT =
  "I agree to be contacted about this enquiry, subject to the published privacy notice.";

/**
 * CRM-ready lead form. Submits to the server-side enquiry endpoint which
 * validates, rate-limits and stores the submission in the enquiries table.
 * Attribution (UTM/referrer) is attached automatically; no submission is
 * reported as a lead unless the backend confirms receipt.
 */
export function LeadForm({
  config,
  prefill,
  id,
}: {
  config: LeadFormConfig;
  /** Default values applied to matching fields (e.g. the property name). */
  prefill?: Record<string, string>;
  id?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    setMessage("");

    const data = new FormData(form);
    const payload: Record<string, string> = {};
    for (const field of config.fields) {
      const v = data.get(field.name);
      if (typeof v === "string") payload[field.name] = v;
    }
    const honeypot = String(data.get("hp_company_website") || "");
    const consent = data.get("consent") === "on";

    try {
      const res = await fetch("/api/public/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: config.formType,
          payload,
          consent,
          pagePath: window.location.pathname,
          attribution: getAttribution(),
          hp_company_website: honeypot,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Submission failed");
      }
      track(config.eventName, { form_type: config.formType, page_path: window.location.pathname });
      setStatus("ok");
      setMessage(config.successMessage);
      form.reset();
    } catch (err) {
      setStatus("err");
      setMessage(
        err instanceof Error && err.message !== "Failed to fetch"
          ? `We could not submit your enquiry: ${err.message}. Please try again, or reach us on the phone number listed once approved.`
          : "We could not submit your enquiry right now. Please check your connection and try again.",
      );
    }
  }

  return (
    <form className="enquiry-panel" onSubmit={onSubmit} noValidate={false} id={id}>
      <div className="panel-top">
        <h3>{config.panelTitle}</h3>
        <span>{config.panelTag}</span>
      </div>
      <div className="form-grid">
        {config.fields.map((field) => (
          <div className={`field ${field.full ? "full" : ""}`} key={field.name}>
            <label htmlFor={`fld-${field.name}`}>
              {field.label}
              {field.required ? " *" : ""}
            </label>
            {field.type === "select" ? (
              <select
                id={`fld-${field.name}`}
                name={field.name}
                required={field.required}
                defaultValue={prefill?.[field.name] ?? ""}
              >
                <option value="" disabled={field.required && !prefill?.[field.name]}>
                  Select an option
                </option>
                {(field.options ?? []).map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={`fld-${field.name}`}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                maxLength={2000}
                defaultValue={prefill?.[field.name] ?? ""}
              />
            ) : (
              <input
                id={`fld-${field.name}`}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
                maxLength={field.type === "tel" ? 20 : 200}
                pattern={field.type === "tel" ? "[0-9+() .-]{8,20}" : undefined}
                defaultValue={prefill?.[field.name] ?? ""}
              />
            )}
          </div>
        ))}
        <div className="field full">
          <label className="consent" htmlFor="fld-consent">
            <input id="fld-consent" name="consent" type="checkbox" required />
            <span>{CONSENT_TEXT}</span>
          </label>
        </div>
        {/* Honeypot: real visitors never see or fill this. */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="hp-company-website">Company website</label>
          <input id="hp-company-website" name="hp_company_website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="form-foot">
        <p className="form-note">
          Submissions are stored securely and reviewed by the Dreamland team. Please do not send passwords,
          sensitive personal data or confidential financial records through website forms.
        </p>
        <Button variant="editorial" size="editorial" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : config.submitLabel}
          <ArrowIcon />
        </Button>
      </div>
      <div className={`form-message ${status === "ok" ? "ok" : ""} ${status === "err" ? "err" : ""}`} role="status" aria-live="polite">
        {message}
      </div>
      {config.note && <p className="form-note">{config.note}</p>}
    </form>
  );
}
