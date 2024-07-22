'use client'
import SidePanel from "@/components/SidePanel";
import PodcastCard from "@/components/PodcastCard";
import { useState } from "react";
import HomeTopBar from "@/components/HomeTopBar";
import toast, { Toaster } from "react-hot-toast";
import CategoryCard from "@/components/CategoryCard";
import Categories from "../constants/categories";
import SearchBar from "@/components/SearchBar";
import PodcastPlayer from "@/components/PodcastPlayer";
import { useAudioPlayer } from "@/providers/AudioPlayerContext";

const Search = () => {
  const {isTrackPlaying} = useAudioPlayer();
  const [searchTerm, setSearchTerm] = useState("");
  const [sideBarState,setSideBarState] = useState("hidden");
  const [catnos, setCatNos] = useState(8);

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
  const handlecatnos = () => {
    setCatNos(catnos === 8 ? 17 : 8);
  }

  const handleCategoryClick = () => {
    console.log("hi")
    toast.error("Listen by Category coming soon...");
  }

  return (
  <main className="h-screen flex md:p-4 p-1">
    <Toaster />
      <SidePanel state={sideBarState} page={"explore"}/>
    <div className="w-full flex flex-col">
      <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <div className="flex flex-col overflow-y-scroll h-screen no-scrollbar w-full">
      <div className="pt-4">
          <span className="text-3xl border-b border-black ml-2 flex justify-between items-baseline">Categories <span className="text-lg text-gray-400 cursor-pointer" onClick={handlecatnos}>{catnos === 8 ? <span>show more</span> : <span>show less</span>}</span></span>
          <div className="my-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-3 transition-all">
              {Categories.slice(0, catnos).map((category, index) => (
                  <div key={index} onClick={handleCategoryClick}>
                      <CategoryCard title={category.name} image={category.img} />
                  </div>
              ))}
          </div>
      </div>
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
      {isTrackPlaying &&
          <PodcastPlayer/>
        }
    </div>          
  </main>
  );
};

export default Search;
