import "./styles/CallToAction.css";
import { config } from "../config";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-glow-left" />
      <div className="cta-glow-right" />

      <div className="cta-container">
        <span className="section-tag">// open to work</span>
        <h2 className="cta-heading">
          Ready to build<br />
          <span className="cta-heading-accent">the next system?</span>
        </h2>
        <p className="cta-sub">
          Looking for full-time AI Engineering and Data Engineering roles where I can ship
          production systems with measurable impact. LLM orchestration, agentic pipelines,
          RAG, large-scale data engineering, and ML at scale.
        </p>
        <div className="cta-actions">
          <a
            href={`mailto:${config.contact.email}`}
            className="cta-btn-primary"
          >
            Get in touch
          </a>
          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-ghost"
          >
            View LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
