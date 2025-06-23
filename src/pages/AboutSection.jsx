import React from 'react';

function AboutSection({ className }) {
  return (
    <div className="min-h-screen pt-5" style={{ backgroundColor: '#E6F0F8' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-600 mb-8 tracking-wider">
            ABOUT ME
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center lg:justify-end">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: '#2C3E50' }}
              >
                  <img src="/images/heroAbout.png" alt="" />
                <div
                  className="absolute inset-0 border-4 rounded-2xl pointer-events-none"
                  style={{ borderColor: '#50B7F0' }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="rounded-2xl p-8 shadow-xl"
              >
                <h2
                  className="text-4xl font-bold mb-6 text-gray-600"
                >
                  Hi, I'm Ichwal
                </h2>

                <div
                  className="text-lg leading-relaxed space-y-4 text-gray-600"
                >
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus omnis quisquam excepturi dicta aut, et, vero sit ipsa, eius rerum exercitationem officia! Omnis?
                  </p>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam et dolorem vel commodi hic alias, consequuntur, maxime voluptas reiciendis omnis praesentium iusto esse.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo nam iusto ipsa natus molestias provident culpa similique vel? Nisi sint iste cumque.
                  </p>
                </div>

                <div className="flex space-x-4 mt-8">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#50B7F0' }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#8E44AD' }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#FFFFFF' }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div
                  className="rounded-xl p-4 text-center shadow-xl hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg">GPA</h3>
                  <p className="text-2xl font-bold">3.89/4.00</p>
                </div>

                <div
                  className="rounded-xl p-4 text-center shadow-xl hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg">Informatics Engineering</h3>
                  <p className="text-sm font-semibold">Indonesian Islamic University</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#50B7F0' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: '#8E44AD' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full opacity-20" style={{ backgroundColor: '#50B7F0' }}></div>
      </div>
    </div>
  );
}

export default AboutSection;