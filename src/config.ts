export const config = {
    developer: {
        name: "Aravind",
        fullName: "Aravind Kumar Nalukurthi",
        title: "AI Engineer",
        description: "AI Engineer building end-to-end intelligent systems — LLM orchestration, agentic pipelines, RAG, and production deployment. 3+ years of shipped systems with measurable impact."
    },
    social: {
        github: "aravindkumar-nalukurthi",
        email: "aravind@example.com",
        location: "San Francisco, CA"
    },
    about: {
        title: "About Me",
        description: "AI Engineer with 3+ years building and deploying end-to-end AI systems for concrete production problems — insurance claims automation, ad auction fraud detection, and research question answering. My expertise covers LLM orchestration, RAG pipelines, agentic systems, Claude and OpenAI APIs, evaluation frameworks, and production deployment. Every system I build is grounded in shipped code and measurable impact."
    },
    experiences: [
        {
            position: "AI Engineer Intern",
            company: "Optimalex",
            period: "Jan 2026 – May 2026",
            location: "New York City, NY",
            description: "Designed agentic AI systems for insurance claims automation using Claude API, GPT-4, and LangChain — processing 10K+ monthly claims with 24.6% automation consistency improvement.",
            responsibilities: [
                "Built production claims decision systems with LLM evaluation + RAG pipelines, reducing downstream errors by 18%",
                "Engineered intelligent claims routing combining Airflow orchestration with multi-step LLM reasoning",
                "Implemented human-in-the-loop checkpoints for complex high-value cases, cutting manual handoffs by 40%",
                "Built safety guardrails and observability tracing for regulated insurance environments"
            ],
            technologies: ["Claude API", "GPT-4", "LangChain", "RAG", "Airflow", "FastAPI", "Vector DB"]
        },
        {
            position: "Research Assistant, AI Engineering",
            company: "Arizona State University",
            period: "Nov 2024 – May 2025",
            location: "Tempe, AZ",
            description: "Built a research assistant system for academic question answering using Python, PyTorch, and RAG pipelines — improving answer relevance by 34% across student queries.",
            responsibilities: [
                "Designed evaluation infrastructure with held-out benchmarks, model-graded scoring, and failure analysis loops",
                "Raised verified reasoning accuracy by 72% across iterated model versions on evaluation sets",
                "Shipped system through three iterated releases in one semester, collaborating with faculty and students",
                "Applied fine-tuning, retrieval grounding, and evaluation harnesses over a course knowledge base"
            ],
            technologies: ["Python", "PyTorch", "RAG", "Fine-Tuning", "Evaluation Frameworks", "Pinecone"]
        },
        {
            position: "Data and AI Engineer, Uber Ads",
            company: "Uber Technologies (Via Nineleaps)",
            period: "Jul 2022 – Jul 2024",
            location: "Remote",
            description: "Built ML and optimization models for the Uber Ads platform — processing 50M+ daily auction events to detect bid fraud, anomalies, and inefficiencies.",
            responsibilities: [
                "Engineered scalable data infrastructure for Uber Ads auction analysis with Python, SQL, and PySpark",
                "Deployed production fraud and bidding models with full observability, monitoring, and CI/CD pipelines",
                "Built feature stores supporting fraud model training and eCPM optimization at scale",
                "Managed end-to-end inference pipelines on Jenkins and GitLab, iterating on auction quality continuously"
            ],
            technologies: ["Python", "PySpark", "TensorFlow", "XGBoost", "Kafka", "AWS Redshift", "Airflow"]
        },
        {
            position: "ML Engineer Intern",
            company: "Samsung R&D Institute India",
            period: "May 2021 – Jul 2021",
            location: "Bangalore, India",
            description: "Built deep learning inference models for Galaxy S24 computational photography — achieving real-time Exynos inference through quantization and pruning, shipped to millions of devices.",
            responsibilities: [
                "Optimized image classification, noise reduction, and detail preservation models for mobile deployment",
                "Applied quantization and pruning techniques to achieve real-time inference on Exynos hardware",
                "Shipped production-ready models impacting millions of Samsung Galaxy S24 devices globally"
            ],
            technologies: ["PyTorch", "TensorFlow", "Model Quantization", "Pruning", "C++", "Exynos"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Agentic Claims Decisioning",
            category: "LLM / Agentic AI",
            technologies: "Claude API, GPT-4, LangChain, LangGraph, MCP Servers, RAG, Vector DB, FastAPI",
            image: "/images/drishti.png",
            description: "End-to-end agentic system for insurance claims decisioning combining Claude and GPT-4 orchestration with LangGraph, RAG retrieval grounding decisions in policy data, tool use for lookups, human-in-the-loop checkpoints, safety guardrails, and evaluation harnesses — validated on 10K+ monthly claims."
        },
        {
            id: 2,
            title: "Ads Bid Health Monitor",
            category: "Fraud Detection / ML",
            technologies: "Python, PySpark, Kafka, Airflow, Isolation Forest, DBSCAN, XGBoost, AWS Redshift",
            image: "/images/votechain.png",
            description: "Applied Isolation Forest and DBSCAN anomaly detection across 500M+ daily Uber auctions — surfacing a 34% eCPM variance driver and an 8x fraud signal invisible to rule-based systems. XGBoost model achieved AUC 0.94."
        },
        {
            id: 3,
            title: "ASU Research Assistant",
            category: "RAG / NLP",
            technologies: "Python, PyTorch, RAG, Fine-Tuning, Pinecone, Evaluation Frameworks",
            image: "/images/eie.png",
            description: "Research assistant system for academic question answering with RAG pipelines over course knowledge base. Evaluation infrastructure raised verified reasoning accuracy by 72% across three iterated model releases."
        }
    ],
    contact: {
        email: "aravindkumar@example.com",
        github: "https://github.com/aravindkumar-nalukurthi",
        linkedin: "https://linkedin.com/in/aravindkumar-nalukurthi",
        twitter: "https://x.com/aravindkumar_ai",
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com"
    },
    skills: {
        develop: {
            title: "LLM & AGENTIC AI",
            description: "Orchestrating intelligent systems at scale",
            details: "Claude API, GPT-4, LangChain, LangGraph, MCP Servers, Tool Use, Multi-Step Reasoning, RAG Pipelines, Vector DBs, Evaluation Frameworks, Safety Guardrails, Hallucination Detection.",
            tools: ["Claude API", "GPT-4", "LangChain", "LangGraph", "MCP Servers", "RAG", "Pinecone", "Weaviate", "PEFT / LoRA", "Evaluation Frameworks"]
        },
        design: {
            title: "ML & DATA ENGINEERING",
            description: "Production ML systems with measurable impact",
            details: "TensorFlow, PyTorch, XGBoost, Scikit-learn, Isolation Forest, PySpark, Kafka, Airflow, AWS SageMaker, MLflow, Docker, Kubernetes.",
            tools: ["PyTorch", "TensorFlow", "XGBoost", "PySpark", "Kafka", "Airflow", "AWS / GCP", "Docker", "MLflow", "CI/CD"]
        }
    }
};
