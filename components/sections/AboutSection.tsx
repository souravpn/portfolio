"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { certs, type Cert } from "@/lib/data";

export default function AboutSection() {
  const [activeCert, setActiveCert] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const certRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex flex-col items-center px-6 pt-28 pb-20 gap-20 bg-zinc-50/20 dark:bg-zinc-950/20"
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-5xl font-bold tracking-tight text-blue-500">
            About me
          </h2>
          <div className="w-3/5 h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>

        {/* Professional Summary */}
        <div id="summary" className="scroll-mt-24 text-center space-y-5 max-w-2xl">
          <h3 className="text-2xl font-semibold">Professional Summary</h3>
          <p className="text-lg md:text-lg text-zinc-500 dark:text-zinc-400">
            Results-driven Senior Software Engineer with 18 years of experience
            building scalable, user-centric platforms and shared infrastructure
            for large-scale data and consumer applications. Expertise in
            designing and maintaining React/TypeScript-based systems, including
            monorepos, Micro-Frontends, and developer tooling that accelerate
            team velocity. Proven track record using AI (particularly Claude) to
            enhance code review, observability, deployment pipelines, and
            internal agentic workflows—reducing engineering friction and on-call
            burden. Passionate about observability, performance, reliability, and
            creating intuitive abstractions that empower cross-functional teams.
          </p>
        </div>

        {/* Skills */}
        <div id="skills" className="scroll-mt-24 text-center space-y-6 max-w-3xl">
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
          className="scroll-mt-24 text-center space-y-5 w-full max-w-3xl"
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
    </>
  );
}
