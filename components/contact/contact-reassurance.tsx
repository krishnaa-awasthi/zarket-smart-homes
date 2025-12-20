"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const reassurances = [
  {
    icon: ShieldCheck,
    title: "No Spam, No Pressure",
    description: "We respect your privacy. Your information is secure and will only be used to assist you.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Our team typically responds within 2-4 hours during business hours.",
  },
  {
    icon: BadgeCheck,
    title: "Expert Guidance",
    description: "Get personalized recommendations from certified smart home professionals.",
  },
]

export function ContactReassurance() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reassurance-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {reassurances.map((item, index) => (
            <div key={index} className="reassurance-item text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
