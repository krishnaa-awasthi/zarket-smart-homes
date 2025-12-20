import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactReassurance } from "@/components/contact/contact-reassurance"

export const metadata = {
  title: "Contact Us | Zartek Smart Homes",
  description:
    "Get in touch with Zartek Smart Homes. Request a free quote, book a consultation, or ask any questions about our smart home solutions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <ContactReassurance />
      <Footer />
    </main>
  )
}
