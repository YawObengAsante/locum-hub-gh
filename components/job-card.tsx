import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { $Enums } from "@/generated/prisma";

 type JobType = {
  id: string;
  title: string;
  hospital: string;
  location: string | null;
  jobType: string;
  salary: string | null;
  description: string;
  status: $Enums.JobStatus;
  createdAt: Date;
  updatedAt: Date;
  posterId: string;
};

export default function JobCard({job}:{ job: JobType}) {
  return (
    <Card className="bg-white/70">
      <CardHeader>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                {job.hospital}
              </span>
              <time className="text-xs text-gray-400">2d ago</time>
              <span className="text-xs text-gray-400">Posted by Yaw</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-lg sm:text-2xl text-gray-700 mb-3">
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
          className="bg-white p-3 mb-3 rounded-2xl text-sm text-gray-700"
          style={{
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
          }}
          aria-label="Job description"
        >
          {job.description}
        </div>

        <Separator className="mb-3" />

        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="grid gap-1">
            <span className="font-semibold text-base">{job.salary}</span>
            <span className="text-sm text-success border border-success bg-green-100 p-1 font-semibold flex justify-center items-center rounded-sm">
              {job.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className=" text-white px-4 py-2 text-sm hover:cursor-pointer"
              aria-label="Apply to Physician Assistant role"
            >
              Apply now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gray-100 py-1.5 px-3 rounded-xl flex items-center gap-1 text-sm">
      {children}
    </span>
  );
}
