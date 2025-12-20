"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: "Amazon Alexa", logo: "/amazon-alexa-logo.jpg" },
  { name: "Google Home", logo: "/google-home-logo.png" },
  { name: "Apple HomeKit", logo: "/apple-homekit-logo.png" },
  { name: "Z-Wave", logo: "/z-wave-logo.jpg" },
  { name: "Zigbee", logo: "/zigbee-logo.jpg" },
  { name: "Matter", logo: "/matter-smart-home-logo.jpg" },
]

export function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partners-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      )

      gsap.fromTo(
        ".partner-logo",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".partner-logos",
            start: "top 85%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="partners-content text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">Compatible with Your Favorite Platforms</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solutions integrate seamlessly with leading smart home ecosystems and protocols.
          </p>
        </div>

        {/* Partner logos */}
        <div className="partner-logos flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-logo flex items-center justify-center p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
