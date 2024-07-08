import React from 'react';
import { FaHamburger, FaHome, FaSearch } from "react-icons/fa";
import { MdMenu, MdOutlineLibraryMusic } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { CgLogOff, CgProfile } from "react-icons/cg";
import Link from "next/link";
import SingOutBtn from "@/components/SingOutBtn";

const SidePanel = () => {
  return (
    <div className="flex h-full justify-between">
      <div className='lg:flex hidden flex-col justify-between h-full bg-lime-200 w-[320px] rounded-2xl p-4'>
        <div className="text-xl flex flex-col gap-5">
          <span className='text-3xl font-bold md:flex hidden'>voxcast.ai</span>
          <span className="p-2 h-16 flex justify-start items-center font-normal rounded-xl">
            <Link href="/home" className="flex items-center justify-center">
              <FaHome/>&nbsp;<span className="md:flex hidden">home</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center font-normal">
            <Link href="/search" className="flex items-center justify-center">
              <FaSearch/>&nbsp;<span className="md:flex hidden">explore</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center font-normal">
            <Link href="/library" className="flex items-center justify-center">
              <MdOutlineLibraryMusic/>&nbsp;<span className="md:flex hidden">library</span>
            </Link>
          </span> 
        </div>
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 h-16 flex justify-start items-center">
            <Link href="/create" className="flex items-center justify-center">
              <IoAddCircleSharp/>&nbsp;<span className="md:flex hidden">create</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center">
            <SingOutBtn/>
          </span>
        </div>
      </div>
      </div>
  );
};

export default SidePanel;
