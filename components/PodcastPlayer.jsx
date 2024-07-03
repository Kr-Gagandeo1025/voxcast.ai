import Image from 'next/image'
import React from 'react'
import { IoOptions } from 'react-icons/io5'
import { MdPlayCircle, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const PodcastPlayer = () => {
  return (
    <div className='flex border border-black backdrop-blur-xl backdrop-filter bg-white bg-opacity-30 fixed bottom-0 right-0 z-10 w-fit h-fit mb-6 mr-6 rounded-xl ml-32'>
        <div className='flex justify-between p-4 items-center w-full text-3xl'>
            <div className='flex'>
                <Image src="/images/demopodcst.png" height={100} width={100} alt='pd-icon' className='rounded-lg border border-black border-dashed'/>
            </div>
            <div className='flex gap-4 mx-4'>
                <MdSkipPrevious/>
                <MdPlayCircle/>
                <MdSkipNext/>
            </div>
            <div>
                <IoOptions/>
            </div>
        </div>
    </div>
  )
}

export default PodcastPlayer
