import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

export default function MobileNavBar() {
  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
      </Sheet>
    </nav>
  );
}
