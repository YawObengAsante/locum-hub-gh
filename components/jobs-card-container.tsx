"use client";
import { JobWithPosterType } from "@/types";
import { use } from "react";
import JobCard from "./job-card";
import { NotFound } from "./not-found";

export default function JobCardContainer({
  jobs,
}: {
  jobs: Promise<JobWithPosterType[]>;
}) {

  const allJobs = use(jobs);

  if(allJobs.length === 0) return <NotFound />
  
  return (
    <div className=" mt-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {allJobs.map((job, index) => (
        <JobCard key={index} job={job} postedBy={job.poster} />
      ))}
    </div>
  );
}
