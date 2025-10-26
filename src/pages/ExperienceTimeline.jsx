import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import HeroTitle from '../components/HeroTitle';
import { useEffect, useState } from 'react';

const ExperienceTimeline = ({isDark, id}) => {
    
    const [experiences, setExperiences] = useState([]);
    
    useEffect(() => {
        fetch('/api/experiences.json')
            .then((res) => res.json())
            .then((data) => setExperiences(data))
            .catch((err) => console.log('error menagmbil data experiences : ', err));
    },[]);


    // Komponen Card
    const Card = ({ exp, isDark }) => (
        <div
            className={`p-3 md:p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
        >
            <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${exp.type === 'education' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                    }`}
            >
                {exp.type === 'education' ? 'Pendidikan' : 'Magang'}
            </span>
            <h3 className={`text-lg md:text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
            <h4 className={`text-md md:text-lg mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{exp.subtitle}</h4>
            <div className="flex gap-4 mb-4 justify-start flex-wrap">
                <div className="flex items-center gap-1">
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.location}</span>
                </div>
            </div>
            <p className={`text-sm md:text-md mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
            <div className={`pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`font-semibold mb-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Pencapaian:</p>
                <ul className="space-y-1 text-left">
                    {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            • {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section id={id} className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-12">
                    <div data-aos="fade-up" className="text-right">
                        <HeroTitle isDark={isDark} heading="Experience & Education" />
                    </div>
                </div>
                {/* Kontainer Timeline */}
                <div className="relative w-full md:w-10/12 mx-auto">
                    {/* Garis Vertikal (tengah timeline) */}
                    <div
                    className={`absolute top-0 bottom-0 sm:left-9 sm:ms-8 md:m-[0] md:left-1/2 w-[2px] hidden md:block transform md:-translate-x-1/2 z-0 lg:left-1/2 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-300'
                    }`}
                    />
                        {/* Vertical Line */}
                        <div
                        data-aos={'fade-up'}
                        className={`md:hidden absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${
                            isDark ? 'bg-gray-700' : 'bg-gray-300'
                        }`} />

                    {/* Isi Timeline */}
                    <div className="space-y-12 md:space-y-0">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} data-aos={'fade-up'}>
                                {/* MOBILE */}
                                <div className="md:hidden flex items-start gap-4 mb-8">
                                    
                                    <div
                                        className={`relative z-10 w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg ${exp.type === 'education'
                                                ? isDark
                                                    ? 'bg-blue-600'
                                                    : 'bg-blue-500'
                                                : isDark
                                                    ? 'bg-green-600'
                                                    : 'bg-green-500'
                                            }`}
                                    >
                                        {exp.type === 'education' ? (
                                            <GraduationCap className="w-8 h-8 text-white" />
                                        ) : (
                                            <Briefcase className="w-8 h-8 text-white" />
                                        )}
                                    </div>
                                    <div className="w-full">
                                        <Card exp={exp} isDark={isDark} />
                                    </div>
                                </div>

                                {/* DESKTOP */}
                                <div className="hidden md:flex items-center w-full mb-12 relative">
                                    <div className="w-5/12 text-right">
                                        {index % 2 !== 0 && <Card exp={exp} isDark={isDark} />}
                                    </div>

                                    <div className="w-2/12 flex justify-center z-10">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${exp.type === 'education'
                                                    ? isDark
                                                        ? 'bg-blue-600'
                                                        : 'bg-blue-500'
                                                    : isDark
                                                        ? 'bg-green-600'
                                                        : 'bg-green-500'
                                                }`}
                                        >
                                            {exp.type === 'education' ? (
                                                <GraduationCap className="w-8 h-8 text-white" />
                                            ) : (
                                                <Briefcase className="w-8 h-8 text-white" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-5/12 text-left">
                                        {index % 2 === 0 && <Card exp={exp} isDark={isDark} />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
