import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";
import { lenis } from "./Navbar";

const Landing = ({ children }: PropsWithChildren) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id) as HTMLElement | null;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.6 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "3+", label: "Years in AI & Data" },
    { value: "10K+", label: "Claims / month" },
    { value: "50M+", label: "Daily auctions" },
    { value: "72%", label: "Accuracy gain" },
  ];

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-orb landing-orb-1" />
      <div className="landing-orb landing-orb-2" />
      <div className="landing-orb landing-orb-3" />
      <div className="landing-grid" />

      <div className="landing-container">
        <div className="landing-identity">
          <div className="landing-eyebrow">
            <span className="landing-eyebrow-dot" />
            <span>AI Engineer &amp; Data Engineer · LLM Systems · Production ML</span>
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
            <button
              className="landing-btn landing-btn-primary"
              onClick={() => scrollToSection("#work")}
            >
              View Projects
            </button>
            <button
              className="landing-btn landing-btn-ghost"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

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
            {["Claude API", "LangChain", "RAG", "PySpark", "Kafka"].map(t => (
              <span key={t} className="landing-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {children}

      <div className="landing-scroll">
        <div className="landing-scroll-line" />
        <span>scroll</span>
      </div>
    </div>
  );
};

export default Landing;
