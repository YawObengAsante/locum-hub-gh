import { EditJobForm } from "@/components/edit-job-form";
import { prisma } from "@/lib/prisma";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

    const {id} = await params
     const job = await prisma.job.findUnique({
        where: { id },
      });
      if (!job) return;

    return <div  className="container w-full my-10 flex flex-col justify-center items-center">
        <EditJobForm job={job}/>
    </div>
}