import React from 'react';
import HeroTitle from '../components/heroTitle';

const  AboutSection = ({isDark}) => {
  return (
    <section 
    // className="min-h-screen pt-5 bg-blue-50"
    className={`min-h-screen pt-5 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <HeroTitle heading="About"/>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <figure className="flex justify-center lg:justify-end">
              <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative rounded-2xl overflow-hidden shadow-2xl transform "
              >
                  <img src="/images/heroAbout.png" alt="" />
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
                className="text-4xl font-bold mb-6 text-gray-600">
                  Hi, I'm Ichwal
                </h2>
                <div
                  className="text-lg leading-relaxed space-y-4 text-gray-600"
                >
                  <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus omnis quisquam excepturi dicta aut, et, vero sit ipsa, eius rerum exercitationem officia! Omnis
                    </p>
                  <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus omnis quisquam excepturi dicta aut, et, vero sit ipsa, eius rerum exercitationem officia! Omnis
                    </p>
                  <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus omnis quisquam excepturi dicta aut, et, vero sit ipsa, eius rerum exercitationem officia! Omnis
                    </p>
                </div>

                <div className="flex space-x-4 mt-8">
                  <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#50B7F0' }}
                  ></div>
                  <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#FFFFFF' }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div
                data-aos="fade-up"
                data-aos-delay="500"
                  className="rounded-xl p-4 text-center shadow-xl hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg">Informatics Engineering</h3>
                  <p className="text-xl font-semibold">2023-2025</p>
                </div>
                <div
                data-aos="fade-up"
                data-aos-delay="500"
                  className="rounded-xl p-4 text-center shadow-xl hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg">GPA</h3>
                  <p className="text-xl font-bold">3.89/4.00</p>
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