"use server";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import { formatZodValidationErrors, parseError } from "@/lib/utils";
import { signInSchema } from "../schema";
import { SignInForm, SignInFormReturnType } from "@/types";

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
      const formattedErrors = formatZodValidationErrors(validatedData);
      return {
        success: false,
        message: "Please fill the fields correctly",
        error: formattedErrors,
        entries: data,
      };
    }

    await auth.api.signInEmail({
      body: { ...validatedData.data },
    });
    console.log("user signed in successfully");
    redirect("/");
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error; // rethrow so Next.js can handle it
    }
    console.log("Sign up error:", error);
    const errorMessage = parseError(error);
    return {
      success: false,
      message: errorMessage,
    };
  }
}
