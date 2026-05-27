import { getJobWithApplicants } from "@/actions/job-application/get-applicants";
import { EditJobForm } from "@/components/edit-job-form";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const res = await getJobWithApplicants(id)

  return (
    <div className="container w-full m-10  flex flex-col justify-center items-center">
      {!res.success && (
        <div className="text-red-500 bg-red-200 p-3">{res.error}</div>
      )}

      {res.success && (
        <div>
          <div>{res.data.job?.hospital}</div>
          <div>{res.data.job?.title}</div>
        </div>
      )}


      <div>Applicants:</div>
      {res.success && (
        <ul>
          {res.data.applicants.map((applicant) => (
            <li key={applicant.id}>
              {applicant.name}, {applicant.email}
            </li>
          ))}
        </ul>
      )}
      {res.success && <EditJobForm job={res.data.job} />}
    </div>
  );
}
