import "./styles/CallToAction.css";

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
          I'm looking for full-time AI Engineering roles where I can ship production systems
          with measurable impact. LLM orchestration, agentic pipelines, RAG, and ML at scale.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="cta-btn-primary">Get in touch</a>
          <a
            href="https://linkedin.com/in/aravindkumar-nalukurthi"
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
