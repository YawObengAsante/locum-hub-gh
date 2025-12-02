import { prisma } from "@/lib/prisma";
import { UserJobCard } from "./user-job-card";
import { NoData } from "./no-data";

export async function UserUploadedJobs({ userId }: { userId: string }) {
  const postedJobs = await prisma.job.findMany({
    where: { posterId: userId },
    orderBy: {createdAt: "desc"}
  });

  if (postedJobs.length === 0) return <NoData />;

  return (
    <div className="w-full grid sm:grid-cols-2 gap-2">
      {postedJobs.map((job, index) => (
        <UserJobCard key={index} job={job} />
      ))}
    </div>
  );
}
