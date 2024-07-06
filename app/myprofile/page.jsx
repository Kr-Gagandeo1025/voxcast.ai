'use client'
import HomeTopBar from "@/components/HomeTopBar";
import SidePanel from "@/components/SidePanel";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgArrowTopRight, CgCheck, CgLink } from "react-icons/cg";
import { MdEmail} from "react-icons/md";

const Page = () => {
    const {user} = useUser();
    const username = user?.username;
    const fullname = user?.fullName;
    const emailId = user?.emailAddresses[0].emailAddress;
    const [joinedWaitlist,setJoinedWaitlist] = useState(false);

    

    useEffect(()=>{
        const getWaitlist = async() => {
            const response = await fetch("/api/get-waitlist",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({username}),
            });
            const result = await response.json();
            if(result.success === true){
                setJoinedWaitlist(true);
            }
        }
        getWaitlist();
    },[username]);

    const handleJoinWaitlist = async() => {
        const response = await fetch('/api/enter-waitlist',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                fullname:fullname,
                username:username,
                emailId:emailId,
            })
        });
        const result = await response.json();
        if(response.ok){
            toast.success(`${result.message} with id: ${result.id}`)
        }else{
            toast.error(`${result.error}`);
        }
    }
    if(user){
        return (
            <div className="bg-gradient-to-tl from-stone-100 via-transparent to-lime-200 h-screen">
                <Toaster/>
            <SidePanel/>
            <div className="w-screen xl:pl-[150px] lg:pl-[59px] pl-[62px] flex justify-between">
                <HomeTopBar/>
                <div className="mt-24 ml-8 flex xl:flex-row flex-col justify-start items-start w-full gap-2">
                    <div className="bg-white w-fit backdrop-blur-xl bg-opacity-30 backdrop-filter border border-black py-4 px-4 rounded-3xl h-fit flex justify-between items-center gap-4 flex-col ">
                        <div className="flex xl:gap-20 gap-10 flex-col items-center">
                            <span className="font-bold text-xl">User Data</span>
                            <Image src={user.imageUrl} height={100} width={100} alt='profile pic' className="rounded-full"/>
                            <div className="flex flex-col justify-start xl:text-lg text-sm">
                                <span className="font-bold">{fullname}</span>
                                <span>@{username}</span>
                                <span className="flex items-center gap-2"><MdEmail/>{emailId}</span>
                            </div>
                        </div>
                        <div>
                            <Link href='/user-profile' className="flex items-center gap-1 underline text-blue-400">manage profile<CgArrowTopRight/></Link>
                        </div>
                    </div>
                    {joinedWaitlist? 
                    <div className="bg-white backdrop-blur-xl bg-opacity-50 backdrop-filter border border-black py-4 px-4 rounded-3xl h-fit w-fit flex justify-between items-center gap-4 flex-col" >
                        <span className="flex items-center">Already Entered Waitlist <CgCheck className="text-5xl"/></span>
                    </div> :
                    <div className="text-xl mt-20">
                        <span className="font-bold w-fit flex items-center justify-center gap-2 p-2 border border-black rounded-xl cursor-pointer" onClick={handleJoinWaitlist}>Join Creator Waitlist<CgLink/></span>
                        <p className="text-sm flex flex-col font-bold">
                            <span>benefits : </span>
                            - get extra 50 voxcoins <br/>
                            - early access <br />
                            - early insights <br />
                            - more reach because of early creator-ship
                        </p>
                    </div>
                    }
                </div>
            </div>
            </div>
        )
    }else{
        return(
            <div className="flex items-center justify-center w-full h-full">
                unable to get userdata
            </div>
        )
    }
}

export default Page
