import Link from "next/link"
import { Logo } from "./logo"

const quickLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Create an Account" },
  { href: "#", label: "Browse Jobs" },
]

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
]

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <Logo className="size-6 text-primary" />
              <h2 className="text-base font-bold">Locum Hub GH</h2>
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2" role="list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2025 Locum Hub GH. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">{/* Social icons can be added here */}</div>
        </div>
      </div>
    </footer>
  )
}
