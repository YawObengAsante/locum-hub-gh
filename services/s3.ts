import { FileUploadReturnType, FileUploadType } from "@/types";

export async function handleFileStorageUpload(
  payload: FileUploadType,
): Promise<FileUploadReturnType> {
  // TODO: handle upload to storage

  // placeholders to satisfy type errors
  const resumeUrl = "test-resume-url";
  const coverLetterUrl = "test-cover-letter-url";
  return { resumeUrl, coverLetterUrl };
}
