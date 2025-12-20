import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionsList } from "@/components/solutions/solutions-list"
import { UseCases } from "@/components/solutions/use-cases"
import { LifestyleSection } from "@/components/solutions/lifestyle-section"
import { SolutionsCTA } from "@/components/solutions/solutions-cta"

export const metadata = {
  title: "Smart Solutions | Zartek Smart Homes",
  description:
    "Explore our smart home solutions including lighting, security, voice control, motorisation, and more. Build your perfect smart ecosystem.",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SolutionsHero />
      <SolutionsList />
      <UseCases />
      <LifestyleSection />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
