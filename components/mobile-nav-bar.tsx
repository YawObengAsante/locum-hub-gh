"use client";
import Link from "next/link";
import { navLinks } from "../constants";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { MenuIcon, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { type SessionType } from "@/types";
import { ReactNode } from "react";

type NavBarProps = {
  session: SessionType | null;
  children: ReactNode;
};

export default function MobileNavBar({ session, children }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Mobile Navigation</SheetTitle>
          </SheetHeader>
          <nav className="p-5">
            <ul className="flex flex-col gap-5 font-bold">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn("flex gap-3 items-center", {
                        "text-secondary": isActive,
                      })}
                    >
                      <i>{item.icon}</i>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <SheetFooter>
            {session ? (
              <div>{children}</div>
            ) : (
              <Link href={"/sign-in"}>
                <Button className="text-white">Sign In</Button>
              </Link>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-9">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors",
              {
                "text-accent border-b-3 transition-all duration-300 ease-in-out":
                  isActive,
              }
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
