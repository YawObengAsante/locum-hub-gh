import { prisma } from "@/lib/prisma";
import { ActionReturnType, JobType } from "@/types";

export async function getJob(id: string): Promise<ActionReturnType<JobType>> {
     const job = await prisma.job.findUnique({
        where: { id },
      });
      if (!job) return {success: false, error: "Job not found"};

      return {success: true, data: job}
}