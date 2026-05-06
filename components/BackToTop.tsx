"use client";

import { motion } from "framer-motion";

export default function BackToTop() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-4
                 bg-white dark:bg-zinc-900
                 hover:bg-blue-600 dark:hover:bg-blue-600
                 border border-zinc-200 dark:border-zinc-700
                 text-zinc-800 dark:text-zinc-300
                 hover:text-white dark:hover:text-white
                 rounded-full shadow-lg dark:shadow-2xl
                 transition-all duration-300 group"
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
  );
}
