import React from "react";
import { Github, ExternalLink, Calendar } from 'lucide-react';
const CardProjects = ({project, index, isDark}) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-101 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
        >
            {/* Project Image/Icon */}
            <div className={`h-48 bg-gradient-to-br flex items-center justify-center`}>
                <img src={`/images/projects/${project.image}`} alt={project.title} className='mb-10 object-cover m-5' />
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'web'
                            ? 'bg-blue-500 text-white'
                            : 'bg-purple-500 text-white'
                        }`}>
                        {project.category === 'web' ? '🌐 Web' : '🖧 Networking'}
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
                    {project.tech?.map((tech, i) => (
                        
                        <span
                            key={i}
                            className={`flex justify-center px-2 py-1 rounded text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            <img src={tech} alt="" className='w-20'/>
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                {project.category == 'web' ? (
                    <div className="flex gap-3">
                        <a
                            href={project.github}
                            target='blank'
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
                ):(
                    ''
                )}
            </div>
        </div>
    )
}

export default CardProjects;