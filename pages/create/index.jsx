import "@/app/globals.css";
import SidePanel from "@/components/SidePanel";
import VoiceDropdown from "@/components/VoiceDropdown";
import { MuseoModerno } from "next/font/google";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { MdDelete, MdUpload } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { WiStars } from "react-icons/wi";


const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });

const Create = () => {
    const voice_options = ['Alloy','Echo','Fable','Onyx','Nova','Shimmer'];
    const [selectedVoice,setSelectedVoice] = useState(null);
    const [podcastTitle,setPodcastTitle] = useState("");
    const [podcastStory,setPodcastStory] = useState("");


    const handleVoiceSelect = (option) => {
        setSelectedVoice(option);
    };
    const handleTitle = (e) => {
        e.preventDefault();
        setPodcastTitle(e.target.value);
    }
    const handleStory = (e) => {
        e.preventDefault();
        setPodcastStory(e.target.value);
    }
    const handlePublish = () => {
        console.log({"Title":podcastTitle,
            "Story":podcastStory,
            "Voice":selectedVoice})
    }


  return (
    <div className={museo.className}>
      <main className="h-screen flex w-screen">
        <SidePanel/>
        <div className="w-full xl:pl-[150px] pl-[72px]">
            <div className="flex-1 w-full text-4xl p-2 flex justify-between items-center border-b bg-lime-200 fixed z-1">
                <span>voxcast.ai</span>
            </div>
            <div className="px-4 pt-16 flex flex-col overflow-y-scroll h-screen no-scrollbar">
                <span className='text-3xl flex items-center'>give your imagined podcast wings with voxcast.ai <WiStars className="text-yellow-500 text-5xl"/></span>
                <div className="pt-8 text-2xl flex flex-col gap-8">
                    <label htmlFor="podcast-title" className="flex flex-col">
                        name your podcast :
                        <input type="text" id="podcast-title" className="border-b border-black outline-none mt-4 text-lg" value={podcastTitle} onChange={handleTitle}/>
                    </label>
                    <label htmlFor="podcast-story" className="flex flex-col">
                        <span className="flex justify-between items-center">give your podcast a story : <span className="flex items-center text-lg bg-gray-200 p-2 rounded-xl">generate story &nbsp; <RiAiGenerate/> </span></span>
                        <textarea id="podcast-title" className="border-b border-black outline-none mt-4 text-lg" value={podcastStory} onChange={handleStory} />
                    </label>
                    <div className="flex w-full">
                        <label className="flex gap-4 items-center w-1/2">
                            <span>voice up your podcast :</span>
                            <VoiceDropdown options={voice_options} onSelect={handleVoiceSelect}/>
                        </label>
                        <label className="flex w-1/2 border-l-2 pl-2 flex-col gap-4">
                            <span>your generated audio :</span>
                            <span className="text-sm">your audio is being generated...</span>
                            <button className="text-lg flex bg-gray-200 p-2 rounded-xl w-fit items-center">generate audio&nbsp; <RiAiGenerate/></button>
                        </label>
                    </div>
                    <label className="mt-8">
                        <span>get your masterpiece a thumbnail : </span>
                        <div className="p-2 flex items-end">
                            <div className="h-[200px] w-[200px] border rounded-xl flex justify-center items-center">
                                <span className="text-gray-400">no-img</span>
                            </div>
                            <MdUpload className="text-5xl cursor-pointer"/><span className="text-sm mr-8">pick your own art</span>
                            <button className="text-lg flex bg-gray-200 p-2 rounded-xl w-fit items-center">generate thumbnail&nbsp; <RiAiGenerate/></button>
                        </div>
                    </label>
                    <div className="flex justify-center gap-10 pb-2">
                        <button className="flex items-center bg-red-500 rounded-xl px-4 py-2">Discard&nbsp;<MdDelete/></button>
                        <button className="flex items-center bg-green-500 rounded-xl px-4 py-2" onClick={handlePublish}>Publish&nbsp;<FaGlobe/></button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Create
