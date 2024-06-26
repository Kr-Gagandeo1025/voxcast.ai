import React from 'react';

const Body = () => {
  return (
    <main className="p-4">
      {/* Adjusted spacing between logo and title */}
      <div className="flex justify-between items-center mb-10 mt-12">
        <h1 className="text-4xl font-normal font-body">THE CHOICE OF OUR USERS</h1>
        <a href="#" className="text-black text-s font-normal mt-4">SHOW MORE &gt;</a>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* New Card */}
        <div className="bg-lime-200 p-4 rounded-lg h-80 w-full flex items-center justify-center">
          <h2 className="text-xl font-medium font-body text-black">VOXCAST.AI</h2>
        </div>
        {/* Existing Cards */}
        <div className="bg-gray-100 p-4 rounded-lg h-80 w-full flex flex-col justify-between">
          <div>
            <img src="/path/to/image1.jpg" alt="A Pack of Cigarettes" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">A PACK OF CIGARETTES</h2>
          </div>
          <button className="w-26 px-4 py-2 bg-black text-white rounded-full self-start">LISTEN &gt;</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-80 w-full flex flex-col justify-between">
          <div className="bg-white p-2 rounded mb-2">
            <h2 className="text-xl font-medium font-body">SECTIONS</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Knowledge', 'News', 'Exclusive', 'Books', 'Music', 'Podcasts'].map((section) => (
                <span key={section} className="bg-gray-200 px-2 py-1 rounded">{section}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-80 w-full flex flex-col justify-between">
          <div>
            <img src="/path/to/image2.jpg" alt="History of Vinyl" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">HISTORY OF VINYL</h2>
          </div>
          <button className="w-26 px-4 py-2 bg-black text-white rounded-full self-start">LISTEN &gt;</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-80 w-full flex flex-col justify-between">
          <div>
            <img src="/path/to/image3.jpg" alt="Podcast Image 3" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">PODCAST TITLE 3</h2>
          </div>
          <button className="w-26 px-4 py-2 bg-black text-white rounded-full self-start">LISTEN &gt;</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-80 w-full flex flex-col justify-between">
          <div>
            <img src="/path/to/image4.jpg" alt="Podcast Image 4" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">PODCAST TITLE 4</h2>
          </div>
          <button className="w-26 px-4 py-2 bg-black text-white rounded-full self-start">LISTEN &gt;</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg h-80 w-full flex flex-col justify-between">
          <div>
            <img src="/path/to/image5.jpg" alt="Podcast Image 5" className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-medium mb-2 font-body">PODCAST TITLE 5</h2>
          </div>
          <button className="w-26 px-4 py-2 bg-black text-white rounded-full self-start">LISTEN &gt;</button>
        </div>
      </section>
    </main>
  );
};

export default Body;
