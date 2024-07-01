'use client'
import "@/app/globals.css";
import { MuseoModerno } from "next/font/google";
import PodcastCard from "@/components/PodcastCard";
import CategoryCard from "@/components/CategoryCard";
import SidePanel from "@/components/SidePanel";
import { ClerkProvider } from "@clerk/nextjs";
// import { currentUser } from '@clerk/nextjs/server';
// import { useEffect, useState } from "react";

const categories = [
  { title: 'category 1', image: '' },
  { title: 'category 2', image: '' },
  { title: 'category 3', image: '' },
  { title: 'category 4', image: '' },
  { title: 'category 5', image: '' },
  { title: 'category 6', image: '' },
  { title: 'category 7', image: '' },
  { title: 'category 8', image: '' },
  { title: 'category 9', image: '' },
];
const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });


const Home = () => {
  // const [user,setUser] = useState(null)
  // const getUser = async() =>{
  //   const {user} = await currentUser();
  //   setUser(user);
  // }
  // useEffect(()=>{
  //   getUser();
  // },[])
  
  return (
    <ClerkProvider>
    <div className={museo.className}> 
    <main className="h-screen flex w-screen">
      <SidePanel/>
      <div className="w-full xl:pl-[150px] pl-[72px]">
        <div className="flex-1 w-full text-4xl p-2 flex justify-between items-center border-b bg-lime-200 fixed z-1">
          <span>voxcast.ai</span>
        </div>
        <div className="px-4 pt-16 flex flex-col overflow-y-scroll max-h-screen no-scrollbar">
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">Categories <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-3">
              {categories.map((category, index) => (
                <CategoryCard key={index} title={category.title} image={category.image} />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">Trending <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 flex overflow-x-scroll gap-3">
              <PodcastCard/>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">New Release <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 flex gap-3">
              <PodcastCard/>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
    </ClerkProvider>
  )
}

export default Home
