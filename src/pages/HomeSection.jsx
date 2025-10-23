import React from "react";
import { ReactTyped } from "react-typed";
import HeroIcon from '../components/HeroIcon'

function HomeSection({isDark}) {
    return (
        <section className={`pb-10 h-screen flex items-center justify-center transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}` }>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 sm:flex-row items-center justify-between gap-10">
                <div className="mask-b-from-20% mask-b-to-80%  block lg:hidden md:hidden">
                    <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="w-full max-w-lg md:h-86 bg-blue-200 rounded-2xl flex items-center justify-center text-blue-800 text-xl font-semibold">
                        <img className="rounded" src="/images/heroProfile.png" alt="" />
                    </div>
                </div>
                <div className="md:w-1/2 md:text-left">
                    <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Hello
                    </h1>
                    <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className={`text-4xl md:text-5xl font-bold leading-tight min-h-[60px] mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                        <ReactTyped
                            className="hidden-typed-cursor"
                            strings={["I'Am Ichwal"]}
                            typeSpeed={60} 
                            backSpeed={50}
                            backDelay={2000}
                            loop
                            />
                    </h1>
                    <p 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className={`text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-600'}`}
                    >
                        Junior Frontend Developer and junior network administrator with a passion for creating useful and secure systems.
                    </p>
                    <HeroIcon className={"mb-3"} isDark={isDark}/>
                    <button 
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className={`${isDark ? 'bg-white hover:bg-white text-gray-900' : 'bg-gray-800 hover:bg-gray-900 text-white'} font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg`}
                    >
                        Contact Me
                    </button>
                </div>
                <div className="xl:mask-l-from-40% mask-l-to-100% bg-[url(/img/mountains.jpg)] rounded hidden md:block ">
                    <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="w-full max-w-lg md:bg-blue-200 rounded-lg flex items-center justify-center text-blue-800 text-xl font-semibold">
                        <img className="rounded" src="/images/heroProfile.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeSection
