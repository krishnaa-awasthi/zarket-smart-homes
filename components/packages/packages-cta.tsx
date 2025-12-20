"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function PackagesCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pkg-cta-content",
        { y: 40, opacity: 0 },
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

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pkg-cta-content text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Not Sure Which Package is Right for You?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Our smart home experts are here to help. Get a free consultation and we will recommend the perfect solution
            for your space and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14"
            >
              <Link href="/contact">
                Send My Inquiry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 border-border hover:bg-secondary bg-transparent"
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
