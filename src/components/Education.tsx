import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-container">
        <span className="section-tag">// education</span>
        <h2 className="education-heading">Academic Foundation</h2>
        
        <div className="education-grid">
          <div className="education-card">
            <div className="education-degree">
              M.S. Data Science, Analytics and Engineering
            </div>
            <div className="education-school">Arizona State University</div>
            <div className="education-period">2024 to 2026</div>
            <div className="education-details">
              Focus on large-scale data systems, machine learning, and AI engineering
            </div>
          </div>

          <div className="education-card">
            <div className="education-degree">
              B.Tech Electronics and Communication Engineering
            </div>
            <div className="education-school">NIT Calicut</div>
            <div className="education-period">2018 to 2022</div>
            <div className="education-details">
              Foundation in signal processing, embedded systems, and computer architecture
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
