import NavBar from "@/components/nav-bar";
import { auth } from "../lib/auth";
import { headers } from "next/headers";

export default async function Home() {
 
  return (
    <>
      <NavBar />
      <div>home page</div>
    </>
  );
}
