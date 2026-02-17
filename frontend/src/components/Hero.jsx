import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime = null;
    const endValue = parseInt(end.replace(/[^0-9]/g, '')) || 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  // Format the count with the original suffix (+, %)
  const suffix = end.includes('%') ? '%' : end.includes('+') ? '+' : '';
  return count + suffix;
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '100+', label: 'Proyek' },
    { number: '50+', label: 'Klien' },
    { number: '100%', label: 'Kepuasan' }
  ];

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden ${isDark
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-orange-50 via-white to-orange-50'
      }`}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes for depth */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-700/5 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px),
                           linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-orange-600/20 border border-orange-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-orange-400 font-semibold">Kontraktor Terpercaya Sejak 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6 leading-tight`}>
            Solusi Konstruksi <span className="text-orange-500">Profesional</span> untuk Masa Depan
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-slate-600'} mb-10 leading-relaxed max-w-3xl mx-auto`}>
            PT. Harkat Bangkit Jaya menyediakan layanan konstruksi, pemeliharaan bangunan, dan desain arsitektur dengan standar kualitas terbaik.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Kualitas Terjamin', 'Tim Profesional', 'Harga Kompetitif'].map((feature, index) => (
              <div key={index} className={`flex items-center gap-2 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-sm px-6 py-3 rounded-lg border`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className={`${isDark ? 'text-gray-200' : 'text-slate-700'} font-medium`}>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open(companyInfo.whatsapp, '_blank')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50"
            >
              <Phone className="mr-2" size={20} />
              Konsultasi Gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              <Mail className="mr-2" size={20} />
              Kirim Email
            </Button>
          </div>

          {/* Stats with Counter Animation */}
          <div ref={statsRef} className={`grid grid-cols-3 gap-8 mt-20 pt-12 border-t ${isDark ? 'border-gray-700/50' : 'border-gray-200'}`}>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                label={stat.label}
                isVisible={isVisible}
                delay={index * 200}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for animated stat
const StatItem = ({ number, label, isVisible, delay, isDark }) => {
  const [startCount, setStartCount] = useState(false);
  const animatedNumber = useCountUp(number, 2000, startCount);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setStartCount(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
        {startCount ? animatedNumber : '0' + (number.includes('%') ? '%' : '+')}
      </div>
      <div className={`${isDark ? 'text-gray-400' : 'text-slate-600'} text-base md:text-lg`}>{label}</div>
    </div>
  );
};

export default Hero;
