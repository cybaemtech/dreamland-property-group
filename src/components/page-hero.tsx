import type { ReactNode } from "react";
import { Link, type ToPathOption } from "@tanstack/react-router";
import { CTAButton, DiagonalIcon, Eyebrow } from "./bits";

export interface Crumb {
  label: string;
  to?: ToPathOption;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image?: { src: string; alt: string };
  breadcrumbs?: Crumb[];
  actions?: { label: string; to: ToPathOption; variant?: "gold" | "outline" }[];
}

/** Inner-page cinematic hero, matching the reference design language. */
export function PageHero({ eyebrow, title, intro, image, breadcrumbs, actions }: PageHeroProps) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero-media">
          <img src={image.src} alt={image.alt} />
        </div>
      )}
      <div className="container">
        {breadcrumbs && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: "contents" }}>
                <span className="sep" aria-hidden="true">
                  /
                </span>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
        {actions && actions.length > 0 && (
          <div className="page-hero-actions">
            {actions.map((a, i) => (
              <CTAButton key={i} to={a.to} variant={a.variant ?? "gold"}>
                {a.label}
              </CTAButton>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { DiagonalIcon };
