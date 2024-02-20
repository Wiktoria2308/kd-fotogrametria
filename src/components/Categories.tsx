"use client";
import React from 'react';

interface CategoriesProps {
  title: string;
  description: string;
  image: string;
}

const Categories: React.FC<CategoriesProps> = ({ title, description, image }) => {



  return (
    <div className={`relative bg-no-repeat bg-cover min-h-screen bg-center mb-36 ${title}`} style={{ backgroundImage: `url(${image})` }} id={title}>
    <div className="inset-y-0 right-0 absolute w-[35%] bg-blur-right flex flex-col justify-center">
    <div className="text-black px-24 2xl:px-32 py-10">
      <h2 className="text-2xl md:text-3xl font-medium mb-10 text-center">{title}</h2>
      <p className="text-lg md:text-xl/9 2xl:text-2xl/10 font-normal text-left lg:text-center">{description}</p>
      <div className="bg-gray-900 hover:bg-zinc-900 hover:border text-white py-2 text-center mt-20 w-full 2xl:w-3/5 mx-auto rounded-md">
        <div className='cursor-pointer w-full h-full'>
        <a href="#footer">
          <button className="text-xl md:text-2xl font-light">Kontakt</button>
        </a>
        </div>
      </div>
    </div>
    </div>

  </div>
  );
};

export default Categories;
