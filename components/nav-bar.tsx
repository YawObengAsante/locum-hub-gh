"use server";
import { signOutAction } from "@/actions/auth/sign-out-action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Job Board</h1>
        <div className="flex items-center justify-center gap-4 mr-2">
          <button className="bg-black text-white font-bold p-1">
            <Link href="/sign-up">Sign Up</Link>
          </button>
          <button className="bg-black text-white font-bold p-1">
            <Link href="/sign-in">Sign In</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-bold">Yaw Obeng</h1>
      <div className="flex items-center justify-center gap-3">
        <p className="text-lg mb-4">Welcome, {session.user.name}</p>
        <form action={signOutAction}>
          <button type="submit" className="bg-black text-white font-bold p-1">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
