import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { JobTypeSelectGroup } from "./job-type-select-group";

export default async function SearchBar({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
const { job, jobType, location } = (searchParams) || {};
console.log(job);


  return (
    <form action="/jobs">
      <div className="grid gap-2.5 p-2 md:p-3 md:my-3 bg-white/70 rounded-2xl shadow-xl">
        <h1 className="font-bold text-xs md:text-2xl">Find Jobs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <Input
            type="search"
            name="job"
            placeholder="Search Job"
            className="bg-white"
            defaultValue={job}
          />
          <JobTypeSelectGroup name="jobType" defaultValue={jobType} />
          <Input
            type="search"
            name="location"
            placeholder="Location"
            className="bg-white "
            defaultValue={location}
          />
        </div>
        <Button type="submit" className="text-white">
          Search
        </Button>
      </div>
    </form>
  );
}
