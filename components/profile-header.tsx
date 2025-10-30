import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { PenIcon, CogIcon } from "lucide-react";
import { Card } from "./ui/card";
import BioText from "./bio-text";

export default function ProfileHeader() {
  
  const bioText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut
          fugit aspernatur similique esse, eveniet rerum laboriosam non odit in
          numquam minima quas tempore sequi at, nostrum mollitia culpa ducimus!`;
  return (
    <Card className="m-3 sm:m-5 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h2 className="font-semibold text-lg md:text-xl">Yaw Asante</h2>
            <p className="text-sm md:text-base">SanFransico</p>
            <p className="text-sm md:text-base text-black/50">
              yawasante@email.com
            </p>
            <BioText bioText={bioText} />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center md:items-start">
        <Button
          variant={"secondary"}
          size={"sm"}
          className="text-white cursor-pointer w-full sm:w-auto"
        >
          Edit profile <PenIcon className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant={"secondary"}
          size={"sm"}
          className="text-white cursor-pointer w-full sm:w-auto"
        >
          Settings <CogIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
