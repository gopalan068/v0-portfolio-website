import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/gopalan068"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/gopalan-s-a5bb9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="font-semibold text-primary">Gopalan</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {"© 2024 Gopalan. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
