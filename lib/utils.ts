import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import z from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatZodValidationErrors<T>(validatedData: z.ZodSafeParseResult<T>) {
  const formattedErrors: Partial<Record<keyof T, string[]>> = {}
  validatedData.error?.issues.forEach((err) => {
    const field = err.path[0] as keyof T
    if(!formattedErrors[field]) formattedErrors[field] = []
    formattedErrors[field].push(err.message)
  })

  return formattedErrors
}

export function parseError(error: unknown) {
  if (typeof error == "string") return error

  if(error instanceof Error) return error.message

  return 'An error occurred. Try again later'
}

dayjs.extend(relativeTime)
export function timeAgo(date: Date) {
  const now = dayjs()
  const time = dayjs(date)
  
  const timeInSeconds = now.diff(time, "seconds")

  if (timeInSeconds < 60) return "just now"
  
  return time.fromNow()
}