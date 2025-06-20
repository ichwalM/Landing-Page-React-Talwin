import React from 'react';

export default function Logo() {
    return (
        <a href="#" className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300">
            <div className="size-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                ICL
            </div>
            <span className="ml-2 text-xl font-extrabold text-stone-50">Ichwal</span>
        </a>
    );
}
