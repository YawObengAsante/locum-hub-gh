import { prisma } from "@/lib/prisma";
import {
  ActionReturnType,
  JobWithApplicantsType,
  JobWithApplicationsType,
} from "@/types";

export async function getJobWithApplicants(
  jobId: string,
): Promise<ActionReturnType<JobWithApplicantsType>> {

  const job: JobWithApplicationsType | null = await prisma.job.findUnique({
    where: { id: jobId },
    include: { applications: true },
  });

  if (!job) return { success: false, error: "Job not found" };

  const applicantIds = job.applications.map(
    (application) => application.applicantId,
  );

  const applicants = await prisma.user.findMany({
    where: { id: { in: applicantIds } },
  });

  return { success: true, data: { job, applicants } };
}
