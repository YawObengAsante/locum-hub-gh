import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./ui/card";
import { MapPin, Clock, User, Briefcase } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { getJobStatusClass, timeAgo } from "@/lib/utils";
import { type JobType, type UserType } from "@/types";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function JobCard({
  job,
  postedBy,
}: {
  job: JobType;
  postedBy: UserType;
}) {
  
  return (
    <Card className="w-full max-w-md overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/5">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-12 w-12 border-2 border-primary/10">
          <AvatarImage src={postedBy.image ?? undefined} alt={job.hospital} />
          <AvatarFallback className="bg-primary/5 text-primary">
            {job.hospital.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg leading-tight tracking-tight">
            {job.hospital}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {timeAgo(job.createdAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {postedBy.name}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {job.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-primary/5 text-primary hover:bg-primary/10 border-none px-2.5 py-0.5 font-medium"
            >
              <Briefcase className="mr-1.5 h-3 w-3" />
              {job.jobType.replace("_", " ")}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-primary/5 text-primary hover:bg-primary/10 border-none px-2.5 py-0.5 font-medium"
            >
              <MapPin className="mr-1.5 h-3 w-3" />
              {job.location}
            </Badge>
          </div>
        </div>

        <div className="rounded-xl bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground border border-border/50 min-h-20">
          {job.description}
        </div>
      </CardContent>

      <Separator className="mb-3" />

      <CardFooter className="flex items-center justify-between bg-card px-6 py-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Monthly Salary
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              {job.salary}
            </span>
            <Badge className={getJobStatusClass(job.status)}>{job.status}</Badge>
          </div>
        </div>
        {job.status !== "CLOSED" && (
          <Link href={`/jobs/apply/${job.id}`}>
            <Button
              className="font-semibold px-6 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 active:scale-95 transition-all"
              aria-label="Apply to role"
            >
              Apply now
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
