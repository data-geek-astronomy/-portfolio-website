export const config = {
    developer: {
        name: "Aravind",
        fullName: "Aravind Kumar Nalukurthi",
        title: "AI Engineer",
        description: "AI Engineer building end-to-end intelligent systems — LLM orchestration, agentic pipelines, RAG, and production deployment. 3+ years of shipped systems with measurable impact."
    },
    social: {
        github: "https://github.com/data-geek-astronomy",
        email: "aravind.kumar.nalukurthi@gmail.com",
        linkedin: "https://www.linkedin.com/in/aravind-kumar-nalukurthi-45b2a41b2/",
        phone: "480-931-1899",
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
            github: "https://github.com/data-geek-astronomy",
            description: "End-to-end agentic system for insurance claims decisioning combining Claude and GPT-4 orchestration with LangGraph, RAG retrieval grounding decisions in policy data, tool use, human-in-the-loop checkpoints, safety guardrails, and evaluation harnesses — validated on 10K+ monthly claims."
        },
        {
            id: 2,
            title: "Ads Bid Health Monitor",
            category: "Fraud Detection / ML",
            technologies: "Python, PySpark, Kafka, Airflow, Isolation Forest, DBSCAN, XGBoost, AWS Redshift",
            github: "https://github.com/data-geek-astronomy/ads-bid-health-monitor",
            description: "Production-style anomaly detection system monitoring advertiser bidding behavior in real time. Applied Isolation Forest and DBSCAN across 500M+ daily auctions — surfacing a 34% eCPM variance driver and an 8x fraud signal invisible to rule-based systems. XGBoost model achieved AUC 0.94."
        },
        {
            id: 3,
            title: "Amazon Ad Auction Simulator",
            category: "Simulation / ML",
            technologies: "Python, GSP Auction Engine, CTR Modelling, Floor Pricing, Revenue Optimization",
            github: "https://github.com/data-geek-astronomy/ad-auction-simulator",
            description: "Simulation of Amazon Sponsored Products' Generalized Second Price (GSP) auction engine. Explores how CTR model quality, competition depth, and floor pricing affect auction efficiency and revenue outcomes — built to study ad marketplace mechanics at scale."
        },
        {
            id: 4,
            title: "Multi-Modal Vision Pipeline",
            category: "Computer Vision / Deep Learning",
            technologies: "Python, DETR, DeepLabV3+, MoCo, DANN, PyTorch, Depth Estimation, Sensor Fusion",
            github: "https://github.com/data-geek-astronomy/multi-modal-vision-pipeline",
            description: "Comprehensive computer vision system combining 2D object detection (DETR, F1=0.89), semantic segmentation (DeepLabV3+, 19-class Cityscapes), depth estimation, and sensor fusion with self-supervised learning (MoCo) and domain adaptation (DANN)."
        },
        {
            id: 5,
            title: "Chem RAG",
            category: "RAG / GenAI",
            technologies: "Python, Google Gemini, RAG, Hybrid Search, Vector DB, LangChain",
            github: "https://github.com/data-geek-astronomy/chem-rag",
            description: "GenAI application extracting chemical properties (boiling points, flash points, flammability limits) from technical literature using RAG with Google Gemini and hybrid search. Processes millions of pages of SDS sheets, handbooks, and technical documents for on-demand structured property extraction."
        },
        {
            id: 6,
            title: "Human Emotion Recognition",
            category: "NLP / Audio / Deep Learning",
            technologies: "Python, Deep Learning, NLP, Audio Processing, TensorFlow, Keras",
            github: "https://github.com/data-geek-astronomy/Human-Emotion-Recognition-from-Text-and-Voice-Data",
            description: "Cutting-edge system recognizing human emotions from both text and voice data using deep learning, NLP, and audio processing — achieving 87% accuracy. Applications span human-computer interaction, mental health monitoring, and sentiment-aware interfaces."
        },
        {
            id: 7,
            title: "Breast Cancer Classification",
            category: "Medical AI / Deep Learning",
            technologies: "Python, TensorFlow, Keras, Transfer Learning, Histopathological Imaging",
            github: "https://github.com/data-geek-astronomy/Breast-Cancer-Classification",
            description: "Deep learning model for classifying benign and malignant breast tissue from histopathological images using transfer learning with TensorFlow and Keras — built for high-accuracy medical image classification with clinical applicability."
        },
        {
            id: 8,
            title: "Twitter Sentiment Analysis",
            category: "NLP / Social Analytics",
            technologies: "Python, NLP, Twitter API, Sentiment Analysis, TextBlob, VADER",
            github: "https://github.com/data-geek-astronomy/twitter-sentimental-analysis",
            description: "Real-time sentiment analysis engine that analyzes tweets about any event or topic to measure public sentiment polarity — positive, negative, or neutral. Built to track sentiment trends around breaking news, product launches, and social movements."
        },
        {
            id: 9,
            title: "Netflix Originals EDA",
            category: "Data Analysis / EDA",
            technologies: "Python, Pandas, Matplotlib, Seaborn, Jupyter, NumPy",
            github: "https://github.com/data-geek-astronomy/netflix_eda",
            description: "Exploratory data analysis on Netflix Originals dataset uncovering insights on genres, runtimes, premiere dates, IMDb scores, and language distribution — identifying content strategy patterns and viewership signals across the Netflix library."
        },
        {
            id: 10,
            title: "Airbnb EDA",
            category: "Data Analysis / EDA",
            technologies: "Python, Pandas, NumPy, Matplotlib, Seaborn, Missingno, Jupyter",
            github: "https://github.com/data-geek-astronomy/airbnb_eda",
            description: "In-depth EDA on Airbnb listing data identifying pricing trends, location-based patterns, availability insights, and host behavior — using advanced visualizations to surface actionable insights for hosts and travelers."
        },
        {
            id: 11,
            title: "Diabetes Prediction",
            category: "Healthcare ML",
            technologies: "Python, Scikit-learn, Pandas, Logistic Regression, Random Forest, Jupyter",
            github: "https://github.com/data-geek-astronomy/Diabetes-prediction",
            description: "ML classification model predicting diabetes onset based on patient health metrics. Trained on the Pima Indians Diabetes dataset using logistic regression and random forest — with feature importance analysis and model evaluation for clinical decision support."
        },
        {
            id: 12,
            title: "Iris Flower Classification",
            category: "ML / Classification",
            technologies: "Python, Scikit-learn, Pandas, SVM, KNN, Decision Tree, Jupyter",
            github: "https://github.com/data-geek-astronomy/Iris-Flower-Classification",
            description: "Classic multi-class flower classification using the Iris dataset — comparing SVM, KNN, and Decision Tree classifiers with comprehensive evaluation metrics. A benchmark exploration of supervised learning fundamentals and model selection."
        }
    ],
    contact: {
        email: "aravind.kumar.nalukurthi@gmail.com",
        phone: "480-931-1899",
        github: "https://github.com/data-geek-astronomy",
        linkedin: "https://www.linkedin.com/in/aravind-kumar-nalukurthi-45b2a41b2/",
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
