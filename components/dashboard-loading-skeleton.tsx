import { Skeleton } from "./ui/skeleton";

export function DashboardProfileLoadingSkeleton() {
  return (
    <div className="border border-border rounded-2xl m-3 sm:m-5 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6">
      {/* <div > */}
        <Skeleton className="h-20 w-20 md:h-30 md:w-30 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-1/2 md:w-2xl" />
          <Skeleton className="h-10 w-2/3 md:w-3xs" />
          <Skeleton className="h-10 w-3/4 md:w-3xl" />
        </div>
      {/* </div> */}
    </div>
  );
}

export function DashboardJobsLoadingSkeleton() {
  return (
    <div className="mx-5 my-8 space-y-8">
      <div className="border border-border rounded-lg shadow-2xs h-100 md:h-50 w-full p-5 flex flex-col md:flex-row gap-3">
        <Skeleton className="w-full md:w-1/2 h-1/2 md:h-40" />
        <Skeleton className="w-full md:w-1/2 h-1/2 md:h-40" />
      </div>
    </div>
  );
}