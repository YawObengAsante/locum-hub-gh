import { createAuthClient } from "better-auth/react"
 const {useSession} = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
})

export function useUserSession() {
    const {data: session, refetch} = useSession()
    return{session, refetch}
}