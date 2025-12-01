"use client";
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
import { useActionState, useEffect } from "react";
import {
  editUserProfileAction,
  EditUserProfileReturnType,
} from "@/actions/edit-user-profile-action";
import { Ring } from "ldrs/react";
import { toast } from "sonner";

type EditUser = Pick<UserType, "name" | "headline" | "image">;

const initState: EditUserProfileReturnType = {
  success: false,
  message: "",
};

export function EditProfileForm({ name, headline, image }: EditUser) {
  const [state, action, isLoading] = useActionState(
    editUserProfileAction,
    initState
  );

  useEffect(() => {
    state.success
      ? toast.success(`${state.message}`)
      : toast.error(`${state.message}`);
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          size={"sm"}
          className="text-white cursor-pointer w-full sm:w-auto"
        >
          Edit profile <PenIcon className="ml-2 md:ml-0 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <form action={action}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click "Save changes" when
              you&apos;re done.
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
              {state.error?.name && (
                <div className="text-red-500">{state.error.name[0]}</div>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="headline">Bio</Label>
              <Textarea
                id="headline"
                name="headline"
                placeholder="Add a bio to your profile"
                defaultValue={headline ?? undefined}
              />
              {state.error?.headline && (
                <div className="text-red-500">{state.error.headline[0]}</div>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {isLoading ? (
                <Ring
                  size="20"
                  stroke="2"
                  bgOpacity="0"
                  speed="2"
                  color="white"
                />
              ) : (
                "Save changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
