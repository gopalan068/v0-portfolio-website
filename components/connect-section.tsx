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
    <section ref={sectionRef} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-foreground md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
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
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <Github
              size={48}
              className="mb-5 text-foreground transition-all group-hover:text-primary group-hover:drop-shadow-[0_0_12px_hsl(var(--primary))]"
            />
            <h3 className="mb-2 text-xl font-bold text-foreground">
              Explore My Code
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Check out my open-source projects, contributions, and repositories
              on GitHub.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Visit GitHub Profile
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <Linkedin
              size={48}
              className="mb-5 text-foreground transition-all group-hover:text-primary group-hover:drop-shadow-[0_0_12px_hsl(var(--primary))]"
            />
            <h3 className="mb-2 text-xl font-bold text-foreground">
              Professional Network
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Connect with me for collaboration opportunities, internships, and
              professional networking.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Connect on LinkedIn
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
