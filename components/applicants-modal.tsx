import { Dialog, DialogTitle } from "./ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { UserType } from "@/types";

export async function ApplicantsModal({
  applicants,
}: {
  applicants: UserType[];
}) {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-accent">
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
