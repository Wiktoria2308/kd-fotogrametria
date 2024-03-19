import React from "react";



const AboutFotogrametria: React.FC = () => {

    return (
        <div className="bg-background2 bg-cover bg-no-repeat bg-bottom" id="about">
            <div className="backdrop-grayscale-0 bg-white/75">
                <div className="container mx-auto md:min-h-screen md:flex md:flex-col md:justify-center md:items-center py-14 2xl:py-0 about-fotogrametria-container">
                    <div className='pb-5 md:pb-0 text-center px-6 lg:px-0'>
                        <p className="px-4 md:px-0 mb-10 lg:mb-6 2xl:mb-10 font-medium text-xl md:text-2xl lg:text-[1.4rem] 2xl:text-[1.8rem] about-fotogrametria-text1">Korzyści płynące z opracowań fotogrametrycznych:</p>
                        <ul className="space-y-4 lg:space-y-3 2xl:space-y-5 text-left lg:text-center about-fotogrametria-list">
                            <li className="flex md:inline-block items-start">
                                <img src="drone2.png" alt="drone icon" className="mr-3 mt-2 md:hidden w-[10%]" />
                                <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.6rem] leading-8 lg:leading-normal">
                                    Wysoka rozdzielczość - opracowania o rozdzielczości nawet poniżej 1 centymetra
                                </p>
                            </li>
                            <li className="flex md:inline-block items-start">
                                <img src="drone2.png" alt="drone icon" className="mr-3 mt-2 md:hidden w-[10%]" />
                                <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.6rem] leading-8 lg:leading-normal">
                                Kompatybilność z innym oprogramowaniem - pliki można otwierać w programach typu CAD 
                                </p>
                            </li>
                            <li className="flex md:inline-block items-start">
                                <img src="drone2.png" alt="drone icon" className="mr-3 mt-2 md:hidden w-[10%]" />
                                <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.6rem] leading-8 lg:leading-normal">
                                Bezinwazyjność pomiaru - podczas wykonywania pomiaru nie trzeba wstrzymywać prac na danym obiekcie
                                </p>
                            </li>
                            <li className="flex md:inline-block items-start">
                                <img src="drone2.png" alt="drone icon" className="mr-3 mt-2 md:hidden w-[10%]" />
                                <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.6rem] leading-8 lg:leading-normal">
                                Wysoka jakość opracowań, realistyczne odwzorowanie kolorów, kształtów i faktur
                                </p>
                            </li>
                            <li className="flex md:inline-block items-start">
                                <img src="drone2.png" alt="drone icon" className="mr-3 mt-2 md:hidden w-[10%]" />
                                <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.6rem] leading-8 lg:leading-normal">
                                Możliwość realizacji nalotów dla wybranego obszaru, jednorazowo lub cyklicznie 
                                </p>
                            </li>
                        </ul>
                        <p className="pt-14 lg:pt-8 2xl:pt-14 px-4 md:px-0 font-medium text-xl md:text-2xl lg:text-[1.4rem] 2xl:text-[1.8rem] about-fotogrametria-text2">Współpraca z KD Fotogrametria to:</p>
                    </div>
                    <div className="px-4 lg:px-0 pt-10 md:pt-12 2xl:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-6 about-fotogrametria-icons-container">
                        <div className="mb-10 md:mb-0 about-fotogrametria-icon-container">
                            <img src="clock.png" alt="clock icon" className="mx-auto mb-10 lg:mb-5 2xl:mb-10 w-1/5 md:w-1/3 lg:w-1/4 2xl:w-auto" />
                            <p className="font-semibold text-center text-xl lg:text-[1.2rem] 2xl:text-[1.6rem] md:h-[3.5rem] lg:h-[1.5rem] 2xl:h-[2.5rem] about-fotogrametria-icon-title">Krótkie terminy realizacji</p>
                            <p className="text-center pt-5 text-lg lg:text-[1.1rem] 2xl:text-[1.5rem] font-regular 2xl:leading-8 about-fotogrametria-icon-description">Wiemy jak cenny jest czas, dlatego opracowania przygotowywane są nawet w dniu wykonania pomiaru</p>
                        </div>
                        <div className="mb-10 md:mb-0 about-fotogrametria-icon-container">
                            <img src="ruler.png" alt="ruler icon" className="mx-auto mb-10 lg:mb-5 2xl:mb-10 w-1/5 md:w-1/3 lg:w-1/4 2xl:w-auto" />
                            <p className="font-semibold text-center text-xl lg:text-[1.2rem] 2xl:text-[1.6rem] md:h-[3.5rem] lg:h-[1.5rem] 2xl:h-[2.5rem] about-fotogrametria-icon-title">Precyzja i dokładność</p>
                            <p className="text-center pt-5 text-lg lg:text-[1.1rem] 2xl:text-[1.5rem] font-regular 2xl:leading-8 about-fotogrametria-icon-description">Opracowania z georeferencją i dokładnością na poziomie geodezyjnym</p>
                        </div>
                        <div className="mb-10 md:mb-0 about-fotogrametria-icon-container">
                            <img src="tools.png" alt="tools icon" className="mx-auto mb-10 lg:mb-5 2xl:mb-10 w-1/5 md:w-1/3 lg:w-1/4 2xl:w-auto" />
                            <p className="font-semibold text-center text-xl lg:text-[1.2rem] 2xl:text-[1.6rem] md:h-[3.5rem] lg:h-[1.5rem] 2xl:h-[2.5rem] about-fotogrametria-icon-title">Fachowość</p>
                            <p className="text-center pt-5 text-lg lg:text-[1.1rem] 2xl:text-[1.5rem] font-regular 2xl:leading-8 about-fotogrametria-icon-description">Wykształcenie, doświadczenie, najwyższej jakości sprzęt pomiarowy oraz praca na najwyższej jakości oprogramowaniu</p>
                        </div>
                        <div className="mb-10 md:mb-0 about-fotogrametria-icon-container">
                            <img src="hands.png" alt="partnership icon" className="mx-auto mb-10 lg:mb-5 2xl:mb-10 w-1/5 md:w-1/3 lg:w-1/4 2xl:w-auto" />
                            <p className="font-semibold text-center text-xl lg:text-[1.2rem] 2xl:text-[1.6rem] md:h-[3.5rem] lg:h-[1.5rem] 2xl:h-[2.5rem] about-fotogrametria-icon-title">Rzetelność i autentyczność</p>
                            <p className="text-center pt-5 text-lg lg:text-[1.1rem] 2xl:text-[1.5rem] font-regular 2xl:leading-8 about-fotogrametria-icon-description">KD Fotogrametria powstała po to, aby świadczyć usługi pomocne w Twojej branży na najwyższym poziomie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFotogrametria;