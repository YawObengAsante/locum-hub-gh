import JobCard from "@/components/job-card";

export default function JobPage() {
  return (
    <div className="m-2 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  )
}
