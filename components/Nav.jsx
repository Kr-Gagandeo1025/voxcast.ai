'use client'
import React from 'react';
import voxcastailogo from '@/public/voxcastailogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Nav = ({isSigned}) => {
  return (
    <div className='flex justify-between items-center flex-wrap'>
      {/* Logo (left) */}
      <div className='flex items-center'>
        <Image src={voxcastailogo} height={50} width={50} className='h-11 mr-2' alt='voxcast.ai logo' />
        <span className='xl:text-4xl text-2xl font-normal'>voxcast.ai</span>
      </div>

      {/* Login/Sign Up (right) */}
      {isSigned? 
          <div className='border border-gray-300 rounded-full w-fit flex gap-4'>
            <Link href='/home'><button className='flex gap-2 items-center h-full p-4 font-body font-medium'>HOME <FaArrowRight/></button></Link>
        </div>
      :
        <div className='border border-gray-300 rounded-full w-fit flex gap-4'>
          <Link href='/sign-in'><button className='h-full pl-4 font-body font-medium'>SIGN IN</button></Link>
          <Link href='/sign-up'><button className='h-full bg-lime-200 rounded-full py-4 px-4 font-body font-medium'>SIGN UP</button></Link>
        </div>
      }
    </div>
  );
};

export default Nav;
