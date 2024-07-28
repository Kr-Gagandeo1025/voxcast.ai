'use client'
import Image from 'next/image'
import React,{useEffect} from 'react'
import { CgBookmark, CgHeadset, CgSpinner } from 'react-icons/cg'
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { MdPauseCircle, MdPlayCircle, MdVolumeUp } from 'react-icons/md'
import { useAudioPlayer } from '@/providers/AudioPlayerContext';
import toast, { Toaster } from 'react-hot-toast';

const PodcastPlayer = () => {
    const {
        audioRef,
        isPlaying,
        togglePlayPause,
        progress,
        handleSeek,
        volume,
        handleVolumeChange,
        skipForward,
        skipBackward,
        playerData,
        handleTimeUpdate
    } = useAudioPlayer();

    useEffect(()=>{
        const audio = audioRef.current;
        audio?.addEventListener('timeupdate',handleTimeUpdate);
        return () => {
            audio?.removeEventListener('timeupdate',handleTimeUpdate);
        };
    },[playerData,audioRef,handleTimeUpdate]);


  return (
    <>
    <Toaster/>
    <div className='w-full h-32 text-4xl p-0 flex justify-center items-center bg-white transition-all ease-in-out border border-black rounded-xl '>
        {playerData!==null && 
        <div className='flex justify-between p-2 h-full items-center w-full text-3xl gap-3'>
            <div className='flex gap-4'>
                <Image src={`data:image/jpeg;base64,${playerData.thumbnail}`} height={100} width={100} alt='pd-icon' className='rounded-lg border border-black border-dashed lg:h-24 h-12 w-auto'/>
                <div className='flex flex-col justify-center items-start'>
                    <span className='lg:text-xl text-sm font-bold'>{playerData.title}</span>
                    <div className='flex items-end gap-4'>
                        <div>
                            <span className='lg:text-sm text-xs text-gray-500'>@{playerData.author}</span>
                            <span className='lg:text-sm text-xs text-gray-500 flex items-center gap-2'><CgHeadset/>{playerData.plays}</span>
                        </div>
                        <button><CgBookmark className='text-3xl' onClick={()=>{toast.error("Save feature coming soon")}}/></button>
                    </div>
                </div>
            </div>
            { playerData.audio &&
            <div className='flex w-2/3 items-center justify-center'>
                <audio ref={audioRef} src={`data:audio/mpeg;base64,${playerData.audio}`} />
                <div className='flex flex-col w-full lg:text-5xl text-2xl items-center'>
                    <div className='flex gap-6 mb-3 text-gray-600'>
                        <TbRewindBackward10 className='cursor-pointer' onClick={skipBackward}/>
                        {isPlaying?<MdPauseCircle onClick={togglePlayPause} className='cursor-pointer'/>:<MdPlayCircle onClick={togglePlayPause} className='cursor-pointer'/>}
                        <TbRewindForward10 className='cursor-pointer' onClick={skipForward}/>
                    </div>
                    <input type='range' value={progress} onChange={handleSeek} className='w-full bg-lime-200 cursor-pointer'/>
                </div>
                <div className='lg:flex hidden gap-4 w-full justify-end'>
                    <div className='flex items-center gap-2'>
                        <MdVolumeUp/>
                        <input type="range" value={volume} min="0" max="1" step="0.01" onChange={handleVolumeChange} className='cursor-pointer'/>
                    </div>
                </div>
            </div>

            }
            
            {/* <div>
                <IoOptions/>
            </div> */}
        </div>}
        {playerData===null && <div>
                <span className='flex items-center text-lg gap-2 m-10'><CgSpinner className='animate-spin'/> loading...</span>
            </div>}
    </div>
    </>
  )
}

export default PodcastPlayer
