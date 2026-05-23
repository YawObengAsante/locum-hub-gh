import { getJobApplicants } from "@/actions/job-application/get-applicants";
import { getJob } from "@/actions/job/get-job";
import { EditJobForm } from "@/components/edit-job-form";
import { prisma } from "@/lib/prisma";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await getJob(id);
  const applicantsRes = await getJobApplicants(id);

  return (
    <div className="container w-full m-10  flex flex-col justify-center items-center">
      {res.success && (
        <div>
          <div>{res.data.hospital}</div>
          <div>{res.data.title}</div>
        </div>
      )}

      {!res.success && (
        <div className="text-red-500 bg-red-200 p-3">{res.error}</div>
      )}

      <div>Applicants:</div>
      {applicantsRes.success && (
        <ul>
          {applicantsRes.data.map((applicant) => (
            <li key={applicant.id}>
              {applicant.name}, {applicant.email}
            </li>
          ))}
        </ul>
      )}
      {res.success && <EditJobForm job={res.data} />}
    </div>
  );
}
