"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/jobs/post", label: "Post A Jobs" },
  { href: "#", label: "For Facilities" },
  { href: "#", label: "About" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto">
        <header className="flex items-center justify-between whitespace-nowrap h-16">
          <Link href="/" className="flex items-center gap-4 text-foreground">
            <Logo className="size-6 text-primary" />
            <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">Locum Hub GH</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-2">
              <Button variant="secondary">Login</Button>
              <Button>Create an Account</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-lg p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors px-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 px-2">
                <Button variant="secondary" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Create an Account</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
