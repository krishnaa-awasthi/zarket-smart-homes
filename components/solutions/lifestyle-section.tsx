"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function LifestyleSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".lifestyle-image",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      gsap.fromTo(
        ".lifestyle-content",
        { x: 50, opacity: 0 },
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="lifestyle-image relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/family-using-smart-home-voice-control-happy.jpg"
                alt="Family enjoying smart home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Floating info cards */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-3 border border-border">
                  <div className="text-xs text-muted-foreground">Voice Command</div>
                  <div className="text-sm font-medium text-foreground">&quot;Turn on movie mode&quot;</div>
                </div>
                <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-3 border border-border">
                  <div className="text-xs text-muted-foreground">Scene Active</div>
                  <div className="text-sm font-medium text-primary">Movie Night</div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-3xl blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lifestyle-content">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Your Smart Lifestyle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Create Your Perfect <span className="text-primary">Smart Home</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Imagine a home that understands your routine, anticipates your needs, and responds to your voice. With
              Zartek, that future is now. Whether you want to dim the lights for movie night, check who is at the door
              while at work, or wake up to your favorite playlist—it is all possible.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Voice control with Alexa, Google Assistant, or Siri",
                "Create custom scenes for any moment",
                "Control from anywhere with our mobile app",
                "Automate based on time, location, or events",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <Link href="/contact">
                Design My Smart Home
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
