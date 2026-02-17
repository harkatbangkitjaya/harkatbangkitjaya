import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Beranda', id: 'hero' },
    { label: 'Layanan', id: 'services' },
    { label: 'Tentang', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'Kontak', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? isDark ? 'bg-slate-900/98 backdrop-blur-lg shadow-2xl' : 'bg-white/98 backdrop-blur-lg shadow-2xl'
        : isDark ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl font-bold text-orange-500">
              PT. HARKAT <span className={isDark ? 'text-white' : 'text-slate-800'}>BANGKIT JAYA</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`${isDark ? 'text-gray-200' : 'text-slate-700'} hover:text-orange-500 transition-colors duration-200 font-medium px-2`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                : 'bg-orange-100 hover:bg-orange-200 text-orange-600'
                }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Button
              onClick={() => window.open(companyInfo.whatsapp, '_blank')}
              className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                : 'bg-orange-100 hover:bg-orange-200 text-orange-600'
                }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isDark ? 'text-white' : 'text-slate-800'} hover:text-orange-500 transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-lg mb-4 py-4 px-2 shadow-xl`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 ${isDark
                    ? 'text-gray-200 hover:bg-slate-700'
                    : 'text-slate-700 hover:bg-orange-50'
                  } hover:text-orange-500 rounded-md transition-all duration-200`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => window.open(companyInfo.whatsapp, '_blank')}
              className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white"
            >
              Hubungi Kami
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
