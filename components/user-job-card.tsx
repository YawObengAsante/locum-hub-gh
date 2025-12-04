import { type JobType } from "@/types";
import {
  MapPin,
  BriefcaseBusinessIcon,
  HospitalIcon,
  LockIcon,
  DollarSignIcon,
  ArrowRightIcon,
  NotebookTextIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { DeleteJobButton } from "./delete-job-button";

export function UserJobCard({ job }: { job: JobType }) {
  return (
    <div className="bg-background/45 border border-border rounded-xl shadow-xl px-4 py-3">
      <div className="flex flex-col gap-2 md:gap-4 w-full">
        <h1 className="uploaded-job-items">
          <BriefcaseBusinessIcon className="h-5 w-5" />
          <p>
            Position: <span className="job-details-text">{job.title}</span>{" "}
          </p>
        </h1>
        <div className="uploaded-job-items">
          <HospitalIcon className="h-5 w-5" />
          <p>
            Hospital: <span className="job-details-text">{job.hospital}</span>{" "}
          </p>
        </div>
        <div className="uploaded-job-items">
          <MapPin className="h-5 w-5" />
          <p>
            Location: <span className="job-details-text">{job.location}</span>
          </p>
        </div>
        <div className="uploaded-job-items">
          <LockIcon className="h-5 w-5" />
          <p>
            Status: <span className="job-details-text">{job.status}</span>
          </p>
        </div>
        <div className="uploaded-job-items">
          <DollarSignIcon className="h-5 w-5" />
          <p>
            Salary: <span className="job-details-text">{job.salary}</span>{" "}
          </p>
        </div>
        <div className="uploaded-job-items">
          <NotebookTextIcon className="h-5 w-5" />
          <p className="job-details-text">
            {job.description.substring(0, 40)}...
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-3">
        <Button size={"sm"}>
          <p>Edit Details</p>
          <ArrowRightIcon className="w-5 h-5" />
        </Button>

        <DeleteJobButton id={job.id} posterId={job.posterId}/>
      </div>
    </div>
  );
}
