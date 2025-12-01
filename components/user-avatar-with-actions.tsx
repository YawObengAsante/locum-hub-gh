import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type Types = {
    name: string,
    image: string | null
}

export function UserAvatarWithActions({image, name}: Types) {
    return (
        <div className="flex justify-between items-center">
              <Avatar className="h-16 w-16 md:h-20 md:w-20">
                <AvatarImage src={image ?? undefined} />
                <AvatarFallback className="bg-amber-300 font-bold text-sm md:text-2xl">
                  {name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="space-x-2">
                <Button>Change picture</Button>
                <Button variant="destructive">Delete picture</Button>
              </div>
            </div>
    )
}