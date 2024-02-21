'use client'
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link'
import HamburgerButton from './HamburgerButton';
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SlArrowDown } from 'react-icons/sl';

const Hero: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpenDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    return (
        <div className="bg-background1 bg-cover bg-center bg-no-repeat min-h-screen relative custom-background">
            <div className='px-4 md:px-10 xl:px-0 xl:container mx-auto'>
                <nav className="w-full flex flex-col md:flex-row relative mt-10 mb-0 md:mb-10">
                    <div className='basis-1/2 mb-5 md:mb-0 md:mr-14 lg:mr-20 xl:mr-0 xl:self-center xl:flex xl:justify-center'>
                        <Link href="/" className='cursor-default'>
                            <img src="/logo.png" className="max-h-[5rem] md:max-h-[8rem] cursor-pointer" alt="Logo" />
                        </Link>
                    </div>
                    <div className='basis-1/2 xl:mt-2 '>
                        <div className='md:hidden'>
                            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                        <div className='flex flex-col md:space-y-8 lg:space-y-10 xl:space-y-12 hidden md:block'>
                            <ul ref={dropdownRef} className="font-medium flex flex-row md:space-x-8 lg:space-x-16 rtl:space-x-reverse md:justify-end lg:justify-start">
                                <li>
                                    <a href="#about" className="line-style line-style-link md:text-base lg:text-lg xl:text-xl" aria-current="page">O firmie</a>
                                </li>

                                <li className='relative' onClick={toggleDropdown}>
                                    <div className='line-style line-style-link flex flex-row cursor-pointer'>
                                        <p className="md:text-base lg:text-lg xl:text-xl" aria-current="page">Usługi</p>
                                        <div className="pl-[5px] self-center">
                                            <SlArrowDown />
                                        </div>
                                    </div>
                                    <ul className={`absolute top-full left-0  ${isOpenDropdown ? '' : 'hidden'} bg-white shadow-2xl rounded-md py-6 text-left pl-5 space-y-4 min-w-72 z-10`}>
                                        <li>
                                            <a href="#Ortofotomapy" className="text-lg">Ortofotomapy</a>
                                        </li>
                                        <li>
                                            <a href="#Modele 3D" className="text-lg">Modele 3D</a>
                                        </li>
                                        <li>
                                            <a href="#Chmury punktów" className="text-lg">Chmury punktów</a>
                                        </li>
                                        <li>
                                            <a href="#Monitoring w czasie" className="text-lg">Monitoring w czasie</a>
                                        </li>
                                        <li>
                                            <a href="#Inspekcje miejsc trudno dostępnych" className="text-lg">Inspekcje miejsc trudno dostępnych</a>
                                        </li>
                                        <li>
                                            <a href="#Pomiary mas ziemnych" className="text-lg">Pomiary mas ziemnych</a>
                                        </li>
                                        <li>
                                            <a href="#Przekroje poprzeczne i podłużne " className="text-lg">Przekroje poprzeczne i podłużne </a>
                                        </li>
                                        <li>
                                            <a href="#Analizy przestrzenne" className="text-lg">Analizy przestrzenne</a>
                                        </li>
                                        <li>
                                            <a href="#Zdjęcia i filmy " className="text-lg">Zdjęcia i filmy </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#footer" className="line-style line-style-link md:text-base lg:text-lg xl:text-xl" aria-current="page">Realizacje</a>
                                </li>
                                <li>
                                    <a href="#footer" className="line-style line-style-link md:text-base lg:text-lg xl:text-xl" aria-current="page">Kontakt</a>
                                </li>
                            </ul>

                            <div className='flex flex-row md:justify-end lg:justify-start'>
                                <div className='flex space-x-2 lg:space-x-5'>
                                    <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='md:text-[1.6rem] lg:text-[1.7rem]' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                        <CiLinkedin className='md:text-[2.2rem] lg:text-[2.3rem]' />
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
                    <div className='absolute lg:static top-1/4 inset-x-0 lg:mt-12 2xl:mt-16'>
                        <p className='text-black text-center text-[1.7rem] md:text-[1.7rem] lg:text-[2.3rem] 2xl:text-[2.8rem]'>
                            Witaj w świecie pomiarów innowacyjnych
                        </p>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Hero;
