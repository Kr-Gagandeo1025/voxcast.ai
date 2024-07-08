'use client'
import { useClerk } from '@clerk/nextjs';
import { FaSignOutAlt } from 'react-icons/fa';
const SingOutBtn = () => {
    const { signOut } = useClerk();
    return (
        <button className='bg-white rounded-full w-full py-4 px-4 flex items-center justify-center gap-2 text-lg' onClick={() => signOut({ redirectUrl: '/' })}>
            <FaSignOutAlt/>
            <span className='md:flex hidden'>log out</span>
        </button>
    )
}

export default SingOutBtn
