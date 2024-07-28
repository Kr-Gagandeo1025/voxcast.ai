'use client'
import { MdClose, MdMenu } from 'react-icons/md'
import MyProfile from './MyProfile'


const HomeTopBar = ({actionbtn,sidebarState}) => {
  
  return (
    <div className="bg-white flex-1 w-full ">
        <div className=" flex w-full items-start justify-between gap-4 bg-lime-200 p-2 rounded-xl flex-wrap">
          <div className='flex items-center gap-2'>
            {sidebarState==="hidden"?
              <MdMenu className="text-3xl cursor-pointer " onClick={actionbtn}/>:
              <MdClose className="text-3xl cursor-pointer " onClick={actionbtn}/>
            }
              <span className="lg:text-3xl text-xl font-bold">voxcast.ai</span>
          </div>
          <MyProfile/>
        </div>
    </div>
  )
}

export default HomeTopBar
