import Nav from "@/components/Nav";
import Body from "@/components/Body";
import {auth} from "@clerk/nextjs/server"

export default function Home() {
  const { userId }  = auth();

  return (
    <main className='min-h-screen p-0 bg-gradient-to-tl from-stone-100 via-transparent to-lime-200'>  
      <Nav isSigned={userId}/>
      <Body/>  
    </main>
  );
}