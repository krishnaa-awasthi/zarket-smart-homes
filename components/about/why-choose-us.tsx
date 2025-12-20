"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IndianRupee, Mic, Home, Wrench, Cpu, HeartHandshake, Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const differentiators = [
  {
    icon: IndianRupee,
    title: "Affordable Packages",
    description: "Smart home automation that fits every budget—from studio apartments to luxury villas.",
  },
  {
    icon: Mic,
    title: "Voice + App Ready",
    description: "Seamless integration with Alexa, Google Assistant, and our intuitive mobile app.",
  },
  {
    icon: Home,
    title: "Existing & New Homes",
    description: "Retrofit solutions for existing homes and pre-wiring for new construction projects.",
  },
  {
    icon: Wrench,
    title: "No Structural Changes",
    description: "Our solutions work with your existing electrical setup—no major renovation needed.",
  },
  {
    icon: Cpu,
    title: "Premium Technology",
    description: "We use only certified, tested devices from trusted global and Indian manufacturers.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Post-installation support, regular maintenance, and quick resolution of any issues.",
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-heading",
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
        ".why-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".why-cards",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".why-stats",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".why-stats",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <div className="why-heading mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Why Zartek
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Why Choose <span className="text-primary">Zartek Smart Homes?</span>
              </h2>
              <p className="text-muted-foreground">
                We are not just another automation company. Here is what makes us different.
              </p>
            </div>

            {/* Differentiators */}
            <div className="why-cards space-y-4">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="why-card flex gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="why-stats sticky top-28">
            <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Our Impact</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Homes Automated</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">Avg Energy Savings</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Our Promise</h4>
                <ul className="space-y-2">
                  {[
                    "Professional installation by certified experts",
                    "1-year comprehensive warranty on all products",
                    "Lifetime technical support for your smart home",
                    "Easy upgrades as your needs evolve",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
