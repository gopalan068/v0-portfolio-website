"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Layout, Terminal } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Full-Stack Dev", description: "Python, Flask, Java" },
  { icon: Database, label: "Database Design", description: "SQL Optimization" },
  { icon: Layout, label: "Dashboard Dev", description: "Data Visualization" },
  { icon: Terminal, label: "Problem Solver", description: "DSA & Algorithms" },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-background opacity-50" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold gradient-text animate-gradient-text md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Who I Am</span>
        </h2>
        <div
          className={`grid items-start gap-12 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {
                "I'm a third-year Computer Science student at Government College of Engineering with a deep passion for building robust backend systems and intuitive web applications. My experience spans full-stack development with Flask, database optimization with SQL, and creating data visualization dashboards."
              }
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              I thrive on solving complex algorithmic challenges and
              continuously refine my skills in Data Structures and Algorithms
              through platforms like LeetCode. My focus is always on writing
              clean, maintainable, and efficient code that scales.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My goal is to contribute to innovative teams building scalable,
              impactful software solutions at companies that push the boundaries
              of technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-depth ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
                <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-inner-glow" />
                
                <div className="relative z-10 p-5">
                  <div className="mb-3 relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                    <item.icon
                      size={24}
                      className="relative z-10 text-primary transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>
                  <p className="mb-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
