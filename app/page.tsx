'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Español" },
  { text: "Bonjour", lang: "Français" },
  { text: "नमस्ते", lang: "हिन्दी" }, 
  { text: "你好", lang: "Chinese(Simplified)" },
  { text: "こんにちは", lang: "日本語" },
  { text: "Ciao", lang: "Italiano" },
  { text: "مرحبًا", lang: "Arabic" },
  { text: "Olá", lang: "Português" },
  { text: "Привет", lang: "Русский" },
  { text: "ନମସ୍କାର", lang: "Odia" },
  { text: "Hallo", lang: "Deutsch" },
  { text: "안녕하세요", lang: "한국어" },
  { text: "⠓⠑⠇⠇⠕", lang: "Braille" },
  { text: "👋", lang: "ASL (Sign Language)" },
  { text: ".... . .-.. .-.. ---", lang: "Morse Code" },
];

const experiences = [
  {
    company: "Apple Inc.",
    role: "Frontend Developer (with AI)",
    period: "2023 — Present",
    bullets: [
      "Led development of core features used by 10k+ users",
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
      "Led development of core features used by 10k+ users",
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
      "Led development of core features used by 10k+ users",
      "Improved application performance by 40%",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    company: "Apple Inc.",
    role: "Frontend Developer",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
  {
    company: "Apple Inc.",
    role: "Big Data Engineer",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",

    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
  {
    company: "Infosys Technologies Ltd.",
    role: "Technology Lead",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
  {
    company: "Infosys Technologies Ltd.",
    role: "Technology Analyst",
    period: "2022 — 2023",
    bullets: [
      "Built responsive web applications",
      "Collaborated with design team on UI/UX",
      "Implemented modern animation patterns",
    ],
    tech: ["JavaScript", "Framer Motion", "Figma"],
  },
];

export default function Home() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white min-h-screen overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-between px-6 pt-28 pb-16">

        {/* TOP: Multilingual Greeting */}
        <div className="text-center">
          <motion.div
            key={currentGreeting}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-blue-500 tracking-wide"
          >
            {greetings[currentGreeting].text}
          </motion.div>
        </div>

        {/* MIDDLE: Profile Photo */}
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
                background: 'radial-gradient(circle, transparent 45%, var(--vignette-color, rgba(9,9,11,0)) 70%, var(--vignette-color, rgba(9,9,11,0)) 100%)',
              }}
            />
          </div>
        </div>

        {/* BOTTOM: Name, Bio, Buttons */}
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
            Sourav Nayak
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
            A passionate Web Developer &amp; Designer crafting seamless,
            responsive, and user-centric digital experiences.
          </p>
        </div>

      </section>

      {/* ABOUT ME SECTION */}
      <section id="aboutme" className="min-h-screen flex flex-col items-center justify-between px-6 pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950">
        <h2 className="text-5xl font-bold tracking-tight mb-16">About me</h2>

        {/* Top: Professional Summary */}
        <div className="text-center space-y-5 max-w-2xl">
          <h3 className="text-2xl font-semibold mt-1">
            Professional Summary
          </h3>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
            Results-driven Senior Software Engineer with 8+ years of experience building scalable, user-centric platforms and shared infrastructure for large-scale data and consumer applications. 
            Expertise in designing and maintaining React/TypeScript-based systems, including monorepos, Micro-Frontends, and developer tooling that accelerate team velocity.
            Proven track record using AI (particularly Claude) to enhance code review, observability, deployment pipelines, and internal agentic workflows—reducing engineering friction and on-call burden. 
            Passionate about observability, performance, reliability, and creating intuitive abstractions that empower cross-functional teams. 
          </p>
        </div>

        {/* Middle: Skills */}
        <div className="text-center space-y-5 max-w-2xl">
          <h3 className="text-2xl font-semibold mt-1">
            Skills
          </h3>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
            A passionate Web Developer &amp; Designer crafting seamless,
            responsive, and user-centric digital experiences.
          </p>
        </div>
        {/* Bottom: Certificates scrolling band */}
        <div className="text-center space-y-5 max-w-2xl">
          <h3 className="text-2xl font-semibold mt-1">
            Certifications
          </h3>

          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
            A passionate Web Developer &amp; Designer crafting seamless,
            responsive, and user-centric digital experiences.
          </p>
        </div>
      </section>

      {/* EXPERIENCE - Split Layout */}
      <section id="experience" className="min-h-screen py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-16">Experience</h2>

          <div className="grid md:grid-cols-12 gap-12">
            {/* LEFT COLUMN */}
            <div className="md:col-span-5 md:sticky md:top-24 self-start space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveExp(index)}
                  whileHover={{ x: 8 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border-l-4 ${
                    activeExp === index
                      ? 'border-teal-400 bg-zinc-100 dark:bg-zinc-800'
                      : 'border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  <div className="text-sm text-zinc-500">{exp.period}</div>
                  <h3 className="text-2xl font-semibold mt-1">{exp.company}</h3>
                  <p className="text-teal-500 dark:text-teal-400">{exp.role}</p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-7 max-h-[80vh] overflow-y-auto pr-4 custom-scrollbar">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-4xl font-semibold mb-8">{experiences[activeExp].role}</h3>

                <ul className="space-y-6 text-lg text-zinc-600 dark:text-zinc-300">
                  {experiences[activeExp].bullets.map((bullet, i) => (
                    <li key={i} className="pl-6 border-l border-zinc-300 dark:border-zinc-700">{bullet}</li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-3">
                  {experiences[activeExp].tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-16">Let's talk about your project</p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Info */}
            <div>
              <p className="text-xl mb-10 text-zinc-600 dark:text-zinc-300">
                I'm currently available for freelance work or full-time opportunities.
                If you have an idea, let's build it together.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">✉️</div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-500 dark:text-blue-400">sourav@example.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">📍</div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-zinc-600 dark:text-zinc-300">Gilroy, California (Remote Available)</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mt-12">
                <a href="#" className="text-3xl hover:text-blue-500 transition">in</a>
                <a href="#" className="text-3xl hover:text-blue-500 transition">🐙</a>
                <a href="#" className="text-3xl hover:text-blue-500 transition">𝕏</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-8">
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400" />
                <input type="email" placeholder="Your Email" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400" />
                <input type="text" placeholder="Subject" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400" />
                <textarea placeholder="Your Message" rows={6} className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-3xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"></textarea>

                <button className="w-full py-4 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-full font-medium text-lg hover:scale-105 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Left - Branding */}
            <div>
              <div className="text-2xl font-bold tracking-tighter mb-4">Sourav.</div>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-xs">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            {/* Center - Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Quick Navigation</h4>
              <div className="grid grid-cols-2 gap-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <a href="#about" className="hover:text-blue-500 transition">About</a>
                <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
                <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
              </div>
            </div>

            {/* Right - Social + Credits */}
            <div className="flex flex-col md:items-end">
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Connect</h4>

              <div className="flex gap-6 text-2xl mb-10 text-zinc-600 dark:text-zinc-300">
                <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500 transition">in</a>
                <a href="https://github.com" target="_blank" className="hover:text-blue-500 transition">GitHub</a>
                <a href="https://twitter.com" target="_blank" className="hover:text-blue-500 transition">𝕏</a>
              </div>

              <div className="text-right text-sm text-zinc-400 dark:text-zinc-500">
                <p>© {new Date().getFullYear()} Sourav Prakash Nayak</p>
                <p className="mt-1">Made with ❤️ in Morgan Hill, California</p>
                <div className="mt-2 flex flex-wrap gap-1.5 justify-end">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-zinc-200 dark:bg-black/70 text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/10">Next.js 15</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20">Tailwind CSS</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">Framer Motion</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20">Lenis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
