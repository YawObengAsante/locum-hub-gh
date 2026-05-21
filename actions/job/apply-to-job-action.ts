import { prisma } from "@/lib/prisma";
import { serverAuthUser } from "@/lib/server-helpers";
import { formatZodValidationErrors } from "@/lib/utils";
import { fileUploadSchema } from "@/schema";
import { handleFileStorageUpload } from "@/services/s3";

async function applyToJobAction(
  prev: FormData,
  formData: FormData,
  jobId: string,
) {
  const { userId } = await serverAuthUser();

  if (!userId) return { success: false, error: "Unauthorized" };

  const job = await prisma.job.findUnique({ where: { id: jobId } });

  if (!job) return { success: false, error: "Job not found" };

  const existingApplication = await prisma.application.findUnique({
    where: { jobId_applicantId: { jobId, applicantId: userId } },
  });

  if (existingApplication) {
    return { success: false, error: "You have already applied to this job" };
  }

  const data = {
    resume: formData.get("resume") as File,
    coverLetter: formData.get("cover-letter") as File,
  };

  const validatedData = fileUploadSchema.safeParse(data);

  if (!validatedData.success)
    return {
      success: false,
      error: formatZodValidationErrors(validatedData.error),
    };

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
}
