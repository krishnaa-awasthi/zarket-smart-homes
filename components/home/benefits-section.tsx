"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap, Shield, Leaf, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: Zap,
    title: "Save Electricity",
    description:
      "Smart automation reduces energy waste by up to 30% with intelligent scheduling and presence detection.",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "24/7 monitoring with smart locks, cameras, and instant alerts keep your family protected.",
  },
  {
    icon: Leaf,
    title: "Comfort & Luxury",
    description: "Personalized ambiance control, voice commands, and automated routines for effortless living.",
  },
  {
    icon: Smartphone,
    title: "Remote Control",
    description: "Control everything from anywhere with our intuitive mobile app and voice assistants.",
  },
]

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        ".benefits-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      // Animate cards with stagger
      gsap.fromTo(
        ".benefit-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="benefits-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Why Choose Zartek Smart Homes?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Experience the perfect blend of convenience, security, and efficiency with our comprehensive smart home
            solutions.
          </p>
        </div>

        {/* Benefits cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <Link href="/packages">Start Your Smart Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
