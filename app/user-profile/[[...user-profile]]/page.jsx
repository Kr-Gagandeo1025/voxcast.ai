import { UserProfile } from "@clerk/nextjs";
import SidePanel from "@/components/SidePanel";
import HomeTopBar from "@/components/HomeTopBar";

export default function UserProfilePage(){
    return(
            <div className="bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
            <SidePanel/>
            <div className="w-screen h-screen xl:pl-[150px] lg:pl-[59px] pl-[62px] flex justify-between">
                <HomeTopBar/>
                <div className="mt-24 mx-4 flex xl:flex-row flex-col justify-between">
                    <UserProfile path="/user-profile"/>
                    <div className="w-full flex items-center p-4 flex-col">
                        <span className="text-3xl mb-4 bold">Buy Tokens</span>
                    </div>
                </div>
            </div>
            </div>
    )
}
    