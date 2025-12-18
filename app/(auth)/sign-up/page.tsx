import SignUpPageClient from "./sign-up-page-client";
import { redirectIfIsAuthorized } from "@/lib/server-helpers";

export default async function SignUpPage() {
  await redirectIfIsAuthorized();

  return <SignUpPageClient />;
}
