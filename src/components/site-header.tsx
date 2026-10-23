import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DiagonalIcon } from "./bits";

const NAV_LINKS = [
  { to: "/properties", label: "Explore Properties" },
  { to: "/project-revival", label: "Project Revival" },
  { to: "/land-industrial", label: "Land & Industrial" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <Link to="/" className="brand" aria-label="Dreamland Developers — Home">
          <span className="brand-mark" aria-hidden="true">
            D
          </span>
          <span className="brand-copy">
            <strong>Dreamland</strong>
            <span>Developers · Property · Possibility</span>
          </span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className={pathname.startsWith(link.to) ? "active" : ""}>
              {link.label}
            </Link>
          ))}
          <Link to="/channel-partners" className={pathname.startsWith("/channel-partners") ? "active" : ""}>
            Partner With Us
          </Link>
        </nav>
        <Link to="/project-revival" className="nav-cta">
          Discuss a Stalled Project <DiagonalIcon />
        </Link>
        <button
          className={`menu-toggle ${open ? "active" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="nav-links"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
