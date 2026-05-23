import { Ring } from "ldrs/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
// import { useActionState } from "react";
// import { applyToJobAction } from "@/actions/job/apply-to-job-action";
import { ActionReturnType, JobApplicationType } from "@/types";

export function JobApplicationForm({jobId, action, state, isPending}: {jobId: string, action: (payload: FormData) => void, state: ActionReturnType<JobApplicationType>, isPending: boolean }) {
  
  return (
    <form action={action} className="flex flex-col gap-5">
      {!state.success && (
        <div className="text-red-500 bg-red-300 p-3 border-red-500">
          {state.error}
        </div>
      )}
      <Input value={jobId} type="text" name="job-id" hidden />
      <div>
        <h1>Upload CV</h1>
        <Input type="file" name="resume" />
      </div>
      <div>
        <h1>Upload Cover Letter</h1>
        <Input type="file" name="cover-letter" />
      </div>

      <div>
        <h1>Description</h1>
        <Textarea
          name="description"
          placeholder="Type your job description here."
        />
      </div>

      <Button type="submit" className="w-full text-white">
        {isPending ? (
          <Ring size="20" stroke="2" bgOpacity="0" speed="2" color="white" />
        ) : (
          "Apply to Job"
        )}
      </Button>
    </form>
  );
}
