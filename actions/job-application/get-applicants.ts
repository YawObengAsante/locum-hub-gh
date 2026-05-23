import { prisma } from "@/lib/prisma";
import { ActionReturnType, UserType } from "@/types";

export async function getJobApplicants(jobId: string): Promise<ActionReturnType<UserType[]>> {
  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: {applications: true}
  });

  if(!job) return {success: false, error: "Job not found"}

  const applicantIds = job.applications.map(application => application.applicantId)

  const userApplicants = await prisma.user.findMany({
    where: {id: {in: applicantIds} }
  })

  return {success: true, data: userApplicants}
}
