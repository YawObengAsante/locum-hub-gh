import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center mx-25 my-3">
      <Input type="search" placeholder="Search" className="bg-white text-black rounded-r-none focus:ring-0 focus:outline-none focus:border-transparent"/>
      <Button className="rounded-l-none w-20">
        <SearchIcon />
      </Button>
    </div>
  );
}
