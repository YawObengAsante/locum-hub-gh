import JobCard from "@/components/job-card";
import SearchBar from "@/components/search-bar";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import { includes } from "zod";

export default async function JobPage() {
  const jobs = await prisma.job.findMany({
    
  });

  return (
    <div className="m-3">
      <SearchBar />
      <div className="mt-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {jobs.map((job, index) => (
          <Suspense key={index} fallback={"Loading..."}>
            <JobCard job={job} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
