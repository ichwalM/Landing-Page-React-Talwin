import React, { useEffect, useState } from "react";
import { Code2, Github, Linkedin, Mail, Instagram } from "lucide-react";
import homeImage from '/images/heroProfile.png';
import '../css/home.css';

function HomeSection({ isDark, id }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const programmingLanguages = [
        { name: "React", color: "text-cyan-400", size: "text-4xl", delay: 0 },
        { name: "Laravel", color: "text-red-600", size: "text-3xl", delay: 0.5 },
        { name: "Proxmox", color: "text-orange-500", size: "text-2xl", delay: 1 },
        { name: "Ubuntu  ", color: "text-orange-500", size: "text-3xl", delay: 1.5 },
        { name: "Node", color: "text-green-500", size: "text-2xl", delay: 2 },
        { name: "Express", color: "text-green-500", size: "text-3xl", delay: 2.5 },
    ];

    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    useEffect(() => {
        const text = "I'm Ichwal";

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < text.length) {
                    setDisplayText(text.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(text.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum]);

    return (
        <section
            id={id}
            className={`pb-10 min-h-screen flex items-center justify-center`}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div
                    className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${isDark ? "bg-blue-500" : "bg-blue-400"
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
                <div
                    className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${isDark ? "bg-blue-500" : "bg-blue-400"
                        }`}
                    style={{
                        transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
                        transition: "transform 0.3s ease-out",
                        animationDelay: "1s",
                    }}
                />

                {/* Floating Programming Languages */}
                {programmingLanguages.map((lang, index) => (
                    <div
                        key={index}
                        className={`absolute ${lang.color} ${lang.size} font-bold opacity-10 animate-float`}
                        style={{
                            left: `${(index * 15 + 10) % 90}%`,
                            top: `${(index * 20 + 10) % 80}%`,
                            animationDelay: `${lang.delay}s`,
                            animationDuration: `${3 + index * 0.5}s`,
                        }}
                    >
                        {lang.name}
                    </div>
                ))}

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-blue-400/20 rotate-45 animate-spin-slow" />
                <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-4 border-blue-400/20 rounded-full animate-bounce-slow" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`md:hidden my-16 relative}`}
                >
                    {/* Placeholder for actual image */}
                    <div
                        className={`
                            flex items-center justify-center mt-30 flex items-center justify-center `}
                    >
                        <img className={`rounded-full w-48 flex items-center justify-center animate-fade-in-up
                        transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                        ${isDark
                                ? "bg-gray-800"
                                : "bg-white"
                            }`}
                            style={{ animationDelay: `1.5` }}
                            src={homeImage} alt="ichwal" />
                    </div>

                    {/* Floating Badge */}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-normal md:text-center md:text-left space-y-6 animate-fade-in-up">
                        {/* Hello Text with Animation */}
                        <h1
                            className={`text-2xl mb-2 sm:text-3xl md:text-5xl font-bold animate-slide-in-left ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Hello
                        </h1>

                        {/* Typing Animation */}
                        <h1
                            className={`select-none mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[50px] md:min-h-[70px] ${
                                isDark
                                    ? "text-blue-50"
                                    : "text-gray-900"
                                }`}
                        >
                            {displayText}
                            <span className="animate-blink">|</span>
                        </h1>

                        {/* Description */}
                        <p
                            className={`text-base sm:text-sm md:text-xl max-w-xl md:mx-0 animate-fade-in ${isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Junior Full Stack Web Developer and Junior Network Administrator with a
                            passion for creating useful and secure systems.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 md:justify-start animate-fade-in-up">
                            {[
                                { Icon: Github, href: "https://github.com/ichwalM" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/ichwal/" },
                                { Icon: Instagram, href: "https://www.instagram.com/ichwal_mr/" },
                                { Icon: Mail, href: "#contact" },
                            ].map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${isDark
                                            ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        } shadow-lg hover:shadow-xl`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        {/* <button
                            className={`group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl animate-fade-in-up ${
                                isDark
                                ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white" 
                                : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:text-gray-700" 
                            }`}
                        >
                            <span className="relative z-10">Contact Me</span>
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </button> */}
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 w-full max-w-md md:max-w-lg animate-fade-in-right">
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div
                                className={`absolute -inset-4 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${isDark
                                        ? "bg-gradient-to-r from-blue-500 via-blue-500 to-pink-500"
                                        : "bg-gradient-to-r from-blue-400 via-blue-400 to-pink-400"
                                    }`}
                            />

                            {/* Main Image Container */}
                            <div
                                className={`hidden md:block relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 ${isDark ? "bg-gray-800" : "bg-white"
                                    }`}
                            >
                                {/* Placeholder for actual image */}
                                <div
                                    className={`aspect-square flex items-center justify-center ${isDark
                                            ? "bg-gradient-to-br from-gray-800 to-gray-900"
                                            : "bg-gradient-to-br from-blue-100 to-blue-100"
                                        }`}
                                >
                                    <img src={homeImage} alt="ichwal" />
                                </div>

                                {/* Floating Badge */}
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-50">
                                {[...Array(16)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;