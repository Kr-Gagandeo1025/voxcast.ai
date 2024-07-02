'use client'
import PodcastCard from "@/components/PodcastCard";
import CategoryCard from "@/components/CategoryCard";
import SidePanel from "@/components/SidePanel";

const categories = [
  { title: 'category 1', image: '' },
  { title: 'category 2', image: '' },
  { title: 'category 3', image: '' },
  { title: 'category 4', image: '' },
  { title: 'category 5', image: '' },
  { title: 'category 6', image: '' },
  { title: 'category 7', image: '' },
  { title: 'category 8', image: '' },
  { title: 'category 9', image: '' },
];

const Home = () => {
  return ( 
    <main className="h-screen flex w-screen">
      <SidePanel/>
      <div className="w-full xl:pl-[150px] pl-[72px] md:pl-[62px]">
        <div className="flex-1 w-full text-4xl p-2 flex justify-between items-center border-b bg-lime-200 fixed z-1">
          <span>voxcast.ai</span>
        </div>
        <div className="px-4 pt-16 flex flex-col overflow-y-scroll max-h-screen no-scrollbar">
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">Categories <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-3">
              {categories.map((category, index) => (
                <CategoryCard key={index} title={category.title} image={category.image} />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">Trending <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 flex overflow-x-scroll gap-3">
              <PodcastCard key={1} title={"Dummy Podcast 1"} author={"owner"}/>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl border-b ml-2 flex w-full justify-between items-baseline">New Release <span className="text-lg text-gray-400">show more</span></span>
            <div className="my-2 flex gap-3">
              <PodcastCard key={1} title={"Dummy Podcast 1"} author={"owner"}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
