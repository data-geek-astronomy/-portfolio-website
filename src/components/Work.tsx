import "./styles/Work.css";
import { config } from "../config";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <span className="section-tag">// projects</span>
        <h2 className="work-heading">Shipped systems</h2>

        <div className="work-grid">
          {config.projects.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-card-inner">
                <div className="work-card-top">
                  <span className="work-card-category">{project.category}</span>
                  <div className="work-card-arrow">↗</div>
                </div>

                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-desc">{project.description}</p>

                <div className="work-card-tech">
                  {project.technologies.split(", ").slice(0, 5).map(t => (
                    <span key={t} className="work-card-tech-tag">{t.trim()}</span>
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

export default Work;
