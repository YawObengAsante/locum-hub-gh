import { NoData } from "@/components/no-data";
import ProfileHeader from "@/components/profile-header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { UserAppliedJobs } from "@/components/user-applied-jobs";
import { UserUploadedJobs } from "@/components/user-uploaded-jobs";
import { useAuthUser } from "@/hooks/auth-context";

export default async function DashboardPage() {
  const { userId } = await useAuthUser();
  return (
    <div>
      <ProfileHeader userId={userId} />
      <Card className="m-3 sm:m-5 p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="uploaded">
          <TabsList className="bg-gray-200 w-full flex items-center justify-center">
            <TabsTrigger value="uploaded">Jobs Uploaded</TabsTrigger>
            <TabsTrigger value="applied">Jobs Applied</TabsTrigger>
          </TabsList>
          
          <TabsContent value="uploaded">
            <UserUploadedJobs userId={userId} />
          </TabsContent>

          <TabsContent value="applied">
            <UserAppliedJobs userId={userId} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
