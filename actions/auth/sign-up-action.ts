"use server";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import { formatZodValidationErrors, parseError } from "@/lib/utils";
import { SignUpForm, SignUpFormReturnType } from "@/types";
import { signUpSchema } from "../../schema";

export async function signUpAction(
  prevState: SignUpFormReturnType,
  formData: FormData
): Promise<SignUpFormReturnType> {
  try {
    const data: Partial<SignUpForm> = {
      name: formData.get("name")?.toString() ?? undefined,
      email: formData.get("email")?.toString() ?? undefined,
      password: formData.get("password")?.toString() ?? undefined,
    };

    // validate data
    const validatedData = signUpSchema.safeParse(data);

    if (!validatedData.success) {
      const formattedErrors = formatZodValidationErrors(validatedData);
      return {
        success: false,
        message: "Please fill the fields correctly",
        error: formattedErrors,
        entries: data,
      };
    }

    const idx = Math.floor(Math.random() * 100) + 1; // generate a num between 1-100
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    await auth.api.signUpEmail({
      body: { ...validatedData.data, image: randomAvatar },
    });
    console.log("signed up user");

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
