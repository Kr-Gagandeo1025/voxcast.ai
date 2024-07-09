"use client"
import SidePanel from "@/components/SidePanel";
import VoiceDropdown from "@/components/VoiceDropdown";
import { getAIAudio, getStory, getThumbnail } from "@/app/utils/actions";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { MdDelete, MdUpload } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { CgLink, CgSpinner } from "react-icons/cg";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from "@clerk/nextjs";
import HomeTopBar from "@/components/HomeTopBar";
import Link from "next/link";

const Create = () => {
  const voice_options = ['Alloy', 'Echo', 'Fable', 'Onyx', 'Nova', 'Shimmer'];
  const categories_option = ["art","business","culture","education","gaming","health","history","hobbies","kids","lifestyle","music","news","religion","science","sports","tech","thriller","crime"]
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [podcastTitle, setPodcastTitle] = useState("");
  const [podcastStory, setPodcastStory] = useState("");
  const [storyLoader, setStoryLoader] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailLoader, setThumbnailLoader] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioLoader, setAudioLoader] = useState(false);
  const [storyCharCount, setStoryCharCount] = useState(0);
  const [isCreator,setisCreator] = useState(false);
  const [isPublishing,setIsPublishing] = useState(false);
  const [sideBarState,setSideBarState] = useState("hidden");
  const maxStoryChar = 2000;

  const {user} = useUser();
  const username = user?.username;
  const useremailId = user?.emailAddresses[0].emailAddress;


  useEffect(()=>{
    if(username==="gagandeo" || username==="prernaxa"){
      setisCreator(true);
    }
  },[username]);

  const handleVoiceSelect = (option) => {
    if(option!==null){
      setSelectedVoice(option.toLowerCase());
      console.log(selectedVoice);
    }
  };

  const handleCategorySelect = (option) => {
    if(option!==null){
      setSelectedCategory(option.toLowerCase());
      console.log(selectedCategory);
    }
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setPodcastTitle(e.target.value);
  };

  const handleStory = (e) => {
    e.preventDefault();
    if (e.target.value.length <= maxStoryChar) {
      setStoryCharCount(e.target.value.length);
      setPodcastStory(e.target.value);
    }
  };

  const handlePublish = async(e) => {
    e.preventDefault();
    if(podcastTitle !== "" && podcastStory !== "" && audioUrl !== null && thumbnail !== null && selectedCategory !== null){
      setIsPublishing(true);
      try{
        const response = await fetch('/api/upload-podcast',{
          method: "POST",
          headers: {
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            username:username,
            email:useremailId,
            podcast_title:podcastTitle,
            podcast_story:podcastStory,
            podcast_audio:audioUrl,
            podcast_thumbnail:thumbnail,
            podcast_category:selectedCategory
          }),
        });
        const result = await response.json();
        if(response.ok){
          toast.success(`Podcast Upload Success ! with ID: ${result.id} for @${username}`);
        }else{
          toast.error("unable to upload...");
        }
      }catch(error){
        console.log(error);
      }finally{
        setIsPublishing(false);
      }
    }else{
      toast.error("Fields missing...! Please complete the Process !");
    }
  };

  const handleGenerateStory = async () => {
    setStoryLoader(true);
    try {
      if (podcastStory !== "") {
        const genStory = await getStory(podcastStory);
        setPodcastStory(genStory);
      } else if (podcastTitle !== "") {
        const genStory = await getStory(podcastTitle);
        setPodcastStory(genStory);
        setStoryCharCount(podcastStory.length)
      } else {
        toast.error("Please atleast enter a title!!")      }
    } catch (e) {
      console.log(e);
      toast.error("Ohh noo!! Seems like our Ai is off duty today!");
    } finally {
      setStoryLoader(false);
    }
  };

  // const handleGenerateThumbnail = async () => {
  //   setThumbnailLoader(true);
  //   try {
  //     const response = await fetch('/api/image-generation', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ podcastTitle }),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setThumbnail(data.data[0].asset_url);
  //     } else {
  //       console.error('Failed to generate thumbnail');
  //     }
  //   } catch (error) {
  //     console.error('Error generating thumbnail:', error);
  //   } finally {
  //     setThumbnailLoader(false);
  //   }
  // };
  const handleGenerateThumbnail = async () => {
    if(podcastTitle!==""){
      setThumbnailLoader(true);
      try{
        const response = await getThumbnail(podcastTitle);
        setThumbnail(response.b64_json);
      }catch(e){
        toast.error("Ohh nooo! Try Again...")
        console.log(e)
      }finally{
        setThumbnailLoader(false);
      }
    }else{
      toast.error("No Title to generate image")
    }
  }

  const handleAudioGeneration = async () => {
    if(selectedVoice && podcastStory!==""){
      try{
        setAudioLoader(true);
        const response = await getAIAudio(podcastStory,selectedVoice);
        setAudioUrl(null);
        setAudioUrl(response);
      }catch(e){
        toast.error("Cannot Generate Audio! Sorry!!")
        console.log(e);
      }finally{
        setAudioLoader(false);
      }
    }else{
      toast.error("Please select a voice and add a story!!")
    }
  }
  const handleDiscard = () => {
    setPodcastTitle("");
    setPodcastStory("");
    setSelectedVoice(null);
    setAudioUrl(null);
    setThumbnail(null);
    toast.success("Changes Discarded !");
  }
  const handleSideBarState = () => {
    if(sideBarState==="hidden"){
        setSideBarState("flex");
    }else{
        setSideBarState("hidden");
    }
  }

  return (
      <div className="h-screen md:p-4 p-1">
        <Toaster/>
        <SidePanel  state={sideBarState}/>
        <main className="h-full flex flex-col ">
            <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState}/>
          <div className="w-full h-full ">
            <div className="px-4 ml-2 flex flex-col overflow-y-scroll h-screen no-scrollbar">
              <span>Hello, @{user?.username}</span>
              <span className='xl:text-3xl text-2xl inline-block'>give your imagined podcast wings with voxcast.ai <WiStars className="text-yellow-500 text-5xl inline-block" /></span>
              {isCreator?<div className="pt-8 xl:text-2xl text-xl flex flex-col gap-8">
                <label htmlFor="podcast-title" className="flex flex-col">
                  name your podcast :
                  <input type="text" id="podcast-title" className="border-b border-black bg-transparent outline-none mt-4 text-lg" value={podcastTitle} onChange={handleTitle} />
                </label>
                <label htmlFor="podcast-story" className="flex flex-col">
                  <span className="flex justify-between xl:items-center xl:flex-row flex-col items-start">
                    <span>give your podcast a story : <span className="text-sm text-gray-400">{storyCharCount}/{maxStoryChar} chars</span></span> 
                    {storyLoader ? <CgSpinner className="animate-spin text-3xl" /> : <button className="flex items-center xl:text-lg text-sm bg-gray-200 p-2 rounded-xl" onClick={handleGenerateStory}>generate story &nbsp; <RiAiGenerate /> </button>}</span>
                  <textarea id="podcast-title" className="border-b border-black bg-transparent outline-none mt-4 text-lg" rows={10} value={podcastStory} onChange={handleStory} />
                </label>
                <div className="flex w-full flex-col lg:flex-row gap-4">
                  <label className="flex flex-col lg:flex-row gap-4 items-start w-full lg:w-1/2">
                    <span>voice up your podcast :</span>
                    <VoiceDropdown options={voice_options} onSelect={handleVoiceSelect} />
                  </label>
                  <div className="flex flex-col gap-4 w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 lg:pl-2 pt-4 lg:pt-0">
                    <span>your generated audio :</span>
                    {audioLoader && <span className="text-sm">your audio is being generated...</span>}
                    {audioLoader ? <CgSpinner className="animate-spin text-3xl" /> : <button className="xl:text-lg text-sm flex bg-gray-200 p-2 rounded-xl w-fit items-center " onClick={handleAudioGeneration}>generate audio&nbsp; <RiAiGenerate /></button>}
                    {audioUrl!==null && 
                      <audio controls controlsList="nodownload">
                        <source src={`data:audio/mp3;base64,${audioUrl}`} type="audio/mpeg"/>
                          no audio support
                      </audio>}
                  </div>
                </div>
                <div className="mt-8 flex xl:flex-row flex-col">
                  <div className="flex xl:w-1/2 flex-col">
                    <span>get your masterpiece a thumbnail : </span>
                    <div className="p-2 flex items-end">
                      <div className="h-[200px] w-[200px] border rounded-xl flex justify-center items-center">
                        {thumbnail ? <Image src={`data:image/jpeg;base64,${thumbnail}`} height={200} width={200} alt="podcast thumbnail" className="rounded-xl" /> : <span className="text-gray-400">no-img</span>}
                      </div>
                      <div className="flex flex-col gap-4 ml-4">
                        <span className="text-sm mr-8 cursor-pointer flex gap-2 items-center justify-center"><MdUpload className="text-5xl" />pick your own art</span>
                        {
                          thumbnailLoader ? <CgSpinner className="animate-spin text-3xl" /> :
                            <button className="xl:text-lg text-sm inline-block bg-gray-200 p-2 rounded-xl w-fit h-fit items-center" onClick={handleGenerateThumbnail}>generate thumbnail&nbsp; <RiAiGenerate className="inline-block"/></button>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col border-l-2 pl-2">
                    <span>Select a Category : </span>
                    <VoiceDropdown options={categories_option} onSelect={handleCategorySelect} />
                  </div>
                </div>
                {user &&
                  <div className="flex flex-wrap-reverse justify-end gap-4 pb-2">
                    <button className="flex items-center border rounded-xl px-4 py-2" onClick={handleDiscard}>Discard&nbsp;<MdDelete /></button>
                    {isPublishing?<CgSpinner className="animate-spin text-3xl"/>:
                    <button className="flex items-center border rounded-xl px-4 py-2" onClick={handlePublish}>Publish&nbsp;<FaGlobe /></button>}
                  </div>
                }
              </div>
              :
              <div className="text-xl mt-20">
                  <Link href="/myprofile">
                    <span className="font-bold w-fit flex items-center justify-center gap-2 p-2 border border-black rounded-xl cursor-pointer">Enter Waitlist - Navigate to Profile<CgLink/></span>
                  </Link>
                  <p className="text-sm flex flex-col font-bold">
                      <span>benifits : </span>
                      - get extra 50 voxcoins <br/>
                      - early access <br />
                      - early insights <br />
                      - more reach because of early creator-ship
                  </p>
              </div>}
            </div>
          </div>
        </main>
      </div>
  );
};

export default Create;
