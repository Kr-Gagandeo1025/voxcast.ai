import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import Link from "next/link";
import SingOutBtn from "@/components/SingOutBtn";

const SidePanel = ({state}) => {
  return (
    <div className={`h-fit justify-between ${state} mr-2 fixed z-10 mt-16`}>
      <div className='flex flex-col justify-between h-full bg-lime-200 lg:w-[320px] rounded-2xl p-4'>
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 h-16 flex justify-start items-center font-normal rounded-xl">
            <Link href="/home" className="flex items-center justify-center">
              <FaHome/>&nbsp;<span className="flex">home</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center font-normal">
            <Link href="/search" className="flex items-center justify-center">
              <FaSearch/>&nbsp;<span className="flex ">explore</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center font-normal">
            <Link href="/library" className="flex items-center justify-center">
              <MdOutlineLibraryMusic/>&nbsp;<span className="flex ">library</span>
            </Link>
          </span>
          <span className="p-2 h-16 flex justify-start items-center">
            <Link href="/create" className="flex items-center justify-center">
              <IoAddCircleSharp/>&nbsp;<span className="flex ">create</span>
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
