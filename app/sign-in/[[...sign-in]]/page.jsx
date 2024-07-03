import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
          <span className="text-3xl xl:text-5xl mb-4">Welcome to <span className="font-bold">voxcast.ai</span></span>
          <SignIn />
        </div>
  )
}