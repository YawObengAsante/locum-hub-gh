"use server"
import { prisma } from "@/lib/prisma";
import { serverAuthUser } from "@/lib/server-helpers";
// import { formatZodValidationErrors } from "@/lib/utils";
import { fileUploadSchema } from "@/schema";
import { handleFileStorageUpload } from "@/services/s3/s3";
import { ActionReturnType, JobApplicationType } from "@/types";

export async function applyToJobAction(
  prev: ActionReturnType<JobApplicationType>,
  formData: FormData,
): Promise<ActionReturnType<JobApplicationType>> {
  const { userId } = await serverAuthUser();
  const {resume, coverLetter, jobId} = {
    resume: formData.get("resume") as File,
    coverLetter: formData.get("cover-letter") as File,
    jobId: formData.get("job-id") as string
  };

  if (!userId) return { success: false, error: "Unauthorized" };

  const job = await prisma.job.findUnique({ where: { id: jobId } });

  if (!job) return { success: false, error: "Job not found" };

  const existingApplication = await prisma.application.findUnique({
    where: { jobId_applicantId: { jobId, applicantId: userId } },
  });

  if (existingApplication) {
    return { success: false, error: "You have already applied to this job" };
  }


  const validatedData = fileUploadSchema.safeParse({resume, coverLetter});

  if (!validatedData.success)
    return {
      success: false,
      // error: formatZodValidationErrors(validatedData.error),
      error: "Validation error occured"
    };

    try {
      
      const { resumeUrl, coverLetterUrl } = await handleFileStorageUpload(
        validatedData.data,
      );
    
      const application = await prisma.application.create({
        data: {
          jobId,
          applicantId: userId,
          resumeUrl,
          coverLetterUrl,
        },
        include: { job: true, applicant: true },
      });
    
      return { success: true, data: application };
    } catch (error) {
      return { success: false, error: "Failed to submit application" };
    }
}
