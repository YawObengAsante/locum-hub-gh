import { useActionState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  editUserProfileAction,
  type EditUserProfileReturnType,
} from "@/actions/user/edit-user-profile-action";
import { toast } from "sonner";
import { Ring } from "ldrs/react";
import { DialogClose, DialogFooter } from "./ui/dialog";
import { type EditUserType } from "@/types";

const initState: EditUserProfileReturnType = {
  success: false,
  message: "",
};

export function EditProfileForm({ headline, name }: EditUserType) {
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
    <form action={action}>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue={name} className="bg-card" />
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
            className="bg-card"
          />
          {state.error?.headline && (
            <div className="text-red-500">{state.error.headline[0]}</div>
          )}
        </div>
        <div className="flex justify-end gap-3">
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
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
        </div>
      </div>
    </form>
  );
}
