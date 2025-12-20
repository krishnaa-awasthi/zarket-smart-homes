"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function PackagesHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo(".pkg-hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".pkg-hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
        .fromTo(".pkg-hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
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
        <span className="pkg-hero-badge inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Smart Packages
        </span>
        <h1 className="pkg-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Smart Packages for Every <span className="text-primary">Space & Budget</span>
        </h1>
        <p className="pkg-hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          From compact apartments to sprawling offices, we have the perfect automation solution tailored to your needs.
          Scalable, affordable, and future-ready.
        </p>
      </div>
    </section>
  )
}
