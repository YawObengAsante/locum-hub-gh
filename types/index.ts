import { $Enums } from "@/generated/prisma";

type UserType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null;
    headline?: string | null;
}

type EditUserType = Pick<UserType, "name" | "headline" | "image">

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
}

export type {UserType, EditUserType, JobType}