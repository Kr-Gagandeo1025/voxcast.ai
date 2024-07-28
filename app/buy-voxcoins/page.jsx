'use client'
import HomeTopBar from "@/components/HomeTopBar"
import SidePanel from "@/components/SidePanel"
import { useState } from "react";
import { MdError } from "react-icons/md";

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
                <div className="flex flex-col items-center justify-center mt-20">
                    <span className="text-xl font-bold uppercase flex items-center gap-3"><MdError className="text-red-700 text-4xl"/>Payment Gateways are under developement.</span>
                    <span className="text-sm text-gray-500">soon you will be able to top-up your voxcoins.</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Page
