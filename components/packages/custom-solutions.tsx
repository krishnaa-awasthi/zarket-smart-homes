"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function CustomSolutions() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".custom-content",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="custom-content relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-card/90" />

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 px-8 py-16 sm:px-16 flex flex-col lg:flex-row items-center gap-12">
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Need Something Different?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                Every space is unique. Whether you have a heritage bungalow, a penthouse, or specific automation
                requirements, our experts will design a custom solution just for you.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                <Link href="/contact?type=custom">
                  Get a Custom Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
