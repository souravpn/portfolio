'use client';
import { motion } from 'framer-motion';

const TOOLS = ['Calendar', 'Gmail', 'Spotify', 'Memory', 'Location', 'Vision'];

const INPUT_NODES = [
  { icon: '🎤', label: 'Speech Recognition' },
  { icon: '👂', label: 'Wake Word Detection' },
  { icon: '📍', label: 'Geolocation' },
];

function NodeBox({
  tag, title, subtitle, badge, accent = false, delay = 0,
}: {
  tag: string; title: string; subtitle?: string; badge?: string;
  accent?: boolean; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`w-full rounded-2xl px-6 py-4 flex items-center justify-between gap-4
        border transition-colors
        ${accent
          ? 'border-[#8B5CF6]/50 bg-[#8B5CF6]/8 shadow-[0_0_32px_rgba(139,92,246,0.18)]'
          : 'border-white/9 bg-white/3'
        }`}
    >
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-[10px] tracking-widest text-[#8B5CF6]">{tag}</span>
        <span className="text-white font-medium text-sm sm:text-base">{title}</span>
        {subtitle && <span className="text-zinc-500 text-xs">{subtitle}</span>}
      </div>
      {badge && (
        <span className="shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full border border-[#8B5CF6]/30 text-[#8B5CF6] bg-[#8B5CF6]/10">
          {badge}
        </span>
      )}
    </motion.div>
  );
}

function Connector({ label, delay = 0 }: { label?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center gap-0 py-1"
    >
      <div className="w-px h-5 bg-linear-to-b from-[#8B5CF6]/60 to-[#8B5CF6]/30" />
      {label && (
        <span className="font-mono text-[10px] text-zinc-600 px-2">{label}</span>
      )}
      <div className="w-px h-3 bg-[#8B5CF6]/30" />
      {/* arrowhead */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: '5px solid rgba(139,92,246,0.45)',
        }}
      />
    </motion.div>
  );
}

export default function ArchitectureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <span className="font-mono text-xs tracking-widest text-[#8B5CF6]">03 — ARCHITECTURE</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mt-4">Clean. Agentic. Scalable.</h2>
        </div>

        {/* Diagram card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/[0.07] bg-zinc-950 overflow-hidden"
        >
          {/* Dot-grid background */}
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Ambient glow at bottom (Claude core) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-48 bg-[#8B5CF6]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative p-8 sm:p-12 flex flex-col items-center max-w-2xl mx-auto">

            {/* Layer 1 — Client */}
            <NodeBox
              tag="CLIENT"
              title="Browser / Tauri"
              subtitle="Electron shell or native web"
              delay={0}
            />

            <Connector label="user speech" delay={0.1} />

            {/* Layer 2 — Input Processing (3 parallel nodes) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full grid grid-cols-3 gap-2 sm:gap-3"
            >
              {INPUT_NODES.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 border border-white/8 bg-white/2.5 rounded-xl px-3 py-4 text-center"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-zinc-300 text-[11px] sm:text-xs leading-snug">{label}</span>
                </div>
              ))}
            </motion.div>

            <Connector label="signals" delay={0.3} />

            {/* Layer 3 — State */}
            <NodeBox
              tag="STATE"
              title="Zustand + Web Speech API"
              subtitle="Reactive client state"
              delay={0.35}
            />

            <Connector label="SSE request" delay={0.4} />

            {/* Layer 4 — API */}
            <NodeBox
              tag="API LAYER"
              title="/api/chat"
              badge="SSE Streaming"
              delay={0.45}
            />

            <Connector delay={0.5} />

            {/* Layer 5 — Claude Core */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="w-full rounded-2xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/[0.07] p-6 sm:p-8 shadow-[0_0_48px_rgba(139,92,246,0.2)]"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#8B5CF6] block mb-1">AI CORE</span>
                  <span className="text-white font-semibold text-base sm:text-lg">Claude Sonnet 4.6</span>
                  <span className="block text-zinc-400 text-xs mt-0.5">Agentic Loop · depth ≤ 5</span>
                </div>
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-sm">
                  ✦
                </span>
              </div>

              {/* Tool badges */}
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[11px] font-mono text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
