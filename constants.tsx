
import { Project, Skill, Experience, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Radhika Rajagoli",
  role: "AI/ML Intern",
  email: "officialradhika111@gmail.com",
  location: "Belagavi",
  linkedin: "https://www.linkedin.com/in/radhikarajgolib17849259/",
  github: "https://github.com/Radhika-RR",
  about: "Final-year Computer Science and Engineering student and AI/ML Intern at VTU’s VRIF. I specialize in building intelligent systems using Machine Learning and modern web technologies. My expertise lies in bridging the gap between complex AI models and user-centric applications, with a strong focus on Natural Language Processing and Agentic AI workflows."
};

export const PROJECTS: Project[] = [
  {
    id: "bitcoin-agent",
    title: "Agentic AI Bitcoin Predictor",
    description: "Architected an autonomous AI agent using Tool Calling to predict Bitcoin trends. Integrated real-time market data via CoinGecko API and implemented rule-based reasoning for financial forecasting.",
    tags: ["Agentic AI", "Python", "Tool Calling", "CoinGecko API"],
    links: { github: "https://github.com/Radhika-RR" }
  },
  {
    id: "news-summarizer",
    title: "AI News Summarizer",
    description: "A sophisticated NLP tool that aggregates global news, performs multi-lingual translation, and generates concise summaries using state-of-the-art transformer models.",
    tags: ["NLP", "Transformers", "Python", "Summarization"],
    links: { github: "https://github.com/Radhika-RR" }
  },
  {
    id: "cyber-chatbot",
    title: "Cybersecurity LLM Chatbot",
    description: "Developed a specialized security assistant that leverages system-prompt engineering to provide domain-specific advice on threat landscapes and mitigation strategies.",
    tags: ["LLM", "React.js", "Security AI", "System Prompts"],
    links: { github: "https://github.com/Radhika-RR" }
  },
  {
    id: "rag-app",
    title: "RAG-based Semantic Search",
    description: "Engineered a Retrieval-Augmented Generation (RAG) system using Typesense and LangChain for sub-second semantic search over large unstructured datasets.",
    tags: ["RAG", "Typesense", "LangChain", "Vector DB"],
    links: { github: "https://github.com/Radhika-RR" }
  },
  {
    id: "spam-detection",
    title: "ML Spam Detection",
    description: "Built and deployed a supervised learning model for high-accuracy text classification, utilizing TF-IDF vectorization and Scikit-learn classifiers.",
    tags: ["Scikit-learn", "NLP", "Machine Learning", "Pandas"],
    links: { github: "https://github.com/Radhika-RR" }
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript (ES6+)", "C", "SQL"]
  },
  {
    category: "AI / ML Frameworks",
    items: ["TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "Pandas", "NumPy"]
  },
  {
    category: "Web Development",
    items: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "FastAPI"]
  },
  {
    category: "Developer Tools",
    items: ["GitHub", "Docker", "Postman", "VS Code", "Typesense"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "AI/ML Intern",
    company: "VTU’s VRIF (Visvesvaraya Research and Innovation Foundations)",
    period: "Aug 2024 - Present",
    description: [
      "Developing Generative AI applications using large language models and RAG pipelines.",
      "Optimizing machine learning models for real-world deployment on cloud platforms.",
      "Collaborating on full-stack web solutions using the MERN stack for internal research tools."
    ]
  }
];

export const EDUCATION: Education = {
  degree: "B.E. in Computer Science & Engineering",
  institution: "Visvesvaraya Technological University",
  period: "2022 - 2026",
  gpa: "8.5 CGPA"
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Cybersecurity Threat and Landscape", issuer: "Microsoft-LinkedIn" },
  { name: "Cybersecurity Foundation", issuer: "Microsoft-LinkedIn" },
  { name: "Microsoft Copilot for Security", issuer: "Microsoft-LinkedIn" },
  { name: "MongoDB Certified Developer", issuer: "MongoDB" },
  { name: "Penetration Testing", issuer: "Infosys Springboard" }
];

export const ACHIEVEMENTS = [
  "2nd Place - College Level Ideathon 2024",
  "Organized 'Code Prahari' Technical Event",
  "Active Participant in GDG Hackathons"
];
