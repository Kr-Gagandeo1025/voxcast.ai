import Image from "next/image"
import { FaPlay, FaHeart } from "react-icons/fa"
import demopodcst from "@/public/images/demopodcst.png"

const PodcastCard = () => {
  return (
      <div className="bg-gray-50 border py-4 px-8 rounded-3xl h-[450px] min-w-fit flex flex-col justify-between" id="card">
            <div>
                <h2 className="text-xl font-medium font-body">OUR PILOT PODCAST</h2>
                <h6 className="text-lg font-medium mb-2 font-body text-gray-400">makers of voxcast</h6>
                <Image src={demopodcst} alt="A Pack of Cigarettes" height={200} width={250} className="object-cover mb-2 rounded-lg" />
            </div>
            <div className="flex justify-between items-center gap-4">
                <button className="h-20 w-20 flex items-center justify-center px-2 py-2 bg-black text-white rounded-full self-start"><FaPlay/></button>
                <span className="flex gap-2 justify-between items-center"><FaPlay/>32M</span>
                <span className="flex gap-2 justify-between items-center"><FaHeart/>32</span>
            </div>
        </div>
  )
}

export default PodcastCard
