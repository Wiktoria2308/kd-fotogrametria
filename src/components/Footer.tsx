import React from 'react'
import { IoIosCall } from "react-icons/io";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { BsGeoAlt } from 'react-icons/bs';
import Link from 'next/link'

const Footer: React.FC = () => {

    return (
        <footer className='bg-hero-pattern bg-cover bg-no-repeat' id='footer'>
            <div className="backdrop-grayscale-0 bg-white/45">
                <div className="container mx-auto py-24">
                    <div className="text-center mb-14 px-3 md:px-0">
                        <p className="text-2xl font-regular">
                            Korzystaj z najnowszych rozwiązań w Twojej branży i zobacz świat z innej perspektywy.
                        </p>
                    </div>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between pb-14 lg:px-36">
                        <div className="flex flex-col mb-14 md:mb-0">
                            <div className="space-y-1 self-center">
                                <p className='font-medium text-[1.6rem]'>Karolina Dobrzewińska</p>
                                <div className='flex'>
                                    <BsGeoAlt className='self-center text-lg' />
                                    <p className='text-lg pl-2'>Szkolna 27, 84-123 Połchowo, Pomorskie</p>
                                </div>
                                <p className='text-lg'><span className='font-medium'>NIP</span> 5871741423 <span className='font-medium pl-2'>REGON</span> 525775750</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="space-y-3 self-center">
                                <div className='flex'>
                                    <IoIosCall className='self-center text-2xl' />
                                    <p className='text-xl md:text-2xl pl-3'>506 343 911</p>
                                </div>
                                <div className='flex'>
                                    <PiEnvelopeLight className='self-center text-2xl' />
                                    <p className='text-xl md:text-2xl pl-3'>kdfotogrametria@gmail.com</p>
                                </div>
                                <div className='flex'>
                                    <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='text-2xl' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
                                        <CiLinkedin className=' text-[2.5rem] pl-2' />
                                    </a>
                                    <p className='pl-3 self-center text-sm md:text-base'>Karolina Dobrzewińska / KD Fotogrametria</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between lg:px-36'>
                            <Link href="/" className='mb-10 md:mb-0 self-center md:self-start'>
                                <img src="/logo.png" className="max-h-[6rem] md:max-h-[8rem]" alt="Logo" />
                            </Link>
                        <div className="flex flex-row self-center md:self-start'">
                            <img src="/qr_linkedin.jpg" alt="LinkedIn QR code" className="max-h-[5rem] md:max-h-[7rem] mr-5" />
                            <img src="/qr_facebook.png" alt="Facebook QR code" className="max-h-[5rem] md:max-h-[7rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;