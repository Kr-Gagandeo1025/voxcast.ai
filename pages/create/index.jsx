import "@/app/globals.css";
import SidePanel from "@/components/SidePanel";
import VoiceDropdown from "@/components/VoiceDropdown";
import { getStory } from "@/app/utils/actions";
import { MuseoModerno } from "next/font/google";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { MdDelete, MdUpload } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";

const museo = MuseoModerno({ subsets: ["latin"], display: "swap" });

const Create = () => {
  const voice_options = ['Alloy', 'Echo', 'Fable', 'Onyx', 'Nova', 'Shimmer'];
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [podcastTitle, setPodcastTitle] = useState("");
  const [podcastStory, setPodcastStory] = useState("");
  const [storyLoader, setStoryLoader] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailLoader, setThumbnailLoader] = useState(false);

  const handleVoiceSelect = (option) => {
    setSelectedVoice(option);
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setPodcastTitle(e.target.value);
  };

  const handleStory = (e) => {
    e.preventDefault();
    setPodcastStory(e.target.value);
  };

  const handlePublish = () => {
    console.log({
      "Title": podcastTitle,
      "Story": podcastStory,
      "Voice": selectedVoice
    });
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
        setPodcastStory("Oh boy... oh boy... I am an AI do you want me to come up with my own ideas ;) Please enter the Title or start the story...");
      }
    } catch (e) {
      console.log(e);
      setPodcastStory("TRY AGAIN SOMETHING CAME OFF...");
    } finally {
      setStoryLoader(false);
    }
  };

  const handleGenerateThumbnail = async () => {
    setThumbnailLoader(true);
    try {
      const response = await fetch('/api/image-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ podcastTitle }),
      });
      if (response.ok) {
        const data = await response.json();
        setThumbnail(data.data[0].asset_url);
      } else {
        console.error('Failed to generate thumbnail');
      }
    } catch (error) {
      console.error('Error generating thumbnail:', error);
    } finally {
      setThumbnailLoader(false);
    }
  };

  return (
    <ClerkProvider>
      <div className={museo.className}>
        <main className="h-screen flex w-screen">
          <SidePanel />
          <div className="w-full xl:pl-[150px] pl-[72px]">
            <div className="flex-1 w-full text-4xl p-2 flex justify-between items-center border-b bg-lime-200 fixed z-1">
              <span>voxcast.ai</span>
            </div>
            <div className="px-4 pt-16 flex flex-col overflow-y-scroll h-screen no-scrollbar">
              <span className='text-3xl flex items-center'>give your imagined podcast wings with voxcast.ai <WiStars className="text-yellow-500 text-5xl" /></span>
              <div className="pt-8 text-2xl flex flex-col gap-8">
                <label htmlFor="podcast-title" className="flex flex-col">
                  name your podcast :
                  <input type="text" id="podcast-title" className="border-b border-black outline-none mt-4 text-lg" value={podcastTitle} onChange={handleTitle} />
                </label>
                <label htmlFor="podcast-story" className="flex flex-col">
                  <span className="flex justify-between items-center">give your podcast a story : {storyLoader ? <CgSpinner className="animate-spin text-3xl" /> : <button className="flex items-center text-lg bg-gray-200 p-2 rounded-xl" onClick={handleGenerateStory}>generate story &nbsp; <RiAiGenerate /> </button>}</span>
                  <textarea id="podcast-title" className="border-b border-black outline-none mt-4 text-lg" rows={10} value={podcastStory} onChange={handleStory} />
                </label>
                <div className="flex w-full flex-col lg:flex-row gap-4">
                  <label className="flex flex-col lg:flex-row gap-4 items-start w-full lg:w-1/2">
                    <span>voice up your podcast :</span>
                    <VoiceDropdown options={voice_options} onSelect={handleVoiceSelect} />
                  </label>
                  <div className="flex flex-col gap-4 w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 lg:pl-2 pt-4 lg:pt-0">
                    <span>your generated audio :</span>
                    <span className="text-sm">your audio is being generated...</span>
                    <button className="text-lg flex bg-gray-200 p-2 rounded-xl w-fit items-center">generate audio&nbsp; <RiAiGenerate /></button>
                  </div>
                </div>
                <div className="mt-8">
                  <span>get your masterpiece a thumbnail : </span>
                  <div className="p-2 flex items-end">
                    <div className="h-[200px] w-[200px] border rounded-xl flex justify-center items-center">
                      {thumbnail ? <Image src={thumbnail} height={200} width={200} alt="podcast thumbnail" /> : <span className="text-gray-400">no-img</span>}
                    </div>
                    <div className="flex flex-col gap-4 ml-4">
                      <span className="text-sm mr-8 cursor-pointer flex gap-2 items-center justify-center"><MdUpload className="text-5xl" />pick your own art</span>
                      {
                        thumbnailLoader ? <CgSpinner className="animate-spin text-3xl" /> :
                          <button className="text-lg flex bg-gray-200 p-2 rounded-xl w-fit h-fit items-center" onClick={handleGenerateThumbnail}>generate thumbnail&nbsp; <RiAiGenerate /></button>
                      }
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-10 pb-2">
                  <button className="flex items-center border rounded-xl px-4 py-2">Discard&nbsp;<MdDelete /></button>
                  <button className="flex items-center border rounded-xl px-4 py-2" onClick={handlePublish}>Publish&nbsp;<FaGlobe /></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ClerkProvider>
  );
};

export default Create;
