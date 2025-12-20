"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Quote, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Bangalore",
    content:
      "Zartek transformed our 3BHK into a truly smart home. The voice control and energy savings are incredible. Our electricity bill dropped by 25%!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content:
      "The office automation package revolutionized how we work. Meeting room controls, automated scheduling, and seamless integration with our existing systems.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Tech Professional",
    content:
      "As someone who works in tech, I appreciate the attention to detail. The app is intuitive, and the Alexa integration works flawlessly.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Homeowner, Hyderabad",
    content:
      "The security features give us peace of mind. We can monitor everything from our phones, and the smart locks are a game-changer.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonials-heading",
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
        ".testimonial-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".testimonial-cards",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="testimonials-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join hundreds of satisfied homeowners who have transformed their living spaces with Zartek.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="testimonial-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-muted-foreground mb-6 leading-relaxed">{`"${testimonial.content}"`}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
