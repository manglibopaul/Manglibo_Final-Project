import React from 'react';

const Contact = () => {
  const backgroundImage = "public/images/24600855_sl_031420_28950_10.jpg"; // Replace with your image URL

  return (
    <div
      className="bg-black text-white font-sans py-12"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">CONTACT ME</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-black/80 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
            <div className="text-gray-300 space-y-2">
              <p>Bangued Abra</p>
              <p>+639350229305</p>
              <p>manglibopaulyannie@gmail.com</p>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="bg-black/80 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Social Profiles</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors text-lg">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors text-lg">
                Youtube
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors text-lg">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="mt-12 bg-black/80 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6 w-full h-32 resize-none"
          ></textarea>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 mt-6">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
