export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  subSection?: { title: string; bullets: string[] };
  techHighlighted?: string[];
};

export type Cert = { abbr: string; full: string; src: string };

export const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Español" },
  { text: "Bonjour", lang: "Français" },
  { text: "नमस्ते", lang: "हिन्दी" },
  { text: "你好", lang: "Chinese(Simplified)" },
  { text: "こんにちは", lang: "日本語" },
  { text: "Ciao", lang: "Italiano" },
  { text: "مرحبًا", lang: "Arabic" },
  { text: "Olá", lang: "Português" },
  { text: "Привет", lang: "Русский" },
  { text: "ନମସ୍କାର", lang: "Odia" },
  { text: "Hallo", lang: "Deutsch" },
  { text: "안녕하세요", lang: "한국어" },
  { text: "⠓⠑⠇⠇⠕", lang: "Braille" },
  { text: "Hej", lang: "Swedish" },
  { text: "👋", lang: "ASL (Sign Language)" },
  { text: ".... . .-.. .-.. ---", lang: "Morse Code" },
];

export const experiences: Experience[] = [
  {
    company: "Apple Inc.",
    role: "Frontend Developer (with AI)",
    period: "2024 — Present",
    bullets: [
      "Enhanced AI-assisted development workflows by integrating Claude Code plugins into pre-commit and PR processes, incorporating automated linting, vulnerability scanning, unit tests, and silent failure detection—completing full checks in under 5 minutes and significantly boosting developer velocity.",
      "Built a search agent using Claude, vector embeddings, and Slack integration to query documentation and historical resolutions, reducing weekly on-call time for engineers by 65%",
      "Developed an AI Assistant agent with human-in-the-loop verification for provisioning clusters, accounts, catalogs, and services, streamlining operational tasks.",
      "Created a scribe agent (side project) that transcribes and categorizes Webex meeting audio into structured weekly reports with progress and blockers, achieving ~90% accuracy across varied meeting conditions through iterative human feedback.",
      "Automated access-granting workflows using Claude and MCP, improving security and efficiency with oversight mechanisms.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Claude code",
      "Vibe Coding",
      "MCP",
      "Agent Harness",
      "Vector DB",
    ],
  },
  {
    company: "Apple Inc.",
    role: "Frontend Developer",
    period: "2018 — 2024",
    bullets: [
      "Designed, developed, and maintained a monorepo-based data platform using React, Express, GraphQL,TypeScript, and Webpack, enabling service teams to efficiently deploy and manage services and users.",
      "Led migration to a Micro-Frontend architecture with Apollo Module Federation, reducing deployment times by ~50% and improving team independence.",
      "Built an anomaly detection dashboard for iCloud device usage, incorporating ML-driven insights to identify malicious activity, fraud (~600K accounts captured), user adoption, and churn. Achieved ~92% learning accuracy and 95% churn prediction accuracy for new iOS users.",
      "Contributed to a Scala-based Anomaly service daemon that runs time-series ML models on live data stores, delivering notifications for critical KPIs used by Content SREs and ML Engineers.",
    ],
    tech: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "CSS",
      "Sentry",
      "GraphQL",
      "Apollo",
      "Module Federation",
      "Express Server",
      "RESTFul",
      "BFF",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    company: "Apple Inc.",
    role: "Big Data Engineer/Scientist",
    period: "2014 — 2018",
    bullets: [
      "Developed the end-to-end ETL framework for Apple Pay analytics, which led to many valuable insights and decisions in the early days following Apple Pay Launch.",
      "Lead the Hadoop data analytics team of Apple iCloud Reporting Project",
      "Analyzed usage patterns and behavior meticulously, to discover potential areas of improvement in iCloud Services and factors responsible for Users churning out",
      "Developed the iCloud Reporting Automation Framework using Map-Reduce in Java, Pig-Latin and shell, which processed Terabytes of data in minutes",
    ],
    subSection: {
      title: "Machine Learning",
      bullets: [
        "Developed and executed machine learning models on top of big data (HDFS and Hive) using SparkML and Scala pipeline",
        "Developed classification model to predict free user conversion to paid using Logistic Regression and Random Forest",
        "Developed Time Series forecasting on new users using Python and Statsmodel package",
      ],
    },
    tech: [
      "Hadoop",
      "Hive",
      "NoSQL",
      "Pig Latin",
      "Map Reduce",
      "Data Analytics",
      "Data Engineering",
      "Business Insights",
    ],
    techHighlighted: [
      "ML",
      "Time Series",
      "S/ARIMA/X",
      "Scala",
      "Spark",
      "Python",
      "Statsmodel",
    ],
  },
  {
    company: "Infosys Technologies Ltd.",
    role: "Technology Analyst/Lead",
    period: "2008 — 2014",
    bullets: [
      "Spearheaded the migration of Business Analytics platform from OpenSource based ETL to Big Data, as part of MobileMe to iCloud migration.",
      "Introduced Big Data processing Technologies in anticipation of the growing volume of data in service usage",
      "Integral part of designing, developing, testing and maintaining automation scripts for data analytics and reporting for iCloud suite of services",
    ],
    tech: [
      "Hadoop",
      "Big Table",
      "Oracle PL/SQL",
      "Unix",
      "Perl",
      "Hive",
      "ETL Pipelines",
      "KPI Generation",
    ],
  },
];

export const certs: Cert[] = [
  { abbr: "CSM", full: "Certified Scrum Master", src: "/csm.png" },
  {
    abbr: "CKAD",
    full: "Certified Kubernetes\nApplication Developer",
    src: "/ckad.png",
  },
  { abbr: "L6SB", full: "Lean 6 Sigma Black Belt", src: "/lean6s-black.png" },
  { abbr: "L6SG", full: "Lean 6 Sigma Green Belt", src: "/lean6s-green.png" },
  { abbr: "L6SY", full: "Lean 6 Sigma Yellow Belt", src: "/lean6s-yellow.png" },
];

export const splashWords = [
  { text: "Imagine.", color: "text-blue-500", delay: 0.3 },
  { text: "Create.", color: "text-blue-500", delay: 1.1 },
  { text: "Sourav Nayak.", color: "text-zinc-900 dark:text-white", delay: 1.9 },
];
