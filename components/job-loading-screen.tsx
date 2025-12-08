import JobCardSkeleton from "./job-card-skeleton";

export default function JobsLoadingScreen() {
    return (
        <div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full" >
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
        </div>
    )
}