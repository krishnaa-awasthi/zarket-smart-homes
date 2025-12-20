"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function AboutCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-cta-content",
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
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-cta-content relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
              Start Your <span className="text-primary">Smart Living</span> Journey Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
              Join hundreds of happy customers who have transformed their homes with Zartek. Book a free consultation
              and let us design the perfect smart home for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 border-border hover:bg-secondary bg-transparent"
              >
                <Link href="/packages">
                  View Packages
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
