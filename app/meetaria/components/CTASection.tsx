'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
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
          Try ARIA Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>
        
      </div>
    </motion.section>
  );
}