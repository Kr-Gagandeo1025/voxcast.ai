'use client'
import PodcastCard from "@/components/PodcastCard";
import CategoryCard from "@/components/CategoryCard";
import SidePanel from "@/components/SidePanel";
import HomeTopBar from "@/components/HomeTopBar";
import PodcastPlayer from "@/components/PodcastPlayer";

const categories = [
  { title: 'category 1', image: '' },
  { title: 'category 2', image: '' },
  { title: 'category 3', image: '' },
  { title: 'category 4', image: '' },
  { title: 'category 5', image: '' },
];

const Home = () => {
  return ( 
    <main className="h-screen flex w-screen bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
      <SidePanel/>
      <div className="w-full xl:pl-[150px] lg:pl-[59px] pl-[62px]">
        <HomeTopBar/>
        <PodcastPlayer/>
        <div className="px-4 pt-16 flex flex-col overflow-y-scroll max-h-screen no-scrollbar">
          <div className="mt-4">
            <span className="text-3xl border-b border-black ml-2 flex w-full justify-between items-baseline">Categories <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 mx-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {categories.map((category, index) => (
                <CategoryCard key={index} title={category.title} image={category.image} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <span className="xl:text-3xl text-2xl ml-2 flex w-full justify-between items-baseline">Trending <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
            <div className="my-2 flex overflow-x-scroll gap-4 no-scrollbar pl-2">
              <PodcastCard key={1} title={"Dummy Podcast 1"} author={"owner"} likes={32}/>
              <PodcastCard key={1} title={"Dummy Podcast 1"} author={"owner"} likes={32}/>
            </div>
          </div>
          <div className="mt-6">
            <span className="xl:text-3xl text-2xl ml-2 flex w-full justify-between items-baseline">New Release <span className="xl:text-lg text-sm text-gray-400">show more</span></span>
            <div className="my-2 flex gap-4 overflow-x-scroll no-scrollbar pl-2">
              <PodcastCard key={1} title={"Dummy Podcast 1"} author={"owner"} likes={32}/>
              <PodcastCard key={1} title={"Dummy Podcast 1"} author={"owner"} likes={32}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
