import { MuseoModerno } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });

const Search = () => {
  return (
   <ClerkProvider>
    <div className={museo.className}>
        <div>
            hi...
             {/*prerna start to make the ui from this div...  */}
        </div>
    </div>
   </ClerkProvider>
  )
}

export default Search
