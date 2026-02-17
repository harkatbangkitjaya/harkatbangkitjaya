import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, PenTool, Wrench, Package, Users, Cable, Hammer, Box } from 'lucide-react';
import { services, companyImages, marketingCopy } from '../data/mock';

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
    <section id="services" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Hero Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Marketing Copy */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
              <span className="text-orange-400 font-semibold text-sm">{marketingCopy.services.tagline}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {marketingCopy.services.title}
            </h2>
            <p className="text-2xl text-orange-500 font-semibold mb-4">
              {marketingCopy.services.subtitle}
            </p>
            <p className="text-xl text-gray-400">
              Kami menyediakan berbagai layanan berkualitas tinggi dengan tenaga ahli profesional dan berpengalaman untuk memastikan setiap proyek selesai dengan sempurna.
            </p>
          </div>

          {/* Right: Circular Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              style={{
                transform: `translateY(${offsetY * 0.05}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Image circle */}
              <img
                src={companyImages.workerCircular}
                alt="Professional Worker"
                className="relative w-full h-full object-cover rounded-full border-4 border-orange-500/50 shadow-2xl shadow-orange-500/20"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Profesional & Berpengalaman
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="bg-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 group"
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
