"use client"

import { useEffect, useRef, useState } from "react"
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
    <section ref={sectionRef} className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background opacity-50" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold gradient-text animate-gradient-text md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Continuous Learning Journey</span>
        </h2>
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Continuously expanding my technical horizons by exploring emerging
          technologies and modern architectural patterns.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {learningCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-depth-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
              <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-inner-glow" />
              
              <div className="relative z-10 p-8">
                <div className="mb-5 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                  <card.icon
                    size={32}
                    className="relative z-10 text-primary transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <h3 className="mb-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                <ul className="flex flex-col gap-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary transition-all group-hover:bg-primary group-hover:scale-125" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
