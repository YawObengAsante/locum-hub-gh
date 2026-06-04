import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "./ui/dialog";
import { type UserType } from "@/types";
import { FileTextIcon } from "lucide-react";
import { XIcon } from "lucide-react";
export async function ApplicantsModal({
  applicants,
}: {
  applicants: UserType[];
}) {
  return (
    <Dialog>
      <DialogTrigger className="text-xs text-accent hover:cursor-pointer">
        {`Applicants (${applicants.length})`}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="flex justify-between items-center">
          Job Applicants
          <DialogClose>
            <XIcon />
          </DialogClose>
        </DialogTitle>
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="bg-muted/30 border border-border rounded-lg p-4 flex justify-between items-start"
          >
            <div className="grow">
              <h3 className="font-semibold text-foreground mb-1">
                {applicant.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {applicant.email}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex flex-col items-center justify-center gap-y-3.5">
                <p className="text-xs md:text-sm text-accent hover:cursor-pointer flex justify-center items-center gap-2">
                  Download CV
                  <FileTextIcon size={15} />
                </p>
                <p className="text-xs md:text-sm text-accent hover:cursor-pointer flex justify-center items-center gap-2">
                  Cover Letter
                  <FileTextIcon size={15} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
