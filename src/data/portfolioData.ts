export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  category: 'GenAI & RAG' | 'Healthcare AI' | 'Computer Vision' | 'Machine Learning';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  highlights?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badgeUrl?: string;
  date?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const personalDetails = {
  name: "KARUMANCHI HEMANTH",
  title: "AI/ML Engineer · Generative AI & Computer Vision",
  location: "Hyderabad, Telangana, India",
  email: "karumanchihemanth08@gmail.com",
  phone: "+91 9573092077",
  summary: "Entry-level AI/ML Engineer with hands-on experience building and deploying production-oriented AI systems, RAG applications, and Computer Vision solutions. Proficient in Python, LangChain, Gemini API, Pinecone, FastAPI, TensorFlow, PostgreSQL, and Docker.",
  gateQualification: "Qualified GATE Data Science & Artificial Intelligence (DA) 2026",
  github: "https://github.com/HEMANTH-KARUMANCHI",
  linkedin: "https://www.linkedin.com/in/hemanth-karumanchi-a1266022a/",
  kaggle: "https://www.kaggle.com/hemanthkarumanchi08",
  resumeUrl: "https://drive.google.com/file/d/1gauky8aPU1AIQPtwMmzcuF5xhonXQHAn/view?usp=sharing"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "LLM & Generative AI",
    iconName: "sparkles",
    skills: [
      { name: "Generative AI", highlight: true },
      { name: "RAG Architecture", highlight: true },
      { name: "LangChain", highlight: true },
      { name: "Gemini API & Embeddings", highlight: true },
      { name: "Pinecone Vector DB", highlight: true },
      { name: "Prompt Engineering" },
      { name: "LLM Applications" },
      { name: "Hugging Face" }
    ]
  },
  {
    title: "AI, ML & Computer Vision",
    iconName: "brain",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Deep Learning", highlight: true },
      { name: "YOLOv8 & OpenCV", highlight: true },
      { name: "TensorFlow & PyTorch", highlight: true },
      { name: "Scikit-learn" },
      { name: "Computer Vision" },
      { name: "NLP" },
      { name: "Keras" }
    ]
  },
  {
    title: "Backend & Web Frameworks",
    iconName: "server",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Django" },
      { name: "Streamlit", highlight: true },
      { name: "React" },
      { name: "JWT Authentication" }
    ]
  },
  {
    title: "Data Engineering & Analytics",
    iconName: "database",
    skills: [
      { name: "Python", highlight: true },
      { name: "PostgreSQL & SQL", highlight: true },
      { name: "Pandas & NumPy", highlight: true },
      { name: "ETL Pipelines" },
      { name: "Feature Engineering" },
      { name: "Power BI & Data Viz" }
    ]
  },
  {
    title: "Deployment & Tools",
    iconName: "cpu",
    skills: [
      { name: "Docker", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Linux OS" },
      { name: "Streamlit Cloud" },
      { name: "C++ & Java (Basic)" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "Infosys Springboard",
    period: "July 2026 – Sep 2026",
    location: "Remote / Hyderabad",
    description: [
      "Developed AI/ML solutions using Python and machine learning techniques for real-world healthcare applications.",
      "Designed and implemented end-to-end ML workflows covering data preprocessing, model integration, prediction, and risk evaluation.",
      "Applied AI-driven decision-support techniques to analyze patient health information and medical indicators.",
      "Integrated ML predictive capabilities into application workflows and collaborated on building AI-powered healthcare solutions."
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "FastAPI", "Data Preprocessing", "Healthcare Analytics"]
  },
  {
    role: "Software & AI Intern",
    company: "Technical Hub",
    period: "Jul 2022 – Nov 2022",
    location: "Kakinada, AP",
    description: [
      "Developed AI and software applications using Python, TensorFlow, Scikit-learn, and OpenCV.",
      "Implemented data preprocessing pipelines, feature engineering, model evaluation, and hyperparameter optimization for ML workflows.",
      "Applied modern software engineering practices to integrate trained AI models into functional application workflows."
    ],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Computer Vision", "Software Development"]
  }
];

export const projects: Project[] = [
  {
    title: "Enterprise Knowledge Assistant – RAG Application",
    description: "Built and deployed an enterprise RAG application using Python, LangChain, Gemini, Pinecone, and Streamlit for document-based question answering.",
    longDescription: "Built and deployed an enterprise RAG application using Python, LangChain, Gemini, Pinecone, and Streamlit for document-based question answering.",
    category: "GenAI & RAG",
    tags: ["Generative AI", "RAG", "LangChain", "Gemini API", "Pinecone", "Streamlit", "Python"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/enterprise-knowledge-assistant",
    liveUrl: "https://khemanth-enterprise-rag.streamlit.app/",
    featured: true,
    highlights: [
      "Implemented PDF/TXT ingestion, recursive chunking, Gemini embeddings, Pinecone vector indexing, and top-k semantic retrieval.",
      "Generated context-grounded responses using relevance thresholding, with source document and page references.",
      "Deployed on Streamlit Community Cloud with secure API key management and GitHub-based deployment."
    ]
  },
  {
    title: "MedAssist AI – AI Healthcare Platform",
    description: "Developed an AI-powered healthcare platform for symptom analysis, disease prediction, patient risk assessment, and healthcare guidance.",
    longDescription: "Developed an AI-powered healthcare platform for symptom analysis, disease prediction, patient risk assessment, and healthcare guidance.",
    category: "Healthcare AI",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning", "REST APIs", "Docker", "JWT"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/MedAssist-AI",
    liveUrl: "http://13.49.238.36:3000/",
    featured: true,
    highlights: [
      "Implemented ML-based disease prediction with top-condition probability scores and prediction history using PostgreSQL.",
      "Built a healthcare recommendation and advisory workflow covering preventive guidance, lifestyle/dietary suggestions, and risk-based recommendations.",
      "Integrated Python, FastAPI, React, PostgreSQL, REST APIs, and JWT authentication, with Docker-based containerization and deployment."
    ]
  },
  {
    title: "AI Resume & Interview Copilot",
    description: "Developed a Gemini-powered GenAI application using Python and Streamlit for resume analysis and personalized interview preparation.",
    longDescription: "Developed a Gemini-powered GenAI application using Python and Streamlit for resume analysis and personalized interview preparation.",
    category: "GenAI & RAG",
    tags: ["GenAI", "LLMs", "Gemini API", "Streamlit", "NLP", "Prompt Engineering", "Python"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/AI-Resume-Interview-Copilot",
    liveUrl: "https://ai-resume-interview-copilot-ogdm8kkisoze6tpnj3hypn.streamlit.app/",
    featured: true,
    highlights: [
      "Implemented PDF resume parsing, skill extraction, job-description analysis, prompt engineering, and LLM-based recommendation workflows.",
      "Generated personalized resume suggestions and interview preparation based on extracted skills and job requirements.",
      "Deployed on Streamlit Cloud with secure API key management and GitHub deployment workflows."
    ]
  },
  {
    title: "Smart Helmet Enforcement System",
    description: "Developed a real-time helmet detection and compliance monitoring system using YOLOv8, OpenCV, and Python.",
    longDescription: "Developed a real-time helmet detection and compliance monitoring system using YOLOv8, OpenCV, and Python.",
    category: "Computer Vision",
    tags: ["YOLOv8", "OpenCV", "Python", "Django", "Computer Vision", "Deep Learning", "Edge AI"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/Smart-Helmet-Enforcement-System",
    featured: true,
    highlights: [
      "Built computer vision pipelines for rider detection, helmet classification, and automated violation monitoring.",
      "Integrated a Django backend for video processing, alert generation, and system management workflows.",
      "Applied object detection, image processing, and real-time computer vision for an edge-oriented AI application."
    ]
  },
  {
    title: "Brain Tumor Classification",
    description: "Deep learning classification system for detecting brain tumors from MRI scans using MobileNetV2 transfer learning.",
    longDescription: "Medical computer vision application leveraging MobileNetV2 with transfer learning techniques to classify MRI brain scans, achieving high accuracy in detecting tumor presence to assist early diagnosis.",
    category: "Healthcare AI",
    tags: ["Deep Learning", "MobileNetV2", "Transfer Learning", "TensorFlow", "Keras", "OpenCV", "Python"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/Brain_Tumor_Classification",
    featured: false,
    highlights: [
      "MobileNetV2 transfer learning architecture for MRI image classification",
      "Data augmentation and image preprocessing pipeline for high model precision"
    ]
  },
  {
    title: "Driver Drowsiness Detection System",
    description: "Real-time driver fatigue monitoring system using computer vision to track eye closure state and issue safety alerts.",
    longDescription: "AI safety application monitoring real-time webcam video feeds for facial landmarks and eye aspect ratio (EAR) to detect drowsiness and instantly trigger auditory/visual alerts to prevent road accidents.",
    category: "Computer Vision",
    tags: ["Computer Vision", "OpenCV", "Deep Learning", "Facial Landmarks", "Python"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/Driver_Drowsyness-_Detection_System",
    featured: false,
    highlights: [
      "Real-time facial landmark tracking & eye aspect ratio (EAR) fatigue monitoring",
      "Instant warning triggers for early accident prevention"
    ]
  },
  {
    title: "Diabetes Predictor App",
    description: "End-to-end machine learning web application for clinical diabetes risk prediction and patient data analysis.",
    longDescription: "ML pipeline utilizing logistic regression trained on clinical health measurements to evaluate diabetes risk, packaged into an interactive Streamlit application for fast diagnostic inference.",
    category: "Machine Learning",
    tags: ["Machine Learning", "Scikit-Learn", "Logistic Regression", "Streamlit", "Python"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/Daibetes_Predictor_App",
    featured: false,
    highlights: [
      "Clinical risk estimation pipeline built with Scikit-learn",
      "Interactive Streamlit interface for instant patient risk scoring"
    ]
  },
  {
    title: "AI Career Advisor Chatbot",
    description: "LLM-driven career guidance chatbot delivering personalized advice based on user skills and aspirations.",
    longDescription: "Generative AI conversational assistant utilizing LLMs to evaluate user background, skills, and goals to provide tailored career pathways and skill recommendation roadmaps.",
    category: "GenAI & RAG",
    tags: ["GenAI", "LLM", "Python", "Chatbot", "Streamlit"],
    githubUrl: "https://github.com/HEMANTH-KARUMANCHI/ai-career-advisor-chatbot",
    featured: false,
    highlights: [
      "Conversational AI advisor tailored for career planning",
      "Skill analysis and learning path recommendation prompts"
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Aditya Engineering College, Kakinada",
    period: "2020 – 2024",
    grade: "CGPA: 8.1 / 10",
    highlights: [
      "Qualified GATE Data Science & Artificial Intelligence (DA) 2026",
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks"
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Certified"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Certified"
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Microsoft",
    date: "Certified"
  }
];
