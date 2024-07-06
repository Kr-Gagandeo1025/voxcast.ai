'use client'
import PodcastCard from "@/components/PodcastCard";
import CategoryCard from "@/components/CategoryCard";
import SidePanel from "@/components/SidePanel";
import HomeTopBar from "@/components/HomeTopBar";
import PodcastPlayer from "@/components/PodcastPlayer";
import Categories from "../constants/categories";
import { useState } from "react";
import gsap from "gsap";
import toast, { Toaster } from "react-hot-toast";

const dummypodcasts = [
  {id:1,title:'Dummy Podcast 1',author:'owner',plays:21},
  {id:2,title:'Dummy Podcast 2',author:'owner',plays:24},
  {id:3,title:'Dummy Podcast 3',author:'owner',plays:277},
]


const Home = () => {

  const [isTrackPlaying,setIsTrackPlaying] = useState(false);

  const setPlayer = (id) => {
    console.log(id,"is Playing");
    setIsTrackPlaying(true);
  }

  const [catnos,setCatNos] = useState(5);

  const handlecatnos = () => {
    if(catnos===5){
      setCatNos(17);
    }else{
      setCatNos(5);
    }
  }

  const handleCategoryClick = () => {
    console.log("hi")
    toast.error("Listen by Category comming soon...");
  }

  return ( 
    <main className="h-screen flex w-screen bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
      <SidePanel/>
      <div className="w-full xl:pl-[150px] lg:pl-[59px] pl-[62px]">
        <HomeTopBar/>
        <Toaster/>
        {isTrackPlaying &&
          <div id="player" className="transition-all ease-in-out duration-500">
            <PodcastPlayer/>
          </div>
        }
        <div className="px-4 pt-16 flex flex-col overflow-y-scroll max-h-screen no-scrollbar">
          <div className="mt-4">
            <span className="text-3xl border-b border-black ml-2 flex w-full justify-between items-baseline">Categories <span className="text-lg text-gray-400 cursor-pointer" onClick={handlecatnos}>{catnos===5?<span>show more</span>:<span>show less</span>}</span></span>
            <div className="my-2 mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 transition-all">
              {catnos===5?Categories.slice(0,5).map((category, index) => (
                <div key={index} onClick={()=>{handleCategoryClick()}}>
                  <CategoryCard key={index} title={category.name} image={category.img} />
                </div>
              )):Categories.map((category,index)=>(
                <div key={index} onClick={()=>{handleCategoryClick()}}>
                  <CategoryCard key={index} title={category.name} image={category.img} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <span className="xl:text-3xl text-2xl ml-2 flex w-full justify-between items-baseline">Trending <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
            <div className="my-2 flex overflow-x-scroll gap-4 no-scrollbar pl-2">
              {dummypodcasts.map((pd,index)=>(
                <div key={index} onClick={()=>setPlayer(pd.id)}>
                  <PodcastCard id={pd.id} title={pd.title} author={pd.author} plays={pd.plays}/>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <span className="xl:text-3xl text-2xl ml-2 flex w-full justify-between items-baseline">New Release <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
            <div className="my-2 flex gap-4 overflow-x-scroll no-scrollbar pl-2">
            {dummypodcasts.map((pd,index)=>(
                <div key={index} onClick={()=>setPlayer(pd.id)}>
                  <PodcastCard id={pd.id} title={pd.title} author={pd.author} plays={pd.plays}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
