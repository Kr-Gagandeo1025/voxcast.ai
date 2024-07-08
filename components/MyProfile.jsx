'use client'
import { FaBell, FaChevronDown } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const MyProfile = () => {
    const {user} = useUser();
    const username = user?.username;
    const fullname = user?.fullName;
    const emailId = user?.emailAddresses[0].emailAddress;
  return (
    <div className="w-[300px] pl-2 flex items-center justify-center gap-4">
        <FaBell className="text-5xl"/>
        <span className="text-lg">@{username}</span>
        <Image src={user?.imageUrl} height={50} width={50} alt='profile pic' className="rounded-full"/>
        <FaChevronDown className="text-5xl"/>
    </div>
  )
}

export default MyProfile
