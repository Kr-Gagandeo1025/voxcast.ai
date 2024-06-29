import Image from 'next/image';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="flex items-center p-2 rounded-md bg-gray-100 text-black sm:p-4 lg:p-6 md:h-20 xl:p-4 xl:h-20">
      <Image 
        src={image} 
        alt={title} 
        width={60} 
        height={60} 
        className="rounded-md w-10 h-10 sm:w-10 sm:h-10 md:w-14 md:h-12 lg:w-16 lg:h-12 xl:w-14 xl:h-10" 
      />
      <span className="ml-2 sm:ml-4 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">{title}</span>
    </div>
  );
};

export default CategoryCard;
