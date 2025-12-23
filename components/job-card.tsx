import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { cn, timeAgo } from "@/lib/utils";
import { type JobType, type UserType } from "@/types";
import Link from "next/link";

export default function JobCard({
  job,
  postedBy,
}: {
  job: JobType;
  postedBy: UserType;
}) {
  const jobStatusClass = () => {
    switch (job.status) {
      case "OPEN":
        return "text-success border-success bg-green-100";
      case "CLOSED":
        return "text-error border-error bg-red-100";
      case "FILLED":
        return "text-info border-info bg-blue-100";
      default:
        return "text-success border border-success bg-green-100";
    }
  };
  return (
    <Card className="bg-card">
      <CardHeader>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
              <AvatarImage src={postedBy.image ?? undefined} />
              <AvatarFallback>{postedBy.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-text">
                {job.hospital}
              </span>
              <time className="text-xs text-gray-400">
                {timeAgo(job.createdAt)}
              </time>
              <span className="text-xs text-gray-400">
                Posted by {postedBy.name}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-lg sm:text-2xl text-text mb-3">
          {job.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-3">
          <Pill>{job.jobType}</Pill>
          <Pill>
            <MapPin className="w-4 h-4" />
            <span className="ml-1">{job.location}</span>
          </Pill>
        </div>

        <div
          className="bg-background p-3 mb-3 min-h-20 rounded-2xl text-sm text-text"
          style={{
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
          }}
          aria-label="Job description"
        >
          {job.description.substring(0, 100)}
          {job.description.length > 100 && "..."}
        </div>

        <Separator className="mb-3" />

        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="grid gap-1">
            <span className="font-semibold text-base">{job.salary}</span>
            <span
              className={cn(
                "text-sm border p-1 font-semibold flex justify-center items-center rounded-sm",
                jobStatusClass()
              )}
            >
              {job.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {job.status !== "CLOSED" && (
              <Link href={`/jobs/apply/${job.id}`}>
                <Button
                  className=" text-white px-4 py-2 text-sm hover:cursor-pointer"
                  aria-label="Apply to Physician Assistant role"
                >
                  Apply now
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-background py-1.5 px-3 rounded-xl flex items-center gap-1 text-sm">
      {children}
    </span>
  );
}
