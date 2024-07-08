import Image from "next/image"
import { FaHeadphones } from "react-icons/fa"
import demopodcst from "@/public/images/demopodcst.png"

const PodcastCard = ({id,title,author,plays,thumbnail}) => {
  return (
      <div className="bg-white backdrop-blur-xl bg-opacity-40 backdrop-filter border border-black py-4 px-4 rounded-3xl h-fit min-w-[227px] flex flex-col justify-between cursor-pointer" id="card" >
            <div>
                <Image src={`data:image/jpeg;base64,${thumbnail}`} alt="A Pack of Cigarettes" height={200} width={250} className="object-cover mb-2 rounded-lg border border-dashed border-black"/>
                <div className="flex flex-col">
                    <span className="text-xl font-medium font-body">{title}</span>
                    <div className="flex items-center justify-between text-lg font-medium font-body text-gray-400">
                        <span>@{author}</span>
                        <span className="flex items-center justify-center w-fit gap-2"><FaHeadphones className="text-black"/> {plays} </span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PodcastCard
