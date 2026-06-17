import { useRef, useEffect } from "react";
import "./styles/NotableProjects.css";

const notableProjects = [
  {
    id: 1,
    title: "Cisco Network Anomaly Detection",
    useCase: "Real-time infrastructure log monitoring",
    category: "Anomaly Detection / MLOps",
    technologies: "Isolation Forest, LOF, One-Class SVM, SHAP, Random Forest, Gradient Boosting",
    github: "https://github.com/data-geek-astronomy/cisco-network-anomaly-detection",
    description: "Enterprise-grade ML system detecting anomalies in network logs in real time. Processes 20K+ logs per second with sub-50ms inference, combining statistical baselines, ML ensembles, and SHAP explainability with automated retraining and drift detection.",
    metrics: ["20K+ logs/sec", "<50ms latency", "5-model ensemble"],
    color: "cyan",
    logo: "images/projects/cisco.jpg",
  },
  {
    id: 2,
    title: "Surge Pricing Impact Analysis",
    useCase: "Causal inference on marketplace dynamics",
    category: "Causal Inference / Economics",
    technologies: "Propensity Score Matching, Synthetic Control, Interrupted Time Series, Streamlit",
    github: "https://github.com/data-geek-astronomy/surge_pricing_analysis",
    description: "Models ride-sharing marketplace dynamics and isolates the true causal impact of surge pricing on demand, supply, and wait times. Implements three causal methods to remove confounding from weather, events, and day-of-week effects.",
    metrics: ["3 causal methods", "Demand elasticity", "Supply response"],
    color: "amber",
    logo: "images/projects/uber.jpg",
  },
  {
    id: 3,
    title: "Financial Insights Engine",
    useCase: "Customer analytics for fintech growth",
    category: "Customer Analytics / ML",
    technologies: "Clustering, Segmentation, Cash Flow Forecasting, Recommendation Systems",
    github: "https://github.com/data-geek-astronomy/financial-insights-engine",
    description: "Customer analytics platform combining ML segmentation, financial health scoring, and personalized recommendations. Identifies four distinct customer groups, forecasts 6-month revenue, and surfaces at-risk accounts for proactive retention.",
    metrics: ["4 segments", "6-mo forecast", "Health scoring"],
    color: "violet",
    logo: "images/projects/stripe.jpg",
  },
  {
    id: 4,
    title: "Netflix Ads Forecasting & Pricing",
    useCase: "Ad inventory forecasting + dynamic pricing",
    category: "Forecasting / Optimization",
    technologies: "Facebook Prophet, Dynamic Pricing, Revenue Optimization, Streamlit",
    github: "https://github.com/data-geek-astronomy/netflix-ads-portfolio",
    description: "Ad inventory management and dynamic pricing platform for Netflix's ad-supported tier. Forecasts inventory 90 days ahead with Prophet, optimizes CPM pricing on demand signals, and maximizes revenue through intelligent pricing strategies.",
    metrics: ["90-day forecast", "Dynamic CPM", "Revenue optimization"],
    color: "amber",
    logo: "images/projects/netflix.jpg",
  },
  {
    id: 5,
    title: "Airbnb Listing Recommender",
    useCase: "Personalized listing ranking",
    category: "Recommendation / Ranking",
    technologies: "XGBoost, Learning to Rank, Feature Engineering, Streamlit",
    github: "https://github.com/data-geek-astronomy/airbnb-listing-recommender",
    description: "ML-powered ranking system for personalized Airbnb recommendations using gradient-boosted ranking models. Learns guest preferences from booking history and personalizes search results in real time, lifting booking conversion from 15% to 18%.",
    metrics: ["18% conversion", "XGBoost ranking", "Real-time"],
    color: "cyan",
    logo: "images/projects/airbnb.jpg",
  },
  {
    id: 6,
    title: "Pinterest Two-Tower Retrieval",
    useCase: "Personalized content feed retrieval",
    category: "Deep Learning / Retrieval",
    technologies: "Two-Tower Dual Encoder, InfoNCE, FAISS, PyTorch, ANN Indexing",
    github: "https://github.com/data-geek-astronomy/pinterest-two-tower",
    description: "Production-grade two-tower dual-encoder retrieval system personalizing Pinterest-style feeds. Trains user and item towers with InfoNCE and in-batch negatives, serving recommendations through a FAISS ANN index 10 to 100x faster than exact search at 95%+ recall.",
    metrics: ["10-100x faster", "95%+ recall", "FAISS ANN"],
    color: "violet",
    logo: "images/projects/pinterest.jpg",
  },
];

const colorMap: Record<string, { tag: string; border: string; text: string; glow: string }> = {
  cyan:   { tag: "rgba(0,212,255,0.07)",  border: "rgba(0,212,255,0.18)",  text: "#00d4ff", glow: "rgba(0,212,255,0.08)" },
  amber:  { tag: "rgba(245,158,11,0.07)", border: "rgba(245,158,11,0.2)",  text: "#fbbf24", glow: "rgba(245,158,11,0.08)" },
  violet: { tag: "rgba(124,58,237,0.1)",  border: "rgba(124,58,237,0.25)", text: "#c4b5fd", glow: "rgba(124,58,237,0.08)" },
};

const NotableProjects = () => {
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
      // Use whichever delta is larger (trackpads send deltaX on horizontal swipe)
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
    scrollRef.current.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  };

  return (
    <div className="notable-section" id="notable">
      <div className="notable-header">
        <div>
          <span className="section-tag">// notable projects</span>
          <h2 className="notable-heading">Solving real world use cases</h2>
          <p className="notable-subtext">Production-style systems modeled on real problems at Cisco, Uber, Netflix, Airbnb, Pinterest and fintech</p>
        </div>
        <div className="notable-nav-btns">
          <button className="notable-nav-btn" onClick={() => scroll("left")} aria-label="scroll left">←</button>
          <button className="notable-nav-btn" onClick={() => scroll("right")} aria-label="scroll right">→</button>
        </div>
      </div>

      <div className="notable-scroll-track" ref={scrollRef} data-lenis-prevent>
        <div className="notable-cards-row">
          {notableProjects.map((project) => {
            const c = colorMap[project.color];
            return (
              <div key={project.id} className={`notable-card ${project.logo ? "has-logo" : ""}`} style={{ "--card-glow": c.glow } as React.CSSProperties}>
                {project.logo && (
                  <div className="notable-card-logo">
                    <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.title} />
                    <span className="notable-card-logo-hint">hover to view details</span>
                  </div>
                )}
                <div className="notable-card-inner">
                  <div className="notable-card-top">
                    <span className="notable-card-category" style={{ color: c.text, background: c.tag, borderColor: c.border }}>
                      {project.category}
                    </span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="notable-card-arrow" title="View on GitHub">↗</a>
                  </div>

                  <h3 className="notable-card-title">{project.title}</h3>
                  <div className="notable-card-usecase" style={{ color: c.text }}>
                    <span className="notable-usecase-icon">◆</span> {project.useCase}
                  </div>

                  <p className="notable-card-desc">{project.description}</p>

                  <div className="notable-card-metrics">
                    {project.metrics.map(m => (
                      <span key={m} className="notable-metric" style={{ borderColor: c.border, color: c.text }}>{m}</span>
                    ))}
                  </div>

                  <div className="notable-card-tech">
                    {project.technologies.split(", ").slice(0, 4).map(t => (
                      <span key={t} className="notable-tech-tag">{t.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="notable-end-spacer" aria-hidden="true" />
        </div>
      </div>

      <div className="notable-scroll-hint">
        <span>drag or use arrows to explore</span>
        <div className="notable-scroll-dots">
          {notableProjects.map((_, i) => <div key={i} className="notable-scroll-dot" />)}
        </div>
      </div>
    </div>
  );
};

export default NotableProjects;
