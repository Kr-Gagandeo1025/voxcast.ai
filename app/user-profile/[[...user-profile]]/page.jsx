import { UserProfile } from "@clerk/nextjs";
import SidePanel from "@/components/SidePanel";
import HomeTopBar from "@/components/HomeTopBar";
import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";

export default function UserProfilePage(){
    return(
            <div className="flex flex-col p-4">
                <div className="w-full bg-lime-200 rounded-xl p-4">
                    <span className="text-4xl font-bold">voxcast.ai</span>
                </div>
                <div className="w-full flex flex-col">
                    <Link href="/home" className="flex items-center w-full justify-end text-xl gap-1 underline"><CgArrowLeft/>go back</Link>
                    <div className="mt-24 mx-4 flex xl:flex-row flex-col justify-center items-center">
                        <UserProfile path="/user-profile"/>
                    </div>
                </div>
            </div>
    )
}
    