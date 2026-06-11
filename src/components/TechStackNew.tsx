import "./styles/TechStackNew.css";
import Marquee from "react-fast-marquee";

// Core AI/ML stack Aravind uses — tightly curated
const aiStack = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "PySpark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
];

const llmStack = [
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

interface TechItem { name: string; icon: string; }

const TechItem = ({ item }: { item: TechItem }) => (
  <div className="techstack-pill">
    <img src={item.icon} alt={item.name} className="techstack-pill-icon" />
    <span className="techstack-pill-name">{item.name}</span>
  </div>
);

const TechStackNew = () => {
  return (
    <div className="techstack-new" id="techstack">
      {/* Background video/glow */}
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay" />
      </div>

      <div className="techstack-content">
        <span className="section-tag">// tools & technologies</span>
        <h2 className="techstack-heading">Tech Stack</h2>
        <p className="techstack-subtext">
          Production systems span LLM APIs, classical ML, and distributed data infrastructure.
        </p>

        {/* Row 1 */}
        <div className="techstack-marquee-wrap">
          <Marquee speed={35} gradient={false} pauseOnHover>
            {aiStack.map((item) => (
              <TechItem key={item.name} item={item} />
            ))}
          </Marquee>
        </div>

        {/* Row 2 — opposite direction */}
        <div className="techstack-marquee-wrap">
          <Marquee speed={28} gradient={false} pauseOnHover direction="right">
            {llmStack.map((item) => (
              <TechItem key={item.name} item={item} />
            ))}
          </Marquee>
        </div>

        {/* LLM focus badges */}
        <div className="techstack-focus">
          {["Claude API", "GPT-4 / OpenAI", "LangChain", "LangGraph", "MCP Servers", "Pinecone", "Weaviate", "PEFT / LoRA", "Eval Frameworks"].map(t => (
            <span key={t} className="techstack-focus-badge">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
