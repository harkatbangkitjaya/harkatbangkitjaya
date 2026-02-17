import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Users, Heart, BookOpen, CheckCircle } from 'lucide-react';
import { visionMission, values, companyInfo, marketingCopy } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const iconMap = {
  Users,
  Shield,
  Heart,
  BookOpen
};

const About = () => {
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
    <section id="about" className={`relative py-24 ${isDark ? 'bg-slate-800' : 'bg-gray-50'} overflow-hidden`}>
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`absolute inset-0 ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}></div>
        <div className={`absolute top-0 left-0 w-full h-full ${isDark ? 'opacity-10' : 'opacity-5'}`}>
          <img
            src="https://images.unsplash.com/photo-1748956628042-b73331e0b479"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-slate-800/90 via-slate-800/95 to-slate-800' : 'bg-gradient-to-b from-gray-50/90 via-gray-50/95 to-gray-50'}`}></div>
      </div>

      {/* 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-20 right-20 w-96 h-96 ${isDark ? 'bg-orange-600/5' : 'bg-orange-600/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/10'} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 ${isDark ? 'bg-orange-600/20' : 'bg-orange-100'} border ${isDark ? 'border-orange-500/30' : 'border-orange-300'} rounded-full mb-4`}>
            <span className={`${isDark ? 'text-orange-400' : 'text-orange-600'} font-semibold text-sm`}>{marketingCopy.about.tagline}</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            {marketingCopy.about.title}
          </h2>
          <p className="text-2xl text-orange-500 font-semibold mb-4">
            {marketingCopy.about.subtitle}
          </p>
        </div>

        {/* Company Description - Full Width, No Circular Image */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className={`${isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm`}>
            <CardContent className="p-8 md:p-12">
              <p className={`${isDark ? 'text-gray-300' : 'text-slate-700'} text-lg leading-relaxed mb-6`}>
                {companyInfo.description}
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-slate-700'} text-lg leading-relaxed`}>
                Kami berkomitmen untuk menyediakan kontrol kualitas proyek kelas satu dan layanan teknis premium di bidang rekayasa proyek, pengadaan, fabrikasi, dan khususnya layanan pemeliharaan bangunan.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className={`${isDark ? 'bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Visi Kami</h3>
              <div className="space-y-4">
                {visionMission.vision.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <p className={`${isDark ? 'text-gray-300' : 'text-slate-700'} leading-relaxed`}>{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className={`${isDark ? 'bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Misi Kami</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-slate-700'} leading-relaxed`}>
                {visionMission.mission}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div>
          <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-8 text-center`}>Nilai-Nilai Perusahaan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = iconMap[value.icon];
              return (
                <Card
                  key={value.id}
                  className={`${isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-all duration-300">
                      <IconComponent className="text-orange-500 group-hover:text-white transition-colors" size={32} />
                    </div>
                    <h4 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-3 text-lg`}>{value.title}</h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} text-sm leading-relaxed`}>{value.description}</p>
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
