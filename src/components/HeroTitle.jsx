import React from 'react'
const HeroTitle = ({heading, isDark}) => {
    return(
        <h1 data-aos="fade-up" data-aos-delay="100" className={`m-0 md:mb-16 text-2xl md:text-4xl font-bold tracking-wider text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {heading}
        </h1>
    )
}
export default HeroTitle;

