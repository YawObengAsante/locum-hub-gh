import { getJob } from "@/actions/job/get-job";
import { getUserData } from "@/actions/user/get-user-data";
import { NotFound } from "@/components/not-found";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AppliedJobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await getJob(id);

  if (!job.success) return <NotFound />;

  const jobPoster = await getUserData(job.data.posterId);

  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>{<div>{job.data.title}</div>}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>{job.data.hospital}</div>
          <div>{job.data.description}</div>
          <div>{job.data.jobType.replace("_", " ")}</div>
          <div>{job.data.location}</div>
          <div>Posted by: {jobPoster?.name}</div>
          <div>{job.data.salary}</div>
          <div>{job.data.status}</div>
        </CardContent>
      </Card>
    </div>
  );
}
