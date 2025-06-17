import React, { useState, useEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaGraduationCap,
  FaBuilding,
  FaLaptopCode
} from 'react-icons/fa';
import bg1 from '../Assets/1.jpg';
import bg2 from '../Assets/2.jpg';
import bg3 from '../Assets/3.jpg';
import projectimage1 from '../Assets/Screenshot 2025-06-17 143530.png';
import projectimage2 from '../Assets/Screenshot 2025-06-17 143323.png';
import projectimage3 from '../Assets/const.png';


const images = [bg1, bg2, bg3];


const projects = [
  {
    title: 'Nettrackr',
    description: 'Shorten URLs and track detailed analytics including location, device, and browser(Frontend).',
    image: projectimage1,
    tech: ['React', 'Firebase', 'Flask'],
    link: 'https://nettrackr.vercel.app/'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal developer portfolio showcasing skills and projects.',
    image: projectimage2,
    tech: ['React', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Gym Website (Coming Soon)',
    description: 'A modern, responsive gym website with membership plans, trainer profiles, and booking system.',
    image: projectimage3,
    tech: ['React', 'Tailwind CSS', 'Firebase'],
   
  }
];

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showMore, setShowMore] = useState(false);
  const roles = ['Front-end Developer', 'MERN Stack Enthusiast', 'React & Flask Developer'];
  const formRef = useRef();


    const handleSubmit = (e) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', { action: 'submit' }).then((token) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'g-recaptcha-response';
        input.value = token;
        formRef.current.appendChild(input);
        formRef.current.submit();
      });
    });
    e.preventDefault();}

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        setTypedText(roles[roleIndex].substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === roles[roleIndex].length) {
          forward = false;
          setTimeout(() => {}, 1000);
        }
      } else {
        setTypedText(roles[roleIndex].substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          forward = true;
          roleIndex = (roleIndex + 1) % roles.length;
        }
        
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <main className="text-white">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen p-10 flex flex-col justify-center items-start relative bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold mb-2 text-white">Hi, I'm Sathwik Kamath</h1>
          <h2 className="text-2xl text-red-500 mb-6 h-8">
            {typedText}
            <span className="text-white animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            I design and build modern web applications with a focus on performance, scalability, and user experience.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/sathwik-337" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/sathwik-kamath-99287b310/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
            </a>
          </div>
          <div className="mt-10 animate-bounce">
            <a href="#about">
              <FaArrowDown className="text-3xl text-red-500" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen p-10 flex flex-col justify-center relative text-white bg-[radial-gradient(circle_at_center,_#0f172a,_#000000)]"
      >
        <motion.div
          className="max-w-4xl z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Hello! I'm <strong>Sathwik Kamath</strong>, a passionate full-stack web developer. I specialize in modern
            web technologies like <strong>React</strong>, <strong>TailwindCSS</strong>, <strong>Flask</strong>,{' '}
            <strong>Firebase</strong>, and <strong>MongoDB</strong>.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I'm a BCA student at St Aloysius (Deemed to be University), passionate about building clean, responsive web
            apps using React.js and other modern technologies. I combine my commerce background with tech to create
            intuitive, user-centered solutions.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I enjoy chess, cricket, and cycling, which help me stay sharp, disciplined, and creative.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I'm continuously learning, exploring new tools, and building real-world projects like URL shorteners,
            portfolios, and full-stack apps.
          </p>

          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-gray-300 mb-6 space-y-4"
            >
              <p>
                I'm always seeking ways to improve and challenge myself with exciting frontend/backend development
                problems.
              </p>
              <p>
                Apart from coding, I study design patterns, UI/UX principles, and performance optimization strategies.
              </p>
            </motion.div>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-black hover:bg-slate-500 rounded-lg transition font-semibold text-white"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>

          {/* Timeline */}
          <div className="mt-12 mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
            <ul className="space-y-6 border-l-2 border-white pl-6">
              <li>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-white" />
                  <div>
                    <p className="text-white font-medium">
                      BCA Student at St Aloysius (Deemed to be University)
                    </p>
                    <p className="text-gray-400 text-sm">2023 – Present</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-white" />
                  <div>
                    <p className="text-white font-medium">Web Developer Intern at Torsecure</p>
                    <p className="text-gray-400 text-sm">2024 – Present</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-white" />
                  <div>
                    <p className="text-white font-medium">Built 3+ Projects</p>
                    <p className="text-gray-400 text-sm">2024 – Present</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10 z-10 relative">
            <a href="https://github.com/sathwik-337" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/sathwik-kamath-99287b310/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-10 bg-[radial-gradient(circle_at_center,_#0f172a,_#000000)] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 group-hover:scale-105">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-black px-2 py-1 rounded-full text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-white hover:underline">Click to explore →</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
             <section id="contact" className="min-h-screen p-10 bg-[radial-gradient(circle_at_center,_#0f172a,_#000000)] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Contact Me</h2>
        <div className="bg-white text-black rounded-2xl shadow-lg grid md:grid-cols-2 gap-10 p-8 md:p-12">
          <form
            ref={formRef}
            action="https://formspree.io/f/movwljzy"
            method="POST"
            className="space-y-6 w-full"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <div className="g-recaptcha" data-sitekey="6LcjUGQrAAAAAAmB_3t6FKTb3ohT89jPDuP7XIQR"></div>
            <button
              type="submit"
              className="px-6 py-3 bg-black hover:bg-slate-600 text-white rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.505152577748!2d74.83481501065354!3d12.875206287378981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b8ff013f3fb%3A0x4096e2429bb25704!2sKodialBail%20Park!5e0!3m2!1sen!2sin!4v1750183508712!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              className="min-h-[400px] w-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    
     
    </section>
    </main>
  );
};

export default MainPage;
