import "@/app/globals.css";
import { MuseoModerno } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import SidePanel from "@/components/SidePanel";
const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });

const Search = () => {
  return (
   <ClerkProvider>
    <div className={museo.className}>
      <main className="h-screen w-screen flex">
        <SidePanel/>
        <div className="w-full xl:pl-[150px] pl-[72px]">
            hi...
             {/*prerna start to make the ui from this div...  */}
        </div>
      </main>
    </div>
   </ClerkProvider>
  )
}

export default Search
