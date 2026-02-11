"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeading } from "./section-heading"
import { Cloud, BrainCircuit, Rocket } from "lucide-react"

const learningCards = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    items: [
      "Exploring AWS and cloud deployment strategies",
      "Learning containerization with Docker",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    items: [
      "Fundamentals of ML algorithms and data preprocessing",
      "Building predictive models with scikit-learn",
    ],
  },
  {
    icon: Rocket,
    title: "Advanced Topics",
    items: [
      "Microservices architecture patterns",
      "GraphQL and modern API design",
    ],
  },
]

export function LearningSection() {
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
        <SectionHeading
          label="06. LEARNING"
          title="Continuous Learning Journey"
          description="Continuously expanding my technical horizons by exploring emerging technologies and modern architectural patterns."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {learningCards.map((card, index) => (
            <div
              key={card.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <card.icon
                size={32}
                className="mb-5 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]"
              />
              <h3 className="mb-4 text-lg font-bold text-foreground">{card.title}</h3>
              <ul className="flex flex-col gap-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
