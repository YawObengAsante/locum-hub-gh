"use client";
import { postJobAction } from "@/actions/job/post-job-action";
import { PostJobForm } from "@/components/post-job-form";
import { JobFormReturnType } from "@/types";
import { useActionState } from "react";

const initState: JobFormReturnType = {
  success: false,
  message: "",
};

export default function PostJobPageClient() {
  const [state, action, isLoading] = useActionState(postJobAction, initState);
  
  return (
    <div className="container w-full my-10 flex flex-col justify-center items-center">
      <PostJobForm state={state} action={action} isLoading={isLoading} />
    </div>
  );
}
