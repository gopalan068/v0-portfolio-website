"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, ArrowUpRight } from "lucide-react"

export function ConnectSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background opacity-50" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold gradient-text animate-gradient-text md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">{"Let's Connect"}</span>
        </h2>
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Find me online and explore my work.
        </p>
        <div
          className={`grid gap-6 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {/* GitHub Card */}
          <a
            href="https://github.com/gopalan068"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center rounded-2xl overflow-hidden p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-depth-lg"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
            <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-inner-glow" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-5 relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                <Github
                  size={48}
                  className="relative z-10 text-primary transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Explore My Code
              </h3>
              <p className="mb-6 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                Check out my open-source projects, contributions, and repositories
                on GitHub.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary/80 group-hover:text-primary transition-colors duration-300">
                Visit GitHub Profile
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center rounded-2xl overflow-hidden p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-depth-lg"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
            <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-inner-glow" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-5 relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                <Linkedin
                  size={48}
                  className="relative z-10 text-primary transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Professional Network
              </h3>
              <p className="mb-6 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                Connect with me for collaboration opportunities, internships, and
                professional networking.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary/80 group-hover:text-primary transition-colors duration-300">
                Connect on LinkedIn
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
