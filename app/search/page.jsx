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
import { CgSpinner } from "react-icons/cg";

const Search = () => {
  const {isTrackPlaying, setPlayerData, setIsTrackPlaying} = useAudioPlayer();
  const [playingPodcastData, setPlayingPodcastData] = useState(null);
  const [searchResults,setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading,setSearchLoading] = useState(false);
  const [sideBarState,setSideBarState] = useState("hidden");
  const [catnos, setCatNos] = useState(8);
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [categoryPodcast,setCategoryPodcast] = useState(null);
  const [categorySearchLoading, setCategorySearchLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const setPlayer = async(id,title,thumbnail,username,plays) => {
    console.log(id);
    setPlayerData(null);
    setPlayingPodcastData(null);
    setIsTrackPlaying(true);
    try{
      const response = await fetch('/api/get-podcast-audio',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          podcast_id:id,
        })
      })
      if(response.ok){
        const result = await response.json()
        const base64_audio = result.podcast_audio[0].podcast_audio;
        setPlayingPodcastData({
          "title":title,
          "thumbnail":thumbnail,
          "audio":base64_audio,
          "author":username,
          "plays":plays
        })
        setPlayerData(playingPodcastData);
        try{
          const response = await fetch("/api/play-count",{
              method:"POST",
              headers:{
                  'Content-Type':'application/json',
              },
              body: JSON.stringify({
                  id:id,
              })
          })
          if(response.status === 200){
              console.log("success");
          }else{
              console.log("failed");
          }
      }catch(e){
          console.log(e);
      }
      }else{
        toast.error('Audio Not Found...!');
      }
    }catch(e){
      toast.error("Cannot get audio at the moment :(");
    }
  }

  const getSearchResults = async ()=>{
    const response  = await fetch("/api/get-search-podcasts",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        keyword:searchTerm,
      })
    })
    const result = await response.json();
    setSearchResults(result?.search_result);
  }
  
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchTerm(e.target.value);
    setSearchLoading(true);
    setsearchTimeout(
      setTimeout(()=>{
        getSearchResults();
        setSearchLoading(false);
      },2000)
    )
  };
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

  const handleCategoryClick = async(categoryName) => {
    if(currentCategory !== categoryName){
      try{
        setCurrentCategory(categoryName);
        setCategorySearchLoading(true);
        const response = await fetch("/api/get-podcast-by-category",{
          method:"POST",
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            category:categoryName,
          })
        })
        const result = await response.json();
        setCategoryPodcast(result.category_podcast);
        setCategorySearchLoading(false);
      }catch(e){
        toast.error("Sorry Cannot get Podcasts right now !!");
      }
    }
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
          <span className="text-3xl border-b border-black ml-2 flex justify-between items-baseline">Genres <span className="text-lg text-gray-400 cursor-pointer" onClick={handlecatnos}>{catnos === 8 ? <span>show more</span> : <span>show less</span>}</span></span>
          <div className="my-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-3 transition-all">
              {Categories.slice(0, catnos).map((category, index) => (
                  <div key={index} onClick={()=>{handleCategoryClick(category.name)}}>
                      <CategoryCard title={category.name} image={category.img} />
                  </div>
              ))}
          </div>
      </div>
      {searchResults&&searchTerm!==""&&
      <div className="w-full mt-4 p-4 bg-lime-200 rounded-xl flex flex-col items-center">
        <span className="text-xl font-bold">search results</span>
        <div className="max-w-full flex gap-4 overflow-x-scroll no-scrollbar">
          {searchLoading?
          <div>
            <span className="flex items-center gap-2"><CgSpinner className="animate-spin"/>loading</span>
          </div>
          :
          searchResults.length!==0 && searchResults.map((pd,index)=>(
            <div key={index} onClick={() => setPlayer(pd._id,pd.podcast_title,pd.podcast_thumbnail,pd.username,pd.plays)}>
              <PodcastCard
                  id={pd._id}
                  title={pd.podcast_title}
                  author={pd.username}
                  plays={pd.plays}
                  thumbnail={pd.podcast_thumbnail}
                  category={pd.podcast_category}
              />
            </div>
          ))
        }
        </div>
      </div>}
      <div className="w-full mt-4 p-4 bg-lime-200 rounded-xl flex flex-col items-center">
        {categorySearchLoading &&
          <div>
            <span className="flex items-center gap-2"><CgSpinner className="animate-spin"/>loading</span>
          </div>}
       { currentCategory && <span className="text-xl font-bold self-start uppercase">{currentCategory}</span>}
        <div className="max-w-full flex gap-4 overflow-x-scroll no-scrollbar">
          {categoryPodcast?.length!==0? categoryPodcast?.map((pd,index)=>(
            <div key={index} onClick={() => setPlayer(pd._id,pd.podcast_title,pd.podcast_thumbnail,pd.username,pd.plays)}>
              <PodcastCard
                  id={pd._id}
                  title={pd.podcast_title}
                  author={pd.username}
                  plays={pd.plays}
                  thumbnail={pd.podcast_thumbnail}
                  category={pd.podcast_category}
              />
            </div>
          )): !categorySearchLoading &&
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold uppercase">no podcasts for the category</span>
            <span className="text-sm text-gray-500">why not be the first one to publish.</span>
          </div>
        }
        {categoryPodcast === null && !categorySearchLoading &&
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-bold uppercase">Click on a category</span>
          <span className="text-sm text-gray-500">listen to your favourite genre.</span>
        </div>
        }
        </div>
      </div>
      </div>
      {isTrackPlaying &&
          <PodcastPlayer/>
        }
    </div>          
  </main>
  );
};

export default Search;
