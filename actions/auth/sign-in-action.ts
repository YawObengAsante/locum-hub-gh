"use server";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import { z } from "zod";

const signInSchema = z.object({
  email: z.email().min(1, "Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInForm = z.infer<typeof signInSchema>;

export type SignInFormReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<SignInForm>;
  error?: Partial<{
    email: string[];
    password: string[];
  }>;
};

export async function signInAction(
  prevState: SignInFormReturnType,
  formData: FormData
): Promise<SignInFormReturnType> {
  try {
    const data: Partial<SignInForm> = {
      email: formData.get("email")?.toString() ?? undefined,
      password: formData.get("password")?.toString() ?? undefined,
    };

    // validate data
    const validatedData = signInSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Please fill the fields correctly",
        error: validatedData.error.flatten().fieldErrors,
        entries: data,
      };
    }

    await auth.api.signInEmail({
      body: { ...validatedData.data },
    });

    redirect("/");
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error; // rethrow so Next.js can handle it
    }
    console.log("Sign up error:", error);
    return {
      success: false,
      message: "Sign in failed. Try again later",
    };
  }
}
