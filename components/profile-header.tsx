import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { PenIcon } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white md:m-10 md:my-5 flex justify-between items-start p-5 rounded-md m-2 shadow-2xl shadow-shadow">
        <div className="flex items-center justify-start gap-2 md:gap-5">
          <Avatar className="md:size-25">
            <AvatarImage src="https://github.com/shadcn.png"   />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <h2 className="font-semibold text-xs md:text-xl">Yaw Asante</h2>
            <p>SanFransico</p>
            <p className="text-xs md:text-xl text-black/50">yawasante@email.com</p>
            <p className="border-2 border-red-500 flex flex-wrap max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut fugit aspernatur similique esse, eveniet rerum laboriosam non odit in numquam minima quas tempore sequi at, nostrum mollitia culpa ducimus!</p>
          </div>
        </div>
        <Button variant={"secondary"} size={"sm"} className="text-white cursor-pointer">Edit profile <PenIcon/></Button>
    </div>
  )
}
