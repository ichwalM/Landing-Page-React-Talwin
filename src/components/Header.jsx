import React, { useState } from 'react';

import { 
    FaHome, 
    FaUser, 
    FaFolderOpen, 
    FaBriefcase, 
    FaTools,     
    FaQuoteRight, 
    FaEnvelope,
    FaCode,      
    FaBars,      
    FaTimes      
} from 'react-icons/fa'; 

function Header({ activeTab, setActiveTab }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleNavLinkClick = (tabName) => {
        setActiveTab(tabName);    
        setIsMenuOpen(false);     
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); 
    };
    
    const navLinks = [
        { name: 'Home', icon: FaHome, tab: 'home' },
        { name: 'About', icon: FaUser, tab: 'about' },
        { name: 'Projects', icon: FaFolderOpen, tab: 'projects' },
        { name: 'Experience', icon: FaBriefcase, tab: 'experience' },
        { name: 'Skills', icon: FaTools, tab: 'skills' },
        { name: 'Testimonials', icon: FaQuoteRight, tab: 'testimonials' },
        { name: 'Contact', icon: FaEnvelope, tab: 'contact' },
    ];

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300">
                    <FaCode className="size-6 text-gray-700 mr-2" /> 
                    <span className="text-xl font-extrabold text-gray-800 dark:text-white">My Portofolio</span>
                </a>

                <button
                    onClick={handleMenuToggle}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded={isMenuOpen}
                > 
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <FaTimes className="size-5" /> 
                    ) : (
                        <FaBars className="size-5" /> 
                    )}
                </button>

                <section
                    className={`
                        items-center justify-between w-full md:flex md:w-auto md:order-1
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}
                        md:max-h-full
                    `}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navLinks.map((link) => {
                            const IconComponent = link.icon; 
                            const isActive = activeTab === link.tab;

                            return (
                                <li key={link.tab}>
                                    <button
                                        onClick={() => handleNavLinkClick(link.tab)} 
                                        className={`
                                            flex items-center py-2 px-3 rounded-md md:bg-transparent md:p-0
                                            transition-colors duration-200 ease-in-out
                                            ${isActive
                                                ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500 md:bg-transparent' 
                                                : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' 
                                            }
                                            ${isActive ? 'md:bg-gray-100 dark:md:bg-gray-700 md:rounded-lg md:px-4 md:py-2' : ''}
                                        `}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        <IconComponent className={`size-4 mr-2 ${isActive ? 'text-white md:text-blue-700 dark:md:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} /> {/* Ikon */}
                                        {link.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
        </nav>
    );
}

export default Header;