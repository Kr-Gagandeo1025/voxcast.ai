'use client'
import PodcastCard from "@/components/PodcastCard";
import CategoryCard from "@/components/CategoryCard";
import SidePanel from "@/components/SidePanel";
import HomeTopBar from "@/components/HomeTopBar";
import PodcastPlayer from "@/components/PodcastPlayer";
import Categories from "../constants/categories";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const Home = () => {
    const [isTrackPlaying, setIsTrackPlaying] = useState(false);
    const [podcasts, setPodcasts] = useState([]);
    const [catnos, setCatNos] = useState(5);
    const [playingPodcastData, setPlayingPodcastData] = useState(null);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await fetch('/api/get-podcast');
                if (!response.ok) {
                    throw new Error('Failed to fetch podcasts');
                }
                const data = await response.json();
                setPodcasts(data.podcasts);
            } catch (error) {
                console.error('Error fetching podcasts:', error);
        
            }
        };

        fetchPodcasts();
    }, []);

    const setPlayer = async(id,title,thumbnail) => {
        console.log(id);
        setIsTrackPlaying(true);
        setPlayingPodcastData(null);
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
            })
          }else{
            toast.error('Audio Not Found...!');
          }
        }catch(e){
          toast.error("Cannot get audio at the moment :(");
          console.log(e);
        }

    }

    const handlecatnos = () => {
        setCatNos(catnos === 5 ? 17 : 5);
    }

    const handleCategoryClick = () => {
        console.log("hi")
        toast.error("Listen by Category coming soon...");
    }

    return (
        <main className="h-screen flex w-screen bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
            <SidePanel />
            <div className="w-full xl:pl-[150px] lg:pl-[59px] pl-[62px]">
                <HomeTopBar />
                <Toaster />
                {/* {isTrackPlaying &&
                    <div id="player" className="transition-all ease-in-out duration-500">
                        <PodcastPlayer playerData={playingPodcastData}/>
                    </div>
                } */}
                <div className="px-4 pt-16 flex flex-col overflow-y-scroll max-h-screen no-scrollbar pb-36">
                    <div className="mt-4">
                        <span className="text-3xl border-b border-black ml-2 flex w-full justify-between items-baseline">Categories <span className="text-lg text-gray-400 cursor-pointer" onClick={handlecatnos}>{catnos === 5 ? <span>show more</span> : <span>show less</span>}</span></span>
                        <div className="my-2 mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 transition-all">
                            {Categories.slice(0, catnos).map((category, index) => (
                                <div key={index} onClick={handleCategoryClick}>
                                    <CategoryCard title={category.name} image={category.img} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {podcasts.length!==0?<div>
                      <div className="mt-6">
                          <span className="xl:text-3xl text-2xl ml-2 flex w-full justify-between items-baseline">Trending <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
                          <div className="my-2 flex overflow-x-scroll gap-4 no-scrollbar pl-2">
                              {podcasts.map((pd, index) => (
                                  <div key={index} onClick={() => setPlayer(pd._id,pd.podcast_title,pd.podcast_thumbnail)}>
                                      <PodcastCard
                                          id={pd._id}
                                          title={pd.podcast_title}
                                          author={pd.username}
                                          plays={pd.plays}
                                          thumbnail={pd.podcast_thumbnail}
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="mt-6">
                          <span className="xl:text-3xl text-2xl ml-2 flex w-full justify-between items-baseline">New Release <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
                          <div className="my-2 flex gap-4 overflow-x-scroll no-scrollbar pl-2">
                              {podcasts.map((pd, index) => (
                                  <div key={index} onClick={() => setPlayer(pd._id,pd.podcast_title,pd.podcast_thumbnail)}>
                                      <PodcastCard
                                          id={pd._id}
                                          title={pd.podcast_title}
                                          author={pd.username}
                                          plays={pd.plays}
                                          thumbnail={pd.podcast_thumbnail} 
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                    </div>:<div className="flex items-center justify-center text-4xl">loading...<CgSpinner className="animate-spin"/></div>}
                </div>
            </div>
                {isTrackPlaying &&
                        <PodcastPlayer playerData={playingPodcastData}/>
                }
        </main>
    )
}

export default Home;
