"use client";

import { useState, useEffect, useRef } from "react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: reduced ? "instant" : "smooth",
    });
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

  return (
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
                    <p className="text-blue-500 dark:text-blue-400 mt-0.5">
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
                ? "w-6 bg-blue-400"
                : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
