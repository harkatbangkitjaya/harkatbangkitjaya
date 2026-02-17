import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Solusi Konstruksi <span className="text-orange-500">Profesional</span> untuk Masa Depan
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            PT. Harkat Bangkit Jaya menyediakan layanan konstruksi, pemeliharaan bangunan, dan desain arsitektur dengan standar kualitas terbaik.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Kualitas Terjamin', 'Tim Profesional', 'Harga Kompetitif'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-slate-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-200 font-medium">{feature}</span>
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-700/50">
            {[
              { number: '100+', label: 'Proyek' },
              { number: '50+', label: 'Klien' },
              { number: '100%', label: 'Kepuasan' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-base md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
