import SignInPageClient from "./sign-in-page-client";
import { redirectIfIsAuthorized } from "@/lib/server-helpers";

export default async function SignInPage() {
  await redirectIfIsAuthorized();

  return <SignInPageClient />;
}
