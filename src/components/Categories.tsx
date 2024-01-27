import React from 'react';

interface CategoriesProps {
  title: string;
  description: string;
  mediaSources: { type: string; source: string }[];
}

const Categories: React.FC<CategoriesProps> = ({ title, description, mediaSources }) => {
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
        {mediaSources.map((media, index) => (
              <div key={index} className="w-full h-full overflow-hidden">
                {media.type === 'image' ? (
                  <img src={media.source} alt={`Category ${index + 1} for ${title}`} className="w-full h-full object-cover" />
                ) : media.type === 'video' ? (
                  <video controls className="w-full h-full">
                    <source src={media.source} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
