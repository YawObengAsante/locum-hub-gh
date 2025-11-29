import { PenIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { type UserType } from "./profile-header";

type EditUser = Pick<UserType, "name" | "headline" | "image">;

export function EditProfileButton({ name, headline, image }: EditUser) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant={"secondary"}
            size={"sm"}
            className="text-white cursor-pointer w-full sm:w-auto"
          >
            Edit profile <PenIcon className="ml-2 md:ml-0 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <Avatar className="h-16 w-16 md:h-20 md:w-20">
                <AvatarImage src={image ?? undefined}></AvatarImage>
                <AvatarFallback className="bg-amber-300 font-bold text-sm md:text-2xl">
                  {name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="space-x-2">
                <Button>Change picture</Button>
                <Button variant="destructive">Delete picture</Button>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="headline">Bio</Label>
              <Textarea
                id="headline"
                name="headline"
                placeholder="Add a bio to your profile"
                defaultValue={headline ?? undefined}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
