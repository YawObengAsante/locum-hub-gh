import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function PostJobPage() {
  return (
    <div className="container w-full my-10 flex flex-col justify-center items-center">
      <Card className="w-[800px]">
        <CardHeader>
          <CardTitle>Job details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-5">
            <div>
              <h1>Job Title</h1>
              <Input
                type="text"
                name="job title"
                placeholder="Physician Assistant"
              />
            </div>
            <div>
              <h1>Hospital</h1>
              <Input type="text" name="job title" placeholder="Hospital name" />
            </div>
            <div>
              <h1>Location</h1>
              <Input type="text" name="job title" placeholder="Tema" />
            </div>
            <div>
              <h1>Job Type</h1>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Full time</SelectLabel>
                    <SelectItem value="full time">Full time</SelectItem>
                    <SelectItem value="part time">Part time</SelectItem>
                    <SelectItem value="locum">Locum</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="any">Any</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h1>Description</h1>
              <Textarea placeholder="Type your job description here." />
            </div>
            <div>
              <h1>Salary</h1>
              <Input
                type="text"
                name="job title"
                placeholder="e.g. Ghc3,000 - Ghc4,000"
              />
            </div>
            <Button className="w-full text-white">Post Job</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
