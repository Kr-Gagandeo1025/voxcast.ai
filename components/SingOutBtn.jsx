'use client'
import { useClerk } from '@clerk/nextjs';
import { FaSignOutAlt } from 'react-icons/fa';
const SingOutBtn = () => {
    const { signOut } = useClerk();
    return (
        <button className='bg-lime-200 rounded-full py-4 px-4 flex items-center justify-center gap-2' onClick={() => signOut({ redirectUrl: '/' })}>
            <FaSignOutAlt/>
            <span className='xl:flex hidden'>Sign Out</span>
        </button>
    )
}

export default SingOutBtn
