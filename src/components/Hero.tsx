'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import HamburgerButton from './HamburgerButton';
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Hero: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="bg-background1 bg-cover bg-center bg-no-repeat min-h-screen relative custom-background">
        <div className='px-4 md:px-10 xl:px-0 xl:container mx-auto'>
        <nav className="w-full flex flex-col md:flex-row relative mt-10 mb-0 md:mb-10">
            <div className='basis-1/2 mb-5 md:mb-0 md:mr-14 lg:mr-20 xl:mr-0'>
                <Link href="/" className='cursor-default'>
                    <img src="/logo.png" className="max-h-[5rem] md:max-h-[8rem] xl:max-h-[10rem] cursor-pointer" alt="Logo" />
                </Link>
            </div>
            <div className='basis-1/2 xl:mt-2'>
                <div className='md:hidden'>
                    <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <div className='flex flex-col md:space-y-8 lg:space-y-10 xl:space-y-16 hidden md:block'>
                    <ul className="font-medium flex flex-row md:space-x-8 lg:space-x-16 rtl:space-x-reverse md:justify-end lg:justify-start">
                        <li>
                            <a href="#about" className="line-style line-style-link md:text-base lg:text-lg xl:text-2xl" aria-current="page">O firmie</a>
                        </li>
                        <li>
                            <a href="#Ortofotomapy" className="line-style line-style-link md:text-base lg:text-lg xl:text-2xl" aria-current="page">Usługi</a>
                        </li>
                        <li>
                            <a href="#footer" className="line-style line-style-link md:text-base lg:text-lg xl:text-2xl" aria-current="page">Realizacje</a>
                        </li>
                        <li>
                            <a href="#footer" className="line-style line-style-link md:text-base lg:text-lg xl:text-2xl" aria-current="page">Kontakt</a>
                        </li>
                    </ul>

                    <div className='flex flex-row md:justify-end lg:justify-start'>
                        <div className='flex space-x-2 lg:space-x-5'>
                            <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='md:text-[1.6rem] lg:text-[1.9rem]' />
                            </a>
                            <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                <CiLinkedin className='md:text-[2.2rem] lg:text-[2.5rem]' />
                            </a>
                        </div>
                        <p className='pl-2 lg:pl-5 self-center text-base md:text-base lg:text-xl w-max'>Karolina Dobrzewińska / KD Fotogrametria</p>
                    </div>
                </div>
                {isOpen && (
                       <ul className="flex flex-col py-5 pr-5 space-y-4 rtl:space-x-reverse mt-0 text-right bg-orange-50 rounded-md">
                           <li>
                            <a href="#about" className="text-xl" aria-current="page">O firmie</a>
                        </li>
                        <li>
                            <a href="#Ortofotomapy" className="text-xl" aria-current="page">Usługi</a>
                        </li>
                        <li>
                            <a href="#footer" className="text-xl" aria-current="page">Realizacje</a>
                        </li>
                        <li>
                            <a href="#footer" className="text-xl" aria-current="page">Kontakt</a>
                        </li>
                       </ul>
                 )}

            </div>
        </nav>
        {isOpen === false && (
            <div className='absolute lg:static top-1/4 inset-x-0 lg:mt-16'>
                <p className='text-black text-center text-[1.7rem] md:text-[1.7rem] lg:text-[2.5rem] xl:text-[2.8rem]'>
                    Witaj w świecie pomiarów innowacyjnych
                </p>
            </div>
             )}
        </div>
        </div>
    )

}

export default Hero;
