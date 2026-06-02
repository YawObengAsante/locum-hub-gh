import { Skeleton } from "./ui/skeleton";

export function DashboardProfileLoadingSkeleton() {
  return (
    <div className="mx-5 my-8 space-y-8">
      <div className="border border-border rounded-2xl shadow-2xs h-30 md:h-40 w-full p-5 flex gap-3 items-center">
        <Skeleton className="h-20 w-20 md:h-30 md:w-30 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-30 md:h-10 md:w-2xl" />
          <Skeleton className="h-6 w-35 md:h-10 md:w-3xs" />
          <Skeleton className="h-6 w-40 md:h-10 md:w-3xl" />
        </div>
      </div>
    </div>
  );
}

export function DashboardJobsLoadingSkeleton() {
  return (
    <div className="mx-5 my-8 space-y-8">
      <div className="border border-border rounded-lg shadow-2xs h-50 w-full p-5 flex gap-3">
        <Skeleton className="w-1/2 h-40" />
        <Skeleton className="w-1/2 h-40" />
      </div>
    </div>
  );
}