import Image from 'next/image'
import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { IoOptions } from 'react-icons/io5'
import { MdPlayCircle, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const PodcastPlayer = ({playerData}) => {
  return (
    <div className='w-full bottom-0 xl:pl-[150px] lg:pl-[59px] pl-[74px] text-4xl p-0 flex justify-center items-center border-black bg-transparent bg-white bg-opacity-30 backdrop-blur-xl backdrop-filter fixed z-10'>
        {playerData!==null && <div className='flex justify-end p-2 items-center w-full text-3xl gap-3'>
            <div className='flex'>
                <Image src={`data:image/jpeg;base64,${playerData.thumbnail}`} height={100} width={100} alt='pd-icon' className='rounded-lg border border-black border-dashed'/>
            </div>
            {/* <div className='flex gap-4 mx-4'>
                <MdSkipPrevious/>
                <MdPlayCircle/>
                <MdSkipNext/>
            </div> */} 
            <div className='flex flex-col items-start justify-between'>
                <span className='text-lg font-bold'>{playerData.title}</span>
                { playerData.audio &&
                    <audio controls controlsList='nodownload' src={`data:audio/mpeg;base64,${playerData.audio}`} />
                }
            </div>
            
            {/* <div>
                <IoOptions/>
            </div> */}
        </div>}
        {playerData===null && <div>
                <span className='flex items-center gap-2 m-10'><CgSpinner className='animate-spin'/> loading...</span>
            </div>}
    </div>
  )
}

export default PodcastPlayer
