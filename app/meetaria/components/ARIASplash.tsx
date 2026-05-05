'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ARIASplash({ 
  showSplash, 
  setShowSplash 
}: { 
  showSplash: boolean; 
  setShowSplash: (val: boolean) => void;
}) {
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const words = ['Adaptive.', 'Responsive.', 'Intelligent.', 'Assistant.'];

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
          // Close splash after full phrase appears
          setTimeout(() => {
            setShowSplash(false);
          }, 1200);
          return prev;
        }
      });
    }, 750);

    return () => clearInterval(interval);
  }, [showSplash, setShowSplash]);

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
  );
}