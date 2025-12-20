import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { PackagesPreview } from "@/components/home/packages-preview"
import { HowItWorks } from "@/components/home/how-it-works"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PackagesPreview />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
