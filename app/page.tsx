import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { DsaSection } from "@/components/dsa-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { LearningSection } from "@/components/learning-section"
import { ConnectSection } from "@/components/connect-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <DsaSection />
      <ProjectsSection />
      <ExperienceSection />
      <LearningSection />
      <ConnectSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
