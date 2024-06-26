'use client'
import { FaGithub, FaInstagram, FaPlay } from "react-icons/fa";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Image from "next/image";
import sapiens from "@/public/svgs/sapiens.svg"
const Body = () => {
  useGSAP(()=>{
    gsap.fromTo('#card',{
      translateY:50,
      opacity:0,
    },{
      delay:0.2,
      translateY:0,
      opacity:1,
      duration:1,
      stagger:0.2,
    })
    gsap.fromTo('#sub-text',{
      translateY:-50,
      opacity:0,
    },{
      delay:1,
      translateY:0,
      opacity:1,
      duration:1,
    })
    gsap.fromTo('#sub-icons',{
      translateX:-50,
      opacity:0,
    },{
      delay:1.5,
      translateX:0,
      opacity:1,
      duration:0.5,
    })
    gsap.fromTo('#title',{
      translateY:50,
      opacity:0,
    },{
      translateY:0,
      opacity:1,
      duration:1,
    })
  })
  return (
    <main className="p-4 h-full mt-20">
      {/* Adjusted spacing between logo and title */}
      <div className="flex xl:flex-row flex-col justify-between items-center mb-10 mt-12" id="title">
        <h1 className="xl:text-5xl text-3xl font-[100] font-body">THE CHOICE OF OUR USERS</h1>
        <a href="#" className="text-black text-s font-normal mt-4">SHOW MORE &gt;</a>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-1 xl:grid-cols-5 gap-4 h-[50%]">
        {/* New Card */}
        <div className="bg-lime-200 p-4 rounded-3xl h-[475px] w-full flex items-center justify-center" id="card">
          <h2 className="text-3xl font-medium font-body text-black">VOXCAST.AI</h2>
        </div>
        {/* Existing Cards */}
        <div className="bg-gray-50 border p-4 rounded-3xl h-[475px] w-full flex flex-col justify-between" id="card">
          <div>
            <img src="/path/to/image1.jpg" alt="A Pack of Cigarettes" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">OUR PILOT PODCAST</h2>
          </div>
          <button className="h-20 w-20 flex items-center justify-center px-4 py-2 bg-black text-white rounded-full self-start"><FaPlay/></button>
        </div>
        <div className="border p-4 rounded-3xl min-h-[475px] w-full flex flex-col justify-between bg-gray-50" id="card">
          <div className="bg-white p-4 rounded-2xl mb-2 border">
            <h2 className="text-xl font-medium font-body">CATEGORIES</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Knowledge', 'News', 'Exclusive', 'Books', 'Music', 'Podcasts'].map((section) => (
                <span key={section} className="bg-gray-200 px-2 py-1 rounded">{section}</span>
              ))}
            </div>
          </div>
            <div>
              <Image src={'/svgs/sapiens1.svg'} alt="girl w phone" width={100} height={100} className="h-full w-full object-cover"/>
            </div>
        </div>
        <div className="bg-gray-50 border p-4 rounded-3xl h-[475px] w-full flex flex-col justify-between" id="card">
          <div>
            <img src="/path/to/image2.jpg" alt="History of Vinyl" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">HISTORY OF VINYL</h2>
          </div>
          <button className="h-20 w-20 flex items-center justify-center px-4 py-2 bg-black text-white rounded-full self-start"><FaPlay/></button>
        </div>
        <div className="bg-gray-50 border p-4 rounded-3xl min-h-[475px] w-full flex flex-col justify-between" id="card">
          <div>
            <Image src={sapiens} alt="Podcast Image 3" width={100} height={100} className="w-full h-full object-cover" />
          </div>
          <button className="w-26 p-4 bg-black text-white rounded-full self-start">GET IN TOUCH</button>
        </div>
      </section>
      <div className="mt-20 text-2xl w-full font-thin flex justify-between items-center font-body">
        <span className="xl:w-[40%]" id="sub-text">Discover a world of new sensations, listen to ai powered podcasts on all your favourite geners and fun.</span>
        <div className="flex gap-4 text-5xl" id="sub-icons">
          <FaGithub/>
          <FaInstagram/>
        </div>
      </div>
    </main>
  );
};

export default Body;
