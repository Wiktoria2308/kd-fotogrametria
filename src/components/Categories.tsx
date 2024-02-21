"use client";
import React, { useEffect, useState } from 'react';

interface CategoriesProps {
  title: string;
  description: string;
  image: string;
}

const Categories: React.FC<CategoriesProps> = ({ title, description, image }) => {

  const [isXlScreen, setIsXlScreen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const xlScreen = window.matchMedia("(min-width: 1280px)").matches;
      setIsXlScreen(xlScreen);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={`xl:relative h-full xl:min-h-screen mb-20 md:mb-36 ${title}`} id={title}>
      <div className="xl:absolute xl:inset-0 bg-cover bg-center h-[300px] md:h-[500px] xl:h-full" style={{ backgroundImage: `url(${image})` }}></div>
      <div className={`xl:inset-y-0 xl:right-0 xl:absolute w-full xl:w-[35%] ${isXlScreen ? 'bg-blur-right' : 'bg-zinc-300'} flex flex-col xl:justify-center`}>
        <div className="text-black px-6 lg:px-10 pt-10 pb-20 md:pb-10 lg:min-h-[unset] categories-info">
          <h2 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl font-medium mb-5 lg:mb-6 2xl:mb-10 text-center">{title}</h2>
          <div className="overflow-auto xl:max-h-[400px] 2xl:max-h-[unset] description">
            <p className="text-lg md:text-lg/9 2xl:text-2xl/10 font-normal text-left lg:text-center">
              {showFullDescription || isXlScreen ? description : `${description.split('.')[0]}.`}
            </p>
            {!isXlScreen && !showFullDescription && (
              <button className="text-base font-normal text-gray-800 hover:text-black mt-4 underline" onClick={toggleDescription}>
                Czytaj więcej
              </button>
            )}
          </div>
          <div className="bg-gray-900 hover:bg-zinc-900 hover:border text-white py-2 text-center mt-10 w-full 2xl:w-3/5 mx-auto rounded-md">
            <div className='cursor-pointer w-full h-full'>
              <a href="#footer">
                <button className="text-xl md:text-xl lg:text-xl 2xl:text-2xl font-light">Kontakt</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Categories;
