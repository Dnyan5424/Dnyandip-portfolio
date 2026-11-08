// src/data/content.js
// 100% complete content inventory for Dnyandip Katkar's portfolio.
// Preserves every title, description, highlight, link, PDF path, date, and metric verbatim.

export const personalData = {
  name: "Dnyandip Katkar",
  shortName: "Dnyan",
  title: "Full-Stack Engineer · AI/ML Explorer · Blockchain Tinkerer",
  headline: "Hi, I'm Dnyan",
  subheading: "Computer Engineering Student",
  status: "Available for projects & collaborations",
  rotatingRoles: [
    "Building Data Pipelines",
    "Crafting Web Experiences",
    "Training ML Models",
    "Exploring Web3 Protocols",
  ],
  bioStatement:
    "I turn complex problems into elegant digital solutions, from responsive web apps and ML-powered analytics to smart contract experiments. Engineering fundamentals, designer instincts.",
  profileTagline:
    "Computer Engineer exploring web systems, AI workflows, data analytics, and future-focused technologies.",
  email: "Dnyandipkatkar07@gmail.com",
  socials: {
    github: "https://github.com/Dnyan5424",
    linkedin: "https://www.linkedin.com/in/dnyandipkatkar",
    email: "mailto:Dnyandipkatkar07@gmail.com",
  },
  resumePath: "Resume.pdf",
};

export const aboutData = {
  sectionLabel: "About",
  heading: "Building across data, web, AI/ML, and emerging technology domains.",
  paragraphs: [
    "Experienced with data analysis including data cleaning and interpretation. Skilled in SQL and Excel for efficient data management and reporting. Strong understanding of teamwork dynamics and adaptable to evolving analytical challenges.",
    "Positive problem solver with a passion for uncovering insights through data-driven analysis. Well-versed in statistical methodologies and proficient in Python, SQL, and data visualization techniques.",
    "Alongside analytics, I enjoy building responsive web interfaces, exploring AI and machine learning workflows, and learning blockchain concepts that shape the next generation of digital products.",
  ],
  pillars: [
    {
      title: "Problem Solving",
      description:
        "I break vague ideas into systems, priorities, and shippable milestones.",
      iconName: "brain",
    },
    {
      title: "Creativity",
      description:
        "I care about interface feel, narrative structure, and product differentiation.",
      iconName: "lightbulb",
    },
    {
      title: "Teamwork",
      description:
        "I collaborate with clarity, ship iteratively, and keep feedback loops tight.",
      iconName: "teamwork",
    },
    {
      title: "Continuous Learning",
      description:
        "I keep exploring AI, frontend architecture, and better engineering habits.",
      iconName: "rocket",
    },
  ],
};

export const projectsData = [
  {
    id: "voltnex-ai",
    title: "Voltnex-AI",
    type: "Platform",
    category: "Platform",
    year: "2025",
    description:
      "Developed a coordinated hybrid architecture for reliable grid and EV energy exchange using AI-based monitoring, demand prediction, and charging-station management.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Leaflet", "Python", "FastAPI"],
    highlights: [
      "Real-time EV charging station availability",
      "AI-based charging demand prediction",
      "Interactive station map using Leaflet",
      "Grid-to-EV energy exchange optimization",
    ],
    github: "https://github.com/Dnyan5424",
    accent: "from-emerald-400/30 via-cyan-400/28 to-sky-400/25",
  },
  {
    id: "foodguard",
    title: "FoodGuard — A3S",
    type: "AI",
    category: "AI",
    year: "2025",
    description:
      "Built an AI-based food adulteration screening system that analyzes food images and provides multi-evidence adulteration detection using deep learning.",
    stack: ["Python", "TensorFlow", "MobileNetV3Small", "FastAPI", "React", "MongoDB"],
    highlights: [
      "AI-based food adulteration detection",
      "Image analysis using MobileNetV3Small",
      "Multi-evidence screening system",
      "FastAPI backend with React dashboard",
    ],
    github: "https://github.com/Dnyan5424",
    accent: "from-rose-400/30 via-orange-300/25 to-amber-300/25",
  },
  {
    id: "bhurakshak",
    title: "BhuRakshak",
    type: "AI",
    category: "AI",
    year: "2025",
    description:
      "Developed an AI-networked environmental tracking and remote assessment platform using GIS, satellite imagery, and NDVI-based land and crop analysis.",
    stack: ["Python", "GIS", "Google Earth Engine", "Sentinel-1/2", "Landsat", "NDVI", "MERN Stack"],
    highlights: [
      "Satellite-based land and crop monitoring",
      "NDVI analysis for vegetation health",
      "Environmental change detection using GIS",
      "Remote assessment using Sentinel and Landsat data",
    ],
    github: "https://github.com/Dnyan5424",
    accent: "from-lime-400/28 via-emerald-400/25 to-teal-300/25",
  },
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    type: "AI",
    category: "AI",
    year: "2025",
    description:
      "Built an AI-powered code review tool that analyzes source code and provides suggestions for improving code quality, readability, and performance.",
    stack: ["Python", "OpenAI API", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Automated code review using AI",
      "Detects syntax errors and bad coding practices",
      "Suggests optimization improvements",
    ],
    github: "https://github.com/Dnyan5424",
    accent: "from-fuchsia-500/40 via-sky-400/30 to-cyan-300/25",
  },
  {
    id: "ai-expense-tracker",
    title: "AI Expense Tracker",
    type: "AI",
    category: "AI",
    year: "2025",
    description:
      "Developed an intelligent expense tracking system that categorizes user expenses and provides insights into spending habits.",
    stack: ["Python", "SQL / MongoDB", "React", "Charts"],
    highlights: [
      "Automatic expense categorization using AI",
      "Monthly spending analytics",
      "Budget tracking and alerts",
    ],
    github: "https://github.com/Dnyan5424",
    accent: "from-cyan-400/35 via-sky-500/30 to-indigo-500/25",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    type: "AI",
    category: "AI",
    year: "2024",
    description:
      "Created an AI chatbot capable of answering user queries in real time using natural language processing techniques.",
    stack: ["Python", "OpenAI API", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Real-time conversation interface",
      "Context-based responses",
      "Scalable for future integrations",
    ],
    github: "https://github.com/Dnyan5424",
    accent: "from-violet-500/35 via-fuchsia-500/25 to-cyan-400/25",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "Web",
    category: "Web",
    year: "2025",
    description:
      "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Fully responsive design",
      "Smooth animations and modern UI",
      "Projects showcase with GitHub links",
    ],
    github: "https://github.com/Dnyan5424/Dnyandip-portfolio",
    live: "https://dnyan5424.github.io/Dnyandip-portfolio/",
    accent: "from-amber-300/24 via-fuchsia-400/24 to-sky-400/24",
  },
];

export const researchData = {
  sectionLabel: "Research & Publications",
  heading: "Academic work focused on intelligent EV infrastructure, optimization, and applied AI.",
  publications: [
    {
      title: "AI-Based EV Charging Station Management System",
      venue: "International Journal of Research Publication and Reviews (IJRPR)",
      description: [
        "This research focuses on developing an AI-based management system for electric vehicle charging stations.",
        "The system analyzes charging demand, optimizes station availability, and improves energy distribution using intelligent algorithms.",
        "It shows how AI can improve efficiency in EV infrastructure and support the growing adoption of electric vehicles.",
      ],
      topics: ["Artificial Intelligence", "Data Analytics", "Smart Energy Management"],
      href: "https://ijrpr.com/uploads/V6ISSUE12/IJRPR58115.pdf",
    },
  ],
};

export const skillsData = {
  sectionLabel: "Skills",
  heading: "A broader technical profile across software, analytics, AI, and blockchain.",
  subheading:
    "My skill set spans programming, web development, data analytics tools, machine learning concepts, and emerging technologies.",
  categories: [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "C++", "Python", "R Language"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"],
    },
    {
      title: "Data Analytics Tools",
      skills: ["Excel", "Tableau", "Power BI", "Analytics Reporting"],
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning", "NumPy", "Pandas", "Scikit-learn"],
    },
    {
      title: "Blockchain",
      skills: ["Blockchain Basics"],
    },
  ],
  featuredToolkit: [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "Tailwind", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "SQL", category: "Database" },
    { name: "Git", category: "Tooling" },
  ],
};

export const certificationsData = {
  sectionLabel: "Certificates",
  heading: "Certifications that strengthen industry readiness, analytics, and product understanding.",
  subheading:
    "A collection of professional certifications and learning achievements across software development, artificial intelligence, cloud computing, analytics, and emerging technologies.",
  items: [
    {
      id: "tcs-ion",
      title: "TCS iON Career Edge - Young Professional",
      platform: "Tata Consultancy Services (TCS)",
      date: "July 2025",
      credentialId: "204620-28582730-1016",
      description:
        "Completed a career readiness program covering communication, workplace skills, and AI fundamentals.",
      skills: ["Communication Skills", "Professional Soft Skills", "AI Fundamentals"],
      href: "documents/certificates/tcs-ion-career-edge.pdf",
    },
    {
      id: "google-analytics",
      title: "Google Analytics Certification",
      platform: "Google",
      date: null,
      credentialId: "153195920",
      description:
        "Developed practical knowledge of analytics reporting, website traffic analysis, and interpreting user behavior data.",
      skills: ["Data Analysis", "Business Analytics", "Website Traffic Analysis", "User Behavior Insights"],
      href: "documents/certificates/google-analytics-certification.pdf",
    },
    {
      id: "google-play",
      title: "Google Play Academy Certification",
      platform: "Google Play Academy",
      date: "September 2025",
      validUntil: "September 2028",
      credentialId: "161333853",
      description:
        "Learned app publishing, optimization, and performance practices for products in the Google Play ecosystem.",
      skills: ["Google Play Store Optimization", "App Publishing", "Mobile App Performance Monitoring"],
      href: "documents/certificates/google-play-academy-certification.pdf",
    },
    {
      id: "udemy-full-stack",
      title: "Full Stack Web Development",
      platform: "Udemy",
      date: "2025",
      description:
        "Covered front-end fundamentals and core web development concepts used to build responsive websites.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      href: "documents/certificates/udemy-full-stack-web-development.pdf",
    },
    {
      id: "iirs-geodata",
      title: "AI/ML for Geodata Analytics",
      platform: "Indian Institute of Remote Sensing (IIRS), ISRO",
      date: "August 2026",
      credentialId: "2026234975123",
      description:
        "Completed a 10-hour online course exploring AI and machine learning applications in geodata analytics.",
      skills: ["Artificial Intelligence", "Machine Learning", "Geospatial Analytics", "Satellite Data"],
      href: "documents/certificates/aiml-for-geodata.pdf",
    },
    {
      id: "iirs-cyclone",
      title: "Earth Observations and Numerical Model Applications for Tropical Cyclone Monitoring and Forecasting",
      platform: "Indian Institute of Remote Sensing (IIRS), ISRO",
      date: "July 2026",
      description:
        "Participated in an online workshop on Earth observations and numerical model applications for tropical cyclone monitoring and forecasting.",
      skills: ["Earth Observation", "Satellite Data", "Numerical Models", "Weather Monitoring"],
      href: "documents/certificates/cyclone-monitoring-forecasting.pdf",
    },
    {
      id: "ms-azure-compute",
      title: "Describe Azure Compute Services",
      platform: "Microsoft Learn",
      date: "September 2026",
      description:
        "Completed a Microsoft Learn module covering Azure compute services and cloud computing capabilities.",
      skills: ["Microsoft Azure", "Cloud Computing", "Compute Services"],
      href: "documents/achievements/microsoft-learn-achievements.pdf",
    },
    {
      id: "ms-aspnet",
      title: "Build Your First ASP.NET Core Web App",
      platform: "Microsoft Learn",
      date: "September 2026",
      description:
        "Completed a learning module introducing the development of web applications using ASP.NET Core.",
      skills: ["ASP.NET Core", "C#", "Web Development"],
      href: "documents/achievements/microsoft-learn-achievements-1.pdf",
    },
    {
      id: "ms-csharp-basics",
      title: "Write Your First C# Code",
      platform: "Microsoft Learn",
      date: "September 2026",
      description:
        "Practiced fundamental C# programming concepts and writing basic code.",
      skills: ["C#", "Programming Fundamentals", "Problem Solving"],
      href: "documents/achievements/microsoft-learn-achievements-2.pdf",
    },
    {
      id: "ms-csharp-oop",
      title: "Get Started with Classes and Objects in C#",
      platform: "Microsoft Learn",
      date: "September 2026",
      description:
        "Explored object-oriented programming fundamentals using classes and objects in C#.",
      skills: ["C#", "Object-Oriented Programming", "Classes", "Objects"],
      href: "documents/achievements/microsoft-learn-achievements-3.pdf",
    },
    {
      id: "ms-copilot-prompt",
      title: "Introduction to Prompt Engineering with GitHub Copilot",
      platform: "Microsoft Learn",
      date: "September 2026",
      description:
        "Explored prompt engineering and the use of GitHub Copilot to assist software development.",
      skills: ["Prompt Engineering", "GitHub Copilot", "AI-Assisted Development"],
      href: "documents/achievements/microsoft-learn-achievements-4.pdf",
    },
  ],
};

export const pathTimelineData = {
  sectionLabel: "Path",
  heading: "Education, practical industry experience, and leadership milestones.",
  subheading: "A unified chronicle of academic foundation, industry internships, simulations, and campus leadership.",
  timeline: [
    {
      type: "Experience",
      tag: "Industry Internship",
      role: "Data Analyst Intern",
      organization: "ProAzure Software Solutions Ltd",
      location: "Kharadi, Pune",
      period: "June 2025 - August 2025",
      points: [
        "Converted raw datasets into meaningful formats through normalization and transformation.",
        "Optimized SQL queries to improve processing speed.",
        "Performed data cleaning and validation to ensure accurate analysis.",
        "Presented clear analytical reports to assist management decision making.",
      ],
      certificateHref: "documents/certificates/experience/proazure-internship-certificate.pdf",
    },
    {
      type: "Simulation",
      tag: "Virtual Internship",
      role: "GenAI Powered Data Analytics",
      organization: "Tata",
      location: "Industry Simulation",
      period: "Completed",
      points: [
        "Performed customer segmentation analysis.",
        "Used GenAI tools for data storytelling.",
        "Created insights to support business strategy.",
      ],
      skills: ["Data Analysis", "Generative AI", "Business Analytics", "Data Storytelling"],
      certificateHref: "documents/internships/tata-genai-powered-data-analytics.pdf",
    },
    {
      type: "Simulation",
      tag: "Virtual Internship",
      role: "Markets Sales & Trading",
      organization: "Citi",
      location: "Industry Simulation",
      period: "Completed",
      points: [
        "Conducted trade risk assessments.",
        "Analyzed market trends for USD interest rates.",
        "Prepared market commentary reports.",
      ],
      skills: ["Market Analysis", "Financial Data Analysis", "Risk Assessment"],
      certificateHref: "documents/internships/citi-markets-sales-trading.pdf",
    },
    {
      type: "Simulation",
      tag: "Virtual Internship",
      role: "Data Analytics",
      organization: "Deloitte",
      location: "Industry Simulation",
      period: "Completed",
      points: [
        "Performed data wrangling and preprocessing.",
        "Analyzed datasets using Excel and SQL.",
        "Created insightful reports and client presentations.",
      ],
      skills: ["Data Cleaning", "SQL", "Excel Analytics", "Data Visualization"],
      certificateHref: "documents/internships/deloitte-data-analytics.pdf",
    },
    {
      type: "Simulation",
      tag: "Virtual Internship",
      role: "Robotics & Controls",
      organization: "Johnson & Johnson MedTech",
      location: "Industry Simulation",
      period: "Completed",
      points: [
        "Investigated robotic system performance issues.",
        "Proposed Python-based optimization algorithms.",
        "Improved system efficiency and responsiveness.",
      ],
      skills: ["Python", "Robotics Control Systems", "Performance Optimization"],
      certificateHref: "documents/internships/johnson-johnson-medtech-robotics-controls.pdf",
    },
        {
  type: "Education",
  tag: "B.E.",
  role: "Bachelor of Engineering in Computer Science & Engineering",
  organization: "Dr. D. Y. Patil Institute of Technology",
  location: "Pimpri, Pune",
  period: "2026 - 2029",
  points: [
    "Currently pursuing Bachelor of Engineering in Computer Science & Engineering.",
    "Focused on Full-Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering."
  ],
},
    {
      type: "Education",
      tag: "Diploma",
      role: "Diploma in Computer Engineering",
      organization: "SVERI's College of Engineering (Polytechnic), Pandharpur",
      location: "Pandharpur",
      period: "2023 - 2026",
      points: [
        "Percentage: 96.12%",
        "Specialized in computer engineering principles, software development, and systems analysis.",
      ],
    },
    {
      type: "Education",
      tag: "Secondary School",
      role: "10th Grade",
      organization: "Shree Chandrashekhar Vidyalay, Shreepur",
      location: "Shreepur",
      period: "Completed",
      points: [
        "Percentage: 93.40%",
        "Ranked 1st in School",
        "Ideal Student Award",
      ],
    },
    {
      type: "Leadership",
      tag: "Responsibility",
      role: "Volunteer - College Tech Events 2025",
      organization: "College Tech Events",
      location: "Pandharpur",
      period: "2025",
      points: [
        "Organized Technical Quiz, CodeByte, and Paper Presentation events focused on Web Development, Data Science, Machine Learning, and DSA.",
      ],
    },
    {
      type: "Leadership",
      tag: "Responsibility",
      role: "Student Representative - Annual Gathering",
      organization: "School Annual Gathering",
      location: "Shreepur",
      period: "Completed",
      points: [
        "Led organization and coordination of school annual gathering.",
      ],
    },
  ],
};

export const contactData = {
  sectionLabel: "Contact",
  heading: "Let's Connect",
  subheading:
    "This portfolio highlights my student journey across software, AI, and web development. Reach out for collaborations, project discussions, or to connect.",
  email: "Dnyandipkatkar07@gmail.com",
  links: [
    {
      label: "Email Me",
      display: "Dnyandipkatkar07@gmail.com",
      href: "mailto:Dnyandipkatkar07@gmail.com",
      type: "email",
    },
    {
      label: "LinkedIn",
      display: "in/dnyandipkatkar",
      href: "https://www.linkedin.com/in/dnyandipkatkar",
      type: "linkedin",
    },
    {
      label: "GitHub",
      display: "github.com/Dnyan5424",
      href: "https://github.com/Dnyan5424",
      type: "github",
    },
  ],
};

