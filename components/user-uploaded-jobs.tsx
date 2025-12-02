import { UserJobCard } from "./user-job-card";

export function UserUploadedJobs({userId}: {userId: string}) {

    return (
        <div className="w-full grid sm:grid-cols-2 gap-2">
              <UserJobCard />
              <UserJobCard />
              <UserJobCard />
            </div>
    )
}