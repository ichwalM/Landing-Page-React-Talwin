import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import HeroTitle from '../components/heroTitle';

const ExperienceTimeline = ({isDark, id}) => {
    // const [isDark, setIsDark] = useState(true);

    const experiences = [
        {
            id: 1,
            type: 'education',
            title: 'SMK Negeri 1 Teknologi',
            subtitle: 'Teknik Komputer dan Jaringan',
            period: '2018 - 2021',
            location: 'Semarang, Jawa Tengah',
            description:
                'Mempelajari dasar-dasar jaringan komputer, programming, dan sistem operasi. Aktif dalam organisasi OSIS dan tim robotika sekolah.',
            achievements: ['Juara 2 Lomba Jaringan Tingkat Provinsi', 'Ketua Divisi IT OSIS'],
        },
        {
            id: 2,
            type: 'internship',
            title: 'PT. Digital Solusi Indonesia',
            subtitle: 'IT Support Intern',
            period: 'Jan 2021 - Jun 2021',
            location: 'Semarang, Jawa Tengah',
            description:
                'Magang sebagai IT Support, membantu troubleshooting hardware dan software, serta maintenance jaringan perusahaan.',
            achievements: ['Menangani 50+ ticket support', 'Implementasi sistem monitoring jaringan'],
        },
        {
            id: 3,
            type: 'education',
            title: 'Universitas Dian Nuswantoro',
            subtitle: 'Teknik Informatika - S1',
            period: '2021 - Sekarang',
            location: 'Semarang, Jawa Tengah',
            description:
                'Fokus pada pengembangan web dan mobile application. Aktif dalam komunitas programming dan berbagai project kelompok.',
            achievements: ['IPK 3.75', 'Asisten Laboratorium Pemrograman Web', 'Ketua Kelompok Studi Web Development'],
        },
        {
            id: 4,
            type: 'internship',
            title: 'Startup TechnoHub',
            subtitle: 'Frontend Developer Intern',
            period: 'Jul 2023 - Des 2023',
            location: 'Remote',
            description:
                'Mengembangkan user interface untuk platform e-learning menggunakan React.js dan Tailwind CSS. Berkolaborasi dengan tim backend dan designer.',
            achievements: ['Develop 15+ responsive components', 'Optimasi performance 40%', 'Implementasi fitur real-time notification'],
        },
        {
            id: 5,
            type: 'internship',
            title: 'PT. Inovasi Digital Nusantara',
            subtitle: 'Full Stack Developer Intern',
            period: 'Feb 2024 - Jun 2024',
            location: 'Semarang, Jawa Tengah',
            description:
                'Mengembangkan aplikasi ERP untuk manajemen inventory menggunakan MERN Stack. Bertanggung jawab dalam development fitur-fitur utama.',
            achievements: ['Build 3 major features', 'Code review & mentoring junior intern', 'Integration API dengan third party service'],
        },
    ];

    // Komponen Card
    const Card = ({ exp, isDark }) => (
        <div
            className={`p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
        >
            <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${exp.type === 'education' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                    }`}
            >
                {exp.type === 'education' ? 'Pendidikan' : 'Magang'}
            </span>
            <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
            <h4 className={`text-lg mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{exp.subtitle}</h4>
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
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
            <div className={`pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`font-semibold mb-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Pencapaian:</p>
                <ul className="space-y-1 text-left">
                    {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            • {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section id={id} className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
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


                    {/* Isi Timeline */}
                    <div className="space-y-12 md:space-y-0">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} data-aos={index % 2 === 0 ? 'fade-up' : 'fade-up'}>
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

                <div className="text-center mt-16" data-aos="fade-up">
                    <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Terus Berkembang & Belajar 🚀</p>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
