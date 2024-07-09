import Image from 'next/image'
import React from 'react'
import { CgHeadset, CgSpinner } from 'react-icons/cg'
import { IoOptions } from 'react-icons/io5'
import { MdPlayCircle, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const PodcastPlayer = ({playerData}) => {
  return (
    <div className='w-full h-32 text-4xl p-0 flex justify-center items-center bg-white transition-all ease-in-out border border-black rounded-xl '>
        {playerData!==null && <div className='flex lg:flex-row flex-col justify-between p-2 items-center w-full text-3xl gap-3'>
            <div className='flex gap-4'>
                <Image src={`data:image/jpeg;base64,${playerData.thumbnail}`} height={100} width={100} alt='pd-icon' className='rounded-lg border border-black border-dashed lg:h-24 h-12 w-auto'/>
                <div className='flex flex-col justify-center items-start'>
                    <span className='text-xl font-bold'>{playerData.title}</span>
                    <span className='text-sm text-gray-500'>@{playerData.author}</span>
                    <span className='text-sm text-gray-500 flex items-center gap-2'><CgHeadset/>{playerData.plays}</span>
                </div>
            </div>
            {/* <div className='flex gap-4 mx-4'>
                <MdSkipPrevious/>
                <MdPlayCircle/>
                <MdSkipNext/>
            </div> */} 
            <div className='flex flex-col items-start justify-between'>
                { playerData.audio &&
                    <audio controls controlsList='nodownload' src={`data:audio/mpeg;base64,${playerData.audio}`} />
                }
            </div>
            
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
