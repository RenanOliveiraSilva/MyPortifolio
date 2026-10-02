'use client';

import { ThreeCard } from '@/components/ui/three-card';
import { IlluminatedGrid } from '@/components/ui/IlluminatedGrid';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* ── Illuminated Grid Wireframe Background ── */}
      <IlluminatedGrid cellSize={48} />

      {/* Ambient glow orbs */}
      <div className="hero-glow-orb hero-glow-orb--purple" />
      <div className="hero-glow-orb hero-glow-orb--blue" />

      {/* ── 3D Canvas: full-section background layer ── */}
      <div className="absolute inset-0 z-[1]">
        <ThreeCard
          width="100%"
          height="100%"
          transparent
          bandColor="#a78bfa"
          cameraOffsetX={-3}
        />
      </div>

      {/* ── Text content: overlay on the left ── */}
      <div className="relative z-[2] pointer-events-none min-h-screen flex items-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-xl flex flex-col gap-8">
            {/* Status tag */}
            <div>
              <span className="hero-tag pointer-events-auto">
                <span className="hero-tag__dot" />
                Disponível para projetos
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Olá, sou{' '}
                <span className="hero-heading-accent">
                  Renan Oliveira
                </span>
                <br />
                <span className="text-zinc-400 text-3xl sm:text-4xl lg:text-5xl font-semibold">
                  Full-Stack Developer
                </span>
              </h1>

              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-lg">
                Criando soluções digitais de alta performance e experiências
                únicas que conectam tecnologia e design.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="hero-btn hero-btn--primary pointer-events-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 3h12l4 6-10 13L2 9z" />
                </svg>
                Ver Projetos
              </a>
              <a href="#contato" className="hero-btn hero-btn--outline pointer-events-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Fale Comigo
              </a>
            </div>

            {/* Tech stack badges */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-zinc-600 uppercase tracking-widest">
                Stack
              </span>
              <div className="h-px w-6 bg-zinc-800" />
              {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-zinc-500 px-2.5 py-1 rounded-md border border-zinc-800/60 bg-zinc-900/50 pointer-events-auto hover:border-zinc-700 hover:text-zinc-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
