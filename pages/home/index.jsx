import "@/app/globals.css"
import { FaHome, FaSearch, FaPlay, FaHeart, FaMoon } from "react-icons/fa"
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import PodcastCard from "@/components/PodcastCard";


const Home = () => {
  return (
    <main className="h-screen flex w-screen font-body">
      <div className="p-4 flex flex-col justify-between border-r h-full bg-white fixed z-10 xl:w-[150px] w-fit">
        <div className="text-xl flex flex-col gap-5">
          <span className="p-2 border-b h-16 flex justify-start items-center font-normal">
            <FaHome/>&nbsp;<span className="xl:flex hidden text-black">Home</span>
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
            <IoAddCircleSharp/>&nbsp;<span className="xl:flex hidden text-black">Create</span>
          </span>
          <span className="p-2 h-16 flex justify-start items-center">
            <CgProfile/>&nbsp;<span className="xl:flex hidden text-black">Profile</span>
          </span>
        </div>
      </div>
      <div className="w-full xl:pl-[150px] pl-[72px]">
        <div className="flex-1 w-full text-4xl p-2 flex justify-between items-center border-b bg-lime-200 fixed z-1">
          <span>voxcast.ai</span>
        </div>
        <div className="px-4 pt-16 flex flex-col overflow-y-scroll max-h-screen no-scrollbar">
        <div className="mt-4">
          <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">Categories <span className="text-lg text-gray-400">show more</span></span>            <div className="my-2 flex gap-3">
              {/* yahan pe place krna hai categories wala cards that i told you, categories is empty now */}
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">Trending <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 flex xl:justify-around overflow-x-scroll gap-4 no-scrollbar">
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
              <PodcastCard/>
            </div>
          </div>
          <div className="mt-4">
          <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">New Release <span className="text-lg text-gray-400">show more</span></span>            <div className="my-2 flex gap-3">
              <PodcastCard/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
