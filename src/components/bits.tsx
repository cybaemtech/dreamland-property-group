import { Link, type ToPathOption } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { TBC, type VerifiedRow } from "@/content/types";

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

export function DiagonalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

type ButtonVariant = "gold" | "light" | "outline" | "outline-dark";

interface CTAProps {
  to?: ToPathOption;
  variant?: ButtonVariant;
  className?: string;
  small?: boolean;
  children: ReactNode;
}

/** Internal navigation CTA — must always point at a real route. */
export function CTAButton({ to, variant = "gold", className = "", small, children }: CTAProps) {
  if (!to) return null;
  return (
    <Link to={to} className={`btn btn-${variant} ${small ? "btn-sm" : ""} ${className}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export function TextLink({ to, children, className = "" }: { to?: ToPathOption; children: ReactNode; className?: string }) {
  if (!to) return null;
  return (
    <Link to={to} className={`text-link ${className}`}>
      {children}
    </Link>
  );
}

/** Clearly-labelled placeholder / review notice. Used wherever facts are unverified. */
export function ReviewNotice({ title = "Placeholder pending verification", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="draft-banner" role="note">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  );
}

/** A single unverified value rendered with an explicit "to be confirmed" tag. */
export function PendingValue({ children }: { children: ReactNode }) {
  return (
    <dd className="pending">
      {children}
      <span className="pending-tag">Verify</span>
    </dd>
  );
}

export function AtAGlance({ rows, title = "At a glance" }: { rows: VerifiedRow[]; title?: string }) {
  return (
    <div>
      <Eyebrow className="text-gold-ink">{title}</Eyebrow>
      <dl className="meta-grid" style={{ marginTop: 22 }}>
        {rows.map((row) => (
          <div className="meta-row" key={row.label}>
            <dt>{row.label}</dt>
            {row.verified ? <dd>{row.value}</dd> : <PendingValue>{row.value}</PendingValue>}
          </div>
        ))}
      </dl>
      <p className="image-note" style={{ marginTop: 14 }}>
        Items marked “Verify” are placeholders — {TBC} before publication.
      </p>
    </div>
  );
}

export function StepList({ items }: { items: { title: ReactNode; body: ReactNode }[] }) {
  return (
    <ol className="step-list">
      {items.map((item, i) => (
        <li key={i}>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={i} open={i === 0}>
          <summary>{item.q}</summary>
          <div className="faq-answer">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function EmptyState({
  heading,
  body,
  children,
}: {
  heading: ReactNode;
  body: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="empty-state">
      <Eyebrow className="text-gold-ink">Currently being reviewed</Eyebrow>
      <h3>{heading}</h3>
      <p>{body}</p>
      {children}
    </div>
  );
}

export function IllustrativeNote({ children }: { children?: ReactNode }) {
  return (
    <p className="image-note">
      {children ??
        "Photography on this page is illustrative, not evidence of the property’s actual appearance. Approved, current project photographs replace it before launch."}
    </p>
  );
}

/** Shared page footer band with two CTAs. */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body: string;
  primary: { label: string; to: ToPathOption };
  secondary?: { label: string; to: ToPathOption };
}) {
  return (
    <section className="section cta-band on-dark">
      <div className="container">
        <Eyebrow className="text-gold-light">Your next step</Eyebrow>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero-actions" style={{ marginTop: 30 }}>
          <CTAButton to={primary.to}>{primary.label}</CTAButton>
          {secondary && (
            <CTAButton to={secondary.to} variant="outline">
              {secondary.label}
            </CTAButton>
          )}
        </div>
      </div>
    </section>
  );
}
