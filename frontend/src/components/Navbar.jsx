import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/98 backdrop-blur-lg shadow-2xl' : 'bg-slate-900/90 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl font-bold text-orange-500">
              PT. HARKAT <span className="text-white">BANGKIT JAYA</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-200 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => window.open(companyInfo.whatsapp, '_blank')}
              className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mb-4 py-4 px-2 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-slate-700 hover:text-orange-500 rounded-md transition-all duration-200"
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
