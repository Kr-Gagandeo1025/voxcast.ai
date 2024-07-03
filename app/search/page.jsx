'use client'
import SidePanel from "@/components/SidePanel";
import { FaSearch } from "react-icons/fa";
import PodcastCard from "@/components/PodcastCard";
import { useState } from "react";
import HomeTopBar from "@/components/HomeTopBar";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const suggestions = [
    { title: "Suggestion 1", description: "Description for suggestion 1", author: "Author 1" },
    { title: "Suggestion 2", description: "Description for suggestion 2", author: "Author 2" },
    { title: "Suggestion 3", description: "Description for suggestion 3", author: "Author 3" },
    { title: "Suggestion 4", description: "Description for suggestion 4", author: "Author 4" },
    { title: "Suggestion 5", description: "Description for suggestion 5", author: "Author 5" },
    { title: "Suggestion 5", description: "Description for suggestion 5", author: "Author 5" },
  ];

  return (
        <main className="h-screen w-screen flex bg-gradient-to-tl from-stone-100 via-transparent to-lime-200">
          <SidePanel />
          <div className="w-full xl:pl-[150px] lg:pl-[59px] pl-[62px]">
            <HomeTopBar/>
            <div className="px-4 pt-16 flex flex-col overflow-y-scroll h-screen no-scrollbar">
              <div className="text-3xl flex items-center mb-8 mt-4">
                <div className="relative flex items-center w-full">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black pr-2" />
                  <input
                    type="text"
                    placeholder="search..."
                    className="border border-black border-dashed bg-transparent bg-white bg-opacity-30 rounded-lg px-4 py-2 w-full text-lg outline-none pl-12"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                <button className="ml-4 bg-lime-200 text-black px-5 py-2 text-lg rounded-lg flex items-center">
                  Search
                </button>
              </div>
              {searchTerm === "" && (
                <div>
                  <div className="text-3xl mb-4">Suggestions</div>
                  <div className="flex gap-8 overflow-x-scroll no-scrollbar">
                    {suggestions.map((suggestion, index) => (
                      <PodcastCard
                        key={index}
                        title={suggestion.title}
                        description={suggestion.description}
                        author={suggestion.author}
                      />
                    ))}
                  </div>
                </div>
              )}
              {searchTerm !== "" && (
                <div className="my-2 flex flex-wrap gap-8">
                  <PodcastCard title="Search Result 1" description="Description for search result 1" author="Author 1" />
                  <PodcastCard title="Search Result 2" description="Description for search result 2" author="Author 2" />
                  <PodcastCard title="Search Result 3" description="Description for search result 3" author="Author 3" />
                </div>
              )}
            </div>
          </div>
        </main>
  );
};

export default Search;
