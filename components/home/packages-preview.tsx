"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Home, Building2, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const packages = [
  {
    title: "1BHK Smart Package",
    icon: Home,
    features: ["Smart Lighting", "Security System", "Voice Control"],
    price: "₹49,999",
    popular: false,
  },
  {
    title: "2BHK Smart Package",
    icon: Home,
    features: ["Smart Lighting", "Security System", "Voice Control", "Climate Control"],
    price: "₹79,999",
    popular: true,
  },
  {
    title: "3BHK Smart Package",
    icon: Building2,
    features: ["Full Home Automation", "Advanced Security", "Entertainment System", "Energy Management"],
    price: "₹1,29,999",
    popular: false,
  },
  {
    title: "Office Automation",
    icon: Briefcase,
    features: ["Meeting Room Control", "Access Management", "Energy Optimization", "Scheduling System"],
    price: "Custom",
    popular: false,
  },
]

export function PackagesPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".packages-heading",
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
        ".package-card",
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".package-cards",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="packages-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Smart Packages for Every Space
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose the perfect automation package for your home or office. Scalable solutions that grow with your needs.
          </p>
        </div>

        {/* Package cards */}
        <div className="package-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card relative bg-card border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${
                pkg.popular ? "border-primary" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{pkg.title}</h3>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                {pkg.price !== "Custom" && <span className="text-muted-foreground text-sm"> onwards</span>}
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={pkg.popular ? "default" : "outline"}
                className={`w-full rounded-full ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border hover:bg-secondary"
                }`}
              >
                <Link href="/packages">
                  Explore Package
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
