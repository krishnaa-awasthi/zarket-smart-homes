"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Send, Loader2, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const propertyTypes = [
  { value: "1rk", label: "1RK / Studio" },
  { value: "1bhk", label: "1BHK Apartment" },
  { value: "2bhk", label: "2BHK Apartment" },
  { value: "3bhk", label: "3BHK Apartment" },
  { value: "4bhk", label: "4BHK+ / Villa" },
  { value: "office", label: "Office / Commercial" },
  { value: "other", label: "Other" },
]

export function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    requirements: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-form-container",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        },
      )
    }, formRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div ref={formRef} className="contact-form-container">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Thank You!</h2>
          <p className="text-muted-foreground mb-6">
            Your inquiry has been submitted successfully. Our team will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({ name: "", phone: "", email: "", propertyType: "", requirements: "" })
            }}
            variant="outline"
            className="rounded-full"
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div ref={formRef} className="contact-form-container">
      <div className="bg-card border border-border rounded-2xl p-8 sm:p-10">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Send Your Inquiry</h2>
        <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="bg-secondary/50 border-border h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="bg-secondary/50 border-border h-12 rounded-xl"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="bg-secondary/50 border-border h-12 rounded-xl"
            />
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <Label htmlFor="propertyType" className="text-foreground">
              Property Type <span className="text-destructive">*</span>
            </Label>
            <Select value={formData.propertyType} onValueChange={(value) => handleChange("propertyType", value)}>
              <SelectTrigger className="bg-secondary/50 border-border h-12 rounded-xl">
                <SelectValue placeholder="Select your property type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <Label htmlFor="requirements" className="text-foreground">
              Your Requirements <span className="text-muted-foreground">(Optional)</span>
            </Label>
            <Textarea
              id="requirements"
              placeholder="Tell us about your smart home needs, specific features you're interested in, or any questions you have..."
              value={formData.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              className="bg-secondary/50 border-border min-h-[120px] rounded-xl resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" />
                Send My Inquiry
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
