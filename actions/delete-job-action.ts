"use server"
import { prisma } from "@/lib/prisma";
import { serverAuthUser } from "@/lib/server-helpers";
import { parseError } from "@/lib/utils";

export type DeleteJobActionReturnType = {
    success: boolean,
    message: string
}

export async function deleteJobAction(id: string, posterId: string) {
  try {
    const {userId} = await serverAuthUser()
    
    if(userId !== posterId) throw new Error("Unauthorized: You cannot delete this job")

    const result = await prisma.job.delete({
      where: { id },
    });

    return {
        success : true,
        message:`Successfully deleted job with title ${result.title}`
    }
  } catch (error) {
    return {
        success: false,
        message: parseError(error)
    }
  }
}
