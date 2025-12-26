import { getAllJobs } from "@/actions/job/get-all-jobs";
import JobsLoadingScreen from "@/components/job-loading-screen";
import JobCardContainer from "@/components/jobs-card-container";
import SearchBar from "@/components/search-bar";
import { Suspense } from "react";

export default async function JobPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { job, jobType, location, page, limit } = await searchParams;

  const  jobsPromise  = getAllJobs({ job, jobType, location, page, limit });

  return (
    <div className="m-3">
      <SearchBar />
      <Suspense fallback={<JobsLoadingScreen />}>
        <JobCardContainer jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
}
