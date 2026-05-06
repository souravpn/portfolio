"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { greetings } from "@/lib/data";

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-between px-6 pt-40 pb-20"
    >
      {/* Multilingual Greeting */}
      <div className="text-center">
        <motion.div
          key={currentGreeting}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 tracking-wide"
        >
          {greetings[currentGreeting].text}
        </motion.div>
      </div>

      {/* Profile Photo */}
      <div className="relative my-10">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110 -z-10" />
        <div className="relative w-40 h-40 md:w-52 md:h-52">
          <Image
            src="/profile.png"
            alt="Sourav Prakash Nayak"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 160px, 208px"
            className="object-cover object-center rounded-full scale-[1.2]"
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, transparent 45%, var(--vignette-color, rgba(9,9,11,0)) 70%, var(--vignette-color, rgba(9,9,11,0)) 100%)",
            }}
          />
        </div>
      </div>

      {/* Name, Bio */}
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
          Sourav Nayak
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
          Passionate Gen AI and Web Developer &amp; Designer crafting seamless,
          responsive, and user-centric digital experiences.
        </p>
      </div>
    </section>
  );
}
