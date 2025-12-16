"use client";
import { postJobAction } from "@/actions/job/post-job-action";
import { PostJobForm } from "@/components/post-job-form";
import { useUserSession } from "@/lib/auth-client";
import { JobFormReturnType } from "@/types";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

const initState: JobFormReturnType = {
  success: false,
  message: "",
};

export default function PostJobPage() {
  const [state, action, isLoading] = useActionState(postJobAction, initState);
  const router = useRouter()
  const { session } = useUserSession();
  if (!session || !session.user) router.push("/sign-in")
  return (
    <div className="container w-full my-10 flex flex-col justify-center items-center">
      <PostJobForm state={state} action={action} isLoading={isLoading} />
    </div>
  );
}
