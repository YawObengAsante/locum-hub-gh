import { prisma } from "@/lib/prisma";
import { SearchParamsType } from "@/types";
import { cache } from "react";

export const getAllJobs = cache(async (params: SearchParamsType) => {
  const jobName = params.job as string;
  const type = params.jobType as string;
  const jobLocation = params.location as string;
  const pageNumber = parseInt((params.page as string) || "1");
  const limitNumber = parseInt((params.limit as string) || "10");

  const skip = (pageNumber - 1) * limitNumber;

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
    skip,
    take: limitNumber,
    orderBy: { createdAt: "desc" },
    include: {
      poster: true,
    },
  });

  const totalCount = await prisma.job.count();

  return {
    jobs,
    meta: {
      pageNumber,
      limitNumber,
      totalCount,
      totalPages: Math.ceil(totalCount / limitNumber),
    },
  };
});
