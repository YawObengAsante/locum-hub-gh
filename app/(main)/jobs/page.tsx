import JobCard from "@/components/job-card";
import SearchBar from "@/components/search-bar";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

export default async function JobPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { job, jobType, location } = await searchParams;
  const jobName = job as string;
  const type = jobType as string;
  const jobLocation = location as string;

  const jobs = await prisma.job.findMany({
    where: {
      AND: [
        jobName
          ? {
              OR: [
                { title: { contains: jobName, mode: "insensitive" } },
                { description: { contains: jobName, mode: "insensitive" } },
                { hospital: { contains: jobName, mode: "insensitive" } },
              ],
            }
          : {},
        type
          ? {
              jobType: { contains: type, mode: "insensitive" },
            }
          : {},
        jobLocation
          ? { location: { contains: jobLocation, mode: "insensitive" } }
          : {},
      ],
    },
    orderBy: {createdAt: "desc"},
    include: {
      poster: true
    }
  });

  return (
    <div className="m-3">
      <SearchBar />
      <div className="mt-3 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {jobs.map((job, index) => (
          <Suspense key={index} fallback={"Loading..."}>
            <JobCard job={job} postedBy={job.poster}/>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
