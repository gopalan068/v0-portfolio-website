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
    <section id="about" ref={sectionRef} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-foreground md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
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
                className={`group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <item.icon
                  size={24}
                  className="mb-3 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]"
                />
                <p className="mb-1 text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
