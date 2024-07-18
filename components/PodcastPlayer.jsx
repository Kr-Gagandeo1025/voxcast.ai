import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { CgHeadset, CgSpinner } from 'react-icons/cg'
import { IoOptions } from 'react-icons/io5'
import { MdPauseCircle, MdPlayCircle, MdSkipNext, MdSkipPrevious, MdVolumeUp } from 'react-icons/md'

const PodcastPlayer = ({playerData}) => {

    const audioRef = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume,setVolume] = useState(1);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if(isPlaying){
            audio.pause();
        }else{
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleSeek = (event) => {
        const audio = audioRef.current;
        const newTime = (event.target.value / 100) * audio.duration;
        audio.currentTime = newTime;
        setProgress(event.target.value);
    };
    
    const handleVolumeChange = (event) => {
        const audio = audioRef.current;
        const newVolume = event.target.value;
        audio.volume = newVolume;
        setVolume(newVolume);
    };

    useEffect(()=>{
        const audio = audioRef.current;
        audio?.addEventListener('timeupdate',handleTimeUpdate);
        return () => {
            audio?.removeEventListener('timeupdate',handleTimeUpdate);
        };
    },[playerData]);


  return (
    <div className='w-full h-32 text-4xl p-0 flex justify-center items-center bg-white transition-all ease-in-out border border-black rounded-xl '>
        {playerData!==null && 
        <div className='flex justify-between p-2 h-full items-center w-full text-3xl gap-3'>
            <div className='flex gap-4'>
                <Image src={`data:image/jpeg;base64,${playerData.thumbnail}`} height={100} width={100} alt='pd-icon' className='rounded-lg border border-black border-dashed lg:h-24 h-12 w-auto'/>
                <div className='flex flex-col justify-center items-start'>
                    <span className='lg:text-xl text-sm font-bold'>{playerData.title}</span>
                    <span className='lg:text-sm text-xs text-gray-500'>@{playerData.author}</span>
                    <span className='lg:text-sm text-xs text-gray-500 flex items-center gap-2'><CgHeadset/>{playerData.plays}</span>
                </div>
            </div>
            { playerData.audio &&
            <div className='flex w-2/3 items-center justify-center'>
                <audio ref={audioRef} src={`data:audio/mpeg;base64,${playerData.audio}`} />
                <div className='flex flex-col w-full lg:text-5xl text-2xl items-center'>
                    <div className='flex gap-6 mb-3'>
                        <MdSkipPrevious className='cursor-pointer'/>
                        {isPlaying?<MdPauseCircle onClick={togglePlayPause} className='cursor-pointer'/>:<MdPlayCircle onClick={togglePlayPause} className='cursor-pointer'/>}
                        <MdSkipNext/>
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
  )
}

export default PodcastPlayer
