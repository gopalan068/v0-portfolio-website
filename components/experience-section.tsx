"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, Server, Link2 } from "lucide-react"

const experienceCards = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    description:
      "Experienced in designing and implementing data-driven dashboards that transform complex datasets into actionable insights. Proficient in integrating Chart.js and visualization libraries with Flask backends.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Strong understanding of structuring backend systems for scalability and maintainability. Focused on optimizing database queries for real-time data updates and designing efficient schema structures.",
  },
  {
    icon: Link2,
    title: "API Integration",
    description:
      "Proficient in designing RESTful APIs that connect frontend interfaces with backend services. Experience building clean, well-documented endpoints with proper error handling and authentication.",
  },
]

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 md:grid-cols-3">
          {experienceCards.map((card, index) => (
            <div
              key={card.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <card.icon
                size={32}
                className="mb-5 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]"
              />
              <h3 className="mb-3 text-lg font-bold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
