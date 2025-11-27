import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { Card } from "./ui/card";
import BioText from "./bio-text";
import { signOutAction } from "@/actions/auth/sign-out-action";
import { EditProfileButton } from "./edit-profile-button";

type User = {
  image: string | null;
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
  headline: string | null;
};

export default function ProfileHeader({ userData }: { userData: User }) {
  return (
    <Card className="m-3 sm:m-5 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
            <AvatarImage src={userData.image ?? undefined} />
            <AvatarFallback className="bg-amber-300 font-bold text-sm md:text-2xl">
              {userData.name.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h2 className="font-semibold text-lg md:text-xl">
              {userData.name}
            </h2>
            <p className="text-sm md:text-base text-black/50">
              {userData.email}
            </p>
            <BioText bioText={userData.headline} />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center md:items-start">
        <EditProfileButton />
        <form action={signOutAction}>
          <Button
            variant={"secondary"}
            size={"sm"}
            className="text-white cursor-pointer w-full sm:w-auto"
          >
            Sign out
            <LogOut className="ml-2 md:ml-0 h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}
