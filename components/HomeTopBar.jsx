'use client'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdClose, MdMenu } from 'react-icons/md'
import MyProfile from './MyProfile'


const HomeTopBar = ({actionbtn,sidebarState}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="bg-white flex-1 w-full">
        <div className=" flex w-full items-center justify-start gap-4 bg-lime-200 p-2 rounded-xl">
          {sidebarState==="hidden"?
            <MdMenu className="text-3xl cursor-pointer " onClick={actionbtn}/>:
            <MdClose className="text-3xl cursor-pointer " onClick={actionbtn}/>
          }
            <span className="text-3xl font-bold">voxcast.ai</span>
        </div>
        <div className="text-3xl flex items-start mt-2 mb-4">
            <div className="relative flex items-center w-full">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black pr-2" />
                <input
                    type="text"
                    placeholder="search..."
                    className="border bg-transparent bg-white bg-opacity-30 rounded-lg px-4 py-2 w-full text-lg outline-none pl-12"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <MyProfile/>
        </div>
    </div>
  )
}

export default HomeTopBar
