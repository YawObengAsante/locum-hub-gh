import { UserJobCard } from "./user-job-card";
import { NoData } from "./no-data";
import { getUserPostedJob } from "@/actions/user/get-user-jobs";

export async function UserUploadedJobs({ userId }: { userId: string }) {
  const postedJobs = await getUserPostedJob(userId)

  if (postedJobs.length === 0) return <NoData />;

  return (
    <div className="w-full grid sm:grid-cols-2 gap-2">
      {postedJobs.map((job, index) => (
        <UserJobCard key={index} job={job} />
      ))}
    </div>
  );
}
