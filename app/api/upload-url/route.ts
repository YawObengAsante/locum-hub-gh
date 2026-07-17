import { prisma } from "@/lib/prisma";
import { serverAuthUser } from "@/lib/server-helpers";
import { formatZodValidationErrors } from "@/lib/utils";
import { resumeUploadSchema } from "@/schema";
import { S3Factory } from "@/services/s3/s3";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const file = await req.json();

  try {
    const { userId } = await serverAuthUser();

    const s3 = new S3Factory(userId);

    const validatedData = resumeUploadSchema.safeParse(file);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          error: formatZodValidationErrors(validatedData.error),
        },
        { status: 400 },
      );
    }

    const url = await s3.generatePresignedUploadUrl({ ...validatedData.data });

    await prisma.resume.create({
      data: {
        applicantId: userId,
        size: validatedData.data.size,
        type: validatedData.data.type,
        name: validatedData.data.filename,
      },
    });

    return NextResponse.json({ success: true, url }, { status: 200 });
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: "An error occured. Try again later" },
      { status: 500 },
    );
  }
}
