import React from 'react'
const HeroTitle = (props) => {
    return <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold text-gray-600 mb-8 tracking-wider">{props.heading}</h1>
}
export default HeroTitle;