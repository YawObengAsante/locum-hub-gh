import { prisma } from "@/lib/prisma";
import { SearchParamsType } from "@/types";
import { cache } from "react";

export const getAllJobs = cache(async (params: SearchParamsType) => {
  const jobName = params.job as string;
  const type = params.jobType as string;
  const jobLocation = params.location as string;

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

    return jobs
}) 
