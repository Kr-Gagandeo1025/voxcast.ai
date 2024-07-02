import { UserProfile } from "@clerk/nextjs";
import SidePanel from "@/components/SidePanel";

export default function UserProfilePage(){
    return(
            <div>
            <SidePanel/>
            <div className="w-screen h-screen xl:pl-[150px] pl-[72px] flex items-center justify-between">
                <div className="flex flex-col items-center justify-center h-full w-fit pl-4">
                    <span className="text-3xl mb-4">voxcast.ai</span>
                    <UserProfile path="/user-profile"/>
                </div>
                <div className="w-full flex items-center justify-center flex-col">
                    <span className="text-3xl mb-4 bold">Buy Tokens</span>
                </div>
            </div>
            </div>
    )
}
    