import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AboutME from './components/AboutME';

function App() {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-custom-dark font-sans increased-font-size">
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center text-center px-10 py-24"
        style={{
          backgroundImage:
            "url('/images/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-opacity-70 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:mr-8 mb-8 md:mb-0 md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Paul Yannie Manglibo
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              A passionate <span className="text-blue-400">IT student</span> exploring
              the world of web development.
            </p>

            <nav className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base font-medium">
              <a href="#home" className="hover:underline text-white">
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="hover:underline text-white"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="hover:underline text-white"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="hover:underline text-white"
              >
                Experience
              </a>
              <a
                href="#education"
                onClick={(e) => scrollToSection(e, "education")}
                className="hover:underline text-white"
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="hover:underline text-white"
              >
                Contact
              </a>
            </nav>

            <div className="flex gap-6 mt-8 justify-center md:justify-start text-xl">
              <a
                href="https://facebook.com"
                target="https://www.facebook.com/share/18VQ7558V9/"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <img
              src="/images/1741779119851 (1).jpg"
              alt="Paul Yannie Manglibo"
              className="w-70 h-70 rounded-full border-4 border-black-500 shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-900">
        <div className="container mx-auto px-10">
          <AboutME />
        </div>
      </section>

      <section
        id="experience"
        className="py-16 bg-gray-900"
        backgroundImage="/images/24600855_sl_031420_28950_10.jpg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white"></h2>
          <Experience />
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white"></h2>
          <Contact />
        </div>
      </section>

      <footer className="py-4 text-center text-gray-400 bg-custom-darker">
        <p>&copy; {new Date().getFullYear()} Paul Yannie Manglibo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
