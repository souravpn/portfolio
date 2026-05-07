"use client";
import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const FRAMES = [
  { id: "mac-1", type: "mac", caption: "Dashboard overview" },
  { id: "mac-2", type: "mac", caption: "Calendar & email" },
  { id: "mac-3", type: "mac", caption: "Live context" },
  { id: "iphone-1", type: "iphone", caption: "Wake word" },
  { id: "iphone-2", type: "iphone", caption: "Quick commands" },
  { id: "iphone-3", type: "iphone", caption: "On the go" },
];

const FADE =
  "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)";

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  const scrollToFrame = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    (el.children[i] as HTMLElement | undefined)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <span className="font-mono text-xs tracking-widest text-[#8B5CF6]">
                01 — THE EXPERIENCE
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mt-6 leading-tight">
                She feels like a real person.
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-8">
            <p className="text-xl sm:text-2xl text-zinc-950 dark:text-white">
              Say <span className="font-semibold">&ldquo;Hey ARIA&rdquo;</span> — she wakes
              up, listens, thinks, and speaks back.
            </p>
            <p className="text-base sm:text-lg">
              A hands-free, voice-first AI assistant built on Claude Sonnet 4.6.
              She manages your calendar, emails, Spotify, remembers everything
              about you, and adapts to your life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {[
                "Wake Word",
                "Streaming Voice",
                "Calendar + Gmail",
                "Spotify Control",
                "Long-term Memory",
                "Screenshot Vision",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-zinc-100 dark:bg-white/5 px-6 py-5 rounded-2xl text-base sm:text-lg"
                >
                  <span className="text-[#8B5CF6] text-xl">→</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot gallery */}
        <div className="mt-20">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-end gap-8 overflow-x-auto snap-x snap-mandatory pb-6"
            style={{
              scrollbarWidth: "none",
              maskImage: FADE,
              WebkitMaskImage: FADE,
            }}
          >
            {FRAMES.map((frame) => (
              <div
                key={frame.id}
                className="snap-center shrink-0 flex flex-col items-center gap-3"
              >
                <div
                  className={frame.type === "mac" ? "w-105" : "w-46.25"}
                  style={{
                    filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.22))",
                  }}
                >
                  <Image
                    src={
                      frame.type === "mac" ? "/ARIA-web.png" : "/ARIA-mini.png"
                    }
                    alt={frame.caption}
                    width={frame.type === "mac" ? 2244 : 998}
                    height={frame.type === "mac" ? 1784 : 1774}
                    className="w-full h-auto"
                  />
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 tracking-wide">
                  {frame.caption}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-2">
            {FRAMES.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToFrame(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-zinc-900 dark:bg-white"
                    : "w-4 bg-zinc-300 dark:bg-white/20 hover:bg-zinc-500 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
