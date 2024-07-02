import React from 'react';
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import SingOutBtn from "@/components/SingOutBtn";

const SidePanel = () => {
  return (
    <div className="p-4 flex flex-col justify-between border-r h-full bg-white fixed z-10 xl:w-[150px] md:w-[60px] sm:w-[60px]">
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <Link href="/home" className="flex items-center justify-center">
              <FaHome/>&nbsp;<span className="xl:flex hidden">Home</span>
            </Link>
          </span>
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <Link href="/search" className="flex items-center justify-center">
              <FaSearch/>&nbsp;<span className="xl:flex hidden">Search</span>
            </Link>
          </span>
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <Link href="/library" className="flex items-center justify-center">
              <MdOutlineLibraryMusic/>&nbsp;<span className="xl:flex hidden">Library</span>
            </Link>
          </span> 
        </div>
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 h-16 flex justify-start items-center">
            <Link href="/create" className="flex items-center justify-center">
              <IoAddCircleSharp/>&nbsp;<span className="xl:flex hidden">Create</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center">
            <Link href="/user-profile" className="flex items-center justify-center">
              <CgProfile/>&nbsp;<span className="xl:flex hidden">Profile</span>
            </Link>
          </span>
          <span className="flex text-sm">
            <SingOutBtn/>
          </span>
        </div>
      </div>
  );
};

export default SidePanel;
