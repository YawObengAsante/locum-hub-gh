"use client";
import { JobFormReturnType, JobType } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ring } from "ldrs/react";
import { JobTypeSelectGroup } from "./job-type-select-group";
import { Button } from "./ui/button";
import { useActionState } from "react";
import { editJobAction } from "@/actions/job/edit-job-action";

const initState: JobFormReturnType = {
  success: false,
  message: "",
};

export function EditJobForm({ job }: { job: JobType }) {
  const editJobWithId = async (
    prevState: JobFormReturnType,
    formData: FormData
  ) => {
    return await editJobAction(prevState, formData, job.id);
  };
  const [state, action, isLoading] = useActionState(editJobWithId, initState);
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Edit Job details</CardTitle>
        {state?.error && (
          <div className="p-3 rounded-2xl mb-2 text-center bg-red-200 border-red-300 text-red-600">
            {state.message}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form action={action} className="flex flex-col gap-5">
          <div>
            <h1>Job Title</h1>
            <Input
              type="text"
              name="title"
              placeholder="Physician Assistant"
              defaultValue={job.title}
            />
          </div>
          <div>
            <h1>Hospital</h1>
            <Input
              type="text"
              name="hospital"
              placeholder="Hospital name"
              defaultValue={job.hospital}
            />
          </div>
          <div>
            <h1>Location</h1>
            <Input
              type="text"
              name="location"
              placeholder="Tema"
              defaultValue={job.location ?? undefined}
            />
          </div>
          <div>
            <h1>Job Type</h1>
            <JobTypeSelectGroup name={"jobType"} state={state} />
          </div>
          <div>
            <h1>Description</h1>
            <Textarea
              name="description"
              placeholder="Type your job description here."
              defaultValue={job.description}
            />
          </div>
          <div>
            <h1>Salary</h1>
            <Input
              type="text"
              name="salary"
              placeholder="e.g. Ghc3,000 - Ghc4,000"
              defaultValue={job.salary ?? undefined}
            />
          </div>
          <Button type="submit" className="w-full text-white">
            {isLoading ? (
              <Ring
                size="20"
                stroke="2"
                bgOpacity="0"
                speed="2"
                color="white"
              />
            ) : (
              "Update Job"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
