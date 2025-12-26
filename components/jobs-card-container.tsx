"use client";
import { JobWithPosterType } from "@/types";
import { use } from "react";
import JobCard from "./job-card";
import { NotFound } from "./not-found";
import { PaginationWithLinks } from "./ui/pagination-with-links";

type Props = {
  jobsPromise: Promise<{
    jobs: JobWithPosterType[];
    meta: {
      pageNumber: number;
      limitNumber: number;
      totalCount: number;
      totalPages: number;
    };
  }>;
};

export default function JobCardContainer({
  jobsPromise,
}: Props) {
  const data = use(jobsPromise);

  const {jobs: allJobs, meta} = data

  if (allJobs.length === 0) return <NotFound />;

  return (
    <>
      <div className=" mt-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {allJobs.map((job, index) => (
          <JobCard key={index} job={job} postedBy={job.poster} />
        ))}
      </div>
      <div className="mt-8 mb-5">
        <PaginationWithLinks page={meta.pageNumber} pageSize={meta.limitNumber} totalCount={meta.totalCount} />
      </div>
    </>
  );
}
