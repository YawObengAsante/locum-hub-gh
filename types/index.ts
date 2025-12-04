import { jobSchema, signInSchema, signUpSchema } from "@/schema";
import { $Enums } from "@/generated/prisma";
import z from "zod";

type UserType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null;
  headline?: string | null;
};

type EditUserType = Pick<UserType, "name" | "headline" | "image">;

type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  hospital: string;
  location: string | null;
  jobType: string;
  salary: string | null;
  description: string;
  status: $Enums.JobStatus;
  posterId: string;
};

type PostJobFormType = {
  state: JobFormReturnType;
  action: (payload: FormData) => void;
  isLoading: boolean;
};

type JobForm = z.infer<typeof jobSchema>;

type JobFormReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<JobForm>;
  error?: Partial<Record<keyof JobForm, string[]>>;
};

type SignInForm = z.infer<typeof signInSchema>;

type SignInFormReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<SignInForm>;
  error?: Partial<{
    email: string[];
    password: string[];
  }>;
};

type SignUpForm = z.infer<typeof signUpSchema>;

type SignUpFormReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<SignUpForm>;
  error?: Partial<{
    name: string[];
    email: string[];
    password: string[];
  }>;
};

export type {
  UserType,
  EditUserType,
  JobType,
  JobForm,
  JobFormReturnType,
  PostJobFormType,
  SignInForm,
  SignInFormReturnType,
  SignUpForm,
  SignUpFormReturnType,
};
