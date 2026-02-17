import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Users, Heart, BookOpen, CheckCircle } from 'lucide-react';
import { visionMission, values, companyInfo, companyImages, marketingCopy } from '../data/mock';

const iconMap = {
  Users,
  Shield,
  Heart,
  BookOpen
};

const About = () => {
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
    <section id="about" className="relative py-24 bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">{marketingCopy.about.tagline}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {marketingCopy.about.title}
          </h2>
          <p className="text-2xl text-orange-500 font-semibold mb-4">
            {marketingCopy.about.subtitle}
          </p>
        </div>

        {/* Company Description with Circular Image */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Circular Hero Image */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div 
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              style={{
                transform: `translateY(${offsetY * 0.03}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Image circle */}
              <img
                src={companyImages.workerCircular}
                alt="Construction Professional"
                className="relative w-full h-full object-cover rounded-full border-4 border-orange-500/50 shadow-2xl shadow-orange-500/20"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg whitespace-nowrap">
                Komitmen Kualitas 100%
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="order-1 lg:order-2">
            <Card className="bg-slate-900/90 backdrop-blur-sm border-slate-700">
              <CardContent className="p-8 md:p-12">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {companyInfo.description}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Kami berkomitmen untuk menyediakan kontrol kualitas proyek kelas satu dan layanan teknis premium di bidang rekayasa proyek, pengadaan, fabrikasi, dan khususnya layanan pemeliharaan bangunan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Visi Kami</h3>
              <div className="space-y-4">
                {visionMission.vision.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Misi Kami</h3>
              <p className="text-gray-300 leading-relaxed">
                {visionMission.mission}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Nilai-Nilai Perusahaan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = iconMap[value.icon];
              return (
                <Card
                  key={value.id}
                  className="bg-slate-900/90 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-all duration-300">
                      <IconComponent className="text-orange-500 group-hover:text-white transition-colors" size={32} />
                    </div>
                    <h4 className="text-white font-bold mb-3 text-lg">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
