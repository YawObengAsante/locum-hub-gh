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
import { UserAvatarWithActions } from "./user-avatar-with-actions";
import { EditProfileForm } from "./edit-profile-form";

type EditUser = Pick<UserType, "name" | "headline" | "image">;

export function EditProfileModal({ name, headline, image }: EditUser) {
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click "Save changes" when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <UserAvatarWithActions name={name} image={image} />
          <EditProfileForm name={name} headline={headline} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
