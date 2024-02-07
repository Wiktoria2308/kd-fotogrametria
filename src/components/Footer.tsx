'use client'
import React, { useState, useEffect } from 'react';
import { IoIosCall } from "react-icons/io";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { BsGeoAlt } from 'react-icons/bs';
import { HiChevronDoubleUp } from "react-icons/hi";
import Link from 'next/link'

const Footer: React.FC = () => {

    const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

    const handleScrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = (): void => {
        const scrollTop: number = window.scrollY;

        if (scrollTop > 200) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className='bg-hero-pattern bg-cover bg-no-repeat relative' id='footer'>
            <div className="backdrop-grayscale-0 bg-white/45">

                <div className="lg:container mx-auto py-24">
                    <div
                        id="scroll-to-top"
                        className={`absolute bg-zinc-800 text-white cursor-pointer text-[2.5rem] p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showScrollToTop ? "show" : ""
                            }`}
                        onClick={handleScrollToTop}
                    >
                        <HiChevronDoubleUp className="absolute bg-zinc-800 text-white cursor-pointer text-[2.5rem] p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                    </div>
                    <div className="text-center mb-14 px-3 md:px-10 lg:px-0">
                        <p className="text-xl lg:text-2xl font-regular">
                            Korzystaj z najnowszych rozwiązań w Twojej branży i zobacz świat z innej perspektywy.
                        </p>
                    </div>
                    <div className="text-center mb-10">
                        <h2 className="text-xl md:text-2xl font-medium md:font-semibold mb-4">Kontakt</h2>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between pb-14 lg:px-36 px-4 md:px-0">
                        <div className="flex flex-col mb-14 xl:mb-0">
                            <div className="space-y-2 md:space-y-1 self-center">
                                <p className='font-medium text-[1.4rem] md:text-[1.6rem] text-center md:text-start'>Karolina Dobrzewińska</p>
                                <div className='flex justify-center md:justify-start'>
                                    <BsGeoAlt className='self-center text-lg' />
                                    <p className='text-base md:text-lg pl-2 w-max'>Szkolna 27, 84-123 Połchowo, Pomorskie</p>
                                </div>
                                <p className='text-base md:text-lg text-center md:text-start'><span className='font-medium'>NIP</span> 5871741423 <span className='font-medium pl-2'>REGON</span> 525775750</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="space-y-3 self-center">
                                <div className='flex justify-center md:justify-start'>
                                    <IoIosCall className='self-center text-2xl' />
                                    <p className='text-xl md:text-2xl pl-3'>506 343 911</p>
                                </div>
                                <div className='flex justify-center md:justify-start'>
                                    <PiEnvelopeLight className='self-center text-2xl' />
                                    <p className='text-xl md:text-2xl pl-3'>kdfotogrametria@gmail.com</p>
                                </div>
                                <div className='flex flex-col md:flex-row'>
                                    <div className='flex justify-center mb-1 md:mb-0'>
                                    <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='text-2xl' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                        <CiLinkedin className=' text-[2.5rem] pl-2' />
                                    </a>
                                    </div>
                                    <p className='pl-3 self-center text-sm md:text-base w-max'>Karolina Dobrzewińska / KD Fotogrametria</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:px-10 lg:px-36'>
                        <Link href="/" className='mb-10 md:mb-0 self-center md:self-start'>
                            <img src="/logo.png" className="max-h-[5rem] md:max-h-[7rem] lg:max-h-[8rem]" alt="Logo" />
                        </Link>
                        <div className="flex flex-row self-center md:self-start'">
                            <img src="/qr_linkedin.jpg" alt="LinkedIn QR code" className="max-h-[5rem] md:max-h-[6rem] lg:max-h-[7rem] mr-5" />
                            <img src="/qr_facebook.png" alt="Facebook QR code" className="max-h-[5rem] md:max-h-[6rem] lg:max-h-[7rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;