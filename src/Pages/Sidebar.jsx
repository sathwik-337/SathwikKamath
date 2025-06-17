import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Folder, Mail, FileText, Sun, Moon } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'projects', label: 'Projects', icon: <Folder size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black  text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-full">
        {/* Left: Name */}
        <h1 className="text-xl font-semibold tracking-widest">Sathwik Kamath</h1>

        {/* Center: Nav Links (desktop only) */}
        <ul className="hidden md:flex gap-10 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {sections.map(({ id, label, icon }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center cursor-pointer transition-colors duration-200 ${
                activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {icon}
              <span className="text-xs">{label}</span>
            </li>
          ))}
        </ul>

        {/* Right: Theme Toggle + Resume (desktop) */}
        <div className="flex items-center gap-4">
          {/* <button
            onClick={toggleTheme}
            className="hover:text-gray-300 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          <a
            href="/resume (2).pdf"
            download
            className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-500 rounded hover:bg-gray-100 hover:text-black transition dark:hover:bg-white dark:hover:text-black"
          >
            <FileText size={18} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg py-6 md:hidden">
          <ul className="flex flex-col items-center gap-6 text-sm font-medium">
            {sections.map(({ id, label, icon }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                  activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {icon}
                {label}
              </li>
            ))}
            <li>
              <a
                href='src\Assets\resume (2).pdf'
                download
                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 hover:text-black transition"
              >
                <FileText size={18} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
