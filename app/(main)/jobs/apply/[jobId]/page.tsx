"use client"
import { applyToJobAction } from "@/actions/job/apply-to-job-action";
import { JobApplicationForm } from "@/components/job-application-form";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Ring } from "ldrs/react";
import { useActionState } from "react";

export default async function JobApplicationPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
     const [state, action, isPending] = useActionState(applyToJobAction, {
    success: false,
    error: "",
  });

 
  return (
    <div className="container w-full m-10  flex flex-col justify-center items-center">
      <Card className="w-full md:w-200">
        <CardHeader>
          <CardTitle>Apply to Job</CardTitle>
        </CardHeader>
        <CardContent>
          <JobApplicationForm jobId={jobId} action={action} state={state} isPending={isPending}/>
        </CardContent>
      </Card>
    </div>
  );
}
