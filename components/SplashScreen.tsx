"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { splashWords } from "@/lib/data";

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splashShown")) return;
    sessionStorage.setItem("splashShown", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 3050);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
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
  );
}
