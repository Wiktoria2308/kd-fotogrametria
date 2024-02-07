import React from "react";
import { PiClockThin } from "react-icons/pi";
// import { GoClock } from "react-icons/go";
import { FaRulerCombined } from "react-icons/fa";



const AboutSection: React.FC = () => {

    return (
        <div className="container mx-auto md:min-h-screen md:flex md:flex-col md:justify-center md:items-center" id="about">
        <div className='pb-5 md:pb-0 text-center'>
            <p className='leading-[3rem] font-regular px-4 md:px-[5rem] lg:px-[10rem] text-black text-[1.3rem] md:text-[1.7rem]'>
            KD Fotogrametria powstała z pasji i chęci tworzenia. 
            Przenoszę obszary i obiekty w przestrzeń trójwymiarową,
             aby pomóc Ci wznieść efektywność Twojej pracy na wyższy poziom.
            </p>
            <p className="pt-14 px-4 md:px-0 font-medium text-xl md:text-2xl lg:text-[1.7rem]">Współpraca z KD Fotogrametria to:</p>
        </div>
        <div className="px-4 lg:px-16 pt-10 md:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="mb-10 md:mb-0">
            <img src="clock.png" alt="clock icon" className="mx-auto mb-10 w-1/5 md:w-1/3 lg:w-auto"/>
            <p className="font-semibold text-center text-xl lg:text-[1.45rem] md:h-[3.5rem] 2xl:h-[2.5rem]">Krótkie terminy realizacji</p>
            <p className="text-center pt-5 text-lg lg:text-[1.4rem] font-regular">Wiemy jak cenny jest czas, dlatego opracowania przygotowywane są nawet w dniu wykonania pomiaru</p>
            </div>
            <div className="mb-10 md:mb-0">
            <img src="ruler.png" alt="ruler icon" className="mx-auto mb-10 w-1/5 md:w-1/3 lg:w-auto"/>
            <p className="font-semibold text-center text-xl lg:text-[1.45rem] md:h-[3.5rem] 2xl:h-[2.5rem]">Precyzja i dokładność</p>
            <p className="text-center pt-5 text-lg lg:text-[1.4rem] font-regular">Opracowania z georeferencją i dokładnością na poziomie geodezyjnym</p>
            </div>
            <div className="mb-10 md:mb-0">
            <img src="tools.png" alt="tools icon" className="mx-auto mb-10 w-1/5 md:w-1/3 lg:w-auto"/>
            <p className="font-semibold text-center text-xl lg:text-[1.45rem] md:h-[3.5rem] 2xl:h-[2.5rem]">Fachowość</p>
            <p className="text-center pt-5 text-lg lg:text-[1.4rem] font-regular">Wykształcenie, doświadczenie, najwyższej klasy sprzęt pomiarowy oraz praca na dedykowanych programach</p>
            </div>
            <div className="mb-10 md:mb-0">
            <img src="hands.png" alt="partnership icon" className="mx-auto mb-10 w-1/5 md:w-1/3 lg:w-auto"/>
            <p className="font-semibold text-center text-xl lg:text-[1.45rem] md:h-[3.5rem] 2xl:h-[2.5rem]">Rzetelność i autentyczność</p>
            <p className="text-center pt-5 text-lg lg:text-[1.4rem] font-regular">KD Fotogrametria powstała po to, aby świadczyć usługi pomocne w Twojej branży na najwyższym poziomie</p>
            </div>
        </div>
        </div>
    )
}

export default AboutSection;