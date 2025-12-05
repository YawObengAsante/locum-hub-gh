import { JobFormReturnType } from "@/types";
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
    state?: JobFormReturnType
    defaultValue?: string | string[] 
}

export function JobTypeSelectGroup({ state, defaultValue } : SelectType) {
  return (
    <div>

    <Select name="jobType">
      <SelectTrigger className="w-full">
        <SelectValue
          defaultValue={defaultValue}
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
    {state?.error?.jobType && <p className="text-red-400">{state.error.jobType}</p>}
    </div>
  );
}
