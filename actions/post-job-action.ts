"use server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatZodValidationErrors, parseError } from "@/lib/utils";

const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  hospital: z.string().min(1, "Hospital name is required"),
  location: z.string().min(1, "Location is required"),
  jobType: z.string().min(1, "Job type is required"),
  description: z.string().min(1, "Description is required"),
  salary: z.string().min(1, "Salary is required"),
});

type JobForm = z.infer<typeof jobSchema>;

export type JobFormReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<JobForm>;
  error?: Partial<Record<keyof JobForm, string[]>>;
};

export async function postJobAction(
  prevState: JobFormReturnType,
  formData: FormData
): Promise<JobFormReturnType> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) redirect("/sign-in");

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

    const userId = session.user.id;

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
