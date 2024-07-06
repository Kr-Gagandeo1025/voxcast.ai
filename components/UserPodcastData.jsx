import Link from 'next/link'
import { CgArrowTopRight } from 'react-icons/cg'
import { MdElectricBolt } from 'react-icons/md'

const UserPodcastData = () => {
  return (
    <div className="bg-white backdrop-blur-xl bg-opacity-50 backdrop-filter border border-black py-4 px-4 rounded-3xl h-fit w-fit flex justify-between items-center gap-4 flex-col" >
        <span className="font-bold text-xl">Podcast Data</span>
        <div className="flex items-center flex-col justify-between gap-4">
            <span>plays : 0</span>
            <span>likes : 0</span>
            <span className="flex items-center gap-2"><MdElectricBolt/> voxcoins : 0</span>
            <Link href="#" className="flex items-center gap-1 text-blue-500 underline" >get voxcoins<CgArrowTopRight/></Link>
            <div className="border-t-1 border-black">
                <span className="font-bold text-xl">manage podcasts</span>
                <div className="flex flex-col w-full justify-center items-center">
                    <span>no podcasts</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPodcastData
