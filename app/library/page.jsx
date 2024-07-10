'use client'
import HomeTopBar from "@/components/HomeTopBar"
import SidePanel from "@/components/SidePanel"
import { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";

const Page = () => {
  const [sideBarState,setSideBarState] = useState("hidden");
  const handleSideBarState = () => {
    if(sideBarState==="hidden"){
        setSideBarState("flex");
    }else{
        setSideBarState("hidden");
    }
  }
  return (
    <main className="h-screen w-screen flex md:p-4 p-1">
        <SidePanel state={sideBarState}/>
        <div className="w-full">
           <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
           <div className="flex items-center mt-20">
            <span className="flex flex-col items-start gap-3"><FaHeartBroken className="text-5xl"/>  coming soon.. <br />
            find your saved podcasts and manage published podcasts here</span>
           </div>
        </div>
    </main>
  )
}

export default Page
