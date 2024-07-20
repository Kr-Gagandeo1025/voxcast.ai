'use client'
import PodcastCard from "@/components/PodcastCard";
import SidePanel from "@/components/SidePanel";
import PodcastPlayer from "@/components/PodcastPlayer";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import HomeTopBar from "@/components/HomeTopBar";
import ContinuePlaying from "@/components/ContinuePlaying";
import Image from "next/image";
import ArtistLogo from "@/components/ArtistLogo";

const Home = () => {
    const [isTrackPlaying, setIsTrackPlaying] = useState(false);
    const [podcasts, setPodcasts] = useState(null);
    const [newRelease, setNewRelease] = useState(null);
    const [playingPodcastData, setPlayingPodcastData] = useState(null);
    const [sideBarState,setSideBarState] = useState("hidden");

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await fetch(`/api/get-podcast`,{
                    method:"GET",
                    cache: 'no-store',
                    next:{
                        revalidate:0,
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch podcasts');
                }
                const data = await response.json();
                setPodcasts(data.trending_podcasts);
                setNewRelease(data.new_release);
                console.log(podcasts)
            } catch (error) {
                console.error('Error fetching podcasts:', error);
        
            }
        };

        fetchPodcasts();
    },[]);

    const setPlayer = async(id,title,thumbnail,username,plays) => {
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
              "author":username,
              "plays":plays
            })
          }else{
            toast.error('Audio Not Found...!');
          }
        }catch(e){
          toast.error("Cannot get audio at the moment :(");
          console.log(e);
        }
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
            console.log(response);
            if(response.status === 200){
                console.log("success");
            }else{
                console.log("failed");
            }
        }catch(e){
            console.log(e);
        }

    }

    const handleSideBarState = () => {
        if(sideBarState==="hidden"){
            setSideBarState("flex");
        }else{
            setSideBarState("hidden");
        }
    }

    return (
        <main className="h-screen flex max-w-screen md:p-4 p-1">
            <Toaster />
            <SidePanel state={sideBarState} page={"home"}/>
            <div className="flex flex-col w-full">
                <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
                <div className="flex flex-col overflow-y-scroll h-screen no-scrollbar w-full">
                    <div className="mt-6 bg-lime-100 w-full rounded-2xl p-4">
                        <span className="xl:text-3xl text-2xl flex justify-between items-baseline font-bold">Catch where you left</span>
                        <div className="flex w-full overflow-x-scroll gap-2 items-center">
                            <ContinuePlaying/>
                            <ContinuePlaying/>
                            <div className="flex gap-8 pl-6 ml-2 border-l-1 border-black">
                                <ArtistLogo/>
                                <ArtistLogo/>
                            </div>
                        </div>
                    </div>
                    {podcasts?<div className="h-full">
                      <div className="mt-6 p-4 bg-lime-100 rounded-2xl">
                          <span className="xl:text-3xl text-2xl flex justify-between items-baseline font-bold">Trending <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
                          <div className="my-2 flex overflow-x-scroll gap-4 items-end">
                              {podcasts?.map((pd, index) => (
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
                              ))}
                          </div>
                      </div>
                      <div className="mt-6 p-4 bg-lime-100 rounded-2xl">
                          <span className="xl:text-3xl text-2xl ml-2 flex justify-between items-baseline font-bold">New Release <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
                          <div className="my-2 flex gap-4 overflow-x-scroll items-end">
                              {newRelease?.map((pd, index) => (
                                  <div key={index} onClick={() => setPlayer(pd._id,pd.podcast_title,pd.podcast_thumbnail,pd.username)}>
                                      <PodcastCard
                                          id={pd._id}
                                          title={pd.podcast_title}
                                          author={pd.username}
                                          plays={pd.plays}
                                          thumbnail={pd.podcast_thumbnail}
                                          category={pd.podcast_category}
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                    </div>:<div className="flex h-full items-center justify-center text-xl"><CgSpinner className="animate-spin"/></div>}
                </div>
                {isTrackPlaying &&
                        <PodcastPlayer playerData={playingPodcastData}/>
                }
            </div>
        </main>
    )
}

export default Home;
