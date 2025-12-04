"use server";
import { serverAuthUser } from "@/lib/server-helpers";
import { JobForm, JobFormReturnType } from "@/types";
import { jobSchema } from "./schema";
import { formatZodValidationErrors, parseError } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

export async function editJobAction(
  prevState: JobFormReturnType,
  formData: FormData,
  id: string
):Promise<JobFormReturnType> {
  try {
    const { userId } = await serverAuthUser();
    const job = await prisma.job.findUnique({
        where: {id}
    })

    if(!job) throw new Error("Job not found")
    if(job.posterId !== userId) throw new Error("Unauthorized. Cannot edit this job posting")

    const data: Partial<JobForm> = {
      title: formData.get("title") as string | undefined,
      hospital: formData.get("hospital") as string | undefined,
      location: formData.get("location") as string | undefined,
      jobType: formData.get("jobType") as string | undefined,
      description: formData.get("description") as string | undefined,
      salary: formData.get("salary") as string | undefined,
    };

    const validatedData = jobSchema.safeParse(data);

    if (!validatedData.success) {
      const formattedErrors = formatZodValidationErrors(validatedData);
      return {
        success: false,
        message: "There was an error. Please fill the form correctly",
        error: formattedErrors,
        entries: data,
      };
    }

    await prisma.job.update({
        data: {...validatedData.data},
        where: {id}
    })
    return {
        success: true,
        message: "Job had been updated successfully"
    }

  } catch (error: any) {
     if (error?.digest?.startsWith("NEXT_REDIRECT")) {
          throw error; // rethrow so Next.js can handle it
        }
        const errorMessage = parseError(error);
        return {
          success: false,
          message: errorMessage,
        };
  }
}
