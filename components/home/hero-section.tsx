"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        .fromTo(subtitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(imageRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 }, "-=1.2")

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative floating elements */}
      <div className="floating-element absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
      <div className="floating-element absolute top-1/3 right-20 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
      <div className="floating-element absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-primary/10 blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Intelligent Living Solutions</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance"
            >
              The Future of{" "}
              <span className="text-primary relative">
                Smart Homes
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 150 2 298 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-primary/40"
                  />
                </svg>
              </span>{" "}
              Starts Here
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              Convenience, safety, security, and energy savings—seamlessly integrated in one smart solution that makes
              your home work for you.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-lg group"
              >
                <Link href="/packages">
                  Get My Smart Package
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg border-border hover:bg-secondary bg-transparent"
              >
                <Link href="/contact">
                  <Play className="mr-2 w-5 h-5" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Homes Automated</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">30%</div>
                <div className="text-sm text-muted-foreground">Energy Saved</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-3xl blur-3xl" />

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
                <img
                  src="/modern-smart-home-interior-with-ambient-lighting-a.jpg"
                  alt="Smart Home Interior"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Feature cards floating */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-3 border border-border">
                    <div className="text-xs text-muted-foreground">Living Room</div>
                    <div className="text-sm font-medium text-foreground">Lights: On</div>
                  </div>
                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-3 border border-border">
                    <div className="text-xs text-muted-foreground">Temperature</div>
                    <div className="text-sm font-medium text-foreground">24°C</div>
                  </div>
                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-3 border border-border">
                    <div className="text-xs text-muted-foreground">Security</div>
                    <div className="text-sm font-medium text-primary">Armed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
