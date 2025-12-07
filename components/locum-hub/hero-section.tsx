import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto max-w-7xl">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 sm:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("/diverse-group-of-ghanaian-healthcare-professionals.jpg")`,
          }}
        >
          <div className="flex flex-col gap-4 text-left max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
              Connecting Ghana&apos;s Health Workforce to Opportunities Near You
            </h1>
            <p className="text-slate-200 text-base font-normal leading-normal sm:text-lg">
              The premier platform connecting health facilities with qualified health workers across Ghana.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="h-10 sm:h-12">
              Find Health Job
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="h-10 sm:h-12 bg-[#e7ecf3] text-[#0d131b] hover:bg-slate-300"
            >
              Post a Vacancy
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
