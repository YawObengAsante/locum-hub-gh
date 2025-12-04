"use client";
import { parseError } from "@/lib/utils";
import { Button } from "./ui/button";
import { deleteJobAction } from "@/actions/delete-job-action";
import { JobType } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export function DeleteJobButton({
  id,
  posterId,
}: Pick<JobType, "id" | "posterId">) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await deleteJobAction(id, posterId);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
      window.location.reload();
    } catch (error) {
      toast.error(parseError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action={onSubmit}>
      <Button type="submit" size={"sm"} variant={"destructive"}>
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </form>
  );
}
