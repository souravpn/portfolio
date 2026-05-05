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

const experiences = [
  {
    company: "Apple Inc.",
    role: "Frontend Developer (with AI)",
    period: "2023 — Present",
    bullets: [
      "Led development of core features used by 10k+ users",
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
      "Led development of core features used by 10k+ users",
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
      "Led development of core features used by 10k+ users",
      "Improved application performance by 40%",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    company: "Apple Inc.",
    role: "Frontend Developer",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
  {
    company: "Apple Inc.",
    role: "Big Data Engineer",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
  {
    company: "Infosys Technologies Ltd.",
    role: "Technology Lead",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
  {
    company: "Infosys Technologies Ltd.",
    role: "Technology Analyst",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
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
          <div className="text-center space-y-5 max-w-2xl">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
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
          <div className="text-center space-y-6 max-w-3xl">
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
          <div className="text-center space-y-6 w-full max-w-2xl">
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory justify-center pb-1"
              style={{ scrollbarWidth: "none" }}
            >
              {[
                { abbr: "CSM", full: "Certified Scrum Master" },
                {
                  abbr: "CKAD",
                  full: "Certified Kubernetes\nApplication Developer",
                },
                { abbr: "Six Sigma", full: "Black Belt" },
              ].map(({ abbr, full }) => (
                <div
                  key={abbr}
                  className="snap-center shrink-0 flex flex-col items-center gap-1.5 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 rounded-xl px-8 py-5 min-w-44"
                >
                  <span className="font-semibold text-base">{abbr}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-pre-line leading-snug">
                    {full}
                  </span>
                </div>
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
              <h2 className="text-4xl font-bold tracking-tight text-blue-500 text-center w-full">
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
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400 transition disabled:opacity-20 disabled:pointer-events-none"
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
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400 transition disabled:opacity-20 disabled:pointer-events-none"
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
                <p className="text-xl mb-10 text-zinc-600 dark:text-zinc-300">
                  I'm currently available for freelance work or full-time
                  opportunities. If you have an idea, let's build it together.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-500 dark:text-blue-400">
                        sourav@example.com
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
                        Gilroy, California (Remote Available)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 mt-12">
                  <a
                    href="#"
                    className="text-3xl hover:text-blue-500 transition"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="text-3xl hover:text-blue-500 transition"
                  >
                    🐙
                  </a>
                  <a
                    href="#"
                    className="text-3xl hover:text-blue-500 transition"
                  >
                    𝕏
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-8">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
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

                  <button className="w-full py-4 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-full font-medium text-lg hover:scale-105 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-zinc-50/20 dark:bg-zinc-950/20 border-t border-zinc-200 dark:border-zinc-800 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Left - Branding */}
              <div>
                <div className="text-2xl font-bold tracking-tighter mb-4">
                  Sourav.
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-xs">
                  Crafting digital experiences with passion and precision.
                </p>
              </div>

              {/* Center - Quick Links */}
              <div>
                <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Quick Navigation
                </h4>
                <div className="grid grid-cols-2 gap-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <a href="#about" className="hover:text-blue-500 transition">
                    About
                  </a>
                  <a
                    href="#experience"
                    className="hover:text-blue-500 transition"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="hover:text-blue-500 transition"
                  >
                    Projects
                  </a>
                  <a href="#skills" className="hover:text-blue-500 transition">
                    Skills
                  </a>
                  <a href="#contact" className="hover:text-blue-500 transition">
                    Contact
                  </a>
                </div>
              </div>

              {/* Right - Social + Credits */}
              <div className="flex flex-col md:items-end">
                <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Connect
                </h4>

                <div className="flex gap-6 text-2xl mb-10 text-zinc-600 dark:text-zinc-300">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="hover:text-blue-500 transition"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com"
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

                <div className="text-right text-sm text-zinc-400 dark:text-zinc-500">
                  <p>© {new Date().getFullYear()} Sourav Prakash Nayak</p>
                  <p className="mt-1">
                    Made with ❤️ in Morgan Hill, California
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 justify-end">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-zinc-200 dark:bg-black/70 text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/10">
                      Next.js 15
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20">
                      Tailwind CSS
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
                      Framer Motion
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20">
                      Lenis
                    </span>
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
    </main>
  );
}
