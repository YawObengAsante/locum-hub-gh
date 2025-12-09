import { prisma } from "@/lib/prisma";

export async function getUserPostedJob(userId: string){
    const postedJobs = await prisma.job.findMany({
        where: { posterId: userId },
        orderBy: {createdAt: "desc"}
      });

    return postedJobs
}

export async function getUserAppliedJob(userId: string) {
  const appliedJobs = await prisma.application.findMany({
    where: { applicantId: userId },
    orderBy: { createdAt: "desc" },
    include: { job: true },
  });

  return appliedJobs;
}