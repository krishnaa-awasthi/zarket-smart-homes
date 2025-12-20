"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function ContactHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo(".contact-hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".contact-hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
        .fromTo(".contact-hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="contact-hero-badge inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Contact Us
        </span>
        <h1 className="contact-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Let&apos;s Build Your <span className="text-primary">Smart Home</span>
        </h1>
        <p className="contact-hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Share a few details about your space and requirements, and we will connect you with an expert who can help
          design your perfect smart home.
        </p>
      </div>
    </section>
  )
}
