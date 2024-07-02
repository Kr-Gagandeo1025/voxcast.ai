import Nav from "@/components/Nav";
import Body from "@/components/Body";
import {auth} from "@clerk/nextjs/server"

export default function Home() {
  const { userId }  = auth();

  return (
    <main className='max-h-screen p-4'>
      
      <Nav isSigned={userId}/>
      <Body/>  
    </main>
  );
}