import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { OurApproach } from "@/components/about/our-approach"
import { WhyChooseUs } from "@/components/about/why-choose-us"
import { Partners } from "@/components/about/partners"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata = {
  title: "About Us | Zartek Smart Homes",
  description:
    "Learn about Zartek Smart Homes - our mission to make smart living accessible to all with affordable, scalable home automation solutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <OurApproach />
      <WhyChooseUs />
      <Partners />
      <AboutCTA />
      <Footer />
    </main>
  )
}
