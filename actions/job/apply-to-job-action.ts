import { prisma } from "@/lib/prisma";
import { serverAuthUser } from "@/lib/server-helpers";
import { formatZodValidationErrors } from "@/lib/utils";
import { fileUploadSchema } from "@/schema";
import { handleFileStorage } from "@/services/s3";
import { success } from "zod";

async function applyToJobAction(
  prev: FormData,
  formData: FormData,
  jobId: string,
) {
  const {userId} = await serverAuthUser();

  if (!userId) return {success: false, error: "Unauthorized"}

  const job = await prisma.job.findUnique({ where: { id: jobId } });

  if (!job) return { success: false, error: "Job not found" };

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

  const {resumeUrl, coverLetterUrl} = await handleFileStorage(validatedData.data)

  const application = prisma.application.create({
    data: {
      jobId,
      applicantId: userId,
      resumeUrl,
      coverLetterUrl
    }
  })
}
