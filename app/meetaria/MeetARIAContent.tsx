'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function MeetARIAContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const words = ['Adaptive.', 'Responsive.', 'Intelligent.', 'Assistant.'];

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  // Splash Animation
  useEffect(() => {
    if (!showSplash) return;

    let index = 0;
    const interval = setInterval(() => {
      setCurrentWords((prev) => {
        if (index < words.length) {
          const newWords = [...prev, words[index]];
          index++;
          return newWords;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowSplash(false), 1400);
          return prev;
        }
      });
    }, 750);

    return () => clearInterval(interval);
  }, [showSplash]);

  const WaveformBar = ({ delay }: { delay: number }) => (
    <motion.div
      className="w-[3px] sm:w-1 bg-[#8B5CF6] dark:bg-[#8B5CF6] rounded-full origin-bottom"
      initial={{ height: 12 }}
      animate={{ height: [12, 42, 18, 34, 12] }}
      transition={{
        duration: 1.1,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
    />
  );

  return (
    <>
      {/* SPLASH SCREEN */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(at_center,#8B5CF6_0%,transparent_75%)] opacity-10" />

            <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-md">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-3 mb-10 sm:mb-12"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-[#8B5CF6] to-[#C084FC] flex items-center justify-center text-4xl sm:text-5xl font-black shadow-2xl shadow-[#8B5CF6]/50">
                  A
                </div>
                <span className="text-6xl sm:text-8xl font-black tracking-[-3px]">ARIA</span>
              </motion.div>

              <div className="min-h-[160px] sm:min-h-[200px] flex flex-col items-center">
                <div className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-3 text-center leading-none">
                  {currentWords.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-end justify-center gap-1 sm:gap-1.5 h-14 sm:h-16 mt-10 sm:mt-16">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <WaveformBar key={i} delay={i * 0.07} />
                  ))}
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm tracking-[3px] mt-12 sm:mt-16 font-mono uppercase">
                Adaptive Reasoning Intelligence Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LANDING PAGE */}
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white font-sans transition-colors duration-300">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <span className="text-[#8B5CF6]">◉</span> Sourav Nayak
            </Link>
            <Link
              href="/meetaria"
              className="flex items-center gap-1.5 text-sm font-medium hover:text-[#8B5CF6] transition-colors"
            >
              <span className="text-[#8B5CF6]">◉</span> A.R.I.A
            </Link>
          </div>
        </nav>

        <main className="pt-16 sm:pt-20">
          {/* HERO */}
          <section className="min-h-[100dvh] flex items-center relative overflow-hidden px-5 sm:px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-12 md:py-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="space-y-6 sm:space-y-8 text-center md:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs sm:text-sm font-mono tracking-widest mx-auto md:mx-0">
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
                  NOW LIVE
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[1.05]">
                  Meet{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#A855F7]">
                    A.R.I.A
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto md:mx-0">
                  Adaptive Reasoning Intelligence Assistant.<br className="hidden sm:block" />
                  Voice-first AI. Built for anyone, for everything.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <motion.a
                    href="https://ariaproject.ai"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 sm:px-10 py-5 sm:py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold rounded-3xl text-lg sm:text-xl flex items-center justify-center gap-3 group"
                  >
                    Try ARIA Now
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/souravpn/aria"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="px-8 sm:px-10 py-5 sm:py-6 border border-zinc-300 dark:border-white/30 hover:border-zinc-400 dark:hover:border-white/70 rounded-3xl text-lg transition-all"
                  >
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>

              {/* Animated Orb */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1 }}
                className="relative flex justify-center md:justify-end pt-8 md:pt-0"
              >
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border border-[#8B5CF6]/30 rounded-[4rem] sm:rounded-[5rem]"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-8 sm:inset-12 border border-[#8B5CF6]/20 rounded-[3rem] sm:rounded-[4rem]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-2xl shadow-[#8B5CF6]/30 overflow-hidden">
                      <img
                        src="/aria-face.png"
                        alt="A.R.I.A Orb"
                        className="w-full h-full object-contain md:p-4"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* THE EXPERIENCE */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
              <div className="grid md:grid-cols-12 gap-10 md:gap-16">
                <div className="md:col-span-5">
                  <div className="sticky top-24">
                    <span className="font-mono text-xs tracking-widest text-[#8B5CF6]">01 — THE EXPERIENCE</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mt-6 leading-tight">
                      She feels like a real person.
                    </h2>
                  </div>
                </div>
                <div className="md:col-span-7 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-8">
                  <p className="text-xl sm:text-2xl text-zinc-950 dark:text-white">
                    Say <span className="font-semibold">"Hey ARIA"</span> — she wakes up, listens, thinks, and speaks back.
                  </p>
                  <p className="text-base sm:text-lg">
                    A hands-free, voice-first AI assistant built on Claude Sonnet 4.6. She manages your calendar, emails, Spotify, remembers everything about you, and adapts to your life.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                    {['Wake Word', 'Streaming Voice', 'Calendar + Gmail', 'Spotify Control', 'Long-term Memory', 'Screenshot Vision'].map((item, i) => (
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
            </div>
          </motion.section>

          {/* TECH STACK */}
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

          {/* ARCHITECTURE */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="py-20 sm:py-28"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
              <div className="mb-12 sm:mb-16 text-center md:text-left">
                <span className="font-mono text-xs tracking-widest text-[#8B5CF6]">03 — ARCHITECTURE</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mt-4">Clean. Agentic. Scalable.</h2>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 md:p-14 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto"
              >
                <pre className="text-[#8B5CF6] whitespace-pre">
{`Client (Browser / Tauri)
    ↓ Speech + Wake Word + Geolocation
    ↓ Zustand + Web Speech API
          ↓
     /api/chat (SSE Streaming)
          ↓
Claude Sonnet 4.6 Agentic Loop (depth ≤ 5)
    Tools: Calendar • Gmail • Spotify • Memory • Location • Vision`}
                </pre>
              </motion.div>
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent text-center px-5"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mb-6 sm:mb-8">
                Ready to talk to the future?
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 sm:mb-12">
                Say “Hey ARIA” and experience her.
              </p>

              <motion.a
                href="https://ariaproject.ai"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold text-lg sm:text-2xl px-12 sm:px-16 py-7 sm:py-8 rounded-3xl hover:shadow-2xl hover:shadow-[#8B5CF6]/40 transition-all mx-auto"
              >
                Open ARIA Now
                <span className="text-4xl">🎙️</span>
              </motion.a>
            </div>
          </motion.section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 sm:py-12 text-center text-xs text-zinc-500 font-mono px-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© Sourav Nayak 2026 • The Project A.R.I.A</div>
            <div className="flex gap-6 sm:gap-8">
              <a href="https://ariaproject.ai" className="hover:text-zinc-950 dark:hover:text-white">Live Demo</a>
              <a href="https://github.com/souravpn/aria" className="hover:text-zinc-950 dark:hover:text-white">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}