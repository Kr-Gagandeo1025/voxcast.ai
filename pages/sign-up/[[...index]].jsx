import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <ClerkProvider>
        <SignUp />
    </ClerkProvider>
  )
}