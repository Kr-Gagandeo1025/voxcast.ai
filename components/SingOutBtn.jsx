'use client'
import { useClerk } from '@clerk/nextjs';
const SingOutBtn = () => {
    const { signOut } = useClerk();
    return (
        <button className='h-fit bg-lime-200 rounded-full py-4 px-4 font-body font-medium' onClick={() => signOut({ redirectUrl: '/' })}>SIGN OUT</button>
    )
}

export default SingOutBtn
