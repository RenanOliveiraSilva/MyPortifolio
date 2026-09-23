"use client";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work", active: true },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full px-6 lg:px-12 xl:px-20 py-5 flex items-center justify-between bg-cream">
      {/* Logo / Name */}
      <Link href="/" className="flex items-center gap-1.5 group">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Renan Oliveira
        </span>
        <span className="inline-block w-2 h-2 rounded-full bg-coral" />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`relative text-sm font-medium transition-colors duration-200 hover:text-royal ${
              link.active ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {link.label}

            {/* Wavy underline for active link */}
            {link.active && (
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                height="6"
                viewBox="0 0 50 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3 Q6 0 12 3 Q18 6 25 3 Q32 0 38 3 Q44 6 50 3"
                  stroke="#EF5A3C"
                  strokeWidth="1.8"
                  fill="none"
                />
              </svg>
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
        <span className="w-6 h-0.5 bg-foreground rounded-full" />
        <span className="w-4 h-0.5 bg-foreground rounded-full" />
        <span className="w-6 h-0.5 bg-foreground rounded-full" />
      </button>
    </header>
  );
}
