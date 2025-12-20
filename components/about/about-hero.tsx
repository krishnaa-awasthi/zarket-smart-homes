"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo(".about-hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".about-hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
        .fromTo(".about-hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".about-hero-image", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, "-=0.8")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="about-hero-badge inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="about-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Meet <span className="text-primary">Zartek Smart Homes</span>
            </h1>
            <p className="about-hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty">
              We are on a mission to make smart living accessible, affordable, and seamless for every Indian home and
              business.
            </p>
          </div>

          {/* Image */}
          <div className="about-hero-image relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/smart-home-team-installation-professional.jpg"
                alt="Zartek Smart Homes Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
