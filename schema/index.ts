import { JobStatus } from "@/generated/prisma";
import z from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  hospital: z.string().min(1, "Hospital name is required"),
  location: z.string().min(1, "Location is required"),
  jobType: z.string().min(1, "Job type is required"),
  description: z.string().min(1, "Description is required"),
  salary: z.string().min(1, "Salary is required"),
  status: z.enum(JobStatus).optional(),
});

export const signInSchema = z.object({
  email: z.email().min(1, "Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const resumeUploadSchema = z.object({
  type: z
    .string()
    .min(1)
    .max(5 * 1024 * 1024, "File exceeds 5MB limit"),
    // .mime("application/pdf"),
  filename: z.string().min(3, "File name must be at least 3 characters long"),
  size: z.number().max(5 * 1024 * 1024, "File exceeds 5MB limit")
});

export const coverLetterUploadSchema = z.object({})