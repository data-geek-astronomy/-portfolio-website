import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance animations via CSS classes
    const els = [titleRef.current, subtitleRef.current, statsRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 180);
    });
  }, []);

  const stats = [
    { value: "3+", label: "Years in AI" },
    { value: "10K+", label: "Claims / month" },
    { value: "50M+", label: "Daily auctions" },
    { value: "72%", label: "Accuracy gain" },
  ];

  return (
    <div className="landing-section" id="landingDiv">
      {/* Ambient orbs */}
      <div className="landing-orb landing-orb-1" />
      <div className="landing-orb landing-orb-2" />
      <div className="landing-orb landing-orb-3" />

      {/* Grid overlay */}
      <div className="landing-grid" />

      <div className="landing-container">
        {/* Left: Identity */}
        <div className="landing-identity">
          <div className="landing-eyebrow">
            <span className="landing-eyebrow-dot" />
            <span>AI Engineer · LLM Systems · Production ML</span>
          </div>

          <h1 ref={titleRef} className="landing-name">
            <span className="landing-name-first">ARAVIND</span>
            <br />
            <span className="landing-name-last">KUMAR</span>
          </h1>

          <div ref={subtitleRef} className="landing-sub">
            <span className="landing-sub-line">Building intelligent systems</span>
            <span className="landing-sub-accent">that ship to production.</span>
          </div>

          <div className="landing-actions">
            <a href="#work" className="landing-btn landing-btn-primary">View Projects</a>
            <a href="#contact" className="landing-btn landing-btn-ghost">Contact Me</a>
          </div>
        </div>

        {/* Right: Stats panel */}
        <div ref={statsRef} className="landing-stats">
          <div className="landing-stats-label">Impact Metrics</div>
          <div className="landing-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="landing-stat-card">
                <span className="landing-stat-value">{s.value}</span>
                <span className="landing-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="landing-stack-badges">
            {["Claude API", "LangChain", "RAG", "PyTorch", "PySpark"].map(t => (
              <span key={t} className="landing-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Mobile photo fallback */}
        <div className="mobile-photo">
          <img src="/images/mypicnbg.png" alt={config.developer.fullName} />
        </div>
      </div>

      {/* 3D character injected here */}
      {children}

      {/* Scroll indicator */}
      <div className="landing-scroll">
        <div className="landing-scroll-line" />
        <span>scroll</span>
      </div>
    </div>
  );
};

export default Landing;
