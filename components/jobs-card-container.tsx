"use client";
import { JobWithPosterType } from "@/types";
import { use } from "react";
import JobCard from "./job-card";

export default function JobCardContainer({
  jobs,
}: {
  jobs: Promise<JobWithPosterType[]>;
}) {

  const allJobs = use(jobs);
  
  return (
    <div className=" mt-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {allJobs.map((job, index) => (
        <JobCard key={index} job={job} postedBy={job.poster} />
      ))}
    </div>
  );
}
