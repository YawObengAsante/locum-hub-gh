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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
    <Card className="w-full md:w-[800px]">
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
            {state.error?.title && (
              <p className="text-red-400">{state.error.title}</p>
            )}
          </div>
          <div>
            <h1>Hospital</h1>
            <Input
              type="text"
              name="hospital"
              placeholder="Hospital name"
              defaultValue={job.hospital}
            />
            {state.error?.hospital && (
              <p className="text-red-400">{state.error.hospital}</p>
            )}
          </div>
          <div>
            <h1>Location</h1>
            <Input
              type="text"
              name="location"
              placeholder="Tema"
              defaultValue={job.location ?? undefined}
            />
            {state.error?.location && (
              <p className="text-red-400">{state.error.location}</p>
            )}
          </div>
          <div>
            <h1>Job Type</h1>
            <JobTypeSelectGroup state={state} defaultValue={job.jobType} />
          </div>
          <div>
            <h1>Description</h1>
            <Textarea
              name="description"
              placeholder="Type your job description here."
              defaultValue={job.description}
            />
            {state.error?.description && (
              <p className="text-red-400">{state.error.description}</p>
            )}
          </div>
          <div>
            <h1>Salary</h1>
            <Input
              type="text"
              name="salary"
              placeholder="e.g. Ghc3,000 - Ghc4,000"
              defaultValue={job.salary ?? undefined}
            />
            {state.error?.salary && (
              <p className="text-red-400">{state.error.salary}</p>
            )}
          </div>
          <div>
            <h1>Job Status</h1>
            <Select name="status">
              <SelectTrigger className="w-full">
                <SelectValue
                  defaultValue={job.status}
                  placeholder="Select a job type"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Open</SelectLabel>
                  <SelectItem value="OPEN">Open</SelectItem>
                  <SelectItem value="FILLED">Filled</SelectItem>
                  <SelectItem value="CLOSED">Closed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {state.error?.status && (
              <p className="text-red-400">{state.error.status}</p>
            )}
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
