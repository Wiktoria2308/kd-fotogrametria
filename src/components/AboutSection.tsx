import React from "react";
import { PiClockThin } from "react-icons/pi";
// import { GoClock } from "react-icons/go";
import { FaRulerCombined } from "react-icons/fa";



const AboutSection: React.FC = () => {

    return (
        <div className="pb-24 pt-10">
        <div className='text-[1.3rem] md:text-[1.7rem] pb-20 md:pb-0 text-center'>
            <p className='leading-[3rem] font-regular px-4 md:px-[10rem] text-black'>
            KD Fotogrametria powstała z pasji i chęci tworzenia. 
            Przenoszę obszary i obiekty w przestrzeń trójwymiarową,
             aby pomóc Ci wznieść efektywność Twojej pracy na wyższy poziom.
            </p>
            <p className="pt-14 font-medium">Współpraca z KD Fotogrametria to:</p>
        </div>
        <div className="px-4 md:px-16 pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
            <img src="clock.png" alt="clock icon" className="mx-auto mb-10"/>
            <p className="font-semibold text-center text-[1.45rem]">Krótkie terminy realizacji</p>
            <p className="text-center pt-5 text-[1.35rem] font-regular">Wiemy jak cenny jest czas, dlatego opracowania przygotowywane są nawet w dniu wykonania pomiaru</p>
            </div>
            <div>
            <img src="ruler.png" alt="ruler icon" className="mx-auto mb-10"/>
            <p className="font-semibold text-center text-[1.45rem]">Precyzja i dokładność</p>
            <p className="text-center pt-5 text-[1.4rem] font-regular">Opracowania z georeferencją i dokładnością na poziomie geodezyjnym</p>
            </div>
            <div>
            <img src="tools.png" alt="tools icon" className="mx-auto mb-10"/>
            <p className="font-semibold text-center text-[1.45rem]">Fachowość</p>
            <p className="text-center pt-5 text-[1.4rem] font-regular">Wykształcenie, doświadczenie, najwyższej jakości sprzęt pomiarowy oraz praca na najwyższej jakości oprogramowaniu</p>
            </div>
            <div>
            <img src="hands.png" alt="partnership icon" className="mx-auto mb-10"/>
            <p className="font-semibold text-center text-[1.45rem]">Rzetelność i autentyczność</p>
            <p className="text-center pt-5 text-[1.4rem] font-regular">KD Fotogrametria powstała po to, aby świadczyć usługi pomocne w Twojej branży na najwyższym poziomie</p>
            </div>
        </div>
        </div>
    )
}

export default AboutSection;