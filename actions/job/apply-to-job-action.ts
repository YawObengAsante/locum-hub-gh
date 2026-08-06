"use server"
import { prisma } from "@/lib/prisma";
import { serverAuthUser } from "@/lib/server-helpers";
import { ActionReturnType, JobApplicationType } from "@/types";

export async function applyToJobAction(
  prev: ActionReturnType<JobApplicationType>,
  formData: FormData,
): Promise<ActionReturnType<JobApplicationType>> {
  const { userId } = await serverAuthUser();
  const {jobId, resume, coverLetter} = {
    jobId: formData.get("job-id") as string,
    resume: formData.get("resume") as File,
    coverLetter: formData.get("cover-letter") as File
  };

  // if (!userId) return { success: false, error: "Unauthorized" };

  const job = await prisma.job.findUnique({ where: { id: jobId } });

  if (!job) return { success: false, error: "Job not found" };

  const existingApplication = await prisma.application.findUnique({
    where: { jobId_applicantId: { jobId, applicantId: userId } },
  });

  if (existingApplication) {
    return { success: false, error: "You have already applied to this job" };
  }

    try {
    
      const application = await prisma.application.create({
        data: {
          jobId,
          applicantId: userId,
        },
        include: { job: true, applicant: true },
      });
    
      return { success: true, data: application };
    } catch (error) {
      return { success: false, error: "Failed to submit application" };
    }
}
