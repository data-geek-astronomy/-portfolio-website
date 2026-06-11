import "./styles/About.css";
import { config } from "../config";

const About = () => {
  const highlights = [
    { icon: "🤖", label: "LLM Orchestration", desc: "Claude, GPT-4, LangChain, LangGraph" },
    { icon: "🔍", label: "RAG Pipelines", desc: "Pinecone, Weaviate, Hybrid Retrieval" },
    { icon: "⚡", label: "Data Engineering", desc: "PySpark, Kafka, Airflow, Redshift" },
    { icon: "🛡️", label: "Eval & Safety", desc: "Guardrails, model-graded scoring" },
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <span className="section-tag">// about me</span>
          <h2 className="about-heading">
            Engineering AI that<br />
            <span className="about-heading-accent">delivers results.</span>
          </h2>
          <p className="about-body">{config.about.description}</p>

          {/* Dual identity badges */}
          <div className="about-identity-badges">
            <div className="about-id-badge about-id-badge-ai">
              <span className="about-id-icon">🤖</span>
              <div>
                <div className="about-id-title">AI Engineer</div>
                <div className="about-id-sub">LLMs · Agentic Systems · RAG</div>
              </div>
            </div>
            <div className="about-id-badge about-id-badge-data">
              <span className="about-id-icon">⚡</span>
              <div>
                <div className="about-id-title">Data Engineer</div>
                <div className="about-id-sub">Spark · Kafka · Pipelines · ETL</div>
              </div>
            </div>
          </div>

          {/* Education — pushed down with extra spacing so it clears the 3D character */}
          <div className="about-edu">
            <div className="about-edu-item">
              <span className="about-edu-degree">M.S. Data Science, Analytics and Engineering</span>
              <span className="about-edu-school">Arizona State University · 2024 to 2026</span>
            </div>
            <div className="about-edu-item">
              <span className="about-edu-degree">B.Tech Electronics and Communication Engineering</span>
              <span className="about-edu-school">NIT Calicut · 2018 to 2022</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          {highlights.map((h) => (
            <div key={h.label} className="about-card">
              <span className="about-card-icon">{h.icon}</span>
              <div>
                <div className="about-card-label">{h.label}</div>
                <div className="about-card-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
