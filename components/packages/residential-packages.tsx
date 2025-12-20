"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Home,
  Building,
  Building2,
  Castle,
  Lightbulb,
  Shield,
  Mic,
  Thermometer,
  Tv,
  Zap,
  Smartphone,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const packages = [
  {
    id: "1rk",
    title: "1RK/Studio",
    subtitle: "Perfect for compact living",
    icon: Home,
    price: "₹34,999",
    features: [
      { icon: Lightbulb, text: "Smart Lighting (2 zones)" },
      { icon: Shield, text: "Basic Security Sensor" },
      { icon: Mic, text: "Voice Control Ready" },
      { icon: Smartphone, text: "Mobile App Control" },
    ],
    color: "from-blue-500/20",
  },
  {
    id: "1bhk",
    title: "1BHK Package",
    subtitle: "Smart essentials for your home",
    icon: Home,
    price: "₹49,999",
    features: [
      { icon: Lightbulb, text: "Smart Lighting (4 zones)" },
      { icon: Shield, text: "Door & Window Sensors" },
      { icon: Mic, text: "Voice Assistant Integration" },
      { icon: Smartphone, text: "Mobile App Control" },
      { icon: Lock, text: "Smart Lock Compatible" },
    ],
    color: "from-cyan-500/20",
  },
  {
    id: "2bhk",
    title: "2BHK Package",
    subtitle: "Complete smart home experience",
    icon: Building,
    price: "₹79,999",
    popular: true,
    features: [
      { icon: Lightbulb, text: "Smart Lighting (8 zones)" },
      { icon: Shield, text: "Advanced Security System" },
      { icon: Mic, text: "Multi-room Voice Control" },
      { icon: Thermometer, text: "Climate Control" },
      { icon: Smartphone, text: "Full App Integration" },
      { icon: Lock, text: "Smart Lock Included" },
    ],
    color: "from-primary/20",
  },
  {
    id: "3bhk",
    title: "3BHK Package",
    subtitle: "Premium automation suite",
    icon: Building2,
    price: "₹1,29,999",
    features: [
      { icon: Lightbulb, text: "Smart Lighting (12 zones)" },
      { icon: Shield, text: "Full Security Suite" },
      { icon: Tv, text: "Entertainment System" },
      { icon: Thermometer, text: "Multi-zone Climate" },
      { icon: Zap, text: "Energy Management" },
      { icon: Lock, text: "Smart Locks (2)" },
      { icon: Smartphone, text: "Priority Support" },
    ],
    color: "from-emerald-500/20",
  },
  {
    id: "4bhk",
    title: "4BHK+ Package",
    subtitle: "Luxury home automation",
    icon: Castle,
    price: "₹1,89,999",
    features: [
      { icon: Lightbulb, text: "Unlimited Lighting Zones" },
      { icon: Shield, text: "Premium Security Suite" },
      { icon: Tv, text: "Home Theater Integration" },
      { icon: Thermometer, text: "Whole-home Climate" },
      { icon: Zap, text: "Advanced Energy AI" },
      { icon: Lock, text: "Smart Locks (4)" },
      { icon: Smartphone, text: "Dedicated Support" },
    ],
    color: "from-amber-500/20",
  },
]

export function ResidentialPackages() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".res-heading",
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
        ".res-package",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".res-packages-grid",
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
        {/* Heading */}
        <div className="res-heading mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Residential
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Residential Packages</h2>
          <p className="text-muted-foreground max-w-2xl">
            Choose the perfect smart home package based on your home size. All packages include professional
            installation and 1-year warranty.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="res-packages-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`res-package relative bg-card border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group ${
                pkg.popular ? "border-primary lg:scale-105" : "border-border"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1.5 text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pkg.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <div className={`relative z-10 p-6 ${pkg.popular ? "pt-12" : ""}`}>
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <pkg.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm"> onwards</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full rounded-full ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Link href={`/contact?package=${pkg.id}`}>Get This Package</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
