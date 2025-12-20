"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Handshake, Wrench, Headphones, Lightbulb } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const approaches = [
  {
    icon: Handshake,
    title: "OEM Partnerships",
    description:
      "We partner with leading global manufacturers to bring you reliable, tested technology at best prices.",
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description:
      "Every home is unique. We design tailored automation solutions that fit your specific needs and lifestyle.",
  },
  {
    icon: Wrench,
    title: "Hassle-Free Installation",
    description:
      "Our certified technicians handle everything—from planning to installation—with minimal disruption to your routine.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "We do not disappear after installation. Our dedicated support team is always there when you need assistance.",
  },
]

export function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".approach-heading",
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
        ".approach-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".approach-cards",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="approach-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            How We Make Smart Homes <span className="text-primary">Happen</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our proven approach ensures you get the best smart home experience from start to finish.
          </p>
        </div>

        {/* Approach cards */}
        <div className="approach-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="approach-card bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <approach.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{approach.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
