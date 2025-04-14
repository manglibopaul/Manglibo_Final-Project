import React from 'react';

const Experience = () => {
  const backgroundImage = "public/images/24600855_sl_031420_28950_10.jpg"; // Replace with your actual image path

  return (
    <div
      className="bg-black text-white font-sans p-8"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-yellow-400 mb-12 text-center">
          Experience
        </h1>
        <div className="flex flex-col md:flex-row items-start gap-12 p-6 border border-gray-800 rounded-lg bg-black/80">
          {/* Left Column */}
          <div className="md:w-1/3 space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-semibold text-green-400 mb-4">Summary</h2>
              <p className="text-lg text-gray-300">
                I am a motivated and detail-oriented IT student with a passion for
                problem-solving and technology. Currently pursuing a Bachelor of Science
                in Information Technology at the University of the Cordilleras. I thrive
                on challenges and am dedicated to continuous learning. I am eager to
                contribute my skills and enthusiasm to innovative projects.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-blue-400 mb-4">Contact</h2>
              <div className="text-lg">
                <p>Bangued, Abra</p>
                <p>+639250229305</p>
                <p>manglibopaul@gmail.com</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-blue-400 mb-6">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Science, Technology, Engineering and Mathematics (STEM)
                </h3>
                <p className="text-lg text-gray-400">2021 - 2023</p>
                <p className="text-lg text-gray-300">
                  Abra State Institute of Sciences and Technology
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Junior High School</h3>
                <p className="text-lg text-gray-400">2017 - 2021</p>
                <p className="text-lg text-gray-300">
                  Abra State Institute of Sciences and Technology
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 mt-0 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-green-400 mb-6">
              Experience
            </h2>
            <ul className="list-disc list-inside space-y-8">
              <li className="text-lg text-gray-300">
                To be done
                <br />
              </li>
              <li className="text-lg text-gray-300">
                To be done
                <br />
              </li>
              <li className="text-lg text-gray-300">
                To be done
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
