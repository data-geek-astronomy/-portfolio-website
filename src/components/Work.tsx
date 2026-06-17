import { useRef, useEffect } from "react";
import "./styles/Work.css";
import { config } from "../config";

const categoryColors: Record<string, { tag: string; border: string; text: string }> = {
  "LLM / Agentic AI":               { tag: "rgba(0,212,255,0.07)",   border: "rgba(0,212,255,0.18)",   text: "#00d4ff" },
  "Fraud Detection / ML":           { tag: "rgba(245,158,11,0.07)",  border: "rgba(245,158,11,0.2)",   text: "#fbbf24" },
  "Simulation / ML":                { tag: "rgba(245,158,11,0.07)",  border: "rgba(245,158,11,0.2)",   text: "#fbbf24" },
  "Computer Vision / Deep Learning":{ tag: "rgba(124,58,237,0.1)",   border: "rgba(124,58,237,0.25)",  text: "#c4b5fd" },
  "RAG / GenAI":                    { tag: "rgba(0,212,255,0.07)",   border: "rgba(0,212,255,0.18)",   text: "#00d4ff" },
  "NLP / Audio / Deep Learning":    { tag: "rgba(124,58,237,0.1)",   border: "rgba(124,58,237,0.25)",  text: "#c4b5fd" },
  "Medical AI / Deep Learning":     { tag: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)",    text: "#4ade80" },
  "NLP / Social Analytics":         { tag: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.2)",   text: "#60a5fa" },
  "Data Analysis / EDA":            { tag: "rgba(245,158,11,0.07)",  border: "rgba(245,158,11,0.2)",   text: "#fbbf24" },
  "Healthcare ML":                  { tag: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)",    text: "#4ade80" },
  "ML / Classification":            { tag: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.2)",   text: "#60a5fa" },
};

const Work = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.classList.add("dragging");
    };
    const onMouseUp = () => { isDragging.current = false; el.classList.remove("dragging"); };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      el.scrollLeft = scrollLeft.current - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    // Convert vertical wheel/trackpad scroll into horizontal movement
    const onWheel = (e: WheelEvent) => {
      const scrollable = el.scrollWidth > el.clientWidth;
      if (!scrollable) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      const scrollingForward = delta > 0;
      if ((scrollingForward && !atEnd) || (!scrollingForward && !atStart)) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollLeft += delta;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 380 : -380, behavior: "smooth" });
  };

  return (
    <div className="work-section" id="work">
      <div className="work-header">
        <div>
          <span className="section-tag">// projects</span>
          <h2 className="work-heading">Shipped systems</h2>
          <p className="work-subtext">{config.projects.length} projects across AI, ML, data engineering &amp; analytics</p>
        </div>
        <div className="work-nav-btns">
          <button className="work-nav-btn" onClick={() => scroll("left")} aria-label="scroll left">←</button>
          <button className="work-nav-btn" onClick={() => scroll("right")} aria-label="scroll right">→</button>
        </div>
      </div>

      <div className="work-scroll-track" ref={scrollRef} data-lenis-prevent>
        <div className="work-cards-row">
          {config.projects.map((project) => {
            const colors = categoryColors[project.category] || {
              tag: "rgba(0,212,255,0.07)", border: "rgba(0,212,255,0.18)", text: "#00d4ff"
            };
            return (
              <div key={project.id} className="work-card">
                <div className="work-card-inner">
                  <div className="work-card-top">
                    <span className="work-card-category" style={{ color: colors.text, background: colors.tag, borderColor: colors.border }}>
                      {project.category}
                    </span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-card-arrow" title="View on GitHub">↗</a>
                  </div>
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.description}</p>
                  <div className="work-card-tech">
                    {project.technologies.split(", ").slice(0, 4).map(t => (
                      <span key={t} className="work-card-tech-tag">{t.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="work-scroll-hint">
        <span>drag or use arrows to explore all {config.projects.length} projects</span>
        <div className="work-scroll-dots">
          {config.projects.map((_, i) => <div key={i} className="work-scroll-dot" />)}
        </div>
      </div>
    </div>
  );
};

export default Work;
