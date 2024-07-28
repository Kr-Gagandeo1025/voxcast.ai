'use client'
import { FaBell, FaChevronDown } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { MdElectricBolt } from "react-icons/md";
import { IoPeopleCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useData } from "@/providers/DataContext";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
    const {user} = useUser();
    const username = user?.username;
    const fullname = user?.fullName;
    const emailId = user?.emailAddresses[0].emailAddress;
    const [showProfile,setShowProfile] = useState("hidden");
    const [chevPos,setChevPos] = useState("rotate-0");
    const {voxcoins} = useData();

    const handleProfileDisplay = () =>{
      if(showProfile === "hidden"){
        setShowProfile('flex');
        setChevPos("rotate-180");
      }else{
        setShowProfile('hidden');
        setChevPos("rotate-0");
      }
    }

    const handleBellClick = () => {
      toast.error("Notifications coming soon")
    }
  return (
    <div className="min-w-fit px-3 flex flex-col items-center justify-center gap-4 bg-white rounded-xl py-1">
      <Toaster/>
      <div className="flex items-center gap-2">
        <FaBell className="md:text-xl text-sm" onClick={handleBellClick}/>
        <span className="md:text-lg text-sm">@{username}</span>
        <Image src={user?.imageUrl} height={30} width={30} alt='profile pic' className="rounded-full"/>
        <FaChevronDown className={`md:text-xl text-sm cursor-pointer ${chevPos} transition-all ease-in-out duration-500`} onClick={handleProfileDisplay}/>
      </div>
      <div className={`flex-col ${showProfile} transition-all ease-in-out`}>
        <span className="text-sm">{fullname}</span>
        <span className="text-sm">{emailId}</span>
        <span className="flex items-center gap-2 text-lg"><MdElectricBolt/>{voxcoins} <span className="text-sm">voxcoins</span></span>
        <span className="flex items-center gap-2 text-lg"><IoPeopleCircle/> 0 <span className="text-sm">followers</span></span>
        <Link href="/user-profile" className="text-blue-500 underline text-sm">manage profile↗</Link>
      </div>
    </div>
  )
}

export default MyProfile
