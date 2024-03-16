"use client";
import React, { useEffect, useState } from 'react';

interface CategoriesProps {
  title: string;
  description: string;
  image: string;
  image2: string;
}

const Categories: React.FC<CategoriesProps> = ({ title, description, image, image2 }) => {

  const [is2XlScreen, setIs2XlScreen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const xl2Screen = window.matchMedia("(min-width: 1280px)").matches;
      setIs2XlScreen(xl2Screen);
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

  const getDescription = () => {
    if (!showFullDescription && is2XlScreen) {
      return description
    }

    if (showFullDescription) {
      return description
    }
    else if (!showFullDescription) {
      const sentences = description.split('.');
      return sentences.slice(0, 2).join('.') + '.';
    }
  };


  return (
    <div className={`xl:relative h-full xl:min-h-screen pt-20 lg:pt-0 ${title}`} id={title}>
      <div className="xl:absolute xl:inset-0 bg-cover bg-center h-[300px] md:h-[500px] xl:h-full" style={{
        backgroundImage: is2XlScreen ? `url(${image})` : `url(${image2})`
      }}></div>
      <img className='inset-y-0 left-0 absolute w-3/12 mt-5 ml-5 hidden xl:block' src="logo.png" alt="logo" />
      <div className={`xl:inset-y-0 xl:right-0 xl:absolute w-full xl:w-[35%] 2xl:w-[30%] flex flex-col xl:justify-center px-6 lg:px-0 lg:pr-10 2xl:pr-16 categories-info-container`}>
        <div className="text-black xl:text-white pt-10 pb-20 md:pb-10 lg:min-h-[unset] categories-info ">
          <h2 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl font-medium mb-5 lg:mb-6 2xl:mb-10 text-center">{title}</h2>
          <div className="overflow-auto xl:max-h-[400px] 2xl:max-h-[unset] description">
            <p className="text-lg md:text-lg/9 2xl:text-2xl/10 font-normal text-left lg:text-center">
              {getDescription()}
            </p>
            {!showFullDescription && !is2XlScreen && (
              <div className='lg:text-center'>
                <button className="text-base font-normal text-gray-800 hover:text-black mt-4 underline" onClick={toggleDescription}>
                  Czytaj więcej
                </button>
              </div>
            )}
          </div>
          <div className="bg-gray-900 hover:bg-zinc-900 hover:border text-white py-2 xl:py-4 mt-10 xl:mt-0 text-center w-full mx-auto rounded-sm shadow-lg xl:absolute xl:bottom-0">
            <div className='cursor-pointer w-full h-full'>
              <a href="#footer">
                <button className="text-xl md:text-xl lg:text-xl 2xl:text-2xl font-normal">Kontakt</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Categories;
