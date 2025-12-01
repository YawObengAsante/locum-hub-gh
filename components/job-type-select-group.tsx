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
    defaultValue?: string | string[] 
}

export function JobTypeSelectGroup({ name, state, defaultValue } : SelectType) {
  return (
    <Select name={name}>
      <SelectTrigger className="w-full">
        <SelectValue
          defaultValue={state?.entries?.jobType ?? defaultValue}
          placeholder="Select a job type"
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
