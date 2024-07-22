import Image from 'next/image'
import React from 'react'
import { MdPlayCircle } from 'react-icons/md'

const ContinuePlaying = () => {
  return (
    <div className="p-2 rounded-xl mt-2 bg-white flex items-center justify-between min-w-[300px]">
        <Image src={"/images/demopodcst.png"} height={100} width={100} alt="thumbnail" className="rounded-xl border border-black"/>
        <div className="flex flex-col px-2">
            <span className="font-bold text-lg">demo podcast</span>
            <span className='text-sm'>@username</span>
            <span className='text-sm'>10/06/2002</span>
        </div>
        <MdPlayCircle className="text-5xl ml-4 self-end"/>
    </div>
  )
}

export default ContinuePlaying
