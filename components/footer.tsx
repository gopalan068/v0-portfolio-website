import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-primary/10 px-6 py-12 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-card/10 opacity-80" />
      <div className="absolute inset-0 glass opacity-40" />
      
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 relative z-10">
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/gopalan068"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-muted-foreground transition-all duration-300 hover:text-primary"
            aria-label="GitHub Profile"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 to-primary/0 rounded-lg opacity-0 blur transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:opacity-100" />
            <Github size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-muted-foreground transition-all duration-300 hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 to-primary/0 rounded-lg opacity-0 blur transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:opacity-100" />
            <Linkedin size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground group hover:text-foreground transition-colors duration-300">
            Designed & Built by{" "}
            <span className="font-bold text-primary/90 group-hover:text-primary transition-colors duration-300">Gopalan</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70 group hover:text-muted-foreground transition-colors duration-300">
            {"© " + new Date().getFullYear() + " Gopalan. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
