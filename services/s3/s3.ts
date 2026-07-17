import { createS3Client, generateKey } from "./helpers";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

type File = {
  filename: string;
  type: string;
};

const BUCKET_NAME = process.env.AWS_BUCKET;
if (!BUCKET_NAME)
    throw new Error("AWS_BUCKET missing")

export class S3Factory {
  constructor(
    private userId: string,
    private s3Client: S3Client = createS3Client(),
  ) {}

  async generatePresignedUploadUrl(file: File) {
    const key = generateKey(file.filename, this.userId);
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      ContentType: file.type,
    });

    const url = await getSignedUrl(this.s3Client, command, { expiresIn: 300 });

    return url;
  }
}
