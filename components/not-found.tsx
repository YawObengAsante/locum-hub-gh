import { Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Folder />
        </EmptyMedia>
        <EmptyTitle>Oops!</EmptyTitle>
        <EmptyDescription>
          No jobs matched what you are looking for
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link href={"/jobs"}>
          <Button>Reset filters</Button>
        </Link>
      </EmptyContent>
    </Empty>
  );
}
