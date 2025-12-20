import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary">Zartek</span>
                <span className="text-foreground/80"> Smart</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your home into an intelligent living space with our cutting-edge smart home solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Packages", "Solutions", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Packages</h3>
            <ul className="space-y-3">
              {["1BHK Package", "2BHK Package", "3BHK Package", "4BHK Package", "Office Automation"].map((pkg) => (
                <li key={pkg}>
                  <Link href="/packages" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {pkg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                hello@zarteksmart.com
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                123 Tech Park, Bangalore, Karnataka 560001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Zartek Smart Homes. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
