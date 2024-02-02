import React from 'react'


const Navbar: React.FC = () => {

    return (
        <nav>
            <div className="w-full md:block md:w-auto p-2 mt-5">
                <ul className="font-semibold flex flex-row p-1 md:space-x-16 rtl:space-x-reverse justify-center">
                    <li>
                        <a href="#about" className="block py-2 px-3 line-style line-style-link xl:text-lg" aria-current="page">O firmie</a>
                    </li>
                    <li>
                        <a href="#Ortofotomapy" className="block py-2 px-3 line-style line-style-link xl:text-lg" aria-current="page">Usługi</a>
                    </li>
                    <li>
                        <a href="#footer" className="block py-2 px-3 line-style line-style-link xl:text-lg" aria-current="page">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;