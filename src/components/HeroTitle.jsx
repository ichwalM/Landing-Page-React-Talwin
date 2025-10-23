import React from 'react'
const HeroTitle = ({heading, isDark}) => {
    return <h1 data-aos="fade-up" data-aos-delay="100" className={`text-4xl font-bold mb-8 tracking-wider text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>{heading}</h1>
}
export default HeroTitle;

