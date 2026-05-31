import { type JobType } from "@/types";
import {
  MapPin,
  BriefcaseBusinessIcon,
  HospitalIcon,
  LockIcon,
  DollarSignIcon,
  NotebookTextIcon,
  ArrowRightIcon,
  PersonStandingIcon,
} from "lucide-react";
import { DeleteJobButton } from "./delete-job-button";
import { Button } from "./ui/button";
import Link from "next/link";
import { getJobStatusClass, timeAgo } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function PostedJobCard({ job }: { job: JobType }) {
  return (
    // <div className="bg-background/45 border border-border rounded-xl shadow-xl px-4 py-3">
    //   <div className="flex flex-col gap-2 md:gap-4 w-full">
    //     <h1 className="uploaded-job-items">
    //       <BriefcaseBusinessIcon className="h-5 w-5" />
    //       <p className="job-details-container">
    //         Position: <span className="job-details-text">{job.title}</span>{" "}
    //       </p>
    //     </h1>
    //     <div className="uploaded-job-items">
    //       <HospitalIcon className="h-5 w-5" />
    //       <p className="job-details-container">
    //         Hospital: <span className="job-details-text">{job.hospital}</span>{" "}
    //       </p>
    //     </div>
    //     <div className="uploaded-job-items">
    //       <MapPin className="h-5 w-5" />
    //       <p className="job-details-container">
    //         Location: <span className="job-details-text">{job.location}</span>
    //       </p>
    //     </div>
    //     <div className="uploaded-job-items">
    //       <PersonStandingIcon className="h-5 w-5" />
    //       <p className="job-details-container">
    //         Job Type: <span className="job-details-text">{job.jobType}</span>
    //       </p>
    //     </div>
    //     <div className="uploaded-job-items">
    //       <LockIcon className="h-5 w-5" />
    //       <p className="job-details-container">
    //         Status: <span className="job-details-text">{job.status}</span>
    //       </p>
    //     </div>
    //     <div className="uploaded-job-items">
    //       <DollarSignIcon className="h-5 w-5" />
    //       <p className="job-details-container">
    //         Salary: <span className="job-details-text">{job.salary}</span>{" "}
    //       </p>
    //     </div>
    //     <div className="uploaded-job-items">
    //       <NotebookTextIcon className="h-5 w-5" />
    //       <p className="job-details-text">
    //         {job.description.substring(0, 40)}...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex justify-end gap-5 mt-3">
    //     <Link href={`jobs/uploaded/${job.id}`}>
    //     <Button size={"sm"}>
    //       <p>View Details</p>
    //       <ArrowRightIcon className="w-5 h-5" />
    //     </Button>
    //     </Link>
    //     <DeleteJobButton id={job.id} posterId={job.posterId} />
    //   </div>
    // </div>

    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-4">
        <div className="grow">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {job.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{job.hospital}</p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{job.location}</span>
            <span>•</span>
            <span className="text-accent font-medium">{job.salary}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge className={getJobStatusClass(job.status)}>{job.status}</Badge>
          <p className="text-xs text-muted-foreground">
            {timeAgo(job.createdAt)}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-3">
        <Link href={`jobs/uploaded/${job.id}`}>
          <Button size={"sm"}>
            <p>View Details</p>
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </Link>
        <DeleteJobButton id={job.id} posterId={job.posterId} />
      </div>
    </div>
  );
}
