import React, { useState } from 'react';
import { Code, ExternalLink, Github, Layers, Calendar, Tag } from 'lucide-react';

const ProjectsPortfolio = ({isDark, id}) => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Learning Platform',
            category: 'web',
            description: 'Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking untuk siswa dan guru.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: '🎓',
            date: 'Des 2023',
            github: '#',
            demo: '#',
            color: 'blue'
        },
        {
            id: 2,
            title: 'Inventory Management System',
            category: 'web',
            description: 'Sistem manajemen inventory untuk tracking barang masuk/keluar, reporting, dan notifikasi stok minimum.',
            tech: ['React', 'Laravel', 'MySQL', 'Tailwind'],
            image: '📦',
            date: 'Jun 2024',
            github: '#',
            demo: '#',
            color: 'green'
        },
        {
            id: 3,
            title: 'Task Manager App',
            category: 'mobile',
            description: 'Aplikasi mobile untuk manajemen tugas dengan fitur reminder, kategori, dan sinkronisasi cloud.',
            tech: ['React Native', 'Firebase', 'Redux'],
            image: '✅',
            date: 'Mar 2024',
            github: '#',
            demo: '#',
            color: 'purple'
        },
        {
            id: 4,
            title: 'Portfolio Website',
            category: 'web',
            description: 'Website portfolio pribadi dengan animasi modern, dark mode, dan responsive design.',
            tech: ['React', 'Tailwind', 'AOS', 'Framer Motion'],
            image: '🌐',
            date: 'Jan 2024',
            github: '#',
            demo: '#',
            color: 'pink'
        },
        {
            id: 5,
            title: 'Weather Forecast App',
            category: 'mobile',
            description: 'Aplikasi cuaca dengan data real-time, forecast 7 hari, dan notifikasi cuaca ekstrem.',
            tech: ['React Native', 'OpenWeather API', 'AsyncStorage'],
            image: '🌤️',
            date: 'Sep 2023',
            github: '#',
            demo: '#',
            color: 'cyan'
        },
        {
            id: 6,
            title: 'Chat Application',
            category: 'web',
            description: 'Real-time chat application dengan fitur group chat, file sharing, dan emoji reactions.',
            tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
            image: '💬',
            date: 'Agu 2024',
            github: '#',
            demo: '#',
            color: 'indigo'
        },
        {
            id: 7,
            title: 'E-Commerce Dashboard',
            category: 'web',
            description: 'Dashboard admin untuk e-commerce dengan analytics, order management, dan customer insights.',
            tech: ['Next.js', 'Chart.js', 'Prisma', 'TailwindCSS'],
            image: '📊',
            date: 'Jul 2024',
            github: '#',
            demo: '#',
            color: 'orange'
        },
        {
            id: 8,
            title: 'Fitness Tracker',
            category: 'mobile',
            description: 'Aplikasi tracking workout, kalori, dan progress fitness dengan grafik statistik.',
            tech: ['Flutter', 'Dart', 'SQLite'],
            image: '💪',
            date: 'Mei 2024',
            github: '#',
            demo: '#',
            color: 'red'
        },
        {
            id: 9,
            title: 'Blog CMS',
            category: 'web',
            description: 'Content Management System untuk blog dengan WYSIWYG editor dan SEO optimization.',
            tech: ['Vue.js', 'Nuxt', 'Strapi', 'Markdown'],
            image: '📝',
            date: 'Feb 2024',
            github: '#',
            demo: '#',
            color: 'teal'
        }
    ];

    const categories = [
        { id: 'all', name: 'Semua Project', count: projects.length },
        { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
        { id: 'mobile', name: 'Mobile App', count: projects.filter(p => p.category === 'mobile').length }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const colorVariants = {
        blue: isDark ? 'from-blue-600 to-blue-800' : 'from-blue-400 to-blue-600',
        green: isDark ? 'from-green-600 to-green-800' : 'from-green-400 to-green-600',
        purple: isDark ? 'from-purple-600 to-purple-800' : 'from-purple-400 to-purple-600',
        pink: isDark ? 'from-pink-600 to-pink-800' : 'from-pink-400 to-pink-600',
        cyan: isDark ? 'from-cyan-600 to-cyan-800' : 'from-cyan-400 to-cyan-600',
        indigo: isDark ? 'from-indigo-600 to-indigo-800' : 'from-indigo-400 to-indigo-600',
        orange: isDark ? 'from-orange-600 to-orange-800' : 'from-orange-400 to-orange-600',
        red: isDark ? 'from-red-600 to-red-800' : 'from-red-400 to-red-600',
        teal: isDark ? 'from-teal-600 to-teal-800' : 'from-teal-400 to-teal-600'
    };

    return (
        <section id={id} className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div data-aos="fade-right">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Project Portfolio
                        </h1>
                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Kumpulan project yang telah saya kerjakan
                        </p>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4 mb-12" data-aos="fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${filter === cat.id
                                    ? isDark
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-900 text-white shadow-lg scale-105'
                                    : isDark
                                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {cat.name}
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${filter === cat.id
                                    ? 'bg-white bg-opacity-20'
                                    : isDark ? 'bg-gray-700' : 'bg-gray-200'
                                }`}>
                                {cat.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                }`}
                        >
                            {/* Project Image/Icon */}
                            <div className={`h-48 bg-gradient-to-br ${colorVariants[project.color]} flex items-center justify-center`}>
                                <span className="text-8xl">{project.image}</span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'web'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-purple-500 text-white'
                                        }`}>
                                        {project.category === 'web' ? '🌐 Web' : '📱 Mobile'}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {project.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-sm mb-4 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-1 rounded text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${isDark
                                                ? 'bg-gray-700 text-white hover:bg-gray-600'
                                                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                                            }`}
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${isDark
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                            }`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
                    <div className={`p-6 rounded-xl text-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}>
                        <Code className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        <h3 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {projects.length}
                        </h3>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Projects</p>
                    </div>
                    <div className={`p-6 rounded-xl text-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}>
                        <Layers className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                        <h3 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            15+
                        </h3>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Technologies Used</p>
                    </div>
                    <div className={`p-6 rounded-xl text-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}>
                        <Tag className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                        <h3 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            2
                        </h3>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Categories</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPortfolio;