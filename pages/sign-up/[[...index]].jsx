import { ClerkProvider, SignUp } from "@clerk/nextjs";
import "@/app/globals.css";
import { MuseoModerno } from "next/font/google";

const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });

export default function Page() {
  return(
    <ClerkProvider>
      <div className={museo.className}>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <span className="text-2xl xl:text-5xl mb-4">Welcome to voxcast.ai</span>
          <SignUp />
        </div>
      </div>
    </ClerkProvider>
  )
}