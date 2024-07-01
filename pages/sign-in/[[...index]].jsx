import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { MuseoModerno } from "next/font/google";
import "@/app/globals.css";

const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });

export default function Page() {
  return(
    <ClerkProvider>
      <div className={museo.className}>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <span className="text-2xl xl:text-5xl mb-4">Welcome to voxcast.ai</span>
          <SignIn />
        </div>
      </div>
    </ClerkProvider>
  )
}