import { getJob } from "@/actions/job/get-job";
import { EditJobForm } from "@/components/edit-job-form";
import { NotFound } from "@/components/not-found";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await getJob(id);

  if (!res.success) return <NotFound />;

  return (
    <div className="flex w-full h-full justify-center py-5">
      <EditJobForm job={res.data} />
    </div>
  );
}
