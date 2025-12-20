"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Building2, Users, Lock, Zap, Clock, MonitorSpeaker, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Users,
    title: "Meeting Room Control",
    description: "One-touch controls for lights, AV equipment, and climate in meeting rooms.",
  },
  {
    icon: Lock,
    title: "Access Management",
    description: "Smart access control with employee cards, biometrics, and visitor management.",
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "Automated lighting and HVAC scheduling based on occupancy patterns.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Integration with calendars for automatic room preparation before meetings.",
  },
  {
    icon: MonitorSpeaker,
    title: "AV Integration",
    description: "Seamless control of projectors, screens, and video conferencing systems.",
  },
  {
    icon: Building2,
    title: "Building Management",
    description: "Centralized control for multi-floor offices with zone-based automation.",
  },
]

export function OfficeAutomation() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".office-content",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      gsap.fromTo(
        ".office-feature",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".office-features",
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="office-content">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              For Businesses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Transform Your Workplace with <span className="text-primary">Smart Automation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Boost productivity, reduce energy costs, and create a modern work environment with our comprehensive
              office automation solutions. Custom-designed for your specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                <Link href="/contact?type=office">
                  Talk to an Expert
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Energy Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground">Productivity Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Offices Automated</div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="office-features grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="office-feature bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
