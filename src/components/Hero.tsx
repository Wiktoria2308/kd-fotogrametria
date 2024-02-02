import React from 'react'
import Navbar from "@/components/Navbar";
import Link from 'next/link'

const Hero: React.FC = () => {

    return (
        <div className='container mx-auto md:h-screen flex flex-col'>
            <Navbar />
            <div className="w-full pt-12 pb-2 px-4 md:px-0 flex flex-col md:flex-row">
                <div className='basis-1/2 mb-10 md:mb-0'>

                    <Link href="/" className='cursor-default'>
                        <img src="/logo.png" className="max-h-[20rem] cursor-pointer" alt="Logo"></img> 
                    </Link>
                </div>
                <div className='basis-1/2'>
                    <ul className="flex flex-col p-1 space-y-[0.9rem] md:space-y-4 rtl:space-x-reverse mt-0 text-right text-[1.3rem] md:text-[1.4rem] lg:text-[1.6rem] leading-8">
                        <li>
                            <a href="#Ortofotomapy" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Ortofotomapy</a>
                        </li>
                        <li>
                            <a href="#Modele 3D" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Modele 3D</a>
                        </li>
                        <li>
                            <a href="#Chmury punktów" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Chmury punktów</a>
                        </li>
                        <li>
                            <a href="#Monitoring w czasie" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Monitoring w czasie</a>
                        </li>
                        <li>
                            <a href="#Inspekcje miejsc trudno dostępnych" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Inspekcje miejsc trudno dostępnych</a>
                        </li>
                        <li>
                            <a href="#Pomiary mas ziemnych" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Pomiary mas ziemnych</a>
                        </li>
                        <li>
                            <a href="#Przekroje poprzeczne i podłużne" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Przekroje poprzeczne i podłużne</a>
                        </li>
                        <li>
                            <a href="#Dokumentacja i opracowania GIS" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Dokumentacja i opracowania GIS</a>
                        </li>
                        <li>
                            <a href="#Zdjęcia i filmy" className='hover:text-black text-neutral-900 font-semibold hover:font-bold' aria-current="page">Zdjęcia i filmy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pt-16 md:pt-0 px-4 md:px-16 text-[1.3rem] md:text-[1.7rem] pb-5 md:pb-10 2xl:pb-36 text-center text-neutral-800 md:mt-[30%] lg:mt-auto'>
                <p className='leading-[3rem] text-black xl:text-[2rem]'>
                    KD Fotogrametria to nie zwykłe latanie dronem.
                    To profesjonalne opracowania pomiarowe dla Ciebie i Twojej branży.
                    Optymalizuj swoją pracę dzięki opracowaniom fotogrametrii niskiego pułapu.
                </p>
            </div>
        </div>
    )

}

export default Hero;
