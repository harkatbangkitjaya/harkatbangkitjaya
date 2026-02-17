import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Users, Heart, BookOpen, CheckCircle } from 'lucide-react';
import { visionMission, values, companyInfo } from '../data/mock';

const iconMap = {
  Users,
  Shield,
  Heart,
  BookOpen
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Berkomitmen untuk <span className="text-orange-500">Kualitas & Keselamatan</span>
          </h2>
        </div>

        {/* Company Description */}
        <div className="mb-16">
          <Card className="bg-slate-900 border-slate-700">
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

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
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
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
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
                  className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group"
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
