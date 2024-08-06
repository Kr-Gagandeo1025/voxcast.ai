import { FaHome, FaRupeeSign, FaSearch } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import Link from "next/link";
import SingOutBtn from "@/components/SingOutBtn";

const SidePanel = ({state,page}) => {
  return (
    <div className={`h-fit justify-between ${state} mr-2 fixed z-10 mt-16`}>
      <div className='flex flex-col justify-between h-full bg-lime-200 lg:w-[320px] rounded-2xl p-4'>
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 h-16 flex justify-start items-center font-normal rounded-xl hover:bg-black hover:bg-opacity-20 transition-all ease-in-out">
            <Link href="/home" className="flex items-center justify-start w-full">
              <FaHome/>&nbsp;<span className={page==="home"?"flex bg-white px-2 py-1 rounded-lg w-full":"flex"}>home</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center font-normal rounded-xl hover:bg-black hover:bg-opacity-20 transition-all ease-in-out">
            <Link href="/search" className="flex items-center justify-start w-full">
              <FaSearch/>&nbsp;<span className={page==="explore"?"flex bg-white px-2 py-1 rounded-lg w-full":"flex"}>explore</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center font-normal rounded-xl hover:bg-black hover:bg-opacity-20 transition-all ease-in-out">
            <Link href="/library" className="flex items-center justify-start w-full">
              <MdOutlineLibraryMusic/>&nbsp;<span className={page==="library"?"flex bg-white px-2 py-1 rounded-lg w-full":"flex"}>library</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center rounded-xl hover:bg-black hover:bg-opacity-20 transition-all ease-in-out">
            <Link href="/create" className="flex items-center justify-start w-full">
              <IoAddCircleSharp/>&nbsp;<span className={page==="create"?"flex bg-white px-2 py-1 rounded-lg w-full":"flex"}>create</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center rounded-xl hover:bg-black hover:bg-opacity-20 transition-all ease-in-out">
            <Link href="/buy-voxcoins" className="flex items-center justify-start w-full">
              <FaRupeeSign/>&nbsp;<span className={page==="buy"?"flex bg-white px-2 py-1 rounded-lg w-full":"flex"}>buy voxcoins</span>
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
