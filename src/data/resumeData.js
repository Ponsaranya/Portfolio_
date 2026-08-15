// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site —
// every component reads from these objects, nothing is hardcoded elsewhere.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ponsaranya R",
  headline: "AI/ML Engineer & Software Developer",
  subheadline:
    "Computer Science graduate building LLM-powered applications and Python automation systems.",
  location: "Chennai, India",
  email: "ponsaranya2004@gmail.com",
  phone: "+91 63743 93780",
  linkedin: "https://www.linkedin.com/in/ponsaranya-r/",
  linkedinLabel: "linkedin.com/in/ponsaranya-r",
  github: "https://github.com/Ponsaranya",
  githubLabel: "github.com/Ponsaranya",
  status: "Open to AI/ML & Software Engineer roles",
};

export const summary = `Computer Science graduate with 1 year of experience at Standard Chartered, developing Python-based automation and AI-powered solutions for enterprise workflows. Experienced in building LLM-based applications, intelligent automation solutions, and Generative AI applications. Passionate about building scalable AI systems that solve real-world business challenges.`;

export const aboutHighlights = [
  {
    label: "Experience",
    detail: "1 year at Standard Chartered Global Business Services, Technology apprenticeship.",
  },
  {
    label: "AI/ML focus",
    detail: "LLM applications, RAG pipelines, prompt engineering, and PyTorch fundamentals via a Data Science & AI Bootcamp.",
  },
  {
    label: "Automation",
    detail: "Python-based automation for enterprise governance, documentation, and approval workflows.",
  },
  {
    label: "Foundation",
    detail: "B.Tech in Computer Science and Engineering (IT specialization), SRM University — CGPA 9.25/10.0.",
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C++", "C", "SQL"],
  },
  {
    category: "Generative AI",
    items: ["LLMs", "Prompt Engineering", "RAG", "Deep Learning", "LangChain", "Hugging Face", "AI Agents"],
  },
  {
    category: "Libraries & Frameworks",
    items: ["NumPy", "Pandas", "Matplotlib", "Streamlit", "BeautifulSoup"],
  },
  {
    category: "Backend",
    items: ["REST APIs", "SQLite"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure DevOps", "AWS Cloud Foundations"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "GitHub Copilot", "Jupyter Notebook"],
  },
];

export const experience = [
  {
    company: "Standard Chartered Global Business Services",
    role: "Apprenticeship, Technology",
    location: "Chennai, India",
    duration: "Jul 2025 — Jul 2026",
    points: [
      "Developed Python-based automation solutions for SI Governance to streamline documentation, approval workflows, and reporting — improving operational efficiency and reducing manual effort.",
      "Completed an intensive Data Science and AI Bootcamp covering supervised and unsupervised learning, neural networks, model evaluation, PyTorch fundamentals, and AI application development, alongside Python, MySQL, REST APIs, and deployment.",
    ],
    tech: ["Python", "MySQL", "REST APIs", "PyTorch", "Deployment"],
  },
  {
    company: "Flex",
    role: "IT Trainee — Tools and Technologies used in IT",
    location: "Chennai, India",
    duration: "Dec 2023",
    points: [
      "Supported IT operations while gaining exposure to resource management, data analysis, and process optimization.",
      "Gained insight into integrated systems that streamline business operations, automate workflows, and enhance workforce management for better productivity.",
    ],
    tech: ["IT Operations", "Data Analysis", "Process Optimization"],
  },
];

// Ordered with AI/GenAI projects first, as requested.
export const projects = [
  {
    title: "AI-Powered Banking Chatbot",
    duration: "Dec 2025 — Jan 2026",
    description:
      "A Generative AI-powered banking assistant for intelligent customer query handling and document understanding.",
    points: [
      "Built the assistant using Python, LLMs, Prompt Engineering, OCR, and PyTorch for query handling and document understanding.",
      "Implemented RAG-based document retrieval and customer recommendation logic using embeddings and OCR-extracted banking documents.",
      "Designed a modular AI pipeline and deployed the application using Streamlit with SQLite for chat history management.",
    ],
    tech: ["Python", "LLMs", "PyTorch", "Prompt Engineering", "RAG", "Streamlit", "OCR", "SQLite"],
    featured: true,
  },
  {
    title: "AI-Assisted Automation for SI Governance",
    duration: "Feb 2026 — May 2026",
    description:
      "A Python-based automation solution that streamlines governance documentation and compliance workflows.",
    points: [
      "Developed a Python-based automation solution to streamline governance documentation and compliance workflows, improving efficiency and standardization.",
      "Built AI-assisted automation pipelines using Python, GitHub Copilot, Azure DevOps, and Confluence, leveraging LLM-assisted content generation and workflow automation.",
    ],
    tech: ["Python", "HTML", "Markdown", "GitHub Copilot", "BeautifulSoup", "Power Automate"],
    featured: true,
  },
  {
    title: "A Model for Optimal Pipe Selection",
    duration: "Jun 2024 — Dec 2024",
    description:
      "A machine learning model that recommends optimal pipe materials based on water quality parameters.",
    points: [
      "Developed a machine learning model to recommend optimal pipe materials based on water quality parameters.",
      "Applied feature engineering and classification techniques to improve recommendation accuracy while favoring durable, cost-effective materials.",
    ],
    tech: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript", "SQL", "Excel"],
    featured: false,
  },
];

export const publication = {
  title: "Hydrological Classification Using ML Classification Algorithms",
  venue: "Advanced Pathways in Electrical, Communication and Automation — Page ID 347",
  publisher: "CRC Press (Taylor & Francis Group), 2024",
  points: [
    "Applied machine learning techniques for automated water resource pattern analysis.",
    "Developed and evaluated ML classification models using domain-specific feature engineering to improve accuracy and robustness across diverse water quality conditions.",
    "Achieved higher classification accuracy than baseline models through domain-specific feature engineering.",
  ],
};

export const education = [
  {
    institution: "SRM University",
    location: "Chennai, India",
    degree: "B.Tech., Computer Science and Engineering (Specialization: Information Technology)",
    duration: "May 2025",
    detail: "CGPA: 9.25 / 10.0",
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Machine Learning",
      "Linear Algebra",
      "Probability & Statistics",
    ],
  },
  {
    institution: "Ethiraj Matric Higher Sec School",
    location: "Vellore, India",
    degree: "Higher Secondary Education",
    duration: "2021",
    detail: "Percentage: 84/100",
    coursework: [],
  },
];

export const certifications = [
  "Oracle Certified Foundations Associate",
  "NPTEL — The Joy of Computing Using Python",
  "Zscaler Zero Trust Associate (ZTCA)",
  "AWS Academy — Cloud Foundations",
  "AWS Academy — Cloud Architecting",
];

export const hackathons = [
  {
    name: "Tata Imagination Challenge",
    detail: "Collaborated to develop innovative solutions for real-world problems.",
  },
  {
    name: "Mozo Hack — Healthcare Application",
    detail:
      "Developed a healthcare application that simplifies patient management and enhances communication between healthcare providers and patients.",
  },
];

export const extracurricular = {
  title: "Chess — State Level",
  detail:
    "Competed at state-level tournaments, strengthening strategic thinking, focus, and critical decision-making under pressure.",
};
