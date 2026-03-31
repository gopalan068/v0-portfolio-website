"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass border-b border-primary/10"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="relative text-lg font-bold text-primary transition-all duration-300 hover:drop-shadow-[0_0_12px_hsl(var(--primary))] group"
        >
          <span className="relative z-10">&lt; Gopalan /&gt;</span>
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${activeSection === link.href.replace("#", "")
                  ? "text-[#ffe5e5]"
                  : "text-muted-foreground hover:text-[#ffe5e5]"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ${activeSection === link.href.replace("#", "")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-b border-primary/10 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-md md:hidden animate-slide-in-down">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ animationDelay: `${index * 0.05}s` }} className="animate-fade-in-up">
                <a
                  href={link.href}
                  className={`relative block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-[#ffe5e5] group ${activeSection === link.href.replace("#", "")
                    ? "text-[#ffe5e5] bg-[#ffe5e5]/10"
                    : "text-muted-foreground"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
