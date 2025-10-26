import React, { useEffect, useState } from 'react';
import { Code, Layers, Tag } from 'lucide-react';
import CardProjects from '../components/CardProjects';
const ProjectsPortfolio = ({isDark, id}) => {

    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        // fetch(`${import.meta.env.BASE_URL}api/experiences.json`) untuk prduction
        fetch('api/projects.json')
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.log('gagal mengambil api : ', err));
    },[]);

    const TechnologiesUsed = 12;
    
    const categories = [
        { id: 'all', name: 'Semua Project', count: projects.length },
        { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
        { id: 'network', name: 'Networking', count: projects.filter(p => p.category === 'network').length }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id={id} className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div data-aos="fade-up">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Project Portfolio
                        </h1>
                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Kumpulan project yang telah diselesaikan
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
                        <CardProjects 
                            key={index}
                            project={project}
                            index={index}
                            isDark={isDark}
                        />
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
                            {TechnologiesUsed}
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