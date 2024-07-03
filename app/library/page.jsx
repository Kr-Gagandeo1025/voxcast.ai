import HomeTopBar from "@/components/HomeTopBar"
import SidePanel from "@/components/SidePanel"

const page = () => {
  return (
    <main className="h-screen w-screen flex bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
        <SidePanel/>
        <div className="w-full xl:pl-[150px] lg:pl-[59px] pl-[62px]">
           <HomeTopBar/>
           <div>
           </div>
        </div>
    </main>
  )
}

export default page
