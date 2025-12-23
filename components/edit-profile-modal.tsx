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
import { UserAvatarWithActions } from "./user-avatar-with-actions";
import { EditProfileForm } from "./edit-profile-form";
import { type EditUserType } from "@/types";

export function EditProfileModal({ name, headline, image }: EditUserType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} className="w-full sm:w-auto">
          Edit profile <PenIcon className="ml-2 md:ml-0 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106">
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
