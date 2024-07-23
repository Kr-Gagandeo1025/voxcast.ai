"use client"
import HomeTopBar from "@/components/HomeTopBar"
import ManagePodcast from "@/components/ManagePodcast";
import PodcastPlayer from "@/components/PodcastPlayer";
import SidePanel from "@/components/SidePanel"
import { useAudioPlayer } from "@/providers/AudioPlayerContext";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { IoBookmark } from "react-icons/io5";


const Page = () => {
  const {isTrackPlaying} = useAudioPlayer();
  const [user_podcasts,set_user_podcasts] = useState(null);
  const {user} = useUser();
  const username = user?.username;
  const getuploadedPodcasts = async () => {
    try{
      set_user_podcasts(null);
      const response = await fetch("/api/get-users-podcasts",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({username}),
      })
      const result = await response.json();
      const res = result.podcasts_data;
      set_user_podcasts(res);
    }catch(e){
      console.log("not data got");
    }
  }
  useEffect(()=>{
    getuploadedPodcasts();
  },[username]);
  const [sideBarState,setSideBarState] = useState("hidden");
  const handleSideBarState = () => {
    if(sideBarState==="hidden"){
        setSideBarState("flex");
    }else{
        setSideBarState("hidden");
    }
  }
  const handlePodcastDelete = async (id) => {
    const response = await fetch("/api/delete-podcast",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({id}),
    })
    const result = await response.json();
    if(result.res === true && result.del_resp.acknowledged === true){
      toast.success("Deleted Successfully");
      getuploadedPodcasts();
    }else{
      toast.error("Cannot Delete !! Try Later");
    }
  }
  return (
    <main className="h-screen w-screen flex md:p-4 p-1">
      <Toaster/>
        <SidePanel state={sideBarState} page={"library"}/>
        <div className="w-full flex flex-col">
           <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
           <div className="flex flex-col overflow-y-scroll h-screen no-scrollbar w-full mt-4">
            <div className="flex items-center lg:gap-20 gap-12 lg:flex-row flex-col  bg-lime-200 rounded-xl p-3">
              <div className="flex flex-col gap-4 items-center bg-white border border-black rounded-xl p-4 max-w-[350px]">
                <span className="text-3xl border-b border-black flex justify-between items-baseline">Saved Podcasts</span>
                <div className="flex gap-2 items-center justify-between">
                  <IoBookmark className="text-9xl text-black"/>
                  <span className="font-thin text-2xl">listen to your saved podcasts here.</span>
                </div>
              </div>
              <span className="lg:text-3xl text-xl w-[70%]">It&apos;s not &apos;self-serving&apos; to continue to post episodes when so much tragedy is happening around the world.
              For many, your content is the escape they need right now.</span>
            </div>
            <div className="flex flex-col w-full mt-12">
              <span className="text-3xl border-b border-black flex justify-between items-baseline">Your Podcasts</span>
              <div className="p-4 gap-2 flex-wrap flex">
                {user_podcasts?.length !==0 && user_podcasts?.map((pd)=>(
                  <ManagePodcast key={pd._id} data={pd} delFunc={()=>{handlePodcastDelete(pd._id)}}/>
                ))}
              </div>
              {user_podcasts===null && <div className="flex gap-2 items-center text-xl"><CgSpinner className="animate-spin"/>loading</div>}
            </div>
           </div>
           {isTrackPlaying &&
              <PodcastPlayer/>
            }
        </div>
    </main>
  )
}

export default Page
