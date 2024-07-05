import { UserProfile } from "@clerk/nextjs";
import SidePanel from "@/components/SidePanel";
import HomeTopBar from "@/components/HomeTopBar";
import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";

export default function UserProfilePage(){
    return(
            <div className="bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
                <HomeTopBar/>
            <div className="w-screen h-screen flex flex-col">
                <Link href="/myprofile" className="mt-24 flex items-center text-xl gap-1 underline"><CgArrowLeft/>go back</Link>
                <div className="mt-24 mx-4 flex xl:flex-row flex-col justify-center items-center">
                    <UserProfile path="/user-profile"/>
                </div>
            </div>
            </div>
    )
}
    