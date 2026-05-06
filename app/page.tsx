"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useState, useEffect, useRef } from "react";

const greetings = [
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

const experiences: Experience[] = [
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
      title: "Machine Learning [Brief one year stint]",
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

type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  subSection?: { title: string; bullets: string[] };
  techHighlighted?: string[];
};

type Cert = { abbr: string; full: string; src: string };

const certs: Cert[] = [
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

const splashWords = [
  { text: "Imagine.", color: "text-blue-500", delay: 0.3 },
  { text: "Create.", color: "text-blue-500", delay: 1.1 },
  { text: "Sourav Nayak.", color: "text-zinc-900 dark:text-white", delay: 1.9 },
];

export default function Home() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [activeExp, setActiveExp] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCert, setActiveCert] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    attachments.forEach((f) => data.append("attachments", f));
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setFormState("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setAttachments([]);
    } catch {
      setFormState("error");
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  const ALLOWED_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "image/webp",
  ];
  const MAX_SIZE_MB = 5;
  const MAX_FILES = 5;

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const valid = Array.from(incoming).filter((f) => {
      if (!ALLOWED_TYPES.includes(f.type)) return false;
      if (f.size > MAX_SIZE_MB * 1024 * 1024) return false;
      return true;
    });
    setAttachments((prev) => {
      const combined = [...prev, ...valid];
      return combined.slice(0, MAX_FILES);
    });
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 3050);
    return () => clearTimeout(t);
  }, []);

  const scrollToCert = (index: number) => {
    const container = certRef.current;
    if (!container) return;
    const first = container.children[0] as HTMLElement;
    const second = container.children[1] as HTMLElement;
    if (!first) return;
    const step = second
      ? second.offsetLeft - first.offsetLeft
      : first.offsetWidth;
    container.scrollTo({ left: step * index, behavior: "smooth" });
    setActiveCert(index);
  };

  useEffect(() => {
    const container = certRef.current;
    if (!container) return;
    const handleScroll = () => {
      const first = container.children[0] as HTMLElement;
      const second = container.children[1] as HTMLElement;
      if (!first || !second) return;
      const step = second.offsetLeft - first.offsetLeft;
      if (!step) return;
      const index = Math.round(container.scrollLeft / step);
      setActiveCert(Math.max(0, Math.min(index, certs.length - 1)));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.clientWidth;
    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveExp(index);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    const handleScroll = () => {
      const cardWidth = container.clientWidth;
      if (!cardWidth) return;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveExp(Math.max(0, Math.min(index, experiences.length - 1)));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white dark:bg-transparent text-zinc-900 dark:text-white min-h-screen overflow-x-hidden relative">
      {/* SPLASH SCREEN */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-200 bg-white dark:bg-zinc-950 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col items-start gap-3 px-8">
              {splashWords.map(({ text, color, delay }) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.65, ease: "easeOut" }}
                  className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight ${color}`}
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 block dark:hidden pointer-events-none bg-white">
        <Image
          src="/sf-day-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.1]"
          priority={false}
          quality={60}
        />
      </div>
      <div className="fixed inset-0 z-0 hidden dark:block pointer-events-none bg-zinc-950">
        <Image
          src="/sf-dark-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.1]"
          priority={false}
          quality={60}
        />
      </div>
      <div className="relative z-1 flex flex-col min-h-screen">
        <Navigation />

        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-between px-6 pt-40 pb-20"
        >
          {/* TOP: Multilingual Greeting */}
          <div className="text-center">
            <motion.div
              key={currentGreeting}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 tracking-wide"
            >
              {greetings[currentGreeting].text}
            </motion.div>
          </div>

          {/* MIDDLE: Profile Photo */}
          <div className="relative my-10">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110 -z-10" />
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <Image
                src="/profile.png"
                alt="Sourav Prakash Nayak"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 160px, 208px"
                className="object-cover object-center rounded-full scale-[1.2]"
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, transparent 45%, var(--vignette-color, rgba(9,9,11,0)) 70%, var(--vignette-color, rgba(9,9,11,0)) 100%)",
                }}
              />
            </div>
          </div>

          {/* BOTTOM: Name, Bio, Buttons */}
          <div className="text-center space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
              Sourav Nayak
            </h1>

            <p className="text-lg md:text-lg text-zinc-500 dark:text-zinc-400">
              Passionate Gen AI and Web Developer &amp; Designer crafting
              seamless, responsive, and user-centric digital experiences.
            </p>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center px-6 pt-28 pb-20 gap-20 bg-zinc-50/20 dark:bg-zinc-950/20"
        >
          {/* Heading + rule */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-5xl font-bold tracking-tight text-blue-500">
              About me
            </h2>
            <div className="w-3/5 h-px bg-zinc-300 dark:bg-zinc-700" />
          </div>

          {/* Professional Summary */}
          <div id="summary" className="text-center space-y-5 max-w-2xl">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-lg md:text-lg text-zinc-500 dark:text-zinc-400">
              Results-driven Senior Software Engineer with 18 years of
              experience building scalable, user-centric platforms and shared
              infrastructure for large-scale data and consumer applications.
              Expertise in designing and maintaining React/TypeScript-based
              systems, including monorepos, Micro-Frontends, and developer
              tooling that accelerate team velocity. Proven track record using
              AI (particularly Claude) to enhance code review, observability,
              deployment pipelines, and internal agentic workflows—reducing
              engineering friction and on-call burden. Passionate about
              observability, performance, reliability, and creating intuitive
              abstractions that empower cross-functional teams.
            </p>
          </div>

          {/* Skills */}
          <div id="skills" className="text-center space-y-6 max-w-3xl">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Next.js 15",
                "React 19",
                "TypeScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "BFF",
                "GraphQL",
                "Apollo",
                "Module Federation",
                "Express",
                "RESTful",
                "Claude Code",
                "Prompt Engineering",
                "MCP",
                "Agent Harnessing",
                "Orchestration",
                "RAG",
                "CI/CD",
                "Spinnaker",
                "Docker",
                "Kubernetes",
                "Vercel",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            id="certifications"
            className="text-center space-y-5 w-full max-w-3xl"
          >
            <h3 className="text-2xl font-semibold">Certifications</h3>

            <div className="flex items-center gap-3">
              {/* Prev */}
              <button
                onClick={() => scrollToCert(activeCert - 1)}
                disabled={activeCert === 0}
                aria-label="Previous certification"
                className="hidden sm:flex shrink-0 w-9 h-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-blue-500 hover:border-blue-400 transition disabled:opacity-20 disabled:pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Track */}
              <div
                ref={certRef}
                className="flex-1 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1"
                style={{ scrollbarWidth: "none" }}
              >
                {certs.map((cert) => (
                  <div
                    key={cert.abbr}
                    onClick={() => setSelectedCert(cert)}
                    className="snap-start shrink-0 flex flex-col items-center gap-3 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 rounded-xl px-4 py-5 cursor-pointer hover:border-blue-400 hover:shadow-md transition"
                    style={{ width: "calc(33.333% - 11px)" }}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.full}
                      width={115}
                      height={115}
                      quality={90}
                      className="object-contain"
                      style={{ height: "auto" }}
                    />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-pre-line leading-snug text-center">
                      {cert.full}
                    </span>
                  </div>
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => scrollToCert(activeCert + 1)}
                disabled={activeCert === certs.length - 1}
                aria-label="Next certification"
                className="hidden sm:flex shrink-0 w-9 h-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-blue-500 hover:border-blue-400 transition disabled:opacity-20 disabled:pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {certs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCert(i)}
                  aria-label={`Go to certification ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeCert === i ? "w-5 bg-blue-500" : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE - Carousel */}
        <section
          id="experience"
          className="min-h-screen py-24 bg-zinc-50/20 dark:bg-zinc-950/20 flex flex-col"
        >
          <div className="flex flex-col items-center mb-16 px-6">
            <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
              <h2 className="text-5xl font-bold tracking-tight text-blue-500 text-center w-full">
                Professional Experience
              </h2>
              <div className="w-3/5 h-px bg-zinc-300 dark:bg-zinc-700" />
            </div>
          </div>

          {/* Carousel — single card + chevrons */}
          <div className="max-w-7xl mx-auto w-full px-6 flex items-center gap-3 flex-1">
            {/* Prev chevron */}
            <button
              onClick={() => scrollToCard(activeExp - 1)}
              disabled={activeExp === 0}
              aria-label="Previous experience"
              className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400 transition disabled:opacity-20 disabled:pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Single-card viewport */}
            <div className="flex-1 overflow-hidden">
              <div
                ref={carouselRef}
                className="flex snap-x snap-mandatory"
                style={{
                  scrollbarWidth: "none",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="snap-center shrink-0 w-full flex flex-col rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden"
                    style={{ minHeight: "520px" }}
                  >
                    {/* Card header */}
                    <div className="px-8 pt-8 pb-6 border-b border-zinc-100 dark:border-zinc-800 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <p className="text-teal-500 dark:text-teal-400 mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <span className="text-sm text-zinc-400 shrink-0 mt-0.5">
                        {exp.period}
                      </span>
                    </div>

                    {/* Card body — bullets */}
                    <div className="px-8 py-6 overflow-y-auto flex-1 custom-scrollbar">
                      <ul className="space-y-4 text-base text-zinc-600 dark:text-zinc-300">
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="pl-5 border-l border-zinc-300 dark:border-zinc-700"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {exp.subSection && (
                        <div className="mt-5 rounded-xl border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 px-5 py-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
                            {exp.subSection.title}
                          </p>
                          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                            {exp.subSection.bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="pl-4 border-l border-amber-300 dark:border-amber-600/40"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Card footer — tech pills */}
                    <div className="px-8 py-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.techHighlighted?.map((tech, i) => (
                        <span
                          key={`hl-${i}`}
                          className="px-3 py-1 text-xs font-medium rounded border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next chevron */}
            <button
              onClick={() => scrollToCard(activeExp + 1)}
              disabled={activeExp === experiences.length - 1}
              aria-label="Next experience"
              className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400 transition disabled:opacity-20 disabled:pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to experience ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeExp === index
                    ? "w-6 bg-teal-400"
                    : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen py-24 bg-white-950/20 dark:bg-zinc-950/20"
        >
          <div className="flex flex-col items-center mb-26">
            <div className="w-fit flex flex-col items-center gap-6">
              <h2 className="text-5xl font-bold tracking-tight text-blue-500">
                Get in Touch
              </h2>
              <div className="w-3/5 h-px bg-zinc-300 dark:bg-zinc-700" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Info */}
              <div>
                <p className="text-base md:text-base mb-10 text-zinc-600 dark:text-zinc-300">
                  Situated in the sunny and scenic Pacific coast of the San
                  Francisco Bay Area, you will find me very approachable and
                  ready to help.
                  <br />
                  <br />I am always excited to collaborate and work on cool new
                  stuff or brainstorm and discuss innovative ideas.
                  <br />
                  <br />
                  Always one coffee away! <br />
                  <br />
                  Feel free to reach out and say Hello.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-500 dark:text-blue-400">
                        souravpn1985@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-zinc-600 dark:text-zinc-300">
                        San Francisco Bay Area, CA (Remote Available)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-3xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />

                  {/* Attachments */}
                  <div className="space-y-3">
                    {/* Drop zone */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-label="Attach files"
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) =>
                        e.key === "Enter" && fileInputRef.current?.click()
                      }
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        addFiles(e.dataTransfer.files);
                      }}
                      className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-7 cursor-pointer transition-colors ${
                        isDragging
                          ? "border-blue-400 bg-blue-50 dark:bg-blue-950/30"
                          : "border-zinc-300 dark:border-zinc-700 hover:border-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-zinc-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 16v-8m0 0-3 3m3-3 3 3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
                        />
                      </svg>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                        <span className="font-medium text-blue-500">
                          Click to browse
                        </span>{" "}
                        or drag &amp; drop files here
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        PDF, DOC, DOCX, JPG, PNG, WEBP · max {MAX_SIZE_MB} MB
                        each · up to {MAX_FILES} files
                      </p>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                      className="hidden"
                      onChange={(e) => addFiles(e.target.files)}
                    />

                    {/* Attachment list */}
                    {attachments.length > 0 && (
                      <ul className="space-y-2">
                        {attachments.map((file, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2.5"
                          >
                            {/* File type icon */}
                            <span className="text-xs font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 shrink-0">
                              {file.name.split(".").pop()}
                            </span>
                            <span className="flex-1 text-sm truncate text-zinc-700 dark:text-zinc-300">
                              {file.name}
                            </span>
                            <span className="text-xs text-zinc-400 shrink-0">
                              {formatBytes(file.size)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(i)}
                              aria-label={`Remove ${file.name}`}
                              className="shrink-0 text-zinc-400 hover:text-red-500 transition"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}

                    {attachments.length >= MAX_FILES && (
                      <p className="text-xs text-amber-500 dark:text-amber-400">
                        Maximum {MAX_FILES} files reached.
                      </p>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={formState === "sending" || formState === "sent"}
                      className="w-[60%] py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-60 disabled:pointer-events-none text-white rounded-xl font-medium text-base transition"
                    >
                      {formState === "sending"
                        ? "Sending…"
                        : formState === "sent"
                          ? "Sent ✓"
                          : "Send Message"}
                    </button>
                  </div>

                  {formState === "error" && (
                    <p className="text-center text-sm text-red-500">
                      Something went wrong — please try again.
                    </p>
                  )}
                  {formState === "sent" && (
                    <p className="text-center text-sm text-teal-500">
                      Message delivered! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-zinc-50/20 dark:bg-zinc-950/20 border-t border-zinc-200 dark:border-zinc-800 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Left - Branding + Socials */}
              <div>
                <div className="text-2xl font-bold tracking-tighter mb-4">
                  Sourav.
                </div>
                <div className="flex gap-6 text-2xl text-zinc-600 dark:text-zinc-300">
                  <a
                    href="https://www.linkedin.com/in/sourav-prakash-nayak-42362364"
                    target="_blank"
                    className="hover:text-blue-500 transition"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com/souravpn"
                    target="_blank"
                    className="hover:text-blue-500 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="hover:text-blue-500 transition"
                  >
                    𝕏
                  </a>
                </div>
              </div>

              {/* Center - Quick Navigation */}
              <div>
                <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Quick Navigation
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {/* Col 1 */}
                  <div className="flex flex-col gap-3">
                    <a href="#home" className="hover:text-blue-500 transition">
                      Home
                    </a>
                    <a href="#about" className="hover:text-blue-500 transition">
                      About
                    </a>
                    <a
                      href="#summary"
                      className="hover:text-blue-500 transition pl-3 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      Summary
                    </a>
                    <a
                      href="#skills"
                      className="hover:text-blue-500 transition pl-3 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      Skills
                    </a>
                    <a
                      href="#certifications"
                      className="hover:text-blue-500 transition pl-3 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      Certifications
                    </a>
                  </div>
                  {/* Col 2 */}
                  <div className="flex flex-col gap-3">
                    <a
                      href="#experience"
                      className="hover:text-blue-500 transition"
                    >
                      Experience
                    </a>
                    <a
                      href="#contact"
                      className="hover:text-blue-500 transition"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Credits */}
              <div className="flex flex-col md:items-end">
                <div className="md:text-right text-sm text-zinc-400 dark:text-zinc-500">
                  <p>© {new Date().getFullYear()} Sourav Prakash Nayak</p>
                  <p className="mt-1">
                    Made with ❤️ in Morgan Hill, California
                  </p>
                  <div className="mt-2 mb-2 flex flex-wrap gap-1.5 md:justify-end">
                    <span className="px-2 py-0.5 rounded text-xs bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                      Next.js 15
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20">
                      Tailwind CSS
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
                      Framer Motion
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20">
                      Lenis
                    </span>
                  </div>
                  <div className="mt-2">
                    <a
                      href={"https://github.com/souravpn/portfolio"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-xs bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-500/20 transition-all"
                    >
                      View this code on
                      {/* GitHub Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="transition-transform group-hover:scale-110"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.044-.015-2.049-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Back to Top Button - Smart Light/Dark */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 
                   bg-white dark:bg-zinc-900 
                   hover:bg-blue-600 dark:hover:bg-blue-600 
                   border border-zinc-200 dark:border-zinc-700 
                   text-zinc-800 dark:text-zinc-300 
                   hover:text-white dark:hover:text-white
                   rounded-full shadow-lg dark:shadow-2xl 
                   transition-all duration-3000 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 -4 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Cert Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-150 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 w-full max-w-lg shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-red-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image
                src={selectedCert.src}
                alt={selectedCert.full}
                width={480}
                height={340}
                quality={95}
                className="object-contain w-full rounded-xl"
                style={{ height: "auto" }}
              />
              <p className="mt-5 text-center font-medium text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
                {selectedCert.full}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
