"use client"

import { useEffect, useRef, useState } from "react"


const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "JavaScript", level: "Familiar" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Flask", level: "Experienced" },
      { name: "Jinja2", level: "Proficient" },
      { name: "Bootstrap", level: "Proficient" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Proficient" },
      { name: "SQLite", level: "Proficient" },
      { name: "SQLAlchemy", level: "Familiar" },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
      { name: "REST APIs", level: "Familiar" },
    ],
  },
]

const levelColors: Record<string, string> = {
  Advanced: "bg-gradient-to-r from-primary/30 to-primary/15 text-primary border-primary/50 shadow-glow-sm",
  Experienced: "bg-gradient-to-r from-primary/25 to-primary/10 text-primary border-primary/40",
  Proficient: "bg-gradient-to-r from-secondary/20 to-secondary/10 text-foreground border-primary/20",
  Familiar: "bg-gradient-to-r from-secondary/15 to-secondary/5 text-muted-foreground border-border/50",
}

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-primary/5 via-background to-background opacity-40" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold gradient-text animate-gradient-text md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Technologies & Tools</span>
        </h2>
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          A curated collection of technologies I work with daily to build
          reliable, efficient software.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-depth-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
              <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-inner-glow" />
              
              <div className="relative z-10 p-6">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-primary/90 group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="group/skill flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-all duration-300" style={{ animationDelay: `${idx * 50}ms` }}>
                    <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold transition-all duration-300 ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
