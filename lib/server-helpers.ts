import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function serverAuthUser() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session || !session.user) throw new Error("Unauthorized")

    return {userId: session.user.id}
}

