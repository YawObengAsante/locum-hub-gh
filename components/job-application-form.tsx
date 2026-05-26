"use client"
import { Ring } from "ldrs/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useActionState } from "react";
import { applyToJobAction } from "@/actions/job/apply-to-job-action";

export function JobApplicationForm({jobId}: {jobId: string }) {
     const [state, action, isPending] = useActionState(applyToJobAction, {
    success: false,
    error: "",
  });
  return (
    <form action={action} className="flex flex-col gap-5">
      {!state.success && state.error && (
        <div className="text-red-500 bg-red-200 p-3 border-red-500 rounded-2xl text-center">
          {state.error}
        </div>
      )}
      <Input defaultValue={jobId} type="text" name="job-id" hidden />
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
