"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Lightbulb,
  Speaker,
  Shield,
  Blinds,
  Plug,
  ToggleLeft,
  Smartphone,
  Thermometer,
  Plus,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Smart Lighting",
    description:
      "Transform your ambiance with intelligent lighting that adapts to your mood, schedule, and activities. Control brightness, color temperature, and create scenes.",
    benefits: [
      "Energy savings up to 40%",
      "Voice & app control",
      "Scheduled automation",
      "Presence detection",
      "Scene presets",
    ],
    image: "/smart-home-lighting-ambient-mood.jpg",
  },
  {
    id: "speakers",
    icon: Speaker,
    title: "Smart Speakers",
    description:
      "Voice-controlled assistants that manage your entire smart home. Play music, get answers, control devices, and more with just your voice.",
    benefits: ["Multi-room audio", "Voice commands", "Smart home hub", "Intercom features", "Music streaming"],
    image: "/smart-speaker-voice-assistant-modern.jpg",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Systems",
    description:
      "Comprehensive security with smart cameras, sensors, and alerts. Monitor your home 24/7 from anywhere with instant notifications.",
    benefits: ["24/7 monitoring", "Motion detection", "Video doorbell", "Smart locks", "Emergency alerts"],
    image: "/smart-home-security-camera-system.jpg",
  },
  {
    id: "motorisation",
    icon: Blinds,
    title: "Motorisation",
    description:
      "Automated blinds, curtains, and shades that respond to sunlight, time, or your commands. Perfect climate and privacy control.",
    benefits: ["Auto sun tracking", "Privacy schedules", "Energy efficiency", "Silent motors", "App control"],
    image: "/motorized-blinds-curtains-smart-home.jpg",
  },
  {
    id: "appliances",
    icon: Plug,
    title: "Appliance Control",
    description:
      "Smart plugs and controllers that make any device intelligent. Schedule, monitor, and control appliances remotely.",
    benefits: ["Energy monitoring", "Remote on/off", "Scheduling", "Voice control", "Safety features"],
    image: "/smart-plug-appliance-control-home.jpg",
  },
  {
    id: "switches",
    icon: ToggleLeft,
    title: "Smart Switches",
    description:
      "Replace traditional switches with smart alternatives. Touch panels, dimmers, and scene controllers for intuitive control.",
    benefits: ["Touch controls", "Dimming capability", "Scene buttons", "No rewiring", "Elegant design"],
    image: "/smart-light-switch-touch-panel-modern.jpg",
  },
  {
    id: "climate",
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Smart thermostats and AC controllers that learn your preferences and optimize energy usage while maintaining comfort.",
    benefits: ["Auto scheduling", "Geo-fencing", "Energy savings", "Zone control", "Learning AI"],
    image: "/smart-thermostat-climate-control-home.jpg",
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Control",
    description:
      "One app to rule them all. Control every smart device in your home from a single, intuitive mobile application.",
    benefits: ["Unified dashboard", "Remote access", "Automation rules", "Family sharing", "Usage insights"],
    image: "/smart-home-mobile-app-interface.jpg",
  },
]

export function SolutionsList() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([])

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solutions-heading",
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
        ".solution-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".solutions-grid",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="solutions-heading mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Smart Home Solutions</h2>
          <p className="text-muted-foreground max-w-2xl">
            Build your perfect smart home by selecting the solutions that matter most to you. Each solution can be added
            to any package.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const isSelected = selectedSolutions.includes(solution.id)
            return (
              <div
                key={solution.id}
                className={`solution-card relative bg-card border rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer ${
                  isSelected ? "border-primary shadow-lg shadow-primary/10" : "border-border hover:border-primary/50"
                }`}
                onClick={() => toggleSolution(solution.id)}
              >
                {/* Selection indicator */}
                <div
                  className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                    isSelected ? "bg-primary border-primary" : "border-muted-foreground/30"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                </div>

                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{solution.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {solution.description}
                  </p>

                  {/* Key benefits */}
                  <div className="space-y-1.5">
                    {solution.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected solutions summary */}
        {selectedSolutions.length > 0 && (
          <div className="mt-12 p-6 bg-card border border-border rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {selectedSolutions.length} solution{selectedSolutions.length > 1 ? "s" : ""} selected
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add these to your package for a customized smart home experience.
                </p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                <Link href={`/contact?solutions=${selectedSolutions.join(",")}`}>
                  <Plus className="mr-2 w-4 h-4" />
                  Add to My Package
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
