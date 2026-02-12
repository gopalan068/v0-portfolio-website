"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background opacity-50" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2
          className={`mb-12 text-center text-3xl font-bold gradient-text animate-gradient-text md:text-4xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="text-balance">Get In Touch</span>
        </h2>
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {"Let's"} build something amazing together. Feel free to reach out for
          collaboration, opportunities, or just to say hello.
        </p>
        <div
          className={`grid items-start gap-12 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-primary/20 bg-card/50 glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-primary/20 bg-card/50 glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-primary/20 bg-card/50 glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 to-primary/30 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
              <Send size={16} className="relative z-10" />
              <span className="relative z-10">{isSubmitted ? "Message Sent!" : "Send Message"}</span>
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-primary/10 p-8 group transition-all duration-500 hover:border-primary/20 hover:shadow-inner-glow">
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background/40 opacity-90" />
              <div className="absolute inset-0 glass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="mb-6 text-lg font-bold text-foreground">
                Other Ways to Reach Me
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:gopalan0555@gmail.com"
                  className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">
                      gopalan0555@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/gopalan068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                    <Github size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">
                      github.com/gopalan068
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">
                      linkedin.com/in/gopalan-s
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"I'm"} currently open to software engineering internships and
                entry-level roles at product-based companies. {"Let's"} connect and
                explore how I can contribute to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
