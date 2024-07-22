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
    <main className="h-screen flex max-w-screen md:p-4 p-1">
        <SidePanel state={sideBarState} page={"buy"}/>
        <div className="flex flex-col w-full">
            <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
            <div className="flex flex-col overflow-y-scroll h-screen no-scrollbar w-full">
                
            </div>
        </div>
    </main>
  )
}

export default Page
