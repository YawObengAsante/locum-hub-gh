import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ring } from "ldrs/react";

export default async function JobApplicationPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  return (
    <div className="container w-full m-10  flex flex-col justify-center items-center">
      <Card className="w-full md:w-[800px]">
        <CardHeader>
          <CardTitle>Apply to Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5">
            <div>
              <h1>Upload CV</h1>
              <Input
                type="file"
                name="resume"
              />
            </div>
            <div>
              <h1>Upload Cover Letter</h1>
              <Input type="file" name="hospital"  />
            </div>

            <div>
              <h1>Description</h1>
              <Textarea
                name="description"
                placeholder="Type your job description here."
              />
            </div>

            <Button type="submit" className="w-full text-white">
              
              {/* <Ring
                size="20"
                stroke="2"
                bgOpacity="0"
                speed="2"
                color="white"
              /> */}
              Apply to Job
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
