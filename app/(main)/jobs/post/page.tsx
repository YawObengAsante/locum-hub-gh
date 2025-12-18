import { serverAuthUser } from "@/lib/server-helpers";
import PostJobPageClient from "./post-job-page-client";

export default async function PostJobPage() {
  await serverAuthUser()
  return <PostJobPageClient />
}