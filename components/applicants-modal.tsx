import { Dialog, DialogTitle, DialogTrigger, DialogContent } from "./ui/dialog";
import { type UserType } from "@/types";

export async function ApplicantsModal({
  applicants,
}: {
  applicants: UserType[];
}) {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-accent hover:cursor-pointer">
        {`Applicants (${applicants.length})`}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Job Applicants</DialogTitle>
        {applicants.map((applicant) => (
          <div key={applicant.id}>
            <div className="text-lg font-semibold">{applicant.name}</div>
            <div>{applicant.email}</div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
