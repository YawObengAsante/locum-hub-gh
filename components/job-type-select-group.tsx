import { JobFormReturnType } from "@/actions/post-job-action";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  Select,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectType = {
    name: string,
    state?: JobFormReturnType
}

export function JobTypeSelectGroup({ name, state } : SelectType) {
  return (
    <Select name={name}>
      <SelectTrigger className="w-full">
        <SelectValue
          defaultValue={state?.entries?.jobType}
          placeholder="Select a type"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Full time</SelectLabel>
          <SelectItem value="FULL_TIME">Full time</SelectItem>
          <SelectItem value="PART_TIME">Part time</SelectItem>
          <SelectItem value="LOCUM">Locum</SelectItem>
          <SelectItem value="CONTRACT">Contract</SelectItem>
          <SelectItem value="INTERNSHIP">Internship</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
