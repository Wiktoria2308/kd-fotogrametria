'use client'
import React from 'react';
import { IoIosCall } from "react-icons/io";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { BsGeoAlt } from 'react-icons/bs';
import { HiChevronDoubleUp } from "react-icons/hi";
import ContactForm from './ContactForm';

const Footer: React.FC = () => {

    const handleScrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <footer className='footer lg:min-h-screen bg-[url("/background_14.jpg")] bg-left bg-cover bg-no-repeat relative' id='footer'>
                {/* Scroll up */}
                <div className="absolute top-2 md:top-10 md:right-10 2xl:top-20 2xl:right-20 z-50 w-full md:w-[unset] flex justify-center">
                    <button onClick={handleScrollToTop}>
                        <HiChevronDoubleUp className="text-4xl 2xl:text-5xl bg-zinc-800 text-white p-2" />
                    </button>
                </div>

            <div className='backdrop-blur-sm bg-white/45 min-h-screen xl:backdrop-blur-none xl:bg-transparent'>
            

                {/* Text */}
                <div className="heading-text text-center pt-14 px-3 lg:px-10 xl:px-0 w-full xl:ml-32">
                    <p className="text-[1.6rem] lg:text-3xl xl:text-[2.5rem] 2xl:text-5xl font-medium lg:font-regular leading-[2rem] lg:leading-[3rem]">
                        Twój partner w pomiarach <br /> innowacyjnych
                    </p>
                </div>
                <div className="text-center w-full xl:ml-32 mt-10 mb-0 lg:my-10 2xl:my-20 heading2-text">
                    <h2 className="text-[1.4rem] lg:text-xl xl:text-2xl 2xl:text-4xl font-normal">Bądźmy w kontakcie</h2>
                </div>
       
                <div className="static xl:absolute xl:inset-0 xl:flex flex-col justify-center">

                    {/* Kontakt */}
                    <div className='flex lg:flex-row flex-col'>
                        <div className="flex-col flex-1 pl-64 2xl:pl-80 self-center hidden xl:flex">
                            <div className="space-y-3 2xl:space-y-4 self-center">
                                <div className='flex justify-center lg:justify-start'>
                                    <IoIosCall className='self-center text-2xl 2xl:text-4xl' />
                                    <p className='text-xl lg:text-2xl 2xl:text-3xl pl-3'>506 343 911</p>
                                </div>
                                <div className='flex justify-center lg:justify-start'>
                                    <PiEnvelopeLight className='self-center text-2xl 2xl:text-4xl' />
                                    <p className='text-xl lg:text-2xl 2xl:text-3xl pl-3'>kdfotogrametria@gmail.com</p>
                                </div>
                                <div className='flex flex-col lg:flex-row'>
                                    <div className='flex justify-center mb-1 lg:mb-0'>
                                        <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className='text-2xl 2xl:text-3xl' />
                                        </a>
                                        <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                            <CiLinkedin className=' text-[2.5rem] pl-2 2xl:text-5xl' />
                                        </a>
                                    </div>
                                    <p className='pl-3 self-center text-sm lg:text-base 2xl:text-xl w-max'>Karolina Dobrzewińska / KD Fotogrametria</p>
                                </div>

                            </div>

                            {/* wide screen only */}
                            <div className="space-y-2 lg:space-y-1 2xl:space-y-3 self-center mt-20 hidden footer-address-short-wide-screen">
                                <p className='font-medium text-[1.4rem] xl:text-[1.6rem] 2xl:text-2xl text-center lg:text-start name'>Karolina Dobrzewińska</p>
                                <div className='flex justify-center lg:justify-start'>
                                    <BsGeoAlt className='self-center text-lg' />
                                    <p className='text-base xl:text-lg pl-2 w-max 2xl:text-2xl'>Szkolna 27, 84-123 Połchowo, Pomorskie</p>
                                </div>
                                <p className='text-base xl:text-lg 2xl:text-xl text-center lg:text-start'><span className='font-medium'>NIP</span> 5871741423 <span className='font-medium pl-2'>REGON</span> 525775750</p>
                            </div>


                        </div>
                        <div className='flex-1 mt-10 xl:mt-16 2xl:mt-28'>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="static xl:absolute bottom-0 pb-8 2xl:pb-10 w-full mt-10 lg:mt-20 xl:mt-0 address-contact-container">
                    {/* address */}
                    <div className='flex lg:flex-row flex-col address-container'>
                        <div className="flex flex-col flex-1 mb-14 xl:mb-0 xl:pl-[15rem] 2xl:pl-[21rem] footer-address-normal-screen">
                            <div className="space-y-2 lg:space-y-1 xl:space-y-2 2xl:space-y-3 self-center">
                                <p className='font-medium text-[1.4rem] xl:text-[1.6rem] 2xl:text-3xl text-center lg:text-start name'>Karolina Dobrzewińska</p>
                                <div className='flex justify-center lg:justify-start'>
                                    <BsGeoAlt className='self-center text-lg' />
                                    <p className='text-base xl:text-lg pl-2 w-max 2xl:text-2xl'>Szkolna 27, 84-123 Połchowo, Pomorskie</p>
                                </div>
                                <p className='text-base xl:text-lg 2xl:text-xl text-center lg:text-start'><span className='font-medium'>NIP</span> 5871741423 <span className='font-medium pl-2'>REGON</span> 525775750</p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="space-y-3 self-center xl:hidden">
                                <div className='flex justify-center lg:justify-start'>
                                    <IoIosCall className='self-center text-2xl' />
                                    <p className='text-xl xl:text-2xl pl-3'>506 343 911</p>
                                </div>
                                <div className='flex justify-center lg:justify-start'>
                                    <PiEnvelopeLight className='self-center text-2xl' />
                                    <p className='text-xl xl:text-2xl pl-3'>kdfotogrametria@gmail.com</p>
                                </div>
                                <div className='flex flex-col lg:flex-row'>
                                    <div className='flex justify-center mb-1 lg:mb-0'>
                                        <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className='text-2xl' />
                                        </a>
                                        <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                            <CiLinkedin className=' text-[2.5rem] pl-2' />
                                        </a>
                                    </div>
                                    <p className='pl-3 self-center text-sm lg:text-sm xl:text-base w-max'>Karolina Dobrzewińska / KD Fotogrametria</p>
                                </div>

                            </div>
                        </div>
                    </div>
                       {/* End address */}
                       </div>
                 </div>
                 </div>
        </footer>
    )

}

export default Footer;