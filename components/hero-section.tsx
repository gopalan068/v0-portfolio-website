"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated gradient background */}
      <div className="animate-gradient pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-60" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Tech-themed background illustration */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Circuit-like nodes and lines */}
        <circle cx="15%" cy="20%" r="3" fill="hsl(var(--primary))" />
        <circle cx="85%" cy="15%" r="4" fill="hsl(var(--primary))" />
        <circle cx="75%" cy="75%" r="3" fill="hsl(var(--primary))" />
        <circle cx="20%" cy="80%" r="5" fill="hsl(var(--primary))" />
        <circle cx="50%" cy="10%" r="3" fill="hsl(var(--primary))" />
        <circle cx="90%" cy="50%" r="4" fill="hsl(var(--primary))" />
        <circle cx="10%" cy="50%" r="3" fill="hsl(var(--primary))" />
        <circle cx="40%" cy="85%" r="4" fill="hsl(var(--primary))" />
        <circle cx="65%" cy="30%" r="3" fill="hsl(var(--primary))" />
        <circle cx="30%" cy="40%" r="4" fill="hsl(var(--primary))" />

        {/* Connecting lines */}
        <line x1="15%" y1="20%" x2="50%" y2="10%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="50%" y1="10%" x2="85%" y2="15%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="85%" y1="15%" x2="90%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="90%" y1="50%" x2="75%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="75%" y1="75%" x2="40%" y2="85%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="40%" y1="85%" x2="20%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="20%" y1="80%" x2="10%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="10%" y1="50%" x2="15%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="30%" y1="40%" x2="65%" y2="30%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="65%" y1="30%" x2="85%" y2="15%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="30%" y1="40%" x2="15%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="30%" y1="40%" x2="20%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="65%" y1="30%" x2="90%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="65%" y1="30%" x2="75%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="0.5" />

        {/* Code bracket decorations */}
        <text x="5%" y="35%" fill="hsl(var(--primary))" fontSize="48" fontFamily="monospace" opacity="0.6">{'{'}</text>
        <text x="90%" y="40%" fill="hsl(var(--primary))" fontSize="48" fontFamily="monospace" opacity="0.6">{'}'}</text>
        <text x="8%" y="65%" fill="hsl(var(--primary))" fontSize="32" fontFamily="monospace" opacity="0.4">{'</'}</text>
        <text x="85%" y="70%" fill="hsl(var(--primary))" fontSize="32" fontFamily="monospace" opacity="0.4">{'/>'}</text>
        <text x="70%" y="12%" fill="hsl(var(--primary))" fontSize="24" fontFamily="monospace" opacity="0.3">{'()'}</text>
        <text x="25%" y="90%" fill="hsl(var(--primary))" fontSize="24" fontFamily="monospace" opacity="0.3">{'[]'}</text>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
        <div
          className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="mb-2 font-mono text-lg tracking-widest text-primary">
            Hello, I am
          </p>
        </div>

        <div
          className={`transition-all delay-100 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h1 className="mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl animate-gradient-text">
            <span className="text-balance">
              Gopalan S
            </span>
          </h1>
        </div>

        <div
          className={`transition-all delay-150 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="mx-auto mb-6 max-w-3xl text-xl font-medium leading-snug text-foreground/80 md:text-2xl">
            Building Efficient &{" "}
            <span className="text-primary">Scalable</span> Software Solutions
          </p>
        </div>

        <div
          className={`transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Full-Stack Developer | Python Specialist | Problem Solver
          </p>
        </div>

        <div
          className={`transition-all delay-300 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
            Third-year CS student crafting robust backend systems and intuitive
            web applications with a passion for clean, optimized code.
          </p>
        </div>

        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all delay-[400ms] duration-700 sm:flex-row ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[hsl(var(--primary))] px-8 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-glow-lg"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 to-[hsl(var(--primary))]/50 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-lg border border-primary/50 px-8 py-3 text-sm font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-glow"
          >
            <span>Contact Me</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/5 group-hover:opacity-100" />
          </a>
        </div>

        <div
          className={`mt-10 flex items-center justify-center gap-8 transition-all delay-500 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <a
            href="https://github.com/gopalan068"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-muted-foreground transition-all duration-300 hover:text-primary"
            aria-label="GitHub Profile"
          >
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 blur transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:opacity-100" />
            <Github size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-muted-foreground transition-all duration-300 hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 blur transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:opacity-100" />
            <Linkedin size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
