import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpForm = z.infer<typeof signUpSchema>;

type SignUpFormReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<SignUpForm>;
  error?: Partial<{
    name: string[];
    email: string[];
    message: string[];
  }>;
};

export async function signUpAction(
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
      return {
        success: false,
        message: "Please fill the fields correctly",
        error: validatedData.error.flatten().fieldErrors,
        entries: data,
      };
    }

    await auth.api.signUpEmail({
      body: { ...validatedData.data },
    });

    redirect("/");
  } catch (error) {
    console.log("Sign up error:", error);
    return {
      success: false,
      message: "Sign up failed. Try again later",
    };
  }
}
