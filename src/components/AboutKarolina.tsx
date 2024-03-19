import React from "react";



const AboutKarolina: React.FC = () => {

    return (
        <div className="bg-background2 bg-cover bg-no-repeat bg-bottom" id="about">
            <div className="backdrop-grayscale-0 bg-white/75">
                <div className="container mx-auto md:min-h-screen px-5 2xl:px-0 md:flex md:flex-col about-karolina-container">
                    <div className="flex flex-col md:flex-row w-full my-0 py-10 md:py-0 md:pt-20 md:pb-5 lg:pt-0 lg:pb-0 lg:py-0 lg:my-auto justify-center">
                        <div className="mb-10 md:mb-0 px-5 lg:px-0 md:mt-10 md:mr-10 about-karolina-image" >
                            <div className="w-[300px] h-[300px] mx-auto md:max-h-[13rem] md:max-w-[13rem] lg:max-h-[unset] lg:max-w-[unset] lg:h-[18rem] lg:w-[18rem] xl:h-[23rem] xl:w-[23rem] 2xl:h-[30rem] 2xl:w-[30rem] bg-profile-image rounded-full bg-cover"></div>
                        </div>
                        <div>
                            <div className='pb-5 md:pb-0 lg:px-0 text-left'>
                                <p className="px-4 md:px-0 mb-10 lg:mb-6 2xl:mb-10 text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal font-medium about-karolina-text">
                                    Cześć! Nazywam się Karolina i stworzyłam KD Fotogrametria w 2023 roku z zamiłowania do bezzałogowych statków powietrznych oraz nowoczesnych technologii.
                                    Przenoszę obszary i obiekty w przestrzeń trójwymiarową aby pomóc Ci wznieść efektywność pracy na wyższy poziom.
                                </p>
                                <p className="px-4 md:px-0 mb-10 lg:mb-3 2xl:mb-6 text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal font-medium about-karolina-text">
                                    Opracowania fotogrametryczne, które wykonuję z powodzeniem wykorzystuje się w branżach takich jak:
                                </p>
                                <ul className="space-y-4 md:space-y-[1rem] pl-8 lg:pl-6 font-medium lg:flex lg:flex-wrap block md:hidden lg:block about-karolina-list">
                                    <li className="flex items-start lg:w-1/2 mt-[1rem]">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px] ">geodezja</p>
                                    </li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">rolnictwo</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">budownictwo</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">architektura</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">geologia, hydrologia, archeologia</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">planowanie przestrzenne</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">ochrona środowiska</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">zakłady wydobywcze</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">sprzedaż nieruchomości</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">zarządzanie nieruchomościami</p></li>
                                    <li className="flex items-start lg:w-1/2">
                                        <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                                        <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">wiele więcej</p></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <ul className="md:space-y-[1rem] font-medium md:flex md:flex-wrap hidden md:block lg:hidden ml-10">
                        <li className="flex items-start md:w-1/2 mt-[1rem]">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px] ">geodezja</p>
                        </li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">rolnictwo</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">budownictwo</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">architektura</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">geologia, hydrologia, archeologia</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">planowanie przestrzenne</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">ochrona środowiska</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">zakłady wydobywcze</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">sprzedaż nieruchomości</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">zarządzanie nieruchomościami</p></li>
                        <li className="flex items-start md:w-1/2">
                            <img src="caret_right.png" alt="caret right icon" className="mr-3 lg:mr-4 w-[2.5%] md:w-[1.5%] lg:w-[1%] self-center" />
                            <p className="text-lg lg:text-[1.2rem] 2xl:text-[1.5rem] leading-8 lg:leading-normal mb-[2px]">wiele więcej</p></li>
                    </ul>
                    <div className='md:my-auto lg:my-[unset] lg:mb-10 pb-20 md:pb-10 lg:pb-0 about-karolina-text2'>
                        <p className='text-black text-center text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] 2xl:text-[2.6rem] font-semibold md:font-medium lg:font-normal'>
                            Przekonaj się jak fotogrametria usprawni Twoją pracę
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutKarolina;