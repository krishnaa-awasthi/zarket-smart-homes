"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, Eye } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mv-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
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
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="mv-card bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide affordable, scalable, and cutting-edge smart home automation solutions that enhance the quality
              of life for every Indian household and business. We believe technology should simplify life, not
              complicate it.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-card bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become India&apos;s most trusted smart home brand, making intelligent living accessible to all. We
              envision a future where every home is connected, efficient, and secure—regardless of size or budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
