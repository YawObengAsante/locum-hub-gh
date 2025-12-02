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

export type {UserType, EditUserType}