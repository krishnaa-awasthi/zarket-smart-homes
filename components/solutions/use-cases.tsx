"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Sofa,
  Shield,
  Sparkles,
  Baby,
  Wifi,
  Zap,
  Briefcase,
  Users,
  Crown,
  Home,
  DoorOpen,
  Tv,
  CookingPot,
  Moon,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { id: "solutions", label: "Smart Solutions", icon: Sparkles },
  { id: "lifestyle", label: "By Lifestyle", icon: Users },
  { id: "spaces", label: "By Space", icon: Home },
]

const useCases = {
  solutions: [
    { icon: Sofa, title: "Convenience & Comfort", description: "Hands-free control with voice commands & automation" },
    {
      icon: Tv,
      title: "Entertainment & Ambiance",
      description: "Perfect scene for movie nights, parties, or relaxation",
    },
    { icon: Shield, title: "Smart Security", description: "Smart locks, live views, and instant notifications" },
    { icon: Baby, title: "Elderly & Child Safety", description: "Smart sensors, emergency alerts & peace of mind" },
    { icon: Wifi, title: "Remote Home Access", description: "Control everything from anywhere with the app" },
    { icon: Zap, title: "Energy Savings", description: "Reduce bills with automated lighting and HVAC" },
  ],
  lifestyle: [
    {
      icon: Briefcase,
      title: "For Busy Professionals",
      description: "Automate routines, hands-free control, remote monitoring",
    },
    { icon: Users, title: "For Families", description: "Kid-safe controls, smart security, and energy savings" },
    { icon: Crown, title: "For Luxury Homes", description: "High-end automation, custom ambiance, entertainment" },
    { icon: Home, title: "For Renters", description: "Portable smart devices, no permanent installation" },
  ],
  spaces: [
    {
      icon: DoorOpen,
      title: "Smart Entryway",
      description: "Connected security, keyless entry, visitor notifications",
    },
    { icon: Sofa, title: "Living Room", description: "One-touch entertainment, ambient lighting, climate control" },
    { icon: CookingPot, title: "Kitchen", description: "Smart appliance controls, safety sensors, routines" },
    { icon: Moon, title: "Bedroom", description: "Sleep scenes, dimmable lights, silent automation" },
  ],
}

export function UseCases() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("solutions")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".usecase-heading",
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate cards when category changes
  useEffect(() => {
    gsap.fromTo(
      ".usecase-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
      },
    )
  }, [activeCategory])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="usecase-heading text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Explore Smart Living, Your Way
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Whether you seek security, comfort, or energy savings, our smart solutions enhance your home experience.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Use case cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases[activeCategory as keyof typeof useCases].map((useCase, index) => (
            <div
              key={index}
              className="usecase-card bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
