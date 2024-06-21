'use client'
import React from 'react'
import longhamburger from '@/public/longhamburger.svg'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='flex justify-between items-center'>
        <Image src={longhamburger} height={'auto'} width={150} alt='menu' className='w-[50px] md:w-[150px]'/>
        <span className='text-4xl font-thin'>voxcast.ai</span>
        <div className='border border-gray-300 rounded-full w-fit hidden md:flex gap-4'>
            <button className='pl-4'>LOGIN</button>
            <button className='h-full bg-green-400 rounded-full py-2 px-4'>SIGN UP &gt;</button>
        </div>
    </div>
  )
}

export default Nav
