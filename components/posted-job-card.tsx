import { type JobType } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import { DeleteJobButton } from "./delete-job-button";
import { Button } from "./ui/button";
import Link from "next/link";
import { getJobStatusClass, timeAgo } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Suspense } from "react";
import { JobApplicants } from "./job-applicants";
import ApplicantsLoadingSkeleton from "./applicants-loading-skeleton";

export function PostedJobCard({ job }: { job: JobType }) {
  return (
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
      <div className="flex justify-end items-center gap-5 mt-3">
        <Suspense fallback={<ApplicantsLoadingSkeleton/>}>
          <JobApplicants jobId={job.id} />
        </Suspense>
        <Link href={`jobs/uploaded/${job.id}`}>
          <Button size={"sm"}>
            <p>Edit Details</p>
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </Link>
        <DeleteJobButton id={job.id} posterId={job.posterId} />
      </div>
    </div>
  );
}
