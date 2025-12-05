"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatZodValidationErrors, parseError } from "@/lib/utils";
import { JobForm, JobFormReturnType } from "@/types";
import { serverAuthUser } from "@/lib/server-helpers";
import { jobSchema } from "@/schema";


export async function postJobAction(
  prevState: JobFormReturnType,
  formData: FormData
): Promise<JobFormReturnType> {
  try {
    const {userId} = await serverAuthUser()

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

    await prisma.job.create({
      data: {
        title: validatedData.data.title,
        location: validatedData.data.location,
        hospital: validatedData.data.hospital,
        description: validatedData.data.description,
        salary: validatedData.data.salary,
        posterId: userId,
        jobType: validatedData.data.jobType,
      },
    });

    redirect("/jobs");
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
