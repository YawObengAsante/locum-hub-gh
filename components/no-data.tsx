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

export function NoData() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Folder />
        </EmptyMedia>
        <EmptyTitle>No Jobs Here Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t posted or applied to any jobs yet.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Link href={"/jobs"}>
            <Button>Browse Jobs</Button>
          </Link>
          <Link href={"/jobs/post"}>
            <Button variant="outline">Post A Job</Button>
          </Link>
        </div>
      </EmptyContent>
    </Empty>
  );
}
