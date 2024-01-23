import React from 'react'
import Navbar from "@/components/Navbar";
import Link from 'next/link'

const Hero: React.FC = () => {

    return (
        <div>
            <Navbar />
            <div className="w-full pt-6 pb-2 px-4 md:px-10 flex flex-col md:flex-row">
                <div className='basis-1/2 mb-6 md:mb-0'>

                    <Link href="/" className="">
                        <img src="/logo.png" className="max-h-[20rem]" alt="Logo" />
                    </Link>
                </div>
                <div className='basis-1/2'>
                    <ul className="font-regular md:font-medium flex flex-col p-1 space-y-[0.9rem] md:space-y-4 rtl:space-x-reverse mt-0 text-right text-[1.5rem] md:text-[1.6rem] leading-8">
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Ortofotomapy</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Modele 3D</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Chmury punktów</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Monitoring w czasie</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Inspekcje miejsc trudno dostępnych</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Pomiary mas ziemnych</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Przekroje poprzeczne i podłużne</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Dokumentacja i opracowania GIS</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-neutral-700 text-neutral-900' aria-current="page">Zdjęcia i filmy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pt-16 md:pt-12 px-4 md:px-16 text-[1.3rem] md:text-[1.7rem] pb-20 md:pb-0 text-center text-neutral-800'>
                <p className='leading-[3rem] text-black'>
                    KD Fotogrametria to nie zwykłe latanie dronem.
                    To profesjonalne opracowania pomiarowe dla Ciebie i Twojej branży.
                    Optymalizuj swoją pracę dzięki opracowaniom fotogrametrii niskiego pułapu.
                </p>
            </div>
        </div>
    )

}

export default Hero;
