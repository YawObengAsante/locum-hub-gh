import { Navbar } from "./navbar"
import { HeroSection } from "./hero-section"
import { JobSearchPreview } from "./job-search-preview"
import { FeaturesSection } from "./features-section"
import { AboutSection } from "./about-section"
import { Footer } from "./footer"

export function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <main className="flex-1">
          <HeroSection />
          <JobSearchPreview />
          <FeaturesSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
