export default function Footer() {
  return (
    <footer className="bg-zinc-50/20 dark:bg-zinc-950/20 border-t border-zinc-200 dark:border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Branding + Socials */}
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-4">
              Sourav.
            </div>
            <div className="flex gap-6 text-2xl text-zinc-600 dark:text-zinc-300">
              <a
                href="https://www.linkedin.com/in/sourav-prakash-nayak-42362364"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                in
              </a>
              <a
                href="https://github.com/souravpn"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Center - Quick Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex flex-col gap-3">
                <a href="#home" className="hover:text-blue-500 transition">
                  Home
                </a>
                <a href="#about" className="hover:text-blue-500 transition">
                  About
                </a>
                <a
                  href="#summary"
                  className="hover:text-blue-500 transition pl-3 text-xs text-zinc-500 dark:text-zinc-400"
                >
                  Summary
                </a>
                <a
                  href="#skills"
                  className="hover:text-blue-500 transition pl-3 text-xs text-zinc-500 dark:text-zinc-400"
                >
                  Skills
                </a>
                <a
                  href="#certifications"
                  className="hover:text-blue-500 transition pl-3 text-xs text-zinc-500 dark:text-zinc-400"
                >
                  Certifications
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#experience"
                  className="hover:text-blue-500 transition"
                >
                  Experience
                </a>
                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Right - Credits */}
          <div className="flex flex-col md:items-end">
            <div className="md:text-right text-sm text-zinc-400 dark:text-zinc-500">
              <p>© {new Date().getFullYear()} Sourav Prakash Nayak</p>
              <p className="mt-1">Made with ❤️ in Morgan Hill, California</p>
              <div className="mt-2 flex flex-wrap gap-1.5 md:justify-end">
                <span className="px-2 py-0.5 rounded text-xs bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                  Next.js 15
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20">
                  Tailwind CSS
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
                  Framer Motion
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20">
                  Lenis
                </span>
                <div className="mt-2">
                  <a
                    href={"https://github.com/souravpn/portfolio"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-xs bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-500/20 transition-all"
                  >
                    View this code on
                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="transition-transform group-hover:scale-110"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.044-.015-2.049-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
