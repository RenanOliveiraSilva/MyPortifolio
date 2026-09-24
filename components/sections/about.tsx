import Image from "next/image";
import { Award, Code2, Users, Coffee } from "lucide-react";

const stats = [
  {
    icon: <Award className="w-6 h-6 text-[#E11D48]" />,
    bgColor: "bg-[#FFE4E8]",
    value: "3+ Years",
    label: "Experience",
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#059669]" />,
    bgColor: "bg-[#DCFCE7]",
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: <Users className="w-6 h-6 text-[#D97706]" />,
    bgColor: "bg-[#FEF3C7]",
    value: "4+",
    label: "Happy Clients",
  },
  {
    icon: <Coffee className="w-6 h-6 text-[#7C3AED]" />,
    bgColor: "bg-[#EDE9FE]",
    value: "∞",
    label: "Cups of Coffee",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#FCEEEB] overflow-hidden">
      {/* Top Wave Divider: Hero cream color (#FEF3E7) flowing into About blush (#FCEEEB) */}
      <div className="w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="w-full h-16 sm:h-24 lg:h-32 block text-[#FEF3E7]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,35 C1240,95 1040,115 860,65 C680,15 460,95 240,40 C140,15 50,30 0,45 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 pt-6 pb-12 lg:pt-10 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Developer Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-sm border border-black/5 bg-[#FFF5F5]">
              {/* <Image
                src="/about-illustration.jpg"
                alt="Renan Oliveira trabalhando no notebook"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 440px"
                priority
              /> */}
            </div>
          </div>

          {/* Right Column: Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-coral font-bold text-sm sm:text-base tracking-wide uppercase">
              About me
            </span>

            {/* Title with wavy underline */}
            <div className="mt-2 inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-[1.15]">
                Building apps
                <br />
                with purpose
              </h2>
              {/* Hand-drawn coral squiggly underline */}
              <svg
                className="w-36 sm:w-44 h-3.5 mt-2 text-coral"
                viewBox="0 0 160 14"
                fill="none"
              >
                <path
                  d="M 2 9 C 25 3, 50 14, 75 7 C 100 1, 125 14, 150 7 C 155 5, 158 7, 159 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Paragraphs */}
            <div className="mt-6 space-y-3 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl font-normal">
              <p>
                I&apos;m Renan, a developer with 3+ years of experience building cross-platform web and mobile apps.
              </p>
              <p>
                I love turning ideas into real products with clean code, great user experience and modern technologies.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mt-10 pt-6 border-t border-black/5">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor} shadow-xs`}
                  >
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-3 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave divider transitioning to the next section */}
      <div className="w-full overflow-hidden leading-none pointer-events-none mt-8 lg:mt-12">
        <svg
          className="w-full h-16 sm:h-24 lg:h-32 block text-[#FEF3E7]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,60 C240,110 480,20 720,80 C960,120 1200,30 1440,65 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
