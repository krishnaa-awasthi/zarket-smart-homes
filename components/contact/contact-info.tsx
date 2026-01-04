"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin, Clock, MessageCircle, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98070  04640",
    href: "tel:+919807004640",
    description: "Mon-Sat, 9am-7pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@zarteksmarthomes.com",
    href: "mailto:info@zarteksmarthomes.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "2ND, C-196, C-BLOCK, SECTOR-63, Gautambuddha Nagar, Noida, Gautambuddha Nagar, Uttar Pradesh, 201301",
    href: "https://maps.app.goo.gl/yK7dzgMivPQXJqt19",
    target: "_blank",
    description: "Uttar Pradesh 201301",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9am - 7pm",
    href: "#",
    description: "Sunday by appointment",
  },
]

export function ContactInfo() {
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-info-container",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".contact-method",
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-methods",
            start: "top 80%",
          },
        },
      )
    }, infoRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={infoRef} className="contact-info-container space-y-8">
      {/* Contact Methods */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold mb-6 text-foreground">Get in Touch</h3>
        <div className="contact-methods space-y-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="contact-method flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{method.label}</div>
                <div className="font-medium text-foreground">{method.value}</div>
                <div className="text-sm text-muted-foreground">{method.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-border rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold mb-2 text-foreground">Prefer Chat?</h3>
        <p className="text-muted-foreground mb-6">
          Connect with us instantly on WhatsApp for quick responses to your queries.
        </p>
        <Button asChild className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full h-12">
          <a href="https://wa.me/919807004640" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>

      {/* Quick Note */}
      <div className="text-center p-4 bg-secondary/30 rounded-xl">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Quick Tip:</span> For faster service, have your floor plan or
          property details ready when you contact us.
        </p>
      </div>
    </div>
  )
}
