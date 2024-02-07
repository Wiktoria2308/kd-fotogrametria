'use client'
import React, { useState } from 'react'
import Navbar from "@/components/Navbar";
import Link from 'next/link'
import HamburgerButton from '@/components/HamburgerButton';

const Hero: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='md:px-10 xl:px-0 xl:container mx-auto min-h-screen flex flex-col'>
            <Navbar />
            <div className="w-full px-4 md:px-0 flex flex-col md:flex-row relative">
                <div className='basis-1/2 mb-5 md:mb-0'>

                    <Link href="/" className='cursor-default'>
                        <img src="/logo.png" className="max-h-[5rem] md:max-h-[20rem] cursor-pointer" alt="Logo"></img>
                    </Link>
                </div>
                <div className='basis-1/2'>
                    <div className='md:hidden'>
                        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </div>
                    <ul className="flex flex-col p-1 space-y-[0.9rem] md:space-y-5 rtl:space-x-reverse mt-0 text-right text-[1.3rem] md:text-[1.4rem] lg:text-[1.6rem] leading-8 hidden md:block">
                        <li>
                            <a href="#Ortofotomapy" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Ortofotomapy</a>
                        </li>
                        <li>
                            <a href="#Modele 3D" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Modele 3D</a>
                        </li>
                        <li>
                            <a href="#Chmury punktów" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Chmury punktów</a>
                        </li>
                        <li>
                            <a href="#Monitoring w czasie" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Monitoring w czasie</a>
                        </li>
                        <li>
                            <a href="#Inspekcje miejsc trudno dostępnych" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Inspekcje miejsc trudno dostępnych</a>
                        </li>
                        <li>
                            <a href="#Pomiary mas ziemnych" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Pomiary mas ziemnych</a>
                        </li>
                        <li>
                            <a href="#Przekroje poprzeczne i podłużne" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Przekroje poprzeczne i podłużne</a>
                        </li>
                        <li>
                            <a href="#Dokumentacja i opracowania GIS" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Dokumentacja i opracowania GIS</a>
                        </li>
                        <li>
                            <a href="#Zdjęcia i filmy" className='text-neutral-900 font-medium line-style line-style-link' aria-current="page">Zdjęcia i filmy</a>
                        </li>
                    </ul>
                    {isOpen && (
                        <ul className="flex flex-col py-5 pr-5 space-y-[0.9rem] md:space-y-4 rtl:space-x-reverse mt-0 text-right text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] leading-8 bg-zinc-200 rounded-md">
                            <li>
                                <a href="#Ortofotomapy" className='text-neutral-900 font-medium' aria-current="page">Ortofotomapy</a>
                            </li>
                            <li>
                                <a href="#Modele 3D" className='text-neutral-900 font-medium' aria-current="page">Modele 3D</a>
                            </li>
                            <li>
                                <a href="#Chmury punktów" className='text-neutral-900 font-medium' aria-current="page">Chmury punktów</a>
                            </li>
                            <li>
                                <a href="#Monitoring w czasie" className='text-neutral-900 font-medium' aria-current="page">Monitoring w czasie</a>
                            </li>
                            <li>
                                <a href="#Inspekcje miejsc trudno dostępnych" className='text-neutral-900 font-medium' aria-current="page">Inspekcje miejsc trudno dostępnych</a>
                            </li>
                            <li>
                                <a href="#Pomiary mas ziemnych" className='text-neutral-900 font-medium' aria-current="page">Pomiary mas ziemnych</a>
                            </li>
                            <li>
                                <a href="#Przekroje poprzeczne i podłużne" className='text-neutral-900 font-medium' aria-current="page">Przekroje poprzeczne i podłużne</a>
                            </li>
                            <li>
                                <a href="#Dokumentacja i opracowania GIS" className='text-neutral-900 font-medium' aria-current="page">Dokumentacja i opracowania GIS</a>
                            </li>
                            <li>
                                <a href="#Zdjęcia i filmy" className='text-neutral-900 font-medium' aria-current="page">Zdjęcia i filmy</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className='md:pt-0 px-4 md:px-16 pb-5 md:pb-10 2xl:pb-36 text-center text-neutral-800 mt-[30%] md:mt-auto'>
                <p className='leading-[3rem] text-black text-[1.3rem] md:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem]'>
                    KD Fotogrametria to niezwykłe latanie dronem.
                    To profesjonalne opracowania pomiarowe dla Ciebie i Twojej branży.
                    Optymalizuj swoją pracę dzięki opracowaniom fotogrametrii niskiego pułapu.
                </p>
            </div>
        </div>
    )

}

export default Hero;
