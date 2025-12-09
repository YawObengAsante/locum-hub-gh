import { prisma } from "@/lib/prisma";

export async function getUserData(userId: string) {
    const userData = await prisma.user.findUnique({
    where: { id: userId },
  });

  return userData
}