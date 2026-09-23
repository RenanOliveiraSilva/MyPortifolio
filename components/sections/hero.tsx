import { MapPin, Mail, Globe, Link2, ArrowUpRight, Download } from "lucide-react";

/* ───────────────────────── SVG DECORATIONS ───────────────────────── */

function EditionBadge() {
  return (
    <div className="relative inline-flex items-center mb-4">
      {/* Tilted Hand-drawn sketchy oval badge */}
      <div className="relative px-5 py-3 -rotate-[14deg] origin-center">
        {/* Hand-drawn sketchy oval */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 110 76"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Main sketchy oval outline */}
          <path
            d="M 55 4 
               C 82 3, 106 17, 106 38 
               C 106 59, 82 72, 54 72 
               C 24 72, 4 58, 4 38 
               C 4 17, 26 4, 55 4 
               C 70 4, 86 8, 94 15"
            stroke="#1E4AE9"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Sketchy double-line accent */}
          <path
            d="M 12 28 C 8 36, 10 46, 20 56"
            stroke="#1E4AE9"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>

        {/* 2-line text: 2025 Edition */}
        <div className="relative z-10 flex flex-col items-center justify-center text-royal font-bold select-none text-center">
          <span className="text-[17px] font-extrabold leading-none tracking-tight">
            2026
          </span>
          <span className="text-[15px] font-bold leading-tight tracking-tight">
            Edition
          </span>
        </div>
      </div>

      {/* Hand-drawn cursive loop arrow curving right and down toward title */}
      <svg
        className="w-20 h-18 -ml-1 mt-3 pointer-events-none"
        viewBox="0 0 80 72"
        fill="none"
      >
        {/* Loop-the-loop arrow path */}
        <path
          d="M 4 32 
             C 7 28, 10 27, 14 30 
             C 17 32, 20 38, 23 37 
             C 27 36, 28 26, 24 25 
             C 20 24, 18 31, 22 34 
             C 27 37, 36 22, 48 24 
             C 58 26, 68 40, 68 64"
          stroke="#1E4AE9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Arrowhead pointing down */}
        <path
          d="M 59 54 L 68 64 L 75 55"
          stroke="#1E4AE9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}


function GoldStarburst() {
  return (
    <svg
      className="w-12 h-12 animate-spin-slow"
      viewBox="0 0 48 48"
    >
      <line x1="24" y1="2" x2="24" y2="46" stroke="#E8B731" strokeWidth="2" />
      <line x1="2" y1="24" x2="46" y2="24" stroke="#E8B731" strokeWidth="2" />
      <line
        x1="8"
        y1="8"
        x2="40"
        y2="40"
        stroke="#E8B731"
        strokeWidth="1.5"
      />
      <line
        x1="40"
        y1="8"
        x2="8"
        y2="40"
        stroke="#E8B731"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BlueSparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-6 h-6 text-royal ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 C12.8 7.2, 16.8 11.2, 24 12 C16.8 12.8, 12.8 16.8, 12 24 C11.2 16.8, 7.2 12.8, 0 12 C7.2 11.2, 11.2 7.2, 12 0 Z" />
    </svg>
  );
}

function GreenPlus({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none">
      <path d="M12 3V21M3 12H21" stroke="#A8D843" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-10 h-10 ${className}`} viewBox="0 0 44 44" fill="none">
      {/* Top arrowhead */}
      <path
        d="M 18 9 L 26 7 L 24 15"
        stroke="#1a1a2e"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Curved loop */}
      <path
        d="M 24 8 C 12 10, 5 18, 5 27 C 5 35, 13 38, 25 38"
        stroke="#1a1a2e"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Bottom arrowhead */}
      <path
        d="M 17 32 L 25 38 L 18 43"
        stroke="#1a1a2e"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GreenAsterisk() {
  return (
    <svg
      className="w-10 h-10 animate-pulse-gentle"
      viewBox="0 0 40 40"
    >
      <line x1="20" y1="2" x2="20" y2="38" stroke="#9ACD32" strokeWidth="3" strokeLinecap="round" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="#9ACD32" strokeWidth="3" strokeLinecap="round" />
      <line x1="7" y1="7" x2="33" y2="33" stroke="#9ACD32" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="7" x2="7" y2="33" stroke="#9ACD32" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CoralSwirl() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36">
      <path
        d="M18 18 C18 10, 28 8, 30 16 C32 24, 24 28, 18 26 C12 24, 10 18, 14 12"
        stroke="#EF5A3C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlueDoodleLines() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40">
      <line x1="20" y1="20" x2="35" y2="5" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="38" y2="14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="36" y2="24" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ──────────────────── CONTACT CARD ──────────────────── */

function ContactCard() {
  const contacts = [
    {
      icon: <MapPin className="w-4 h-4 text-coral" />,
      text: "São Paulo, Brasil",
    },
    {
      icon: <Mail className="w-4 h-4 text-royal" />,
      text: "renan.oliveira@email.com",
    },
    {
      icon: <Globe className="w-4 h-4 text-royal" />,
      text: "renanoliveira.dev",
    },
    {
      icon: <Link2 className="w-4 h-4 text-royal" />,
      text: "linkedin.com/in/renan-oliveira",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl px-6 py-5 w-full max-w-xs border border-white/60">
      {/* Name row */}
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">Renan Oliveira</h3>
        <span className="text-sm font-medium text-coral">He/Him</span>
      </div>

      {/* Contact items */}
      <ul className="space-y-2.5">
        {contacts.map((item, i) => (
          <li key={i} className="flex items-center gap-2.5">
            {item.icon}
            <span className="text-sm text-muted-foreground">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 lg:px-12 xl:px-20">
      {/* ──── Main Grid ──── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-8 items-center min-h-[calc(100vh-72px)] py-12 lg:py-0 max-w-7xl mx-auto"
      >
        {/* ──── LEFT SIDE ──── */}
        <div className="relative z-10 flex flex-col justify-center items-start">
          {/* Edition Badge */}
          <EditionBadge />

          {/* Big Title Container — full width, beautifully organic and filling all spaces */}
          <div className="relative mt-1 select-none w-full max-w-2xl">
            {/* Top Sparkle (above 't') */}
            <div className="absolute -top-6 right-10 sm:right-24 pointer-events-none">
              <BlueSparkle className="w-6 h-6 animate-pulse-gentle" />
            </div>

            {/* Line 1: Port + Full-Stack Developer Tag */}
            <div className="relative flex items-end">
              <h1 className="font-serif font-black text-royal tracking-tight leading-[0.9]">
                <span className="inline-flex text-[clamp(82px,11.5vw,152px)]">
                  <span
                    className="inline-block origin-bottom-left"
                    style={{ transform: "rotate(-4deg)" }}
                  >
                    P
                  </span>
                  <span
                    className="inline-block origin-bottom-center -ml-[0.02em]"
                    style={{ transform: "rotate(-6deg) translateY(0.02em)" }}
                  >
                    o
                  </span>
                  <span
                    className="inline-block origin-bottom-left -ml-[0.01em]"
                    style={{ transform: "rotate(-2deg)" }}
                  >
                    r
                  </span>
                  <span
                    className="inline-block origin-bottom-left -ml-[0.01em]"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    t
                  </span>
                </span>
              </h1>

              {/* Full-Stack Developer pill tag — neatly in the open gap, clear of 't' */}
              <div className="relative mb-6 sm:mb-8 ml-6 sm:ml-10 z-20">
                <span className="inline-block bg-coral text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md transform rotate-[-1deg] whitespace-nowrap">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            {/* Middle Sparkle — floating in the notch between 'Port' and 'folio' */}
            <div className="absolute top-[46%] left-[50%] sm:left-[48%] z-10 pointer-events-none">
              <BlueSparkle className="w-6 h-6 animate-pulse-gentle" />
            </div>

            {/* Line 2: Left doodles (Green Plus + Doodle Arrow) + shifted 'folio' + Gold Starburst */}
            <div className="relative flex items-center mt-2 sm:mt-4">
              {/* Left column doodles filling the gap under 'P' */}
              <div className="absolute left-2 sm:left-4 top-2 sm:top-4 flex flex-col items-center gap-3 pointer-events-none">
                <GreenPlus className="w-6 h-6 sm:w-7 sm:h-7" />
                <DoodleArrow className="w-10 h-10 sm:w-12 sm:h-12 -ml-1" />
              </div>

              {/* 'folio' — indented so 'f' starts under the space between 'o' and 'r' */}
              <div className="pl-[31%] sm:pl-[33%]">
                <span className="font-serif font-black text-royal tracking-tight leading-[0.9] inline-flex text-[clamp(82px,11.5vw,152px)]">
                  <span
                    className="inline-block origin-bottom-left"
                    style={{ transform: "rotate(-5deg)" }}
                  >
                    f
                  </span>
                  <span
                    className="inline-block origin-bottom-center -ml-[0.02em]"
                    style={{ transform: "rotate(-5deg) translateY(0.01em)" }}
                  >
                    o
                  </span>
                  <span
                    className="inline-block origin-bottom-left -ml-[0.01em]"
                    style={{ transform: "rotate(-2deg)" }}
                  >
                    l
                  </span>
                  <span
                    className="inline-block origin-bottom-center -ml-[0.01em]"
                    style={{ transform: "rotate(-1deg)" }}
                  >
                    i
                  </span>
                  <span
                    className="inline-block origin-bottom-center -ml-[0.01em]"
                    style={{ transform: "rotate(1deg)" }}
                  >
                    o
                  </span>
                </span>
              </div>

              {/* Gold starburst — sitting right under 'io' on the right */}
              <div className="absolute -bottom-6 right-1 sm:right-4 pointer-events-none z-10">
                <GoldStarburst />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-base lg:text-lg text-foreground font-medium mt-8 max-w-md leading-relaxed">
            I build digital products that are
            <br className="hidden sm:block" />
            fast, scalable and thoughtfully designed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-foreground/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:border-foreground/40 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group"
            >
              Download CV
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ──── RIGHT SIDE ──── */}
        <div className="relative flex justify-center items-center">

          {/* Blue sparkle near smiley */}
          <div className="absolute top-8 left-12 z-30">
            <BlueSparkle className="animate-pulse-gentle" />
          </div>

          {/* Green asterisk - top right */}
          <div className="absolute -top-6 -right-2 z-30 hidden lg:block">
            <GreenAsterisk />
          </div>

          {/* Photo + blob container */}
          <div className="relative w-[280px] h-[360px] sm:w-[300px] sm:h-[400px] lg:w-[340px] lg:h-[440px] -mt-12">
            {/* SVG: blob fill + masked photo + stroke outline */}
            <svg
              className="absolute z-10"
              style={{
                top: "-40px",
                left: "-50px",
                width: "calc(100% + 100px)",
                height: "calc(100% + 70px)",
              }}
              viewBox="0 0 500 580"
              fill="none"
            >
              <defs>
                <clipPath id="blob-clip">
                  <path
                    d="M230 25
                       C310 10, 410 20, 455 80
                       C495 135, 490 210, 480 290
                       C470 370, 440 430, 380 475
                       C320 520, 240 540, 180 520
                       C120 500, 70 450, 45 380
                       C20 310, 25 250, 55 200
                       C80 155, 110 140, 100 100
                       C90 60, 140 30, 230 25 Z"
                  />
                </clipPath>
              </defs>

              {/* 1. Background fill */}
              <path
                d="M230 25
                   C310 10, 410 20, 455 80
                   C495 135, 490 210, 480 290
                   C470 370, 440 430, 380 475
                   C320 520, 240 540, 180 520
                   C120 500, 70 450, 45 380
                   C20 310, 25 250, 55 200
                   C80 155, 110 140, 100 100
                   C90 60, 140 30, 230 25 Z"
                fill="#C5D5F7"
              />

              {/* 2. Photo masked to blob shape */}
              <image
                href="/perfil.svg"
                x="20"
                y="-10"
                width="470"
                height="570"
                clipPath="url(#blob-clip)"
                preserveAspectRatio="xMidYMin slice"
              />

              {/* 3. Stroke outline on top */}
              <path
                d="M230 25
                   C310 10, 410 20, 455 80
                   C495 135, 490 210, 480 290
                   C470 370, 440 430, 380 475
                   C320 520, 240 540, 180 520
                   C120 500, 70 450, 45 380
                   C20 310, 25 250, 55 200
                   C80 155, 110 140, 100 100
                   C90 60, 140 30, 230 25 Z"
                fill="none"
                stroke="#1E4AE9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Contact Card */}
            <div className="absolute -bottom-18 -right-10 z-20">
              <ContactCard />
            </div>
          </div>

          {/* Coral swirl - bottom right of photo area */}
          <div className="absolute bottom-4 -right-4 hidden lg:block">
            <CoralSwirl />
          </div>
          <div className="absolute bottom-12 right-4 hidden lg:block opacity-60">
            <CoralSwirl />
          </div>
        </div>
      </div>
    </section>
  );
}

