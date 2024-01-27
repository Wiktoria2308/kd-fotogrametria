import React from 'react'
import { IoIosCall } from "react-icons/io";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link'

const Footer: React.FC = () => {

    return (
        <footer className='bg-hero-pattern bg-cover bg-no-repeat' id='footer'>
                <div className="backdrop-grayscale-0 bg-white/45">
                    <div className="text-center mb-14 pt-14">
                        <p className="text-2xl font-regular">
                            Korzystaj z najnowszych rozwiązań w Twojej branży i zobacz świat z innej perspektywy.
                        </p>
                    </div>
                    <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          </div>
          <div className="flex justify-center pb-14">
          <div className="w-1/2 p-4 flex flex-col">
              <div className="self-center space-y-1">
                <p className='font-medium text-[1.7rem]'>Karolina Dobrzewińska</p>
                <p className='text-lg'>Szkolna 27, 84-123 Połchowo, Pomorskie</p>
                <p className='text-lg'>NIP 5871741423 REGON 525775750</p>
              </div>
            </div>
            <div className="w-1/2 p-4 flex flex-col">
              <div className="self-center space-y-3">
                <div className='flex'>
                    <IoIosCall className='self-center text-2xl'/>
                    <p className='text-2xl pl-3'>506 343 911</p> 
                </div>
              <div className='flex'>
              <PiEnvelopeLight className='self-center text-2xl'/>
              <p className='text-2xl pl-3'>kdfotogrametria@gmail.com</p>
              </div>
               <div className='flex'>
                <a href="https://www.facebook.com/profile.php?id=100093544128388" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
               <FaFacebook className='text-2xl'/>
               </a>
               <a href="https://www.linkedin.com/company/kd-fotogrametria/" className='cursor-pointer self-center' target="_blank" rel="noopener noreferrer">
               <CiLinkedin className=' text-[2.5rem] pl-2'/>
               </a>
               <p className='pl-3 self-center'>Karolina Dobrzewińska / KD Fotogrametria</p>
               </div>
              
              </div>
            </div>
          </div>
                <div className='flex px-[10rem] pb-10'>
                <Link href="/">
                        <img src="/logo.png" className="max-h-[8rem]" alt="Logo" />
                    </Link>
                </div>   
            </div>
        </footer>
    )

}

export default Footer;