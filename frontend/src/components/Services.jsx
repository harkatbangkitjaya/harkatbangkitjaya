import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, PenTool, Wrench, Package, Users, Cable, Hammer, Box } from 'lucide-react';
import { services, marketingCopy } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const iconMap = {
  Building2,
  PenTool,
  Wrench,
  Package,
  Users,
  Cable,
  Hammer,
  Box
};

const Services = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className={`relative py-24 ${isDark ? 'bg-slate-900' : 'bg-white'} overflow-hidden`}>
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1759170154403-da5c94821be6"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900"></div>
      </div>

      {/* 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">{marketingCopy.services.tagline}</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            {marketingCopy.services.title}
          </h2>
          <p className="text-2xl text-orange-500 font-semibold mb-4">
            {marketingCopy.services.subtitle}
          </p>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Kami menyediakan berbagai layanan berkualitas tinggi dengan tenaga ahli profesional dan berpengalaman untuk memastikan setiap proyek selesai dengan sempurna.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className={`${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 group`}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-all duration-300">
                    <IconComponent className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <CardTitle className={`${isDark ? 'text-white' : 'text-slate-900'} text-xl group-hover:text-orange-500 transition-colors`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${isDark ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <p className="text-gray-300 mb-4 text-lg">
            Tidak menemukan layanan yang Anda cari?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-orange-500 hover:text-orange-400 font-semibold text-lg underline underline-offset-4 transition-colors"
          >
            Hubungi kami untuk konsultasi khusus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
