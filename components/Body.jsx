'use client'
import { FaArrowRight, FaGithub, FaInstagram, FaPlay } from "react-icons/fa";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Image from "next/image";
import sapiens from "@/public/svgs/sapiens.svg"
import Link from "next/link";
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
    <main className="p-6 h-full mt-20 bg-transparent">
      {/* Adjusted spacing between logo and title */}
      <div className="flex xl:flex-row flex-col justify-between items-center mb-10 mt-2" id="title">
        <h1 className="xl:text-5xl text-3xl font-bold">THE AI PODCAST - Discover, Imagine, Create </h1>
        <Link href="/home" className="text-black text-s font-normal mt-4 flex items-center gap-2">discover <FaArrowRight className="text-sm"/></Link>
      </div>
      <section className="flex justify-center items-center flex-wrap gap-4 h-[50%]">
        {/* New Card */}
        <div className="backdrop-blur-xl border border-black bg-transparent backdrop-filter shadow-lg bg-opacity-30 bg-white p-4 rounded-3xl h-[475px] w-[350px] flex items-center justify-center" id="card">
          <h2 className="text-3xl font-medium text-black">VOXCAST.AI</h2>
        </div>
        {/* Existing Cards */}
        <div className="backdrop-blur-xl border border-black bg-transparent backdrop-filter shadow-lg bg-opacity-30 bg-white p-4 rounded-3xl h-[475px] w-[350px] flex flex-col justify-between" id="card">
          <div>
            <h2 className="text-xl font-medium mb-2 ">ABOUT US</h2>
            <Image src="/voxcastailogo.png" alt="A Pack of Cigarettes" height={100} width={100} className="w-full h-full object-contain mb-2 rounded-lg" />
          </div>
          <div className="flex items-center justify-center">
            {/* <button className="h-20 w-20 flex items-center justify-center px-4 py-2 bg-black text-white rounded-full self-start"><FaPlay/></button> */}
            <audio controls controlsList="nodownload">
              <source src="/ex_audios/voxcast_intro.mp3" type="audio/mpeg"/>
              no audio support
            </audio>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-transparent border border-black backdrop-filter shadow-lg bg-opacity-30 bg-white p-4 rounded-3xl min-h-[475px] w-[350px] flex flex-col justify-between" id="card">
          <div className="bg-white p-4 rounded-2xl mb-2 border bg-transparent bg-opacity-40">
            <h2 className="text-xl font-medium ">CATEGORIES</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Knowledge', 'News', 'Exclusive', 'Books', 'Music', 'Podcasts'].map((section) => (
                <span key={section} className="bg-white bg-transparent px-2 py-1 rounded">{section}</span>
              ))}
            </div>
          </div>
            <div>
              <Image src={'/svgs/sapiens1.svg'} alt="girl w phone" width={100} height={100} className="h-full w-full object-cover"/>
            </div>
        </div>
        <div className="backdrop-blur-xl bg-transparent backdrop-filter border border-black shadow-lg bg-opacity-30 bg-white p-4 rounded-3xl h-[475px] w-[350px] flex flex-col justify-between" id="card">
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-medium mb-2">MAN IN BLACK SUIT - example podcast</h2>
            <Image src="/images/tmibsthumbnail.jpeg" alt="mibs-thumbnail" width={200} height={200} className="w-full h-full object-cover mb-2 rounded-lg" />
          </div>
          <div className="flex items-center justify-center">
            {/* <button className="h-20 w-20 flex items-center justify-center px-4 py-2 bg-black text-white rounded-full self-start"><FaPlay/></button> */}
            <audio controls controlsList="nodownload">
              <source src="/ex_audios/man_in_black_suit.mp3" type="audio/mpeg"/>
              no audio support
            </audio>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-transparent backdrop-filter border border-black shadow-lg bg-opacity-30 bg-white p-4 rounded-3xl min-h-[475px] w-[350px] flex flex-col justify-between" id="card">
          <div>
            <Image src={sapiens} alt="Podcast Image 3" width={100} height={100} className="w-full h-full object-cover" />
          </div>
          <Link href="mailto:voxcastai@gmail.com" target="_blank">
            <button className="w-26 p-4 bg-black text-white rounded-full self-start">GET IN TOUCH</button>
          </Link>
        </div>
      </section>
      <div className="mt-20 text-2xl w-full font-medium flex xl:flex-row flex-col justify-between items-center">
        <span className="xl:w-[40%] text-sm xl:text-lg text-black" id="sub-text">Discover a world of new sensations, listen to ai powered podcasts on all your favourite geners and fun.</span>
        <div className="flex gap-4 xl:text-5xl text-3xl" id="sub-icons">
          <FaGithub/>
          <FaInstagram/>
        </div>
      </div>
    </main>
  );
};

export default Body;
