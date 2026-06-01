import { getJobApplicants } from "@/actions/job-application/get-applicants";
import { ApplicantsModal } from "./applicants-modal";

export async function JobApplicants({ jobId }: { jobId: string }) {
  const res = await getJobApplicants(jobId);

  if (!res.success)
    return <div className="text-lg text-red-300">An error occured</div>;

  return (
    <div>
      {res.data.length === 0 ? (
        <div className="text-sm text-accent">No applicants yet</div>
      ) : (
        <ApplicantsModal applicants={res.data} />
      )}
    </div>
  );
}
