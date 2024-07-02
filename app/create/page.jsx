"use client"
import SidePanel from "@/components/SidePanel";
import VoiceDropdown from "@/components/VoiceDropdown";
import { getAIAudio, getStory, getThumbnail } from "@/app/utils/actions";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { MdDelete, MdUpload } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from "@clerk/nextjs";

const Create = () => {
  const voice_options = ['Alloy', 'Echo', 'Fable', 'Onyx', 'Nova', 'Shimmer'];
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [podcastTitle, setPodcastTitle] = useState("");
  const [podcastStory, setPodcastStory] = useState("");
  const [storyLoader, setStoryLoader] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailLoader, setThumbnailLoader] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioLoader, setAudioLoader] = useState(false);
  const [storyCharCount, setStoryCharCount] = useState(0);
  const maxStoryChar = 2000;

  const {user} = useUser();

  const handleVoiceSelect = (option) => {
    if(option!==null){
      setSelectedVoice(option.toLowerCase());
      console.log(selectedVoice);
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

  const handlePublish = () => {
    console.log({
      "Title": podcastTitle,
      "Story": podcastStory,
      "Voice": selectedVoice
    });
    toast.error("Cannot Publish ! This is a demo publishing is not allowed!");
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

  return (
      <div>
        <Toaster/>
        <main className="h-screen flex w-screen">
          <SidePanel />
          <div className="w-full xl:pl-[150px] pl-[72px]">
            {/* <h1>{user}</h1> */}
            <div className="flex-1 w-full text-4xl p-2 flex justify-between items-center border-b bg-lime-200 fixed z-9">
              <span>voxcast.ai</span>
            </div>
            <div className="px-4 pt-16 flex flex-col overflow-y-scroll h-screen no-scrollbar">
              <span>Hello, @{user?.username}</span>
              <span className='xl:text-3xl text-2xl inline-block'>give your imagined podcast wings with voxcast.ai <WiStars className="text-yellow-500 text-5xl inline-block" /></span>
              <div className="pt-8 xl:text-2xl text-xl flex flex-col gap-8">
                <label htmlFor="podcast-title" className="flex flex-col">
                  name your podcast :
                  <input type="text" id="podcast-title" className="border-b border-black outline-none mt-4 text-lg" value={podcastTitle} onChange={handleTitle} />
                </label>
                <label htmlFor="podcast-story" className="flex flex-col">
                  <span className="flex justify-between xl:items-center xl:flex-row flex-col items-start">
                    <span>give your podcast a story : <span className="text-sm text-gray-400">{storyCharCount}/{maxStoryChar} chars</span></span> 
                    {storyLoader ? <CgSpinner className="animate-spin text-3xl" /> : <button className="flex items-center xl:text-lg text-sm bg-gray-200 p-2 rounded-xl" onClick={handleGenerateStory}>generate story &nbsp; <RiAiGenerate /> </button>}</span>
                  <textarea id="podcast-title" className="border-b border-black outline-none mt-4 text-lg" rows={10} value={podcastStory} onChange={handleStory} />
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
                <div className="mt-8">
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
                <div className="flex flex-wrap-reverse justify-end gap-4 pb-2">
                  <button className="flex items-center border rounded-xl px-4 py-2" onClick={handleDiscard}>Discard&nbsp;<MdDelete /></button>
                  <button className="flex items-center border rounded-xl px-4 py-2" onClick={handlePublish}>Publish&nbsp;<FaGlobe /></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Create;
