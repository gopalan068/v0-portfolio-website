"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Lock, BookOpen, CheckCircle2 } from "lucide-react"

const projects = [
  {
    icon: Lock,
    title: "Authentication App",
    subtitle: "User Authentication System",
    description:
      "A comprehensive authentication application featuring secure user registration and login functionality. Built with modern web technologies to demonstrate best practices in user authentication, session management, and security.",
    features: [
      "User registration & login system",
      "Secure password hashing",
      "Session management",
      "Form validation",
      "Responsive UI design",
    ],
    tech: ["NODE JS", "EXPRESS", "BCRYPT", "REACT"],
    impact:
      "Demonstrates solid understanding of authentication flows and user security best practices.",
    link: "https://gopalan068.github.io/authentication-app/",
  },
  {
    icon: BookOpen,
    title: "BlogHub",
    subtitle: "Full-Stack Blogging Platform",
    description:
      "A feature-rich blogging platform where users can create, read, and manage blog posts. Deployed on Render with a complete backend system handling data storage and user interactions.",
    features: [
      "Create and publish blog posts",
      "Read and browse blogs",
      "User-friendly interface",
      "Database-backed storage",
      "Responsive design",
    ],
    tech: ["PYTHON", "FLASK", "MongoDB", "JavaScript", "CSS", "JINJA2"],
    impact:
      "Showcases full-stack web development capabilities with backend-frontend integration and database management.",
    link: "https://blog-hub-if48.onrender.com/",
  },
  {
    icon: CheckCircle2,
    title: "Todo App",
    subtitle: "Task Management Application",
    description:
      "A clean and intuitive todo application for managing daily tasks and productivity. Enables users to create, mark complete, and organize their tasks efficiently with a simple yet effective interface.",
    features: [
      "Add and manage tasks",
      "Mark tasks as complete",
      "Delete completed tasks",
      "Local storage support",
      "Clean, intuitive UI",
    ],
    tech: ["HTML", "CSS", "PYTHON", "FLASK",  "CRUD FUNCTIONALITY"],
    impact:
      "Demonstrates ability to build practical applications with focus on user experience and functionality.",
    link: "https://github.com/gopalan068/todo-app",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 opacity-40" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold md:text-4xl transition-all duration-700 gradient-text animate-gradient-text ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Featured Work</span>
        </h2>
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          A selection of projects that showcase my technical skills and
          problem-solving abilities.
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-depth-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/90 to-background/50 opacity-90" />
              <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-inner-glow" />
              
              <div className="relative z-10 flex flex-1 flex-col">
              {/* Header */}
              <div className="border-b border-primary/10 p-6 group-hover:border-primary/20 transition-colors duration-300">
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                  <project.icon
                    size={28}
                    className="relative z-10 text-primary transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors duration-300">{project.subtitle}</p>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="mb-6 flex flex-col gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Impact */}
                <p className="mb-6 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/10 to-primary/5 p-3 text-xs italic leading-relaxed text-muted-foreground group-hover:border-primary/20 group-hover:from-primary/15 group-hover:to-primary/10 transition-all duration-300">
                  {project.impact}
                </p>

                {/* Tech stack */}
                <div className="mt-auto flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={t}
                      className="relative rounded-full border border-primary/40 bg-gradient-to-br from-primary/20 to-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary hover:from-primary/30 hover:to-primary/15 hover:border-primary/60 transition-all duration-300 group-hover:shadow-glow-sm cursor-default"
                      style={{ animationDelay: `${idx * 30}ms` }}
                    >
                      {t}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 blur transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/5 group-hover:opacity-100" />
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-primary/80 to-primary/60 hover:from-primary hover:to-primary/80 text-primary-foreground px-4 py-2.5 font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
