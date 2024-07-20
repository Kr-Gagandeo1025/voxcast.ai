import Image from "next/image"
import { FaHeadphones } from "react-icons/fa"

const PodcastCard = ({id,title,author,plays,thumbnail,category}) => {
  return (
      <div className="bg-white border border-black py-4 px-4 rounded-3xl min-h-[330px] w-[227px] flex flex-col justify-between cursor-pointer" id="card" >
            <div className="h-full flex flex-col">
                <Image src={`data:image/jpeg;base64,${thumbnail}`} alt="podcast img" height={200} width={250} className="object-cover mb-2 rounded-lg border border-dashed border-black"/>
                <div className="flex flex-col">
                    <span className="text-xl font-medium font-body">{title}</span>
                    <div className="flex items-center justify-between text-lg font-medium font-body text-gray-400">
                        <span>@{author}</span>
                        <span className="flex items-center justify-center w-fit gap-2"><FaHeadphones className="text-black"/> {plays} </span>
                    </div>
                    <span className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xs w-fit mt-2">{category}</span>
                </div>
            </div>
        </div>
  )
}

export default PodcastCard
