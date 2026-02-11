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
  Advanced: "bg-primary/20 text-primary border-primary/30",
  Experienced: "bg-primary/15 text-primary border-primary/25",
  Proficient: "bg-secondary text-foreground border-border",
  Familiar: "bg-secondary text-muted-foreground border-border",
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
    <section id="skills" ref={sectionRef} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-foreground md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Technologies & Tools</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
