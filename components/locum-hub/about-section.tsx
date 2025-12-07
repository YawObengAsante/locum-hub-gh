import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Locum Hub GH</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our mission is to bridge the gap in Ghana&apos;s healthcare staffing by creating a seamless, reliable, and
              efficient platform for health professionals and facilities. We are committed to strengthening the
              healthcare system by ensuring that every health facility, from major hubs like Korle-Bu and Komfo Anokye
              to rural clinics, has access to the qualified staff they need, when they need them.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-12 px-6">
                Learn More About Us
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/stylized-map-of-ghana-highlighting-major-cities-ac.jpg"
              alt="Stylized map of Ghana highlighting major cities like Accra and Kumasi"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-80 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
