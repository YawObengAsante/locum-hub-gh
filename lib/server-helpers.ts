import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function serverAuthUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if(!session || !session.user) throw new Error("Unauthorized")
  if (!session || !session.user) redirect("/sign-in");

  return { userId: session.user.id };
}

export async function isAuthorizedUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session || !session.user) throw new Error("Unauthorized")

  return { userId: session.user.id };
}
