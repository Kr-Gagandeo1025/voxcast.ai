'use client'
import SidePanel from "@/components/SidePanel";
import { FaSearch } from "react-icons/fa";
import PodcastCard from "@/components/PodcastCard";
import { useState } from "react";
import HomeTopBar from "@/components/HomeTopBar";
import { MdMenu } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import { Toaster } from "react-hot-toast";
import MyProfile from "@/components/MyProfile";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sideBarState,setSideBarState] = useState("hidden");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const suggestions = [
    { title: "Suggestion 1", description: "Description for suggestion 1", author: "Author 1" },
    { title: "Suggestion 2", description: "Description for suggestion 2", author: "Author 2" },
    { title: "Suggestion 3", description: "Description for suggestion 3", author: "Author 3" },
    { title: "Suggestion 4", description: "Description for suggestion 3", author: "Author 4" },
    { title: "Suggestion 4", description: "Description for suggestion 3", author: "Author 4" },
    { title: "Suggestion 4", description: "Description for suggestion 3", author: "Author 4" },
  ];
  const handleSideBarState = () => {
    if(sideBarState==="hidden"){
        setSideBarState("flex");
    }else{
        setSideBarState("hidden");
    }
}

  return (
  <main className="h-screen flex md:p-4 p-1">
    <Toaster />
      <SidePanel state={sideBarState} />
    <div className="h-full w-full">
      <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState} searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      {!suggestions&&searchTerm===""&&
      <div className="w-full mt-4 p-4 bg-lime-200 rounded-xl flex flex-col">
        <span className="text-2xl font-bold mb-2">top creators</span>
        <div className="max-w-full flex gap-4 overflow-x-scroll no-scrollbar">
          {suggestions.map((sg,index)=>(
            <PodcastCard key={index} title={sg.title} author={sg.author} plays={0}/>
          ))}
        </div>
      </div>}
      {!suggestions&&searchTerm===""&&
      <div className="w-full mt-4 p-4 bg-lime-200 rounded-xl flex flex-col">
        <span className="text-2xl font-bold mb-2">trending podcasts</span>
        <div className="max-w-full flex gap-4 overflow-x-scroll no-scrollbar">
          {suggestions.map((sg,index)=>(
            <PodcastCard key={index} title={sg.title} author={sg.author} plays={0}/>
          ))}
        </div>
      </div>}
      {searchTerm!==""&&
      <div className="w-full mt-4 p-4 bg-lime-200 rounded-xl flex flex-col items-center">
        <span className="text-xl font-bold">search results</span>
        <div className="max-w-full flex gap-4 overflow-x-scroll no-scrollbar">
          coming soon, search is not available yet
        </div>
      </div>}
    </div>          
  </main>
  );
};

export default Search;
