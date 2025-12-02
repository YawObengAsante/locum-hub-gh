import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function useAuthUser() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session || !session.user) redirect("/sign-in")

    return {user: session.user}
}

