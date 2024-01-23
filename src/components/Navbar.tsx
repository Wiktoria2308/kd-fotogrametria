import React from 'react'


const Navbar: React.FC = () => {

    return (
        <nav>
            <div className="w-full md:block md:w-auto p-2">
                <ul className="font-semibold flex flex-row p-1 md:space-x-16 rtl:space-x-reverse mt-0 justify-center">
                    <li>
                        <a href="#" className="block py-2 px-3 hover:underline" aria-current="page">O firmie</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 hover:underline" aria-current="page">Usługi</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 hover:underline" aria-current="page">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;