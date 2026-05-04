'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if we've already shown the splash in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setShowSplash(false);
    } else {
      // Mark that we've shown it for this session
      sessionStorage.setItem('hasSeenSplash', 'true');
      
      // Optional: Auto-hide after animation (e.g., 2.5 seconds)
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Your beautiful splash content here */}
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Create.</h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 tracking-wide">Sourav Prakash Nayak</h1>
            {/* Add logo, animation, etc. */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}