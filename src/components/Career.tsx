import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <div className="career-section" id="experience">
      <div className="career-container">
        <span className="section-tag">// experience</span>
        <h2 className="career-heading">Where I've worked</h2>

        <div className="career-timeline">
          {config.experiences.map((exp, i) => (
            <div key={i} className="career-item">
              <div className="career-item-line">
                <div className="career-item-dot" />
              </div>

              <div className="career-item-content">
                <div className="career-item-header">
                  <div className="career-item-meta">
                    <h3 className="career-item-role">{exp.position}</h3>
                    <div className="career-item-company">
                      <span className="career-item-co-name">{exp.company}</span>
                      <span className="career-item-sep">·</span>
                      <span className="career-item-location">{exp.location}</span>
                    </div>
                  </div>
                  <span className="career-item-period">{exp.period}</span>
                </div>

                <p className="career-item-desc">{exp.description}</p>

                <ul className="career-item-list">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="career-item-bullet">{r}</li>
                  ))}
                </ul>

                <div className="career-item-tags">
                  {exp.technologies.map(t => (
                    <span key={t} className="career-item-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
