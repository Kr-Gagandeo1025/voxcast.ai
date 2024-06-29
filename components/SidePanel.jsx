import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const SidePanel = () => {
  return (
    <div className="p-4 flex flex-col justify-between border-r h-full bg-white fixed z-10 xl:w-[150px] w-fit">
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <Link href="/home" className="flex items-center justify-center">
              <FaHome/>&nbsp;<span className="xl:flex hidden text-black">Home</span>
            </Link>
          </span>
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <FaSearch/>&nbsp;<span className="xl:flex hidden text-black">Search</span>
          </span>
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <MdOutlineLibraryMusic/>&nbsp;<span className="xl:flex hidden text-black">Library</span>
          </span> 
        </div>
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 h-16 flex justify-start items-center">
            <Link href="/create" className="flex items-center justify-center">
              <IoAddCircleSharp/>&nbsp;<span className="xl:flex hidden text-black">Create</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center">
            <CgProfile/>&nbsp;<span className="xl:flex hidden text-black">Profile</span>
          </span>
        </div>
      </div>
  )
}

export default SidePanel
