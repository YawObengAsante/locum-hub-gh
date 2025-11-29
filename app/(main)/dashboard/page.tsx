import ProfileHeader from "@/components/profile-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const session = await auth.api.getSession({
    headers: await headers()
  })
  
  if(!session || !session.user) redirect("/")
    
   const userData = await prisma.user.findUnique({
      where: {id: session.user.id}
    })

    if (!userData) throw new Error("User data not found")

  
  
  return (
    <div>
      <ProfileHeader userData={userData} />
      <Card className="m-3 sm:m-5 p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="uploaded">
          <TabsList className="bg-gray-200 w-full flex items-center justify-center">
            <TabsTrigger value="uploaded">Jobs Uploaded</TabsTrigger>
            <TabsTrigger value="applied">Jobs Applied</TabsTrigger>
          </TabsList>
          <TabsContent value="uploaded">
            <div className="w-full bg-blue-300">
              <div>uploaded jobs here</div>
              <div>
                <h1>Job Title</h1>
                <p>Hospital</p>
                <p>Location</p>
                <p>Job status</p>
                <p>Salary</p>
                <Button>Edit</Button>
              </div>
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
