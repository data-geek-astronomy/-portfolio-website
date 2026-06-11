import "./styles/Contact.css";
import { config } from "../config";

const Contact = () => {
  const links = [
    { label: "GitHub", href: config.contact.github, icon: "⌥" },
    { label: "LinkedIn", href: config.contact.linkedin, icon: "in" },
    { label: "Email", href: `mailto:${config.contact.email}`, icon: "@" },
  ];

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <span className="section-tag">// contact</span>
          <h2 className="contact-heading">Say hello</h2>
          <p className="contact-body">
            Reach out via email or connect on LinkedIn. I respond within 24 hours.
          </p>
          <div className="contact-links">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">{l.icon}</span>
                <span className="contact-link-label">{l.label}</span>
                <span className="contact-link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <div className="contact-card-header">
              <span className="contact-card-tag">// quick connect</span>
            </div>
            <a href={`mailto:${config.contact.email}`} className="contact-email">
              {config.contact.email}
            </a>
            <div className="contact-card-location">
              <span className="contact-card-loc-icon">◎</span>
              <span>{config.social.location}</span>
            </div>
            <div className="contact-card-status">
              <span className="contact-status-dot" />
              <span>Open to full-time AI Engineering roles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <span className="contact-footer-name">ARAVIND KUMAR NALUKURTHI</span>
        <span className="contact-footer-role">AI Engineer · LLM Systems · Production ML</span>
      </div>
    </div>
  );
};

export default Contact;
