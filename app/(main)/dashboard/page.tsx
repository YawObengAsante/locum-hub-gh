import ProfileHeader from "@/components/profile-header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div>
      <ProfileHeader />
      <Card className="m-3 sm:m-5 p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="uploaded">
          <TabsList className="bg-gray-200 w-full flex items-center justify-center">
            <TabsTrigger value="uploaded">Jobs Uploaded</TabsTrigger>
            <TabsTrigger value="applied">Jobs Applied</TabsTrigger>
          </TabsList>
          <TabsContent value="uploaded">
            <div className="w-full bg-blue-300">
              <div>uploaded jobs here</div>
              <Card>
                
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applied">
             <div className="w-full bg-pink-300">
              <div>applied jobs here</div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
