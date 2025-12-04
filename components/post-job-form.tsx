import { PostJobFormType } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ring } from "ldrs/react";
import { JobTypeSelectGroup } from "./job-type-select-group";
import { Button } from "./ui/button";

export function PostJobForm({ state, action, isLoading }: PostJobFormType) {
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Job details</CardTitle>
        {state.error && (
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
              defaultValue={state.entries?.title}
            />
          </div>
          <div>
            <h1>Hospital</h1>
            <Input
              type="text"
              name="hospital"
              placeholder="Hospital name"
              defaultValue={state.entries?.hospital}
            />
          </div>
          <div>
            <h1>Location</h1>
            <Input
              type="text"
              name="location"
              placeholder="Tema"
              defaultValue={state.entries?.location}
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
              defaultValue={state.entries?.description}
            />
          </div>
          <div>
            <h1>Salary</h1>
            <Input
              type="text"
              name="salary"
              placeholder="e.g. Ghc3,000 - Ghc4,000"
              defaultValue={state.entries?.salary}
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
              "Post Job"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
