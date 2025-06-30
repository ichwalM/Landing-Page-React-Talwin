
import React from 'react';

import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialLinks({ className }) {
    return (
        <div className={`flex items-center space-x-4 ${className}`}
        data-aos="fade-up"
        data-aos-delay="300"
        >
            <div className="flex space-x-3">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition duration-300"
                >
                    <FaGithub className="size-5" />
                </a>

                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition duration-300"
                >
                    <FaLinkedinIn className="size-5" /> 
                </a>

                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition duration-300"
                >
                    <FaInstagram className="size-5" /> 
                </a>

                <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition duration-300"
                >
                    <FaTwitter className="size-5" /> 
                </a>
            </div>
        </div>
    );
}

export default SocialLinks;