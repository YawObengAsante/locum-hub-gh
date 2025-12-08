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
  const { job, jobType, location } = await searchParams;

  const jobs = getAllJobs({ job, jobType, location });

  return (
    <div className="m-3">
      <SearchBar />
      <Suspense fallback={<JobsLoadingScreen />}>
        <JobCardContainer jobs={jobs} />
      </Suspense>
    </div>
  );
}
