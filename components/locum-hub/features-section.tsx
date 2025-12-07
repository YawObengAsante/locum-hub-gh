import { ShieldCheck, SlidersHorizontal, Users, FileEdit, UserSearch, FolderKanban } from "lucide-react"
import { FeatureItem } from "./feature-item"

const healthWorkerFeatures = [
  {
    icon: ShieldCheck,
    title: "Discover Verified Opportunities",
    description: "Access a curated list of jobs from trusted health facilities across Ghana.",
  },
  {
    icon: SlidersHorizontal,
    title: "Advanced Filter Options",
    description: "Easily search for jobs by profession, location, type (full-time, part-time, locum), and more.",
  },
  {
    icon: Users,
    title: "Inclusive for All Roles",
    description: "From nurses and doctors to allied health professionals, find roles that match your skills.",
  },
]

const facilityFeatures = [
  {
    icon: FileEdit,
    title: "Post Vacancies with Ease",
    description: "Our intuitive dashboard makes it simple to post and manage job vacancies.",
  },
  {
    icon: UserSearch,
    title: "Reach Qualified Candidates",
    description: "Connect with a dedicated pool of professional and verified healthcare workers in Ghana.",
  },
  {
    icon: FolderKanban,
    title: "Centralized Application Management",
    description: "Review and manage all your job applications from one convenient location.",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-20 lg:py-24 bg-card">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Platform for Everyone in Healthcare
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re looking for your next role or seeking qualified talent, we&apos;ve got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground">For Health Workers</h3>
            <div className="flex flex-col gap-6">
              {healthWorkerFeatures.map((feature) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground">For Health Facilities</h3>
            <div className="flex flex-col gap-6">
              {facilityFeatures.map((feature) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
