'use client';

import { useState } from 'react';
import ARIASplash from './components/ARIASplash';
import ARIAHero from './components/ARIAHero';
import ExperienceSection from './components/ExperienceSection';
import TechStackSection from './components/TechStackSection';
import ArchitectureSection from './components/ArchitectureSection';
import CTASection from './components/CTASection';
import Link from 'next/link';

export default function MeetARIAContent() {
  const [showSplash, setShowSplash] = useState(true);
// const [showSplash, setShowSplash] = useState(false);

  return (
    <>
      <ARIASplash showSplash={showSplash} setShowSplash={setShowSplash} />

      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white font-sans transition-colors duration-300">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
            <Link href="/meetaria" className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <span className="text-[#8B5CF6]">◉</span> A.R.I.A
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 sm:text-xl font-semibold hover:text-[#8B5CF6] transition-colors"
            >
              Sourav Nayak.
            </Link>
          </div>
        </nav>
        <main>
          <ARIAHero />
          <ExperienceSection />
          <TechStackSection />
          <ArchitectureSection />
          <CTASection />
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 sm:py-12 text-center text-xs text-zinc-500 font-mono px-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© Sourav Nayak 2026 • Project A.R.I.A</div>
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