import Nav from "@/components/Nav";
import Body from "@/components/Body";
import {auth} from "@clerk/nextjs/server"

export default function Home() {
  const { userId }  = auth();

  return (
    <main className='h-screen xl:px-12 px-2 py-2 overflow-y-scroll no-scrollbar scroll-smooth'>  
      <Nav isSigned={userId}/>
      <Body/>  
    </main>
  );
}