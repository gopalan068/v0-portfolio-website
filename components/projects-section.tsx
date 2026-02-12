"use client"

import { useEffect, useRef, useState } from "react"
import { FileCode2, LayoutDashboard, Code2 } from "lucide-react"

const projects = [
  {
    icon: FileCode2,
    title: "BlogHub",
    subtitle: "Full-Stack Blogging Platform",
    description:
      "Developed a feature-rich blogging platform using Flask and SQL that enables users to create accounts, publish blog posts, and engage with community content. Implements secure authentication with password hashing, session management, and RESTful API design patterns.",
    features: [
      "User authentication with bcrypt encryption",
      "Complete CRUD operations for blog management",
      "Search & filter system by tags and authors",
      "Comment system with moderation",
      "SQL query optimization with indexing",
    ],
    tech: ["Flask", "Python", "SQLAlchemy", "SQLite", "Jinja2", "Bootstrap", "Bcrypt"],
    impact:
      "Demonstrates full-stack development expertise with emphasis on security best practices and database optimization.",
    github: "https://github.com/gopalan068/bloghub",
  },
  {
    icon: LayoutDashboard,
    title: "TaskFlow",
    subtitle: "Project Management Dashboard",
    description:
      "Built an interactive project management dashboard using Flask and SQL to track tasks, deadlines, and team productivity. Features real-time data visualization, priority-based task sorting, and analytics charts for project insights.",
    features: [
      "Interactive Kanban-style task board",
      "Priority and deadline-based filtering",
      "Data visualization with Chart.js",
      "Role-based access control",
      "Export reports to CSV/PDF",
    ],
    tech: ["Flask", "Python", "MySQL", "Chart.js", "AJAX", "Bootstrap", "SQLAlchemy"],
    impact:
      "Showcases ability to build data-driven applications with complex state management and user-friendly interfaces.",
    github: "https://github.com/gopalan068/taskflow",
  },
  {
    icon: Code2,
    title: "CodeSnippet Manager",
    subtitle: "Developer Productivity Tool",
    description:
      "Created a code snippet management application for developers to store, organize, and search reusable code blocks. Features syntax highlighting, tag-based categorization, and quick-copy functionality for improved workflow efficiency.",
    features: [
      "Syntax highlighting for 20+ languages",
      "Advanced search with regex matching",
      "Tag-based categorization and filtering",
      "One-click copy-to-clipboard",
      "Share snippets via unique URLs",
    ],
    tech: ["Flask", "Python", "SQLite", "Prism.js", "JavaScript", "REST API", "Jinja2"],
    impact:
      "Demonstrates understanding of developer experience (DX) and building productivity tools with clean UI/UX.",
    github: "https://github.com/gopalan068/codesnippet-manager",
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
                <div className="mt-auto flex flex-wrap gap-2">
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
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
