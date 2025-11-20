import JobCard from "@/components/job-card";
import SearchBar from "@/components/search-bar";

export default function JobPage() {
  return (
    <>
      <SearchBar />
      <div className="m-2 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  );
}
