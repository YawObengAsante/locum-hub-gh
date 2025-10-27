"use server";
import { signOutAction } from "@/actions/auth/sign-out-action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import MobileNavBar from "./mobile-nav-bar";
import { NAV_ITEMS } from "./constants";

export default async function NavBar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <nav className="container flex justify-between items-center p-5 border border-">
      <h1>Job Board</h1>
      <div className="hidden md:flex">
        <ul>
          {NAV_ITEMS.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:hidden">
        <MobileNavBar />
      </div>
    </nav>
  );
}
