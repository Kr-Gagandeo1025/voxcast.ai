'use client'
import { FaArrowRight, FaGithub, FaInstagram, FaMicrophone, FaPlay } from "react-icons/fa";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Image from "next/image";
import sapiens from "@/public/svgs/sapiens.svg"
import Link from "next/link";
import Categories from "@/app/constants/categories";
import { CgHeadset } from "react-icons/cg";
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
    gsap.fromTo('#hero-img',{
      opacity:0,
    },{
      opacity:1,
      duration:1.5,
    })
    gsap.fromTo('#title',{
      translateX:100,
      opacity:0,
    },{
      translateX:0,
      opacity:1,
      duration:1,
      stagger:0.2,
    })
  })
  return (
    <div>
    <main className="rounded-2xl px-4 pt-28 pb-8 mt-8 bg-lime-200 h-fit">
      {/* Adjusted spacing between logo and title */}
      <div className="flex xl:flex-row flex-col justify-between items-center " id="home" >
        <div className="flex flex-col items-start justify-center gap-4 pl-4 xl:w-1/2 w-full">
          <span className="xl:text-9xl text-5xl font-bold text-wrap lowercase" id="title">For the Podcast you never made.</span>
          <span className="text-black text-3xl" id="title">the ai powered podcast</span>
          <span className="text-black text-2xl font-thin" id="title">explore, create, inspire</span>
          <Link href="/home" className="text-black text-s font-normal mt-4 flex items-center gap-2 p-2 border border-black rounded-xl" id="title">start listening <FaArrowRight className="text-sm"/></Link>
        </div>
        <div className="flex xl:w-1/2 w-full items-center justify-center">
          <Image src={'/svgs/sapiens1.svg'} height={100} width={100} alt="hero-img" className="h-[600px] w-auto" id="hero-img"/>
        </div>
      </div>
      <div className="px-4 pt-20 pb-12 flex flex-col w-full justify-center items-center border-t-1 border-b-1 border-black " id="categories">
        <span className="text-5xl mb-8 font-bold">categories</span>
        <div className="p-4 flex flex-wrap items-center justify-center gap-4 xl:w-[70%] w-full xl:text-lg text-sm">
          {Categories.map((category,index)=>(
            <span key={index} className="p-4 bg-white rounded-full text-xl border border-black cursor-default hover:bg-transparent transition-all ease-in-out">{category.name}</span>
          ))}
        </div>
      </div>
      <section className="flex flex-col justify-center items-center h-[50%] w-full mt-12 border-b-1 pb-4 border-black" id="explore">
        <span className="w-full text-5xl mb-8 text-center font-bold">explore more</span>
        {/* New Card */}
        <div className="flex gap-4 overflow-x-scroll max-w-full no-scrollbar">
          <div className="border border-black bg-transparent p-4 rounded-3xl h-[475px] min-w-[350px] flex items-center justify-center" id="card">
            <h2 className="text-3xl font-medium text-black">voxcast.ai</h2>
          </div>
          {/* Existing Cards */}
          <div className="border border-black bg-transparent p-4 rounded-3xl h-[475px] w-[350px] flex flex-col justify-between" id="card">
            <div>
              <h2 className="text-xl font-medium mb-2 lowercase ">ABOUT US</h2>
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
          <div className="bg-transparent border border-black p-4 rounded-3xl h-[475px] w-[350px] flex flex-col justify-between" id="card">
            <div className="flex flex-col h-full">
              <Image src="/images/tmibsthumbnail.jpeg" alt="mibs-thumbnail" width={200} height={200} className="w-full h-full object-cover mb-2 rounded-lg" />
              <h2 className="text-xl font-medium">the man in black suit</h2>
              <span className="text-sm text-gray-600">@voxcastai</span>
            </div>
            <div className="flex items-center justify-center">
              {/* <button className="h-20 w-20 flex items-center justify-center px-4 py-2 bg-black text-white rounded-full self-start"><FaPlay/></button> */}
              <audio controls controlsList="nodownload">
                <source src="/ex_audios/man_in_black_suit.mp3" type="audio/mpeg"/>
                no audio support
              </audio>
            </div>
          </div>
          {/* <div className="backdrop-blur-xl bg-transparent backdrop-filter border border-black shadow-lg bg-opacity-30 bg-white p-4 rounded-3xl min-h-[475px] min-w-[350px] flex flex-col justify-between" id="card">
            <div>
              <Image src={sapiens} alt="Podcast Image 3" width={100} height={100} className="w-full h-full object-cover" />
            </div>
            <Link href="mailto:voxcastai@gmail.com" target="_blank">
              <button className="w-26 p-4 bg-black text-white rounded-full self-start">GET IN TOUCH</button>
            </Link>
          </div> */}
        </div>
      </section>
      <div className="flex flex-col justify-center items-center w-full mt-12" id="pricing">
        <span className="w-full text-5xl mb-8 text-center font-bold">our pricings</span>
        <div className="flex gap-4 overflow-x-scroll max-w-full no-scrollbar">
          <div className="border border-black bg-transparent p-4 rounded-3xl h-[375px] min-w-[350px] flex flex-col items-start justify-start" id="card">
              <h2 className="text-3xl font-medium text-black flex items-center gap-2">Listener <CgHeadset/></h2>
              <span className="text-5xl font-bold border-black">FREE</span>
              <div className="flex flex-col gap-4 mt-20">
                <span>☑ unlimited podcasts</span>
                <span>☑ listen new podcasts</span>
                <span>⤬ cannot upload podcasts</span>
                <span>☑ lifetime-free</span>
              </div>
          </div>
          <div className="border border-black bg-transparent p-4 rounded-3xl h-[375px] min-w-[350px] flex flex-col items-start justify-start" id="card">
              <h2 className="text-3xl font-medium text-black flex items-center gap-2">Creator <FaMicrophone/></h2>
              <span className="text-5xl font-bold border-black flex items-baseline gap-2">$2.5 <span className="text-sm">for 50 voxcoins</span></span>
              <div className="flex flex-col gap-4 mt-20">
                <span>☑ unlimited podcasts</span>
                <span>☑ listen new podcasts</span>
                <span>☑ upload podcasts voxcoins based</span>
                <span>☑ get early updates</span>
                <span>☑ get paid* t&c </span>
              </div>
          </div>
        </div>
      </div>
    </main>
      <div className="mt-20 text-2xl w-full font-medium flex xl:flex-row flex-col justify-between items-center">
        <span className="xl:w-[40%] text-sm xl:text-lg text-black" id="sub-text">Discover a world of new sensations, listen to ai powered podcasts on all your favourite genres and fun.</span>
        <div className="flex items-center gap-4 xl:text-5xl text-3xl" id="sub-icons">
          <Link href="mailto:voxcastai@gmail.com" target="_blank">
              <button className="p-4 text-lg bg-black text-white rounded-full self-start lowercase">GET IN TOUCH</button>
            </Link>
            <Link href="https://github.com/Kr-Gagandeo1025" target="_blank">
            <FaGithub/>
            </Link>
            <Link href="https://www.instagram.com/voxcast.ai?igsh=MWkyczU3OGRpeGZ6bA==" target="_blank">
            <FaInstagram/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
