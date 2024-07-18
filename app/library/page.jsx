'use client'
import HomeTopBar from "@/components/HomeTopBar"
import SidePanel from "@/components/SidePanel"
import Image from "next/image";
import { useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

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
        <div className="w-full flex flex-col">
           <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
           <div className="flex flex-col overflow-y-scroll h-screen no-scrollbar w-full">
            <div className="flex items-center lg:gap-20 gap-12 lg:flex-row flex-col  bg-lime-200 rounded-xl p-3">
              <div className="flex flex-col gap-4 items-center bg-white border border-black rounded-xl p-4 max-w-[350px]">
                <span className="text-3xl border-b border-black flex justify-between items-baseline">Saved Podcasts</span>
                <div className="flex gap-2 items-center justify-between">
                  <IoBookmark className="text-9xl text-black"/>
                  <span className="font-thin text-2xl">listen to your saved podcasts here.</span>
                </div>
              </div>
              <span className="lg:text-3xl text-xl w-[70%]">It&apos;s not &apos;self-serving&apos; to continue to post episodes when so much tragedy is happening around the world.
              For many, your content is the escape they need right now.</span>
            </div>
            <div className="flex flex-col w-full mt-12">
              <span className="text-3xl border-b border-black flex justify-between items-baseline">Your Podcasts</span>
              <div className="p-4">
                <div className="flex p-2 items-center justify-between w-fit border border-dashed border-black rounded-lg gap-5">
                  <Image src={""} alt="img" className="border border-black rounded-xl" height={60} width={60}/>
                  <span className="text-xl">Little Kitty Big City</span>
                  <MdDelete className="text-red-800 text-3xl"/>
                </div>
              </div>
            </div>
           </div>
        </div>
    </main>
  )
}

export default Page
