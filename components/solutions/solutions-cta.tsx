"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function SolutionsCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sol-cta-content",
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
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sol-cta-content text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Build Your Smart Ecosystem?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Mix and match solutions to create the perfect smart home for your lifestyle. Our experts will help you
            design and implement your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14"
            >
              <Link href="/packages">
                View Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 border-border hover:bg-secondary bg-transparent"
            >
              <Link href="/contact">
                <Phone className="mr-2 w-5 h-5" />
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
