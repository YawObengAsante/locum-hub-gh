"use client"

import { Button } from "@/components/ui/button"

interface JobCardProps {
  title: string
  location: string
  onViewJob?: () => void
}

export function JobCard({ title, location, onViewJob }: JobCardProps) {
  return (
    <div className="flex items-stretch justify-between gap-4 rounded-xl bg-card p-4 border border-border flex-col sm:flex-row">
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-1">
          <p className="text-foreground text-base font-bold leading-tight">{title}</p>
          <p className="text-muted-foreground text-sm font-normal leading-normal">{location}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="bg-primary/20 text-primary hover:bg-primary/30 w-fit"
          onClick={onViewJob}
        >
          View Job
        </Button>
      </div>
    </div>
  )
}
