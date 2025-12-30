"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRef } from "react";

export default function AboutPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusField = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-1 p-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/ghana-hospital-hallway.jpg"
              alt="Healthcare Facility"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg bg-primary flex items-center justify-center p-8 text-center">
            <h1 className="text-5xl md:text-7xl font-serif text-primary-foreground leading-tight tracking-tighter">
              LOCUM <br /> HUB GH
            </h1>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/african-doctor-smiling.jpg"
              alt="Qualified Professional"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <div className="border-y border-border py-4 overflow-hidden whitespace-nowrap bg-muted/30">
        <div className="inline-block animate-marquee uppercase text-xs font-medium tracking-widest px-4">
          Strengthening Ghana's Healthcare System • Access to Qualified Staff •
          Bridging the Gap • Reliable & Efficient • Korle-Bu to Rural Clinics •
          Strengthening Ghana's Healthcare System • Access to Qualified Staff •
          Bridging the Gap • Reliable & Efficient • Korle-Bu to Rural Clinics
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed text-pretty">
            Dedicated to Strengthening Ghana's Healthcare Staffing.
          </p>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Locum Hub GH is a creative hub where healthcare facilities and
              professionals come to define the future of staffing, sharpen their
              service delivery, and carve out what's next for the nation's
              health system.
            </p>
            <p>
              Our mission is to bridge the gap in Ghana's healthcare staffing by
              creating a seamless, reliable, and efficient platform. We ensure
              that every health facility, from major hubs like Korle-Bu and
              Komfo Anokye to rural clinics, has access to the qualified staff
              they need, when they need them.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-border">
              <AccordionTrigger className="hover:no-underline text-lg font-serif">
                Our Services
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide instant locum placements, permanent recruitment
                services, and staffing consultancy for hospitals, clinics, and
                pharmacies across all 16 regions of Ghana.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="team" className="border-border">
              <AccordionTrigger className="hover:no-underline text-lg font-serif">
                Meet the Team
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Founded by healthcare professionals who understand the unique
                challenges of the Ghanaian medical landscape, our team is
                committed to excellence and reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="commitment" className="border-border">
              <AccordionTrigger className="hover:no-underline text-lg font-serif">
                Our Commitment
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We are committed to transparency, speed, and quality. Every
                professional on our platform undergoes a rigorous vetting
                process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] md:text-[20px] uppercase tracking-[0.2em] font-bold text-primary">
              Contact
            </span>
            <h2 className="text-4xl font-serif">Partner with us.</h2>
            <p className="text-muted-foreground max-w-sm">
              Are you a facility seeking reliable staff, or a professional
              looking for your next opportunity? Let's connect and strengthen
              the system together.
            </p>
            <Button
              onClick={focusField}
              className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-colors uppercase text-[10px] tracking-widest font-bold"
            >
              Get In Touch
            </Button>
          </div>

          <form className="space-y-6 pt-12 border-t border-border">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                  First Name
                </label>
                <Input
                  ref={inputRef}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                  Last Name
                </label>
                <Input className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                Email
              </label>
              <Input
                type="email"
                className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                Organization / Profession
              </label>
              <Input className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                Message
              </label>
              <Textarea className="border-0 border-b border-border rounded-none bg-transparent px-0 min-h-[100px] focus-visible:ring-0 focus-visible:border-primary transition-all resize-none" />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-primary hover:bg-primary/90 py-6 uppercase text-[10px] tracking-widest font-bold"
            >
              Submit Request
            </Button>
          </form>
        </div>
      </div>

      <footer className="border-t border-border mt-24 px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl">Locum Hub GH</h3>
            <p className="text-xs text-muted-foreground max-w-xs">
              Empowering healthcare facilities and professionals across Ghana
              through intelligent staffing solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 text-[10px] uppercase tracking-widest font-bold">
            <div className="space-y-4">
              <Link
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="block hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Twitter
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-[15vw] font-serif leading-none tracking-tighter text-primary/10 select-none pointer-events-none">
            LHGH
          </div>
          <div className="flex justify-between items-center mt-8 text-[10px] uppercase tracking-widest opacity-50">
            <span>© 2025 All Rights Reserved.</span>
            <span>Accra, Ghana • Strengthening the System.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
