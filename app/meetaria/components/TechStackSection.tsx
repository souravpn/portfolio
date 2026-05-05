'use client';
import { motion } from 'framer-motion';

export default function TechStackSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 sm:py-28 bg-zinc-100 dark:bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <span className="font-mono text-xs tracking-widest text-[#8B5CF6]">02 — TECH</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mt-4">Built with the best.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Next.js 15", desc: "App Router + Streaming" },
            { title: "Claude Sonnet 4.6", desc: "Agentic reasoning core" },
            { title: "Tauri 2", desc: "Native macOS menu bar app" },
            { title: "TypeScript", desc: "End-to-end type safety" },
            { title: "Upstash Redis", desc: "Memory + Rate limiting" },
            { title: "Tailwind + Framer Motion", desc: "Beautiful interactions" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-7 sm:p-8 hover:border-[#8B5CF6]/50 transition-all"
            >
              <div className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors">
                {tech.title}
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}