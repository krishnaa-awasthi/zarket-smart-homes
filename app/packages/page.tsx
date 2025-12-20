import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PackagesHero } from "@/components/packages/packages-hero"
import { ResidentialPackages } from "@/components/packages/residential-packages"
import { OfficeAutomation } from "@/components/packages/office-automation"
import { CustomSolutions } from "@/components/packages/custom-solutions"
import { PackagesCTA } from "@/components/packages/packages-cta"

export const metadata = {
  title: "Smart Packages | Zartek Smart Homes",
  description:
    "Explore our range of smart home packages for 1BHK to 4BHK homes and office automation. Find the perfect solution for your space.",
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PackagesHero />
      <ResidentialPackages />
      <OfficeAutomation />
      <CustomSolutions />
      <PackagesCTA />
      <Footer />
    </main>
  )
}
