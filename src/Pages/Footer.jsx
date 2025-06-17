import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          Sathwik Kamath
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-gray-400 w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="hover:text-gray-400 w-5 h-5" />
          </a> */}
          <a href="https://instagram.com/sathwik._31" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-gray-400 w-5 h-5" />
          </a>
          <a href="https://github.com/sathwik-337" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-gray-400 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} Sathwik Kamath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
