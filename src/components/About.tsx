import "./styles/About.css";
import { config } from "../config";

const About = () => {
  const highlights = [
    { icon: "🤖", label: "LLM Orchestration", desc: "Claude, GPT-4, LangChain, LangGraph" },
    { icon: "🔍", label: "RAG Pipelines", desc: "Pinecone, Weaviate, Hybrid Retrieval" },
    { icon: "⚙️", label: "Production ML", desc: "50M+ daily events, 0.94 AUC" },
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
          <div className="about-edu">
            <div className="about-edu-item">
              <span className="about-edu-degree">M.S. Data Science, Analytics & Engineering</span>
              <span className="about-edu-school">Arizona State University · 2024–2026</span>
            </div>
            <div className="about-edu-item">
              <span className="about-edu-degree">B.Tech Electronics & Communication Engineering</span>
              <span className="about-edu-school">NIT Calicut · 2018–2022</span>
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
