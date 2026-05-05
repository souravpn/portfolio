'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ARIAHero() {
  return (
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="relative flex justify-center md:justify-end pt-8 md:pt-0"
        >
          {/* Orb Visual - same as before */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px]">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 border border-[#8B5CF6]/30 rounded-[4rem] sm:rounded-[5rem]" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: 'linear' }} className="absolute inset-8 sm:inset-12 border border-[#8B5CF6]/20 rounded-[3rem] sm:rounded-[4rem]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-2xl shadow-[#8B5CF6]/30 overflow-hidden">
                <img src="/aria-face.png" alt="A.R.I.A Orb" className="w-full h-full object-contain md:p-5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}