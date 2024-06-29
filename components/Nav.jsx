'use client'
import React from 'react';
import voxcastailogo from '@/public/voxcastailogo.png';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className='flex justify-between items-center flex-wrap'>
      {/* Logo (left) */}
      <div className='flex items-center'>
        <Image src={voxcastailogo} height={50} width={50} className='h-11 mr-2' alt='voxcast.ai logo' />
        <span className='xl:text-4xl text-2xl font-normal'>voxcast.ai</span>
      </div>

      {/* Login/Sign Up (right) */}
      <div className='border border-gray-300 rounded-full w-fit flex gap-4'>
        <button className='pl-4 font-body font-medium'>LOGIN</button>
        <button className='h-full bg-lime-200 rounded-full py-4 px-4 font-body font-medium'>SIGN UP &gt;</button>
      </div>
    </div>
  );
};

export default Nav;
