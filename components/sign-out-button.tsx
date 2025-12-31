import { signOutAction } from "@/actions/auth/sign-out-action";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button variant={"destructive"} size={"sm"} className="w-full sm:w-auto">
        Sign out
        <LogOut className="ml-2 md:ml-0 h-4 w-4" />
      </Button>
    </form>
  );
}
