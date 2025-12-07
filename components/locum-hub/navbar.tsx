"use server";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import MobileNavBar, { NavLinks } from "../mobile-nav-bar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CircleUserRound } from "lucide-react";

export async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="px-4 sm:px-10 lg:px-20 mx-auto">
        <header className="flex items-center justify-between whitespace-nowrap h-16">
          <Link href="/" className="flex items-center gap-4 text-foreground">
            <Logo className="size-6 text-primary" />
            <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
              Locum Hub GH
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <NavLinks />
            {session ? (
              <Link
                href={"/dashboard"}
                className="hover:text-accent flex justify-center items-center"
              >
                <CircleUserRound className="text-inherit" />
                <span className="text-sm font-medium">Profile</span>
              </Link>
            ) : (
              <div className="flex gap-2">
                <Button variant="secondary">Login</Button>
                <Button>Create an Account</Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileNavBar />
          </div>
        </header>
      </div>
    </div>
  );
}
