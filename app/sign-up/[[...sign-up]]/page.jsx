import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <span className="text-2xl xl:text-5xl mb-4">Welcome to voxcast.ai</span>
          <SignUp />
        </div>
  )
}