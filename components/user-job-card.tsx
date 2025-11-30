import {
  MapPin,
  BriefcaseBusinessIcon,
  HospitalIcon,
  LockIcon,
  DollarSignIcon,
  ArrowRightIcon,
  NotebookTextIcon,
} from "lucide-react";

export function UserJobCard() {
  return (
    <div className="bg-background/45 flex border border-border rounded-xl shadow-xl px-4 py-3">
      <div className="flex flex-col gap-2 md:gap-4 w-1/2">
        <h1 className="uploaded-job-items">
          <BriefcaseBusinessIcon className="h-5 w-5" />
          Job Title
        </h1>
        <p className="uploaded-job-items">
          <HospitalIcon className="h-5 w-5" />
          Hospital
        </p>
        <p className="uploaded-job-items">
          <MapPin className="h-5 w-5" />
          Location
        </p>
        <p className="uploaded-job-items">
          <LockIcon className="h-5 w-5" />
          Job status
        </p>
        <p className="uploaded-job-items">
          <DollarSignIcon className="h-5 w-5" />
          Salary
        </p>
        <p className="uploaded-job-items">
          <NotebookTextIcon className="h-5 w-5" />
          Description
        </p>
      </div>
      <div className="flex items-end w-1/2 justify-end text-blue-500">
        <span className="flex justify-center items-center bg-pink-400">
          <p>Edit Details</p>
          <ArrowRightIcon className="w-5 h-5" />
        </span>
        <span>
          Edit Details
          <ArrowRightIcon className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}
