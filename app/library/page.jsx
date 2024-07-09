'use client'
import HomeTopBar from "@/components/HomeTopBar"
import SidePanel from "@/components/SidePanel"
import { useState } from "react";

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
           <div>
           </div>
        </div>
    </main>
  )
}

export default Page
