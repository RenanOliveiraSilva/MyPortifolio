'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Zap,
  Globe,
  Database,
  Terminal,
  CheckCircle2,
  Boxes,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface BuildPillar {
  id: string;
  stepNumber: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  techs: string[];
  metric: { value: string; label: string };
  visualCard: React.ReactNode;
}

export function WhatIBuildSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Monitor scroll to pin the screen and drive step transitions
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScrollable = rect.height - viewportHeight;
      if (totalScrollable > 0) {
        const scrolled = -rect.top;
        const prog = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
        setScrollProgress(prog);

        // Evenly divide the 3 steps across the scroll distance
        if (prog < 0.33) {
          setActiveStep(0);
        } else if (prog < 0.66) {
          setActiveStep(1);
        } else {
          setActiveStep(2);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jump to specific step by scrolling
  const scrollToStep = (stepIndex: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    const target = scrollTop + (stepIndex / 2.5) * totalScrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const pillars: BuildPillar[] = [
    {
      id: 'pillar-web-apps',
      stepNumber: '01',
      tag: 'FRONTEND & SAAS',
      title: 'Aplicações Web & SaaS',
      highlight: 'de Ponta a Ponta',
      description:
        'Crio plataformas completas com foco em experiência do usuário, tempo de resposta instantâneo e arquiteturas prontas para escala. Do wireframe ao deploy em produção.',
      techs: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
      metric: { value: '100%', label: 'Score Lighthouse & Performance' },
      visualCard: (
        <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950/85 border border-violet-500/25 p-6 backdrop-blur-2xl shadow-2xl shadow-violet-950/50 overflow-hidden">
          {/* Ambient card glow */}
          <div className="absolute -top-24 -right-24 w-52 h-52 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Browser Mockup Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="px-3 py-1 rounded-full bg-zinc-900 text-[11px] text-zinc-400 font-mono flex items-center gap-1.5 border border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              production // https
            </div>
          </div>

          {/* Card Body */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400 font-medium">Tempo de Carregamento (LCP)</p>
                <p className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-2 mt-0.5">
                  0.48s
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" /> 98% mais rápido
                  </span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Zap className="w-6 h-6" />
              </div>
            </div>

            {/* Interactive tag pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['App Router', 'Server Actions', 'Optimistic UI', 'Edge Cache'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Simulated Live Activity Bar */}
            <div className="pt-2">
              <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5 font-mono">
                <span>Core Web Vitals</span>
                <span className="text-emerald-400 font-semibold">Excelente (All Green)</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden flex gap-1 p-0.5 border border-zinc-800">
                <div className="h-full bg-emerald-500 rounded-full w-4/5 animate-pulse" />
                <div className="h-full bg-violet-400 rounded-full w-1/5" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pillar-3d-interfaces',
      stepNumber: '02',
      tag: 'DESIGN & 3D',
      title: 'Interfaces Ricas & 3D',
      highlight: 'Experiências Imersivas',
      description:
        'Integro elementos tridimensionais, física em tempo real e microanimações que prendem a atenção do usuário, elevando a identidade de marcas a outro nível.',
      techs: ['Three.js', 'React Three Fiber', 'Rapier Physics', 'GLSL Shaders', 'WebAudio'],
      metric: { value: '60 FPS', label: 'Simulação Física Suave e Responsiva' },
      visualCard: (
        <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950/85 border border-indigo-500/25 p-6 backdrop-blur-2xl shadow-2xl shadow-indigo-950/50 overflow-hidden">
          {/* Ambient card glow */}
          <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* 3D Simulation Status Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <Boxes className="w-4 h-4 text-indigo-400" />
              <span>WebGL 2.0 // Canvas Ready</span>
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-[11px] text-indigo-400 font-mono border border-indigo-500/30 font-semibold">
              60 FPS
            </div>
          </div>

          {/* Visual Interactive Wireframe Element */}
          <div className="relative py-4 flex items-center justify-center">
            {/* Spinning orbital rings */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/40 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-violet-400/30 animate-[spin_8s_linear_infinite_reverse]" />
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-0.5 shadow-lg shadow-violet-500/30 flex items-center justify-center transform rotate-12 transition-transform duration-500 hover:rotate-45">
                <div className="w-full h-full bg-zinc-950/90 rounded-[14px] flex flex-col items-center justify-center text-white">
                  <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400 mt-1 font-semibold">3D PHYSICS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['RigidBody', 'Spring Joints', 'Dynamic Lighting', 'Raycasting'].map((badge) => (
              <span
                key={badge}
                className="text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-300 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'pillar-backend-infra',
      stepNumber: '03',
      tag: 'ARQUITETURA & APIS',
      title: 'Backend Escalável',
      highlight: '& Infraestrutura',
      description:
        'Desenvolvo APIs resilientes, modelagem de dados eficiente e microsserviços preparados para alto volume de tráfego, sempre com segurança e estabilidade.',
      techs: ['Node.js', 'PostgreSQL', 'Prisma', 'REST / GraphQL', 'Docker', 'Redis'],
      metric: { value: '< 40ms', label: 'Latência Média de Resposta de API' },
      visualCard: (
        <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950/85 border border-purple-500/25 p-6 backdrop-blur-2xl shadow-2xl shadow-purple-950/50 overflow-hidden">
          {/* Ambient card glow */}
          <div className="absolute top-1/2 -right-24 w-52 h-52 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono text-zinc-300">api.cluster.v1 // logs</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 99.99% UPTIME
            </span>
          </div>

          {/* Code/Status Lines */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-between">
              <span className="text-zinc-400">GET /api/v1/projects</span>
              <span className="text-emerald-400 font-semibold">200 OK • 32ms</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-between">
              <span className="text-zinc-400">POST /api/v1/auth/session</span>
              <span className="text-emerald-400 font-semibold">201 CREATED • 41ms</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-between">
              <span className="text-zinc-400">CACHE: Redis Hit Rate</span>
              <span className="text-violet-400 font-semibold">96.4% Efficiency</span>
            </div>
          </div>

          {/* Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-3">
            {['Microservices', 'JWT Auth', 'Rate Limiting', 'CI/CD Pipelines'].map((badge) => (
              <span
                key={badge}
                className="text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-purple-300 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="o-que-eu-construo"
      ref={sectionRef}
      className="relative h-[320vh] bg-black text-zinc-100"
    >
      {/* ── STICKY PINNED VIEWPORT: Stays 100% stationary while user scrolls ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-black select-none">
        {/* Background Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Inner Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-8">
          {/* Section Header: Pill & Compact Title */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-zinc-800/60">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/10 text-xs text-violet-300 tracking-widest uppercase font-mono mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                O Que Eu Construo
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Soluções completas,{' '}
                <span className="hero-heading-accent">da interface à infraestrutura</span>.
              </h2>
            </div>

            {/* Step Indicators: 01 / 02 / 03 with scroll progress */}
            <div className="flex items-center gap-2">
              {pillars.map((p, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => scrollToStep(idx)}
                    className={`cursor-pointer px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-violet-500/20 border border-violet-500/40 text-white font-bold shadow-[0_0_12px_rgba(167,139,250,0.3)]'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>{p.stepNumber}</span>
                    <span className="hidden md:inline text-[10px] text-zinc-400">
                      {p.tag.split('&')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── 2-Column Pinned Arena: Left text & Right cards change in place ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Fixed-Position Text with Laser Progress Rail */}
            <div className="lg:col-span-6 relative flex items-center min-h-[340px] sm:min-h-[380px]">
              {/* Vertical Progress Rail */}
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-zinc-800/80 rounded-full hidden sm:block overflow-hidden">
                <div
                  className="w-full bg-gradient-to-b from-violet-400 to-indigo-500 transition-all duration-150 shadow-[0_0_10px_#a78bfa]"
                  style={{
                    height: `${scrollProgress * 100}%`,
                  }}
                />
              </div>

              {/* Stacked Pillars Text (All stay in place and transition smoothly) */}
              <div className="relative w-full h-full">
                {pillars.map((pillar, idx) => {
                  const isActive = activeStep === idx;

                  return (
                    <div
                      key={pillar.id}
                      className={`transition-all duration-500 ease-out flex flex-col justify-center ${
                        isActive
                          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto relative'
                          : 'opacity-0 translate-y-6 scale-95 pointer-events-none absolute inset-0'
                      }`}
                    >
                      {/* Step Tag */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono text-violet-400 font-bold tracking-wider px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                          {pillar.stepNumber}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 tracking-wider">
                          {pillar.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                        {pillar.title}{' '}
                        <span className="hero-heading-accent">
                          {pillar.highlight}
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                        {pillar.description}
                      </p>

                      {/* Key Metric Badge */}
                      <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs mb-6 w-fit">
                        <span className="text-xl font-bold text-white font-mono">
                          {pillar.metric.value}
                        </span>
                        <span className="text-zinc-400 text-[11px] leading-tight">
                          {pillar.metric.label}
                        </span>
                      </div>

                      {/* Tech stack badge tags */}
                      <div className="flex flex-wrap gap-2">
                        {pillar.techs.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md bg-zinc-900/70 border border-zinc-800 text-zinc-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Fixed-Position Emerging Visual Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px]">
              {pillars.map((pillar, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={pillar.id}
                    className={`w-full transition-all duration-700 ease-out flex items-center justify-center ${
                      isActive
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto relative z-10'
                        : 'opacity-0 scale-90 translate-y-8 pointer-events-none absolute inset-0 z-0'
                    }`}
                  >
                    {pillar.visualCard}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Scroll Prompt Bar */}
          <div className="mt-8 pt-4 border-t border-zinc-900/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
              Role a página para alternar as 3 soluções
            </span>
            <span>
              Passo <span className="text-white font-bold">{activeStep + 1}</span> de 3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIBuildSection;
