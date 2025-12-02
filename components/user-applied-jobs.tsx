import { prisma } from "@/lib/prisma";
import { NoData } from "./no-data";
import { UserJobCard } from "./user-job-card";

export async function UserAppliedJobs({userId}: {userId: string}) {
    const appliedJobs = await prisma.application.findMany({
        where: {applicantId: userId},
        orderBy: {createdAt: "desc"},
        include: {job: true}
    })

    if(appliedJobs.length === 0) return <NoData />

     return (
        <div className="w-full grid sm:grid-cols-2 gap-2">
          {appliedJobs.map((appliedJob, index) => (
            <UserJobCard key={index} job={appliedJob.job} />
          ))}
        </div>
      );
}