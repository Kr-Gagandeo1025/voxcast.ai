import Image from 'next/image';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="flex cursor-pointer items-center justify-start p-2 rounded-md bg-white backdrop-blur-xl border border-dashed border-black bg-opacity-30 text-black sm:p-4 lg:p-6 md:h-20 xl:p-4 xl:h-20">
      <Image 
        src={image} 
        alt={title} 
        width={60} 
        height={60} 
        className="rounded-md h-14 object-cover" 
      />
      <span className="ml-2 sm:ml-4 text-xs sm:text-base md:text-md lg:text-lg xl:text-xl text-wrap flex">{title}</span>
    </div>
  );
};

export default CategoryCard;
