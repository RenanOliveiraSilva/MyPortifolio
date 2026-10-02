'use client';

import React, { useEffect, useRef, useState } from 'react';

interface IlluminatedGridProps {
  cellSize?: number;
  className?: string;
  enableMouseGlow?: boolean;
}

export function IlluminatedGrid({
  cellSize = 50,
  className = '',
  enableMouseGlow = true,
}: IlluminatedGridProps) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, opacity: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enableMouseGlow) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
        });
      });
    };

    const handlePointerLeave = () => {
      setMousePos((prev) => ({ ...prev, opacity: 0 }));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enableMouseGlow]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#020204] ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* ── 1. Ambient lighting glow (Atmospheric light reflection - subtle & deep) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 75% 20%, rgba(167, 139, 250, 0.12) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 75%),
            radial-gradient(circle 380px at 75% 18%, rgba(255, 255, 255, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 55% 40% at 15% 75%, rgba(139, 92, 246, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── 2. SVG Grid Mesh with Glow and Illumination Masks ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Base sharp grid pattern (subtle, dark, visible without dominating) */}
          <pattern
            id="base-grid-pattern"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.09)"
              strokeWidth="1"
            />
          </pattern>

          {/* Gentle illuminated glowing grid pattern */}
          <pattern
            id="illuminated-grid-pattern"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.38)"
              strokeWidth="1"
            />
          </pattern>

          {/* Ambient light mask (top-right soft illumination) */}
          <radialGradient
            id="ambient-light-mask"
            cx="75%"
            cy="20%"
            r="60%"
            fx="75%"
            fy="20%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="ambient-mask">
            <rect width="100%" height="100%" fill="url(#ambient-light-mask)" />
          </mask>

          {/* Soft glowing bloom filter */}
          <filter
            id="grid-glow-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feGaussianBlur stdDeviation="4" result="bigBlur" />
            <feMerge>
              <feMergeNode in="bigBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── A. Base Grid: Subtle dark lines across the whole viewport ── */}
        <rect width="100%" height="100%" fill="url(#base-grid-pattern)" />

        {/* ── B. Ambient Illuminated Glow Grid Layer (Soft light sheen) ── */}
        <rect
          width="100%"
          height="100%"
          fill="url(#illuminated-grid-pattern)"
          mask="url(#ambient-mask)"
          filter="url(#grid-glow-filter)"
          style={{ opacity: 0.6 }}
        />
      </svg>

      {/* ── 3. Dynamic interactive mouse spotlight (subtle grid glow under cursor) ── */}
      {enableMouseGlow && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: mousePos.opacity * 0.75,
            maskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          }}
        >
          <svg className="w-full h-full">
            <rect
              width="100%"
              height="100%"
              fill="url(#illuminated-grid-pattern)"
              filter="url(#grid-glow-filter)"
            />
          </svg>
        </div>
      )}

      {/* ── 4. Interactive soft radial aura under cursor ── */}
      {enableMouseGlow && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: mousePos.opacity,
            background: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, rgba(167, 139, 250, 0.1) 0%, transparent 100%)`,
          }}
        />
      )}

      {/* ── 5. Dark vignette for focus and depth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.55) 100%)',
        }}
      />
    </div>
  );
}

export default IlluminatedGrid;
