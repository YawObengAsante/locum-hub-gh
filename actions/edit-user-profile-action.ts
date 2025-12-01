"use server"
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { formatZodValidationErrors, parseError } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import z from "zod";

type EditForm = z.infer<typeof editUserProfileSchema>;

export type EditUserProfileReturnType = {
  success: boolean;
  message: string;
  entries?: Partial<EditForm>;
  error?: Partial<Record<keyof EditForm, string[]>>;
};

const editUserProfileSchema = z.object({
  name: z.string().min(3, "User name should have at least 3 characters"),
  headline: z.string().min(3, "Headline should contain more words"),
});

export async function editUserProfileAction(
  prevState: EditUserProfileReturnType,
  formData: FormData
): Promise<EditUserProfileReturnType> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user)
      throw new Error(
        "Unauthorized. You cannot make changes to this user profile"
      );

    const data = {
      name: formData.get("name") as string,
      headline: formData.get("headline") as string,
    };

    const validatedData = editUserProfileSchema.safeParse(data);

    if (!validatedData.success) {
      const formattedErrors = formatZodValidationErrors(validatedData);
      return {
        success: false,
        message: "There was an error. Please fill the form correctly",
        error: formattedErrors,
        entries: data,
      };
    }

    await prisma.user.update({
      data: {
        name: validatedData.data.name,
        headline: validatedData.data.headline,
      },
      where: { id: session.user.id },
    });

    revalidatePath("/dashboard");
    
    return {
      success: true,
      message: "Updated user profile successfully",
    };
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    const errorMessage = parseError(error);
    console.log(errorMessage);

    return {
      success: false,
      message: errorMessage,
    };
  }
}
