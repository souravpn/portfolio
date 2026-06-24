"use client";

export default function ForgeFlyFeatured() {
  return (
    <div className="max-w-7xl mx-auto bg-[#0A1428] border border-[#10B981]/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
      {/* <!-- Preview Image --> */}
      <div className="relative h-100 bg-gradient-to-br from-[#0A1428] to-[#1E2937] flex items-center justify-center overflow-hidden">
        <img
          src="/forgefly-featured-section.png"
          alt="Forgefly featured"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            BETA
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold text-white">Forgefly</h3>
            <p className="text-emerald-400 font-medium">
              AI Business OS for Solopreneurs
            </p>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-amber-400">
              ★★★★☆
            </span>
          </div>
        </div>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Describe your business once → AI instantly builds your full back
          office (CRM, proposals, invoices, cashflow, client portal). <br />
          Everything you need in your office... without the Office.
        </p>

        {/* <!-- Key Features --> */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">→</span>
            <span className="text-gray-300">Conversational Onboarding</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">→</span>
            <span className="text-gray-300">Real-time Kanban</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">→</span>
            <span className="text-gray-300">Stripe Payments + Agency Mode</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">→</span>
            <span className="text-gray-300">Contextual AI Co-pilot</span>
          </div>
        </div>

        {/* <!-- Tech Stack --> */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
            React + TS
          </span>
          <span className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
            Supabase
          </span>
          <span className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
            Stripe
          </span>
          <span className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
            AI Agents
          </span>
        </div>

        {/* <!-- CTA Buttons --> */}
        <div className="mt-8 flex gap-4">
          <a
            href="https://forgefly.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-2xl text-center transition"
          >
            Try Live Demo →
          </a>
          <a
            href="https://github.com/souravpn/forgefly"
            target="_blank"
            className="flex-1 border border-white/30 hover:bg-white/5 text-white font-semibold py-4 rounded-2xl text-center transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
