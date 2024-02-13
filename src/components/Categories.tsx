"use client";
import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface CategoriesProps {
  title: string;
  description: string;
  mediaSources: { type: string; source: string }[];
}

const Categories: React.FC<CategoriesProps> = ({ title, description, mediaSources }) => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='lg:h-screen container mx-auto py-16 md:py-24 lg:py-36 2xl:py-52'>
    <div id={title} className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-6 xl:px-0">
      <div className="lg:w-1/2 h-full flex flex-col px-5 md:px-10 lg:px-16 justify-center">
        <div className='text-white'>
          <h2 className="text-2xl md:text-3xl font-medium mb-10 text-center">{title}</h2>
          <p className="text-lg md:text-xl/9 2xl:text-2xl/10 font-light text-left lg:text-center">{description}</p>
        </div>
        <a href="#footer" className='cursor-pointer mt-10'>
          <div className="bg-black hover:bg-zinc-900 hover:border text-white py-2 text-center ">
            <button className="w-full text-xl md:text-2xl font-light">Kontakt</button>
          </div>
        </a>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 h-1/2 xl:h-full flex items-center">
        <div className="flex flex-wrap h-full">
          {mediaSources.map((media, index) => (
            <div key={index} className="w-full md:w-1/2 h-[300px] xl:h-1/2 overflow-hidden p-5 md:p-3" onClick={() => openImageModal(media.source)}>
              {media.type === 'image' ? (
                <img src={media.source} alt={`Category ${index + 1} for ${title}`} className="w-full h-full object-cover hover:cursor-zoom-in shadow-md" />
              ) : media.type === 'video' ? (
                <video controls className="w-full h-full object-cover">
                  <source src={media.source} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          ))}
        </div>
        {selectedImage && (
        <ImageModal imageUrl={selectedImage} closeModal={closeImageModal} />
      )}
      </div>
     
    </div>

     </div>
  );
};

export default Categories;
