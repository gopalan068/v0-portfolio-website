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
    <section ref={sectionRef} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-foreground md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
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
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <card.icon
                size={28}
                className="mb-4 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]"
              />
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {card.title}
              </h3>
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
