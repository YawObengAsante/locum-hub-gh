import { prisma } from "@/lib/prisma";
import { apiAuthUser } from "@/lib/server-helpers";
import { formatZodValidationErrors } from "@/lib/utils";
import { fileUploadSchema } from "@/schema";
import { S3Factory } from "@/services/s3/s3";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const file = await req.json();

  try {
    const user = await apiAuthUser();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const s3 = new S3Factory(user.userId);

    const validatedData = fileUploadSchema.safeParse(file);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          error: formatZodValidationErrors(validatedData.error),
        },
        { status: 400 },
      );
    }

    const {url, key} = await s3.generatePresignedUploadUrl("resume", { ...validatedData.data });

    await prisma.resume.create({
      data: {
        applicantId: user.userId,
        size: validatedData.data.size,
        type: validatedData.data.type,
        name: validatedData.data.filename,
        key
      },
    });

    return NextResponse.json({ success: true, url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "An error occured. Try again later" },
      { status: 500 },
    );
  }
}
