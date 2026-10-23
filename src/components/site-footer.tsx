import { Link } from "@tanstack/react-router";
import { track, events } from "@/lib/analytics";

const YEAR = new Date().getFullYear();

const EXPLORE = [
  { to: "/properties", label: "Properties" },
  { to: "/project-revival", label: "Project Revival" },
  { to: "/land-industrial", label: "Land & Industrial" },
  { to: "/about", label: "About Dreamland" },
  { to: "/channel-partners", label: "Partner With Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-branding">
            <Link to="/" className="brand" aria-label="Dreamland Developers home">
              <span className="brand-mark" aria-hidden="true">
                D
              </span>
              <span className="brand-copy">
                <strong>Dreamland</strong>
                <span>Developers · Property · Possibility</span>
              </span>
            </Link>
            <p>
              Property opportunities, land enquiries and selected stalled-project revival discussions in Satara and
              surrounding markets.
            </p>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <h4>Explore</h4>
              {EXPLORE.map((l) => (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>For buyers outside Satara</h4>
              <Link to="/contact">Request property details</Link>
              <Link to="/contact">Ask for a virtual consultation</Link>
              <Link to="/contact">Plan a guided site visit</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <button
                type="button"
                onClick={() => {
                  track(events.callClick, { location: "footer", number: "placeholder" });
                  window.alert(
                    "Business phone number pending Dreamland approval — the approved number is published here before launch.",
                  );
                }}
              >
                Phone: [Client-approved business phone]
              </button>
              <button
                type="button"
                onClick={() => {
                  track(events.whatsappClick, { location: "footer" });
                  window.alert(
                    "WhatsApp enquiry line pending Dreamland approval — the approved link is published here before launch.",
                  );
                }}
              >
                WhatsApp: [Pending approval]
              </button>
              <span style={{ margin: "12px 0", color: "rgba(248,246,240,.67)", fontSize: ".77rem" }}>
                Email: [Client-approved business email]
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {YEAR} Dreamland Developers. All rights reserved. ·{" "}
            <Link to="/privacy-policy">Privacy Policy</Link> · <Link to="/terms">Terms &amp; Disclaimer</Link>
            <br />
            Property availability, pricing, specifications and status may change and should be confirmed in writing.
            Images and visualisations must be identified accurately. Information published on this website is for
            general enquiry and does not replace independent legal, financial, technical or property due diligence.
            Applicable project disclosures and advertising requirements, including MahaRERA registration details and
            QR codes where required, must be displayed where applicable.
          </p>
          <button
            type="button"
            className="back-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
