import { FileUploadReturnType, FileUploadType } from "@/types";

export async function handleFileStorageUpload<T>(
  payload: FileUploadType,
): Promise<FileUploadReturnType> {
  // TODO: handle upload to storage

  // placeholders to satisfy type errors
  const resumeUrl = "";
  const coverLetterUrl = "";
  return { resumeUrl, coverLetterUrl };
}
