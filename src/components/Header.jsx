import React, { useState } from "react";
import { FaCode, FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navLinks = [
    { name: "Home", tab: "home", icon: FaHome },
    { name: "About", tab: "about", icon: FaUser },
    { name: "Experience", tab: "experience", icon: FaCode },
    { name: "Projects", tab: "projects", icon: FaProjectDiagram },
    { name: "Contact", tab: "contact", icon: FaEnvelope },
];

const Header = ({ activeTab, setActiveTab, isDark, setIsDark }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleNavLinkClick = (tabName) => {
        setActiveTab(tabName);
        setIsMenuOpen(false);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    const handleSmoothScroll = (e, tabName) => {
        e.preventDefault();
        const section = document.getElementById(tabName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        handleNavLinkClick(tabName);
    };

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 border-b shadow-md transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300">
                    <FaCode className={`size-6 mr-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                    <span className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-gray-800'}`}>My Portofolio</span>
                </a>

                <div className="flex items-center md:order-2 space-x-2 rtl:space-x-reverse ">
                    
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className={`cursor-pointer hidden md:block p-2 ${isDark ? 'text-yellow-500 hover:bg-gray-100 hover:text-gray-900' : 'text-gray-900 hover:bg-gray-900 hover:text-white'} rounded-lg transition-all duration-300`}
                    >
                        <span className={`inline-block hover:rotate-90 transition-transform-all duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
                            {isDark ? '☀︎' : '⏾'}
                        </span>
                    </button>

                    <button
                        onClick={() => setIsDark(!isDark)}
                        className={`md:hidden p-2 rounded-lg ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition-all duration-300`}
                    >
                        <span className={`inline-block hover:rotate-90 transition-transform-all duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
                            {isDark ? '☀︎' : '⏾'}
                        </span>
                    </button>

                    <button
                        onClick={handleMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="relative w-5 h-5">
                            <FaTimes className={`size-5 absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
                            <FaBars className={`size-5 absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
                        </div>
                    </button>
                </div>

                <section
                    className={`
                        items-center justify-between w-full md:flex md:w-auto md:order-1 
                        overflow-hidden transition-all duration-500 ease-in-out opacity-100
                        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}
                    `}
                    id="navbar-sticky"
                >
                    <ul className={`
                        flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg 
                        md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
                        transition-colors duration-300
                        ${isDark ? 'bg-gray-900 md:bg-transparent border-gray-700' : 'bg-gray-50 md:bg-transparent shadow-md md:shadow-none border-gray-200'}
                    `}>
                        {navLinks.map((link) => {
                            const IconComponent = link.icon;
                            const isActive = activeTab === link.tab;
                            return (
                                <li key={link.tab}>
                                    <a
                                        href={`#${link.tab}`}
                                        onClick={(e) => handleSmoothScroll(e, link.tab)}
                                        className={`
                                            flex items-center w-full text-left py-2 px-3 rounded-md md:bg-transparent md:p-0 
                                            transition-all duration-300 ease-in-out
                                            ${isActive
                                                ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500'
                                                : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                            }
                                        `}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        <IconComponent className={`
                                            size-4 mr-2 transition-colors duration-200
                                            ${isActive ? 'md:text-blue-700 dark:md:text-blue-500' : 'text-gray-500 dark:text-gray-400'}
                                        `} />
                                        <span className={`
                                            transition-colors duration-200
                                            ${isDark ? 'text-white' : 'text-gray-900'}
                                            `}>{link.name}</span>
                                    </a>
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