

import React, { useEffect, useState } from 'react'; 
import Logo from './Logo';
import { initFlowbite } from 'flowbite'; 
import { colors } from 'flowbite-react/plugin/tailwindcss/colors';
import Layout from './layouts/Layout';

function Header() {
    const [activeTab, setActiveTab] = useState('home');
    useEffect(()=>{
        initFlowbite();
        console.log('Flowbite initialized for Navbar!');
    },[])
    
    // useEffect(() => {
    //     console.log(activeTab);
    // }, [activeTab]);
    return (
        <>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        data-collapse-toggle="navbar-sticky" 
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false" 
                    > 
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <section className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-100 ease-in-out" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button onClick={()=>setActiveTab('home')} 
                            className={`
                                block py-2 px-3 rounded-sm md:bg-transparent md:p-0
                                ${activeTab === 'home'
                                    ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500' 
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' // Kelas non-aktif
                                }
                            `}
                            aria-current="page">Home</button>
                        </li>
                        <li>
                            <button onClick={()=>setActiveTab('about')} 
                            className={`
                                block py-2 px-3 rounded-sm md:bg-transparent md:p-0
                                ${activeTab === 'about'
                                    ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500' 
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' // Kelas non-aktif
                                }
                            `}>About</button>
                        </li>
                        <li>
                            <button onClick={()=>setActiveTab('services')} 
                            className={`
                                block py-2 px-3 rounded-sm md:bg-transparent md:p-0
                                ${activeTab === 'services'
                                    ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500' 
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' // Kelas non-aktif
                                }
                            `}>Services</button>
                        </li>
                        <li>
                            <button onClick={()=>setActiveTab('contact')}
                            className={`
                                block py-2 px-3 rounded-sm md:bg-transparent md:p-0
                                ${activeTab === 'contact'
                                    ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500' 
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' // Kelas non-aktif
                                }
                            `}>Contact</button>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
        <Layout page={activeTab} />
        </>
    );
}

export default Header;