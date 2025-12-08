import { getAllJobs } from "@/actions/job/get-all-jobs";
import JobCardContainer from "@/components/jobs-card-container";
import SearchBar from "@/components/search-bar";
import { Suspense } from "react";

export default async function JobPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { job, jobType, location } = await searchParams;

  const jobs = getAllJobs({ job, jobType, location });

  return (
    <div className="m-3">
      <SearchBar />
      {/* <div className="mt-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-blue-500"> */}
        <Suspense fallback={"Loading..."}>
          <JobCardContainer jobs={jobs} />
        </Suspense>
      {/* </div> */}
    </div>
  );
}
