import React from 'react';
import HeroTitle from '../components/HeroTitle';
import heroAbout from '/images/heroAbout.png';

const  AboutSection = ({isDark, id}) => {
  const paragraf = [
      "As an Informatics Engineering student, I am driven by a deep passion for solving problems through technology. I currently work as a freelance Full Stack Web Developer, specializing in the Laravel ecosystem for the backend and React.js for the frontend. I am obsessed with a good developer experience, which is why I consistently rely on Tailwind CSS for rapid styling and MySQL for efficient data management.",
      "My curiosity doesn't stop at writing code. I believe modern developers must understand the infrastructure where their applications run. Therefore, I also delve into system administration, including containerization with Docker, Ubuntu server management, and Proxmox virtualization. My additional expertise in MikroTik and Cisco network configuration gives me a comprehensive, end-to-end understanding of a digital system.",
      "This portfolio is part of my personal branding, documenting the projects I have worked on. I am always enthusiastic about learning new things and am currently open to challenging freelance collaborations.",
  ];

  return (
    <section 
    id={id}
    className={`min-h-screen pt-0 md:pt-5 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}
    >
      <div className="container mx-auto px-4 py-12">
        <HeroTitle isDark={isDark} heading="About"/>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <figure className="flex justify-center lg:justify-end">
              <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative rounded-2xl overflow-hidden shadow-2xl transform "
              >
                  <img src={heroAbout} alt="" />
                <div
                  className="absolute inset-0 border-4 rounded-2xl pointer-events-none border-gray-900"
                ></div>
              </div>
            </figure>

            <article className="space-y-6">
              <div
                className="rounded-2xl p-8 shadow-xl"
              >
                <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className={`text-xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Hi, I'm Ichwal
                </h2>
                <div
                  className={`text-sm md:text-md leading-relaxed space-y-4 text-justify ${isDark ? 'text-gray-300' : 'text-gray-900'}`}
                >
                  <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  >
                    {paragraf[0]}
                    </p>
                  <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  >
                    {paragraf[1]}
                    </p>
                  <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  >
                    {paragraf[2]}
                    </p>
                </div>

                <div className="flex space-x-4 mt-8">
                  <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                    className={`w-3 h-3 rounded-full ${isDark ? 'bg-gray-300' : 'bg-gray-700'}`}
                  ></div>
                  <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className={`w-3 h-3 rounded-full ${isDark ? 'bg-red-500' : 'bg-gray-700'}`}></div>
                  <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                    className={`w-3 h-3 rounded-full ${isDark ? 'bg-indigo-600' : 'bg-gray-700'}`}
                  ></div>
                </div>
              </div>

              <div className={`grid grid-cols-2 gap-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div
                data-aos="fade-up"
                data-aos-delay="500"
                  className="rounded-xl flex justify-center items-center p-4 text-center shadow-xl hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    <h3 className="font-bold text-sm md:text-lg">Informatics Engineering</h3>
                    <p className="sm:text-sm md:text-xl font-semibold">2023-2025</p>
                  </div>
                </div>
                <div
                data-aos="fade-up"
                data-aos-delay="500"
                  className="flex justify-center items-center rounded-xl p-4 text-center shadow-xl hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    <h3 className="font-bold text-md md:text-lg">GPA</h3>
                    <p className="text-md md:text-xl font-bold">3.89/4.00</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;