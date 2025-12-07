import { JobCard } from "./job-card"
import { FilterButton } from "./filter-button"

const sampleJobs = [
  { title: "Registered Nurse", location: "Korle-Bu Teaching Hospital, Accra" },
  { title: "Medical Laboratory Scientist", location: "Komfo Anokye Teaching Hospital, Kumasi" },
  { title: "Pharmacist (Locum)", location: "Tamale Teaching Hospital, Tamale" },
]

const filters = ["Job Position", "Location", "Job Type"]

export function JobSearchPreview() {
  return (
    <section className="w-full pb-20 lg:pb-32">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em] px-4">
            Find Your Next Opportunity
          </h2>
          <div className="flex gap-3 px-4 flex-wrap">
            {filters.map((filter) => (
              <FilterButton key={filter} label={filter} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {sampleJobs.map((job) => (
              <JobCard key={job.title} title={job.title} location={job.location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
