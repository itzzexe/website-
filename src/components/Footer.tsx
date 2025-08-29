import React from 'react';
import { Linkedin, Instagram, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    'Home', 'About', 'Services', 'Work', 'Insights', 'Contact'
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Dribbble size={20} />, href: '#', label: 'Dribbble' },
  ];

  return (
    <footer className="relative py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg transform rotate-45"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Metazest
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Not of This World, But Made for Yours.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-slate-900/50 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500">
              © 2025 Metazest. All rights reserved. Built with digital alchemy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;