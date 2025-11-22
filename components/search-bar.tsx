import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center md:mx-25 md:my-3">
      <Input type="search" placeholder="Search" className="bg-white text-black rounded-r-none"/>
      <Button className="rounded-l-none w-20">
        <SearchIcon />
      </Button>
    </div>
  );
}
