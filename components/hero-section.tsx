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
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            <span className="text-balance">
              Gopalan S
            </span>
          </h1>
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
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105 hover:bg-primary/10"
          >
            Contact Me
          </a>
        </div>

        <div
          className={`mt-10 flex items-center justify-center gap-6 transition-all delay-500 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <a
            href="https://github.com/gopalan068"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  )
}
