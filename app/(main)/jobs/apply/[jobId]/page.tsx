import { JobApplicationForm } from "@/components/job-application-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function JobApplicationPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  
  return (
    <div className="container w-full m-10  flex flex-col justify-center items-center">
      <Card className="w-full md:w-200">
        <CardHeader>
          <CardTitle>Apply to Job</CardTitle>
        </CardHeader>
        <CardContent>
          <JobApplicationForm jobId={jobId}/>
        </CardContent>
      </Card>
    </div>
  );
}
