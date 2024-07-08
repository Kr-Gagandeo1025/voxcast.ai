'use client'
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Nav = ({isSigned}) => {
  return (
    <div className='flex justify-between items-center bg-white'>
      {/* Logo (left) */}
      <div className='flex items-baseline gap-4'>
        <span className='xl:text-4xl text-2xl font-bold'>voxcast.ai</span>
        <span className='hidden xl:flex'>Home</span>
        <span className='hidden xl:flex'>Categories</span>
        <span className='hidden xl:flex'>Explore</span>
        <span className='hidden xl:flex'>Pricing</span>
      </div>

      {/* Login/Sign Up (right) */}
      {isSigned? 
          <div className='border border-black rounded-full w-fit flex gap-4'>
            <Link href='/home'><button className='flex gap-2 items-center h-full py-2 px-4 font-body font-medium'>Home <FaArrowRight/></button></Link>
        </div>
      :
        <div className='border border-black rounded-full w-fit flex gap-4'>
          <Link href='/sign-in'><button className='h-full pl-4 font-body font-medium'>Sign in</button></Link>
          <Link href='/sign-up'><button className='h-full bg-lime-200 bg-opacity-50 border-l border-black rounded-full py-4 px-4 font-body font-medium'>Sign up</button></Link>
        </div>
      }
    </div>
  );
};

export default Nav;
