import { getJobApplicants } from "@/actions/job-application/get-applicants";
import { ApplicantsModal } from "./applicants-modal";

export async function JobApplicants({ jobId }: { jobId: string }) {
  const res = await getJobApplicants(jobId);

  if (!res.success)
    return <div className="text-lg text-accent">No applicants found</div>;

  return (
    <div>
      {res.success && <ApplicantsModal applicants={res.data} />}
    </div>
  );
}
