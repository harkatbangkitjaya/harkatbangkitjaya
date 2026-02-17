import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, PenTool, Wrench, Package, Users, Cable, Hammer, Box } from 'lucide-react';
import { services, companyImages } from '../data/mock';

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src={companyImages.worker}
          alt="Construction Work"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">Layanan Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solusi Lengkap untuk <span className="text-orange-500">Kebutuhan Konstruksi</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan berkualitas tinggi dengan tenaga ahli profesional dan berpengalaman
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-all duration-300">
                    <IconComponent className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
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
