import { MdDelete, MdHeadphones } from "react-icons/md";
import Image from "next/image";

const ManagePodcast = ({data, delFunc}) => {
  return (
    <div className="flex p-2 items-center justify-between w-fit border border-dashed border-black rounded-lg gap-5">
        <Image src={`data:image/jpeg;base64,${data?.podcast_thumbnail}`} alt="thumbnail" className="border border-black rounded-xl" height={60} width={60}/>
        <div className="flex flex-col">
            <span className="text-lg">{data?.podcast_title}</span>
            <div className="flex gap-4 text-xs items-center">
                <span className="bg-gray-500 text-white px-2 py-1 rounded-lg">{data?.podcast_category}</span>
                <span className="flex items-center gap-2 text-sm"><MdHeadphones/>{data?.plays}</span>
            </div>
            <span className="text-sm">{data?.createdAt.slice(0,10)}</span>
        </div>
        <MdDelete className="text-red-800 text-3xl cursor-pointer" onClick={delFunc}/>
    </div>
  )
}

export default ManagePodcast
