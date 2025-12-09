import { Skeleton } from "./ui/skeleton";

export default function JobCardSkeleton() {
  return (
    <div className="flex flex-col gap-y-3.5 w-full gap-3 border border-border px-3 py-4 shadow-2xl rounded-2xl ">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-30 w-[350px" />
    </div>
  );
}
