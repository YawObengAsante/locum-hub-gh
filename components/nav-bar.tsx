"use server";
import { signOutAction } from "@/actions/auth/sign-out-action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import MobileNavBar, { NavLinks } from "./mobile-nav-bar";
import { CircleUserRound } from "lucide-react";

export default async function NavBar() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  return (
    <nav className="container p-5 border-b border-b-border shadow-2xl shadow-shadow">
      <div className="flex items-center justify-between">
        <h1>Job Board</h1>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
          <Link href={"/dashboard"} className="hover:text-accent hidden md:flex ">
            <CircleUserRound className="text-inherit" />
          </Link>
      </div>

      <div className="md:hidden">
        <MobileNavBar />
      </div>
    </nav>
  );
}
