"use client"

import { ChevronDown } from "lucide-react"

interface FilterButtonProps {
  label: string
  onClick?: () => void
}

export function FilterButton({ label, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card border border-border pl-4 pr-3 hover:bg-accent transition-colors"
    >
      <p className="text-foreground text-sm font-medium leading-normal">{label}</p>
      <ChevronDown className="size-4 text-foreground" />
    </button>
  )
}
