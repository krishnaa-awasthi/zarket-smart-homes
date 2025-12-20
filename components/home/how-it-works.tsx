"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Package, FileText, Wrench, PartyPopper, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Package,
    title: "Choose Package",
    description: "Select a smart home package that fits your space and budget.",
  },
  {
    icon: FileText,
    title: "Share Details",
    description: "Tell us about your home layout and specific requirements.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Our certified technicians set up everything seamlessly.",
  },
  {
    icon: PartyPopper,
    title: "Enjoy Smart Living",
    description: "Experience the comfort of intelligent home automation.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hiw-heading",
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

      gsap.fromTo(
        ".hiw-step",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".hiw-steps",
            start: "top 80%",
          },
        },
      )

      // Animate the connecting line
      gsap.fromTo(
        ".hiw-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hiw-steps",
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="hiw-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Getting started with smart home automation is easier than you think. Follow these simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-steps relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border">
            <div className="hiw-line absolute inset-0 bg-primary origin-left" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="hiw-step relative text-center">
                {/* Step number */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                  <div className="relative w-full h-full rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <Link href="/contact">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
