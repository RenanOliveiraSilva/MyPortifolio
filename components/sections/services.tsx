import {
  Layout,
  Server,
  Smartphone,
  Database,
  Palette,
  Search,
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

/* ───────── Service Item Data ───────── */

const services = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: "FRONT-END DEVELOPMENT",
    description: "Interactive, responsive interfaces with React & Next.js.",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "BACK-END DEVELOPMENT",
    description: "Robust APIs and server solutions with Spring Boot.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "MOBILE DEVELOPMENT",
    description: "Cross-platform apps with React Native.",
  }
];

/* ───────── Process Step Data ───────── */

const processSteps = [
  {
    icon: <Search className="w-6 h-6" />,
    number: "01",
    title: "DISCOVER",
    description:
      "Understanding your goals, audience, and the big picture.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    number: "02",
    title: "STRATEGIZE",
    description:
      "Research and plan the right strategy with purpose and clarity.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    number: "03",
    title: "DESIGN",
    description:
      "Crafting intuitive, beautiful, and functional interfaces.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    number: "04",
    title: "DEVELOP",
    description:
      "Bringing designs to life with clean, efficient code.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    number: "05",
    title: "DELIVER",
    description:
      "Testing, optimizing, and launching with confidence.",
  },
];

/* ───────── Decorative Elements ───────── */

function SketchyUnderline() {
  return (
    <svg className="w-24 h-2.5 mt-1.5" viewBox="0 0 96 10" fill="none">
      <path
        d="M 2 6 C 18 2, 38 9, 56 5 C 74 1, 84 8, 94 5"
        stroke="#EF5A3C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DottedConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 min-w-4 mx-1">
      <svg className="w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
        <path
          d="M 0 6 L 100 6"
          stroke="#1E4AE9"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* Small arrowhead */}
        <path
          d="M 92 2 L 100 6 L 92 10"
          stroke="#1E4AE9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

/* ───────── Main Component ───────── */

export default function Services() {
  return (
    <section id="services" className="relative bg-[#EFECFD] overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-16 lg:py-24">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* ──── Left Column: WHAT I DO ──── */}
          <div className="lg:col-span-4">
            {/* Section Header */}
            <div className="mb-10">
              <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight mt-2 leading-tight">
                What I Do
              </h2>
              <SketchyUnderline />
            </div>

            {/* Service Items */}
            <div className="space-y-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-sm cursor-default"
                >
                  {/* Icon bubble */}
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-periwinkle/40 flex items-center justify-center text-royal transition-colors duration-300 group-hover:bg-royal group-hover:text-white">
                    {service.icon}
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold text-[#111827] tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {/* <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground/40 mt-0.5 transition-all duration-300 group-hover:text-royal group-hover:translate-x-1" /> */}
                </div>
              ))}
            </div>

            {/* Explore link */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-royal hover:text-coral transition-colors duration-200 group"
            >
              EXPLORE PROJECTS
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* ──── Right Column: MY PROCESS ──── */}
          <div className="lg:col-span-8">
            {/* Section Header */}
            <div className="flex items-start justify-between mb-10">
              <div>
                <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">
                  Workflow
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight mt-2 leading-tight">
                  My Dev Process
                </h2>
              </div>
              <div className="hidden lg:block text-right max-w-[200px]">
                <p className="text-xs font-bold text-[#111827] uppercase tracking-wide">
                  A Strategic Approach
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  For Meaningful Results.
                </p>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
              {processSteps.map((step, i) => (
                <div key={i} className="contents">
                  {/* Step Card */}
                  <div className="flex-1 flex flex-col items-center text-center group">
                    {/* Icon Circle */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-periwinkle/50 flex items-center justify-center text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white group-hover:shadow-lg group-hover:shadow-royal/20 group-hover:-translate-y-1">
                        {step.icon}
                      </div>
                      {/* Sketchy ring decoration */}
                      <svg
                        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        viewBox="0 0 80 80"
                        fill="none"
                      >
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#1E4AE9"
                          strokeWidth="1.5"
                          strokeDasharray="6 4"
                          opacity="0.3"
                        />
                      </svg>
                    </div>

                    {/* Number + Title */}
                    <span className="text-xs font-bold text-coral mt-4 tracking-wider">
                      {step.number}
                    </span>
                    <h3 className="text-sm font-extrabold text-[#111827] tracking-wide mt-1">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 max-w-[160px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Dotted connector (not after last item) */}
                  {i < processSteps.length - 1 && <DottedConnector />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="w-full h-16 sm:h-24 lg:h-32 block text-[#FCEEEB]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,30 C320,90 640,10 960,60 C1120,85 1280,40 1440,55 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
