import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import demopodcst from "@/public/images/demopodcst.png"

const PodcastCard = ({key,title,description,author}) => {
  return (
      <div className="bg-gray-50 border py-4 px-8 rounded-3xl h-[400px] min-w-fit flex flex-col justify-between" id="card">
            <div>
                <h2 className="text-xl font-medium font-body">{title}</h2>
                <h6 className="text-lg font-medium mb-2 font-body text-gray-400">{author}</h6>
                <Image src={demopodcst} alt="A Pack of Cigarettes" height={200} width={250} className="object-cover mb-2 rounded-lg" />
            </div>
            <div className="h-fit w-fit rounded-full p-8 bg-lime-200 -translate-y-12 self-end">
                <FaPlay className="text-3xl"/>
            </div>
        </div>
  )
}

export default PodcastCard
