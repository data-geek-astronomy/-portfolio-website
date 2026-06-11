import "./styles/WhatIDo.css";
import { config } from "../config";

const WhatIDo = () => {
  return (
    <div className="whatido-section" id="skills">
      <div className="whatido-divider" />

      <div className="whatido-container">
        <span className="section-tag">// expertise</span>
        <h2 className="whatido-heading">What I build</h2>

        <div className="whatido-dual-identity">
          <div className="whatido-identity-card whatido-ai">
            <div className="whatido-identity-icon">🤖</div>
            <div className="whatido-identity-label">AI Engineer</div>
            <div className="whatido-identity-desc">End-to-end LLM systems, agentic workflows, RAG pipelines, and evaluation frameworks shipped to production</div>
          </div>
          <div className="whatido-identity-plus">+</div>
          <div className="whatido-identity-card whatido-data">
            <div className="whatido-identity-icon">⚡</div>
            <div className="whatido-identity-label">Data Engineer</div>
            <div className="whatido-identity-desc">Scalable data pipelines, feature stores, and distributed infrastructure processing billions of events daily</div>
          </div>
        </div>

        <div className="whatido-grid">
          <div className="whatido-card whatido-card-primary">
            <div className="whatido-card-glow" />
            <div className="whatido-card-header">
              <div className="whatido-card-number">01</div>
              <h3 className="whatido-card-title">{config.skills.develop.title}</h3>
            </div>
            <p className="whatido-card-desc">{config.skills.develop.details}</p>
            <div className="whatido-tools">
              {config.skills.develop.tools.map(t => (
                <span key={t} className="whatido-tool">{t}</span>
              ))}
            </div>
          </div>

          <div className="whatido-card whatido-card-secondary">
            <div className="whatido-card-header">
              <div className="whatido-card-number">02</div>
              <h3 className="whatido-card-title">{config.skills.design.title}</h3>
            </div>
            <p className="whatido-card-desc">{config.skills.design.details}</p>
            <div className="whatido-tools">
              {config.skills.design.tools.map(t => (
                <span key={t} className="whatido-tool whatido-tool-alt">{t}</span>
              ))}
            </div>
          </div>

          <div className="whatido-card whatido-card-tertiary">
            <div className="whatido-card-header">
              <div className="whatido-card-number">03</div>
              <h3 className="whatido-card-title">CLOUD AND INFRA</h3>
            </div>
            <p className="whatido-card-desc">AWS SageMaker, EC2, Lambda, S3, Redshift · GCP Vertex AI · Docker, Kubernetes · CI/CD on Jenkins and GitLab · MLflow experiment tracking.</p>
            <div className="whatido-tools">
              {["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "MLflow", "Airflow", "FastAPI", "Kafka"].map(t => (
                <span key={t} className="whatido-tool whatido-tool-cloud">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
