"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Trophy, Zap, BrainCircuit } from "lucide-react"

const dsaCards = [
  {
    icon: Lightbulb,
    title: "Focus Areas",
    description: "Arrays, Trees, Graphs, Dynamic Programming, Sorting & Searching",
  },
  {
    icon: Trophy,
    title: "Platform",
    description: "Active practitioner on LeetCode, solving problems across difficulty levels",
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Time & space complexity analysis for writing efficient, performant solutions",
  },
  {
    icon: BrainCircuit,
    title: "Approach",
    description: "Pattern recognition, divide & conquer, greedy algorithms, backtracking",
  },
]

export function DsaSection() {
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background via-background to-primary/5 opacity-50" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold gradient-text animate-gradient-text md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Algorithms & Data Structures</span>
        </h2>
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Strong foundation in DSA with active practice on competitive
          programming platforms, focused on writing optimized, efficient
          solutions.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dsaCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-depth ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
              <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-inner-glow" />
              
              <div className="relative z-10 p-6">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                  <card.icon
                    size={28}
                    className="relative z-10 text-primary transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
