import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function JobCard() {
  return (
    <Card className="bg-white/70">
      <CardHeader>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                Kasa Family Hospital
              </span>
              <time className="text-xs text-gray-400">2d ago</time>
            </div>
          </div>
          
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-lg sm:text-2xl text-gray-700 mb-3">
          Physician Assistant
        </h1>

        <div className="flex flex-wrap gap-2 mb-3">
          <Pill>Full-time</Pill>
          <Pill>
            <MapPin className="w-4 h-4" />
            <span className="ml-1">Ashiaman</span>
          </Pill>
        </div>

        <div
          className="bg-white p-3 mb-3 rounded-2xl text-sm text-gray-700"
          style={{
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
          }}
          aria-label="Job description"
        >
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut
          fugit aspernatur similique esse, eveniet rerum laboriosam non odit in"
        </div>

        <Separator className="mb-3" />

        <div className="flex items-center justify-between gap-3 mt-3">
          <div>
            <span className="font-semibold text-base">$120/hr</span>
            <div className="text-sm text-gray-400">Accra</div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className=" text-white px-4 py-2 text-sm hover:cursor-pointer"
              aria-label="Apply to Physician Assistant role"
            >
              Apply now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gray-100 py-1.5 px-3 rounded-xl flex items-center gap-1 text-sm">
      {children}
    </span>
  );
}
