import React from 'react';

interface CategoriesProps {
  title: string;
  description: string;
  imageSources: string[];
}

const Categories: React.FC<CategoriesProps> = ({ title, description, imageSources }) => {
  return (
    <div id={title} className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8 md:py-20 min-h-max lg:h-[45rem]">
      <div className="md:w-2/5 md:pr-8 h-full flex flex-col justify-between">
        <div className='text-center text-white'>
          <h2 className="text-3xl font-semibold mb-6">{title}</h2>
          <p className="text-xl font-light leading-8">{description}</p>
        </div>
        <a href="#footer" className='cursor-pointer'>
        <div className="mt-4 bg-black text-white py-2 text-center">
          <button className="w-full text-2xl font-light">Kontakt</button>
        </div>
        </a>
      </div>
      <div className="md:w-3/5 mt-8 md:mt-0 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          {imageSources.map((src, index) => (
            <div key={index} className="w-full h-full overflow-hidden">
              <img src={src} alt={`Image for ${title} ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
