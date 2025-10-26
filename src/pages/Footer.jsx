import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Heart, ArrowUp, Code } from 'lucide-react';

const Footer = ({isDark}) => {

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: 'experience' },
        { name: 'Project', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        { name: 'Full Stack Web Development', href: '#' },
        { name: 'Network Engginer', href: '#' },
        { name: 'Consulting', href: '#' }
    ];

    const socialMedia = [
        { icon: <Github className="w-5 h-5" />, name: 'GitHub', link: 'https://github.com/ichwalM' },
        { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', link: 'https://linkedin.com/in/ichwal/' },
        { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', link: 'https://www.instagram.com/ichwal_mr/' },
    ];

    return (
        <div className={`transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
            {/* Main Footer */}
            <footer className={`${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About Section */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Code className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Ichwal
                                </h3>
                            </div>
                            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Full Stack Developer yang passionate dalam menciptakan solusi digital inovatif dan user-friendly.
                            </p>
                        </div>

                        {/* Quick Links */} 
                        <div>
                            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className={`transition-colors duration-300 hover:translate-x-2 inline-block ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                                                }`}
                                        >
                                            → {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Services
                            </h4>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            className={`transition-colors duration-300 hover:translate-x-2 inline-block ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                                                }`}
                                        >
                                            → {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Contact Info
                            </h4>
                            <div className="space-y-3">
                                <a
                                    href="mailto:your.email@example.com"
                                    className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">ichwal093@gmail.com</span>
                                </a>
                                <a
                                    href="tel:+6281234567890"
                                    className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">+62 822-9394-7428</span>
                                </a>
                                <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">Makassar, Sulawesi-Selatan</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-6">
                                <h5 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Follow Me
                                </h5>
                                <div className="flex gap-3">
                                    {socialMedia.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark
                                                    ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'
                                                }`}
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Section */}

                    {/* Bottom Bar */}
                    <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} flex flex-col md:flex-row items-center justify-center gap-4`}>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-1`}>
                            © {new Date().getFullYear()} Ichwal. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-50 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default Footer;