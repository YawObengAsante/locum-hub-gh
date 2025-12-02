import { prisma } from "@/lib/prisma";
import { UserJobCard } from "./user-job-card";

export async function UserUploadedJobs({ userId }: { userId: string }) {
  const postedJobs = await prisma.job.findMany({
    where: { posterId: userId },
  });

  return (
    <div className="w-full grid sm:grid-cols-2 gap-2">
      {postedJobs.map((job, index) => (
        <UserJobCard key={index} job={job} />
      ))}
    </div>
  );
}
