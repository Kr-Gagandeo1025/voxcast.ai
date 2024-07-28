import Image from 'next/image';
import React from 'react';
import { MdPlayCircle } from 'react-icons/md';

const ContinuePlaying = ({ title, author, onClick }) => {
    return (
        <div className="p-2 rounded-xl mt-2 bg-white flex items-center justify-between min-w-[300px]" onClick={onClick}>
            
            <div className="flex flex-col px-2">
                <span className="font-bold text-lg">{title}</span>
                <span className='text-sm'>@{author}</span>
              
                
            </div>
            <MdPlayCircle className="text-5xl ml-4 self-end"/>
        </div>
    );
}

export default ContinuePlaying;


